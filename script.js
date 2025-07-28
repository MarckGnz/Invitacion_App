// Obtiene el valor del parámetro "tema" en la URL
const urlParams = new URLSearchParams(window.location.search);
const tema = urlParams.get("tema") || "plantilla1"; // Por defecto usa plantilla1

// Carga el CSS correspondiente
const link = document.getElementById("theme-style");
link.href = `./estilos/${tema}.css`;

/* ----------------------------------------
⏳ CUENTA REGRESIVA AL EVENTO
---------------------------------------- */
const countdown = document.getElementById("countdown");
const eventDate = new Date("2025-08-01T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdown.textContent = "¡Es hoy!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / 1000 / 60) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  countdown.textContent = `${days} días, ${hrs}h ${mins}m ${secs}s`;
}

// Actualizar cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

/* ----------------------------------------
🎉 EFECTO CONFETI AL CONFIRMAR
---------------------------------------- */
const confirmarBtn = document.querySelector(".confirmacion .boton");

if (confirmarBtn) {
  confirmarBtn.addEventListener("click", () => {
    for (let i = 0; i < 50; i++) createConfeti();
  });
}

function createConfeti() {
  const confeti = document.createElement("div");
  confeti.classList.add("confeti");
  confeti.style.left = Math.random() * 100 + "vw";
  confeti.style.animationDuration = Math.random() * 2 + 2 + "s";
  confeti.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
  document.body.appendChild(confeti);

  // Eliminar el confeti después de 5 segundos
  setTimeout(() => confeti.remove(), 5000);
}

/* ----------------------------------------
👗 CARRUSEL DE IMÁGENES (Dress Code)
---------------------------------------- */
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

// Botón siguiente
nextBtn?.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

// Botón anterior
prevBtn?.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

const audio = document.getElementById("audio");
const btn = document.getElementById("playPauseBtn");

btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = "⏸️ Pausar música";
  } else {
    audio.pause();
    btn.textContent = "▶️ Reproducir música";
  }
});

document.getElementById("btn-entrar").addEventListener("click", () => {
  document.getElementById("pantalla-inicio").style.display = "none";
  document.getElementById("contenido").style.display = "block";

  const musica = document.getElementById("musica");
  musica.play();
});


