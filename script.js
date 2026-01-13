// Change only these
const PHONE = "212772649507";     // digits only (no +)
const INSTAGRAM = "plutonshopma"; // handle without @

const WA = (msg) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
const IG = `https://instagram.com/${INSTAGRAM}`;

const MSG_TEST = "Bonjour, je veux le TEST 24h ✅ Mon appareil est : ";
const MSG_COPY = "Bonjour, je veux le TEST 24h ✅";

function setHref(id, url) {
  const el = document.getElementById(id);
  if (el && el.tagName === "A") el.href = url;
}

document.addEventListener("DOMContentLoaded", () => {
  // Year (safe)
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // IG links (safe even if buttons removed)
  setHref("igTop", IG);
  setHref("igSticky", IG);

  // WhatsApp CTAs (safe)
  ["waTop", "waHero", "waPanel", "waCard", "waBottom", "waSticky"].forEach((id) => {
    setHref(id, WA(MSG_TEST));
  });

  // Offer buttons (safe)
  document.querySelectorAll(".offerBtn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const plan = btn.dataset.plan || "";
      const msg = `Bonjour, je veux ${plan}. Test 24h si possible ✅ Mon appareil est : `;
      window.location.href = WA(msg);
    });
  });

  // Copy button (safe)
  const copyBtn = document.getElementById("copyBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(MSG_COPY);
        const old = copyBtn.textContent;
        copyBtn.textContent = "Copié ✅";
        setTimeout(() => (copyBtn.textContent = old), 1400);
      } catch {
        alert(MSG_COPY);
      }
    });
  }
});
