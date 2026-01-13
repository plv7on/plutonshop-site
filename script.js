// Change only these
const PHONE = "212772649507";     // digits only (no +)
const INSTAGRAM = "plutonshopma"; // handle without @

const WA = (msg) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
const IG = `https://instagram.com/${INSTAGRAM}`;

const MSG_TEST = "Bonjour, je veux le TEST 24h ✅ Mon appareil est : ";
const MSG_COPY = "Bonjour, je veux le TEST 24h ✅";

document.getElementById("year").textContent = new Date().getFullYear();

// Set links
document.getElementById("igTop").href = IG;
document.getElementById("igSticky").href = IG;

["waTop","waHero","waPanel","waBottom","waSticky"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.href = WA(MSG_TEST);
});

// Offers -> WhatsApp
document.querySelectorAll(".offerBtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const plan = btn.dataset.plan || "";
    const msg = `Bonjour, je veux ${plan}. Test 24h si possible ✅ Mon appareil est : `;
    window.location.href = WA(msg);
  });
});

// Copy message
document.getElementById("copyBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(MSG_COPY);
    const b = document.getElementById("copyBtn");
    b.textContent = "Copié ✅";
    setTimeout(() => (b.textContent = "Copier le message"), 1400);
  } catch {
    alert(MSG_COPY);
  }
});
