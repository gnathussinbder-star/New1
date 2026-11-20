import { redirect } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import TestRunner from '@/components/test-runner';
export default async function TestPage(){try{const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser();if(!user)redirect('/login');}catch(e){if(e instanceof Error&&e.message.includes('NEXT_REDIRECT'))throw e;return <section className="section container"><div className="notice error">Supabase is not configured yet. Follow SETUP.md before starting a saved assessment.</div><Link className="button button-outline" href="/">Back to home</Link></section>;}return <section className="section container"><TestRunner/></section>}
