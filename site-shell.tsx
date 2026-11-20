'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './language';
import { academy } from '@/lib/config';
export function Header(){
 const {locale,setLocale}=useLanguage(); const ar=locale==='ar';
 return <header className="site-header"><div className="container header-inner">
  <Link href="/" className="brand"><Image src="/assets/hb-logo.png" alt="HB" width={54} height={54}/><span><b>HUSSIEN BADR</b><small>ENGLISH ACADEMY</small></span></Link>
  <nav className="main-nav"><Link href="/">{ar?'الرئيسية':'Home'}</Link><Link href="/library">{ar?'مكتبة الدروس':'Lessons'}</Link><Link href="/test">{ar?'اختبار المستوى':'Level test'}</Link><Link href="/dashboard">{ar?'لوحة الطالب':'Dashboard'}</Link></nav>
  <div className="header-actions"><button className="locale-btn" onClick={()=>setLocale(ar?'en':'ar')}>{ar?'EN':'عربي'}</button><Link className="button button-small button-outline" href="/login">{ar?'دخول / حساب':'Sign in'}</Link></div>
 </div></header>
}
export function Footer(){const {locale}=useLanguage();const ar=locale==='ar';return <footer className="site-footer"><div className="container footer-grid"><div><div className="brand footer-brand"><Image src="/assets/hb-logo.png" alt="HB" width={48} height={48}/><span><b>HUSSIEN BADR</b><small>ENGLISH ACADEMY</small></span></div><p>{ar?'تعلّم الإنجليزية بفهم وثقة وخطوات واضحة.':'Learn English with clarity, confidence and a clear path forward.'}</p><a href={`mailto:${academy.email}`}>{academy.email}</a></div><div><h4>{ar?'روابط المنصة':'Academy'}</h4><Link href="/library">{ar?'مكتبة الدروس':'Lesson library'}</Link><Link href="/test">{ar?'اختبار تحديد المستوى':'Placement test'}</Link><Link href="/dashboard">{ar?'لوحة الطالب':'Student dashboard'}</Link><Link href="/admin">{ar?'الإدارة':'Administration'}</Link><Link href="/privacy">{ar?'سياسة الخصوصية':'Privacy policy'}</Link><Link href="/terms">{ar?'الشروط والأحكام':'Terms of use'}</Link></div><div><h4>{ar?'تابع الأكاديمية':'Follow the academy'}</h4><div className="social-links">{academy.socials.map(s=><a key={s.name} href={s.url} target="_blank" rel="noreferrer">{s.name}<span>↗</span></a>)}</div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Hussien Badr English</span><span>{ar?'اختبار تحديد مستوى استرشادي وفق CEFR':'CEFR-aligned indicative placement assessment'}</span></div></footer>}
