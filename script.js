const phone = "212772649507"; // ton numéro (sans +)
const defaultMsg = "Bonjour, je souhaite un test gratuit 24h. Mon appareil est : ";
const waBase = `https://wa.me/${phone}?text=`;

function setWA(el, msg){
  el.href = waBase + encodeURIComponent(msg);
}

document.getElementById("year").textContent = new Date().getFullYear();

setWA(document.getElementById("ctaTop"), defaultMsg);
setWA(document.getElementById("ctaHero"), defaultMsg);
setWA(document.getElementById("ctaCard"), defaultMsg);

document.querySelectorAll(".offer-cta").forEach(btn=>{
  btn.addEventListener("click", (e)=>{
    e.preventDefault();
    const plan = btn.dataset.plan;
    const msg = `Bonjour, je veux ${plan}. Test gratuit 24h si possible. Mon appareil est : `;
    window.location.href = waBase + encodeURIComponent(msg);
  });
});