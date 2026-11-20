import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
export async function GET(){try{const supabase=await createClient();const {data,error}=await supabase.from('lesson_overrides').select('lesson_slug,is_published');if(error)throw error;return NextResponse.json({hidden:(data||[]).filter(x=>!x.is_published).map(x=>x.lesson_slug)});}catch{return NextResponse.json({hidden:[]});}}
