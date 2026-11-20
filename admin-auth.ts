import { createClient } from '@/lib/supabase/server';
export async function requireAdmin(){
 const supabase=await createClient();
 const {data:{user},error}=await supabase.auth.getUser();
 if(error||!user) return {ok:false as const,status:401,user:null};
 const {data:profile}=await supabase.from('profiles').select('role').eq('id',user.id).maybeSingle();
 if(profile?.role!=='admin') return {ok:false as const,status:403,user};
 return {ok:true as const,user};
}
