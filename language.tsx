'use client';
import { createContext, useContext, useEffect, useState } from 'react';
type Locale = 'ar'|'en';
const Ctx = createContext<{locale:Locale;setLocale:(v:Locale)=>void}>({locale:'ar',setLocale:()=>{}});
export function LanguageProvider({children}:{children:React.ReactNode}) {
  const [locale,setLocaleState] = useState<Locale>('ar');
  useEffect(()=>{ const saved=window.localStorage.getItem('hb-locale'); if(saved==='ar'||saved==='en') setLocaleState(saved); },[]);
  const setLocale=(v:Locale)=>{setLocaleState(v);window.localStorage.setItem('hb-locale',v);document.documentElement.lang=v;document.documentElement.dir=v==='ar'?'rtl':'ltr';};
  useEffect(()=>{document.documentElement.lang=locale;document.documentElement.dir=locale==='ar'?'rtl':'ltr';},[locale]);
  return <Ctx.Provider value={{locale,setLocale}}>{children}</Ctx.Provider>;
}
export function useLanguage(){return useContext(Ctx);}
