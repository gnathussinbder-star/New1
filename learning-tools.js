/* Practical learning tools. No backend: all personal data remains in the browser. */
(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const toast = msg => window.HBE?.toast ? window.HBE.toast(msg) : alert(msg);
  document.querySelectorAll('[data-daily-check]').forEach(box => {
    const key = `hbe-daily-${new Date().toISOString().slice(0,10)}-${box.dataset.dailyCheck}`;
    try { box.checked = localStorage.getItem(key) === '1'; } catch (_) {}
    box.addEventListener('change', () => { try { localStorage.setItem(key, box.checked ? '1' : '0'); } catch (_) {} });
  });
  $('[data-export-progress]')?.addEventListener('click', () => {
    let payload = {};
    try { payload = { progress: JSON.parse(localStorage.getItem('hbe-progress') || '{}'), theme: localStorage.getItem('hbe-theme') || 'light', savedAt: new Date().toISOString() }; }
    catch (_) { toast('تعذّر قراءة بيانات التقدم.'); return; }
    const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'hussein-badr-learning-progress.json'; a.click(); URL.revokeObjectURL(url);
    toast('تم تنزيل نسخة احتياطية من تقدمك.');
  });
  $('[data-import-progress]')?.addEventListener('change', async event => {
    const file = event.target.files?.[0]; if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (!data || typeof data.progress !== 'object' || Array.isArray(data.progress)) throw new Error('invalid');
      localStorage.setItem('hbe-progress', JSON.stringify(data.progress));
      if (data.theme === 'dark' || data.theme === 'light') localStorage.setItem('hbe-theme', data.theme);
      toast('تم استرجاع بيانات التقدم. حدّث الصفحة لرؤية التغييرات.');
    } catch (_) { toast('الملف غير صالح أو ليس نسخة احتياطية من هذه المنصة.'); }
    event.target.value = '';
  });
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-say]'); if (!button) return;
    if (!('speechSynthesis' in window)) { toast('النطق الصوتي غير مدعوم في هذا المتصفح.'); return; }
    const phrase = button.dataset.say || button.textContent || '';
    speechSynthesis.cancel(); const utterance = new SpeechSynthesisUtterance(phrase); utterance.lang='en-US'; utterance.rate=.88; speechSynthesis.speak(utterance);
  });
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-reveal]'); if (!button) return;
    const target = document.getElementById(button.dataset.reveal); if (target) { target.hidden = !target.hidden; button.setAttribute('aria-expanded', String(!target.hidden)); }
  });
})();
