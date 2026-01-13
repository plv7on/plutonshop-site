// ====== CONFIG ======
const PHONE = "212772649507";          // digits only
const INSTAGRAM = "plutonshopma";      // handle without @

const WA = (msg) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

// ====== Reveal animations (super smooth) ======
function initReveal() {
  const els = Array.from(document.querySelectorAll(".reveal"));
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

// ====== Modal ======
const modal = document.getElementById("leadModal");
const form = document.getElementById("leadForm");

function openModal() {
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // focus first input
  const first = modal.querySelector("input, select, button");
  if (first) first.focus();
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function initModal() {
  document.querySelectorAll(".js-open-modal").forEach((btn) => {
    btn.addEventListener("click", () => openModal());
  });

  modal?.addEventListener("click", (e) => {
    const target = e.target;
    if (target?.dataset?.close === "1") closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("is-open")) closeModal();
  });
}

// ====== Form -> WhatsApp message ======
function initForm() {
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const name = (fd.get("name") || "").toString().trim();
    const device = (fd.get("device") || "").toString().trim();
    const plan = (fd.get("plan") || "").toString().trim();
    const note = (fd.get("note") || "").toString().trim();

    if (!device) {
      alert("Veuillez choisir votre appareil.");
      return;
    }

    let msg = "Bonjour, je veux un ESSAI 24h ✅";
    if (plan) msg += `\nOffre: ${plan}`;
    msg += `\nAppareil: ${device}`;
    if (name) msg += `\nNom: ${name}`;
    if (note) msg += `\nNote: ${note}`;

    // Go to WhatsApp
    window.location.href = WA(msg);
  });
}

// ====== Year ======
function initYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initReveal();
  initModal();
  initForm();
});
