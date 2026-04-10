let index = 0;
let slides = [];

window.addEventListener("DOMContentLoaded", () => {
  // CARROSSEL
  slides = document.querySelectorAll('.carousel img');
  if (slides.length > 0) {
    showSlide(index);
    setInterval(nextSlide, 4000);
  }

  // FORMULÁRIO → WHATSAPP
  const form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = form.querySelector("input[name='name']").value;
      const email = form.querySelector("input[name='email']").value;
      const message = form.querySelector("textarea[name='message']").value;

      // número do WhatsApp da empresa (55 + DDD + número)
      const waNumber = "558888131143"; // substitua pelo seu número real
      const text = `Olá! Gostaria de agendar uma aula experimental.\n\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}`;

      // abre WhatsApp com mensagem
      window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, "_blank");
    });
  }

  // AERONAVES VOANDO
  const container = document.getElementById("flying");
  const icons = ["🚀", "🛸"];

  function createFlyingItem() {
    if (!container) return;

    const item = document.createElement("div");
    item.classList.add("fly-item");
    item.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    item.style.top = Math.random() * 100 + "%";
    item.style.fontSize = (20 + Math.random() * 20) + "px";

    const duration = 4 + Math.random() * 6;
    item.style.animationDuration = duration + "s";

    container.appendChild(item);
    setTimeout(() => item.remove(), duration * 1000);
  }

  setInterval(createFlyingItem, 400);
});

function showSlide(i) {
  slides.forEach(img => img.classList.remove('active'));
  slides[i].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}
