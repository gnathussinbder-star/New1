'use client';
import { useLanguage } from '@/components/language';

export default function PrivacyPage() {
  const { locale } = useLanguage();
  const ar = locale === 'ar';
  return <section className="section container legal-page">
    <span className="eyebrow">{ar ? 'الخصوصية والبيانات' : 'PRIVACY & DATA'}</span>
    <h1>{ar ? 'سياسة الخصوصية' : 'Privacy Policy'}</h1>
    {ar ? <>
      <p>توضح هذه الصفحة كيفية تعامل أكاديمية Hussien Badr English مع البيانات عند تفعيل خدمات الحسابات والاختبارات.</p>
      <h2>البيانات التي قد نجمعها</h2><p>الاسم والبريد الإلكتروني وإعداد اللغة، وتقدم الدروس ونتائج الاختبارات والنصوص الناتجة عن تفريغ إجابات التحدث.</p>
      <h2>التسجيلات الصوتية والذكاء الاصطناعي</h2><p>عند إرسال اختبار يتضمن إجابات صوتية، تُرسل التسجيلات إلى خادم الأكاديمية ثم إلى مزود خدمة التفريغ الصوتي لمعالجة الكلام وتحويله إلى نص. لا تحفظ هذه النسخة الملفات الصوتية في قاعدة بيانات الأكاديمية، لكنها تحفظ النص والنتائج والتغذية الراجعة. لا تسجل معلومات حساسة أو خاصة في إجاباتك.</p>
      <h2>التخزين والأمان</h2><p>تُستخدم Supabase لحسابات الطلاب والبيانات، وتُستخدم مفاتيح الخدمات السرية على الخادم فقط. لا تنشر مفاتيح API أو كلمات المرور في مستودع GitHub.</p>
      <h2>حقوق الطالب</h2><p>يمكنك التواصل مع الأكاديمية لطلب تصحيح بياناتك أو الاستفسار عن حذف الحساب والبيانات. يجب على مالك الأكاديمية إعداد إجراءات الحذف والاستجابة قبل الإطلاق العام.</p>
      <h2>التواصل</h2><p>البريد المدرج حالياً: <a href="mailto:gnathussinbder@gmail.com">gnathussinbder@gmail.com</a>. يرجى التحقق من صحة البريد قبل الإطلاق.</p>
    </> : <>
      <p>This page explains how Hussien Badr English handles information when student accounts and assessment services are enabled.</p>
      <h2>Information collected</h2><p>Account name, email address, language preference, lesson progress, assessment responses, results and transcripts generated from speaking recordings.</p>
      <h2>Voice recordings and AI processing</h2><p>When a submitted assessment includes spoken answers, recordings are sent to the academy server and then to the configured transcription provider. This release does not store raw audio in the academy database; it stores transcripts, scores and feedback. Do not include sensitive personal information in responses.</p>
      <h2>Storage and security</h2><p>Supabase is used for student accounts and records. Secret service credentials must remain server-side and must never be committed to GitHub.</p>
      <h2>Student requests</h2><p>Contact the academy to request data correction or ask about account and data deletion. The academy owner must establish and operate a deletion process before public launch.</p>
      <h2>Contact</h2><p>Current listed email: <a href="mailto:gnathussinbder@gmail.com">gnathussinbder@gmail.com</a>. Verify this address before launch.</p>
    </>}
    <p className="tiny muted">{ar ? 'هذه صياغة تأسيسية ويجب مراجعتها قانونياً وفق بلد تشغيل الخدمة ومكان الطلاب قبل الإطلاق.' : 'This is a starter policy and must be reviewed for the jurisdictions where the academy and its learners operate.'}</p>
  </section>;
}
