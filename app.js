const PHONE = "212772649507";

/* ===== Modal ===== */
const modal = document.getElementById("trialModal");

function openModal() {
  modal.classList.add("is-open");
  document.documentElement.classList.add("modal-open");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("is-open");
  document.documentElement.classList.remove("modal-open");
  document.body.classList.remove("modal-open");
}

/* Open modal buttons */
document.querySelectorAll("[data-open-modal]").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });
});

/* Close modal */
document.querySelectorAll("[data-close-modal]").forEach(btn => {
  btn.addEventListener("click", closeModal);
});

/* ===== WhatsApp submit ===== */
const form = document.getElementById("trialForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value || "Client";
    const device = form.device.value;
    const duration = form.duration.value;
    const note = form.note.value || "";

    const message = `
Bonjour 👋
Je souhaite un ESSAI 24H ✅

Nom : ${name}
Appareil : ${device}
Durée : ${duration}
Note : ${note}
    `.trim();

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  });
}