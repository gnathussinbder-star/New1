# ابدأ من هنا — Hussien Badr English v1.2.0

## قبل الرفع

هذه حزمة مشروع Next.js كامل المصدر، وليست ملف HTML ثابتاً. لا ترفعها إلى GitHub Pages. استخدم GitHub لحفظ الكود وVercel لتشغيل التطبيق وواجهات API.

## خطوات النشر

1. فك ضغط ZIP.
2. افتح المجلد الداخلي `hussien-badr-english-final`.
3. ارفع **محتويات هذا المجلد** إلى جذر مستودع GitHub جديد، وليس ملف ZIP نفسه، وتأكد من ظهور `package.json` و`app/` و`components/` و`content/` و`lib/` و`public/` و`supabase/` في جذر المستودع.
4. أنشئ مشروعاً في Supabase، ثم شغّل `supabase/schema.sql` كاملاً من SQL Editor.
5. استورد المستودع في Vercel.
6. أضف المتغيرات التالية في Vercel → Project Settings → Environment Variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SUPABASE_SECRET_KEY
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
OPENAI_TRANSCRIPTION_MODEL=gpt-transcribe
OPENAI_EVALUATION_MODEL=gpt-4.1-mini
NEXT_PUBLIC_SITE_URL=https://YOUR-PROJECT.vercel.app
```

7. نفّذ Deploy. لا تضع `SUPABASE_SERVICE_ROLE_KEY` أو `OPENAI_API_KEY` في GitHub أو في أي متغير يبدأ بـ `NEXT_PUBLIC_`.
8. في Supabase Auth → URL Configuration، اضبط Site URL على عنوان Vercel وأضف `https://YOUR-PROJECT.vercel.app/auth/callback` إلى Redirect URLs.
9. سجّل حساب مالك الأكاديمية من الموقع، ثم أكد بريد الحساب. نفّذ استعلام ترقية المالك إلى admin المذكور في `ARABIC-SETUP.md`.
10. اختبر إنشاء الحساب والدخول وإرسال الاختبار وتقدم الدروس وطباعة الشهادة والتحقق منها من نافذة خاصة أو جهاز آخر.

## التشغيل المحلي والاختبار

يتطلب المشروع Node.js 22 (أو إصداراً متوافقاً أحدث من 20.9):

```bash
npm install
npm run check:content
npm run check:project
npm run typecheck
npm run lint
npm run build
npm run start
```

أو استخدم `npm run qa` لتشغيل الفحوص بالتتابع. يتضمن المستودع أيضاً GitHub Actions لتشغيل الفحوص عند الدفع إلى `main` أو فتح Pull Request.

## حدود يجب معرفتها قبل الإطلاق

- فهرس الدروس يضم 150 مدخلاً: 40 درساً مفصلاً يدوياً و110 مسودات موضوعية منظمة تحتاج مراجعة وتوسعة من مدرس إنجليزي.
- الاستماع في اختبار المستوى يستخدم صوت المتصفح (TTS)، لا تسجيلات بشرية استوديو.
- التحدث يسجل الصوت ثم يفرغه إلى نص ويقيّم النص؛ لا يقيس مخارج الحروف أو النطق والتنغيم صوتياً بصورة مستقلة.
- مستوى CEFR والنتيجة تقدير داخلي أولي غير معاير علمياً، والشهادة صادرة عن الأكاديمية فقط وليست اعتماداً دولياً.
- لوحة الإدارة تعرض الطلاب والنتائج والشهادات وتتحكم في إظهار الدروس وإلغاء الشهادات، لكنها ليست محرر CRUD كاملاً لمحتوى كل درس وليست لوحة إدارة حسابات متقدمة.
- صفحات الخصوصية والشروط قوالب تأسيسية ويجب مراجعتها قانونياً. تحقق من عنوان البريد المدرج قبل نشره.
- لا يمكن تشغيل الحسابات والتقييم والتخزين بمجرد رفع ZIP؛ لا بد من إنشاء خدمات Supabase وOpenAI وVercel وإضافة مفاتيحها بنفسك.
