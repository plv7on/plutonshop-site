// ✅ CONFIG (change only these)
const PHONE = "212772649507";          // WhatsApp (digits only, no +)
const INSTAGRAM = "plutonshopma";      // IG handle (sans @)

// Messages
const MSG_BASE = "Bonjour, je souhaite un test gratuit 24h. Mon appareil est : ";
const MSG_SHORT = "Bonjour, je veux un test gratuit 24h.";

// Build links
const WA = (msg) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
const IG = `https://instagram.com/${INSTAGRAM}`;

// Set year
document.getElementById("year").textContent = new Date().getFullYear();

// Hook CTAs
const setHref = (id, url) => {
  const el = document.getElementById(id);
  if (el) el.href = url;
};

setHref("ctaTopIG", IG);
setHref("stickyIG", IG);

setHref("ctaTopWA", WA(MSG_BASE));
setHref("ctaHeroWA", WA(MSG_BASE));
setHref("ctaCardWA", WA(MSG_BASE));
setHref("ctaBottomWA", WA(MSG_BASE));
setHref("stickyWA", WA(MSG_BASE));

// Offer buttons
document.querySelectorAll(".offerCta").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const plan = btn.dataset.plan || "";
    const msg = `Bonjour, je veux ${plan}. Test gratuit 24h si possible. Mon appareil est : `;
    window.location.href = WA(msg);
  });
});

// Copy message button
const copyBtn = document.getElementById("copyMsgBtn");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(MSG_SHORT);
      copyBtn.textContent = "Message copié ✅";
      setTimeout(() => (copyBtn.textContent = "Copier le message"), 1600);
    } catch {
      // fallback
      alert(MSG_SHORT);
    }
  });
}
