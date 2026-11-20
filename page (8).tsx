'use client';
import { useLanguage } from '@/components/language';

export default function TermsPage() {
  const { locale } = useLanguage();
  const ar = locale === 'ar';
  return <section className="section container legal-page">
    <span className="eyebrow">{ar ? 'استخدام المنصة' : 'PLATFORM USE'}</span>
    <h1>{ar ? 'الشروط والأحكام' : 'Terms of Use'}</h1>
    {ar ? <>
      <p>باستخدامك منصة Hussien Badr English، فإنك توافق على استخدام المحتوى والخدمات لأغراض التعلم الشخصي وبما لا يخالف القانون.</p>
      <h2>التقييم والشهادات</h2><p>اختبار تحديد المستوى أداة تعليمية استرشادية، والنتيجة المقدرة وفق CEFR ليست اعتماداً دولياً ولا تعادل IELTS أو TOEFL. الشهادات تصدر عن الأكاديمية فقط وتثبت سجل الاختبار داخل المنصة.</p>
      <h2>الحسابات</h2><p>أنت مسؤول عن الحفاظ على سرية بيانات الدخول وعن دقة المعلومات التي تقدمها. لا تشارك حسابك ولا تحاول الوصول إلى بيانات مستخدمين آخرين.</p>
      <h2>المحتوى</h2><p>المحتوى التعليمي مخصص للدراسة. لا يجوز إعادة نشر المواد أو استغلالها تجارياً دون إذن من مالك الحقوق.</p>
      <h2>حدود الخدمة</h2><p>قد تتوقف بعض الميزات أثناء الصيانة أو بسبب خدمات خارجية. قد يخطئ التقييم الآلي ويجب ألا يستخدم وحده لاتخاذ قرارات أكاديمية أو وظيفية عالية الأهمية.</p>
      <h2>التواصل</h2><p><a href="mailto:gnathussinbder@gmail.com">gnathussinbder@gmail.com</a> — تحقق من عنوان البريد قبل نشر الموقع.</p>
    </> : <>
      <p>By using Hussien Badr English, you agree to use its content and services for lawful personal learning purposes.</p>
      <h2>Assessment and certificates</h2><p>The placement test is an indicative learning tool. Its CEFR-aligned estimate is not an international accreditation and is not equivalent to IELTS or TOEFL. Certificates are issued by the academy and verify an academy assessment record only.</p>
      <h2>Accounts</h2><p>You are responsible for protecting your login credentials and providing accurate information. Do not share your account or attempt to access other users’ records.</p>
      <h2>Learning content</h2><p>Learning materials are provided for study. Republishing or commercial exploitation requires permission from the rights holder.</p>
      <h2>Service limitations</h2><p>Features may be unavailable during maintenance or third-party service interruptions. Automated assessment may make mistakes and should not be the sole basis for high-stakes academic or employment decisions.</p>
      <h2>Contact</h2><p><a href="mailto:gnathussinbder@gmail.com">gnathussinbder@gmail.com</a> — verify the address before launch.</p>
    </>}
    <p className="tiny muted">{ar ? 'هذه الشروط قالب تأسيسي يحتاج إلى مراجعة قانونية قبل الإطلاق.' : 'These terms are a starter template and require legal review before launch.'}</p>
  </section>;
}
