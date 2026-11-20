-- Hussien Badr English Academy
-- Run this complete script once in Supabase SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text not null default 'Student',
  role text not null default 'student' check (role in ('student','admin')),
  locale text not null default 'ar' check (locale in ('ar','en')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.test_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  score integer not null check (score between 0 and 100),
  level text not null check (level in ('A1','A2','B1','B2','C1')),
  skill_scores jsonb not null default '{}'::jsonb,
  ai_feedback jsonb not null default '{}'::jsonb,
  answers jsonb not null default '{}'::jsonb,
  completed_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  attempt_id uuid not null unique references public.test_attempts(id) on delete cascade,
  code text not null unique,
  full_name text not null,
  level text not null check (level in ('A1','A2','B1','B2','C1')),
  score integer not null check (score between 0 and 100),
  is_active boolean not null default true,
  issued_at timestamptz not null default now(),
  revoked_at timestamptz,
  revoked_by uuid references public.profiles(id)
);

create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  lesson_slug text not null,
  completed_at timestamptz not null default now(),
  unique(user_id, lesson_slug)
);

create table if not exists public.lesson_overrides (
  lesson_slug text primary key,
  is_published boolean not null default true,
  updated_by uuid references public.profiles(id),
  updated_at timestamptz not null default now()
);

create index if not exists test_attempts_user_created_idx on public.test_attempts(user_id, created_at desc);
create index if not exists certificates_user_issued_idx on public.certificates(user_id, issued_at desc);
create index if not exists lesson_progress_user_idx on public.lesson_progress(user_id);

-- Create a student profile when a new auth user signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles(id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(nullif(new.raw_user_meta_data->>'full_name',''), split_part(coalesce(new.email,''),'@',1), 'Student')
  )
  on conflict (id) do update set email = excluded.email;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

-- Prevent users from promoting their own profile to administrator.
create or replace function public.prevent_self_role_change()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if new.role is distinct from old.role and auth.uid() is not null then
    raise exception 'Profile role can only be changed by a trusted administrator.';
  end if;
  return new;
end;
$$;

drop trigger if exists protect_profile_role on public.profiles;
create trigger protect_profile_role before update on public.profiles
for each row execute procedure public.prevent_self_role_change();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

-- Public verification exposes only the fields needed to confirm a certificate.
create or replace function public.verify_certificate(p_code text)
returns table (
  full_name text,
  level text,
  score integer,
  code text,
  issued_at timestamptz,
  is_active boolean
)
language sql
stable
security definer
set search_path = public
as $$
  select c.full_name, c.level, c.score, c.code, c.issued_at, c.is_active
  from public.certificates c
  where upper(c.code) = upper(p_code)
  limit 1;
$$;

grant execute on function public.verify_certificate(text) to anon, authenticated;

alter table public.profiles enable row level security;
alter table public.test_attempts enable row level security;
alter table public.certificates enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.lesson_overrides enable row level security;

drop policy if exists "profile read own or admin" on public.profiles;
create policy "profile read own or admin" on public.profiles for select to authenticated
using (id = auth.uid() or public.is_admin());
drop policy if exists "profile update own" on public.profiles;
create policy "profile update own" on public.profiles for update to authenticated
using (id = auth.uid()) with check (id = auth.uid());

-- Attempts and certificates are inserted only by the server using the service-role key.
drop policy if exists "attempt read own or admin" on public.test_attempts;
create policy "attempt read own or admin" on public.test_attempts for select to authenticated
using (user_id = auth.uid() or public.is_admin());

drop policy if exists "certificate read own or admin" on public.certificates;
create policy "certificate read own or admin" on public.certificates for select to authenticated
using (user_id = auth.uid() or public.is_admin());

drop policy if exists "progress read own or admin" on public.lesson_progress;
create policy "progress read own or admin" on public.lesson_progress for select to authenticated
using (user_id = auth.uid() or public.is_admin());
drop policy if exists "progress insert own" on public.lesson_progress;
create policy "progress insert own" on public.lesson_progress for insert to authenticated
with check (user_id = auth.uid());
drop policy if exists "progress update own" on public.lesson_progress;
create policy "progress update own" on public.lesson_progress for update to authenticated
using (user_id = auth.uid()) with check (user_id = auth.uid());
drop policy if exists "progress delete own" on public.lesson_progress;
create policy "progress delete own" on public.lesson_progress for delete to authenticated
using (user_id = auth.uid());

drop policy if exists "lesson overrides public read" on public.lesson_overrides;
create policy "lesson overrides public read" on public.lesson_overrides for select to anon, authenticated
using (true);
drop policy if exists "lesson overrides admin write" on public.lesson_overrides;
create policy "lesson overrides admin write" on public.lesson_overrides for all to authenticated
using (public.is_admin()) with check (public.is_admin());

-- Restrict table privileges in addition to RLS. The service role bypasses RLS on the server.
grant select on public.profiles, public.test_attempts, public.certificates, public.lesson_progress to authenticated;
grant update (full_name, locale, updated_at) on public.profiles to authenticated;
grant insert, update, delete on public.lesson_progress to authenticated;
grant select on public.lesson_overrides to anon, authenticated;
grant insert, update, delete on public.lesson_overrides to authenticated;

-- Promote your own account only after signing up and confirming its email:
-- update public.profiles set role = 'admin' where lower(email) = lower('YOUR_SIGNUP_EMAIL');
