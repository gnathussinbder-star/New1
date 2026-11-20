import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-auth';
import { createAdminClient } from '@/lib/supabase/admin';
export async function POST(_request:Request,{params}:{params:Promise<{id:string}>}){const auth=await requireAdmin();if(!auth.ok)return NextResponse.json({error:'Administrator access required.'},{status:auth.status});try{const {id}=await params;const db=createAdminClient();const {error}=await db.from('certificates').update({is_active:false,revoked_at:new Date().toISOString(),revoked_by:auth.user.id}).eq('id',id);if(error)throw error;return NextResponse.json({success:true});}catch(e){return NextResponse.json({error:e instanceof Error?e.message:'Could not revoke certificate.'},{status:500});}}
