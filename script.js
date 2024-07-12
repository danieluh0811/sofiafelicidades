document.addEventListener("DOMContentLoaded", () => {
  const loadingroxy = document.getElementById("loadingroxy");
  const gifAnimadoLoadingroxy = "loadingroxy.gif";
  const gifEstaticoLoadingroxy = "staticroxy.png";
  const loading = document.getElementById("loading");
  const acariciame = document.getElementById("acariciame");
  const anexos = document.getElementById("anexos");
  let cont = 0;

  function handleClick() {
    toggleGif(loadingroxy, gifAnimadoLoadingroxy, gifEstaticoLoadingroxy);
    cont++;
    if (cont === 3) {
      loadingroxy.src = gifAnimadoLoadingroxy;
      loading.hidden = false;
      acariciame.hidden = true;
      loadingroxy.removeEventListener("click", handleClick);
      setTimeout(() => {
        var audio = document.getElementById("miAudio");
        audio.play();
        setTimeout(() => {
          const overlay = document.querySelector(".overlay");
          overlay.style.opacity = "0";
          overlay.addEventListener("transitionend", () => {
            overlay.style.display = "none";
            const container = document.querySelector(".container");
            container.classList.add("fade-in");
          });
          createConfetti();
          createBooksAndDiplomas();
          createTQM();
          createrisamalvada();
          createLike();
          startTypingAnimation();
          let gifroxy = document.getElementById("loadingroxy");
          let gif = document.getElementById("loading");
          gifroxy.hidden = true;
          gif.hidden = true;
          anexos.hidden=false;
        }, 2500);
      }, 5500);
    }
  }

  loadingroxy.addEventListener("click", handleClick);

  function toggleGif(gifElement, animado, estatico) {
    if (gifElement.src.endsWith(estatico)) {
      gifElement.src = animado;
      setTimeout(() => {
        gifElement.src = estatico;
        if (cont === 3) {
          gifElement.src = animado; // Cambio permanente a la versión animada
        }
      }, 1000); // 1000 ms = 1 second
    }
  }
});

function createConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  const confettiCount = 100;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confettiContainer.appendChild(confetti);
  }
}

function createBooksAndDiplomas() {
  const container = document.getElementById("book-diploma-container");
  const count = 30;

  for (let i = 0; i < count; i++) {
    const bookOrDiploma = document.createElement("div");
    bookOrDiploma.classList.add(Math.random() < 0.5 ? "book" : "diploma");
    bookOrDiploma.style.left = `${Math.random() * 100}%`;
    bookOrDiploma.style.animationDuration = `${Math.random() * 4 + 3}s`;
    container.appendChild(bookOrDiploma);
  }
}

function createTQM() {
  const container = document.getElementById("tqm-container");
  const tqmCount = 10;

  for (let i = 0; i < tqmCount; i++) {
    const tqm = document.createElement("div");
    tqm.classList.add("tqm");
    tqm.style.left = `${Math.random() * 100}%`;
    tqm.style.animationDuration = `${Math.random() * 5 + 2}s`;
    container.appendChild(tqm);
  }
}

function createrisamalvada() {
  const container = document.getElementById("risamalvada-container");
  const risamalvadaCount = 10;

  for (let i = 0; i < risamalvadaCount; i++) {
    const risamalvada = document.createElement("div");
    risamalvada.classList.add("risamalvada");
    risamalvada.style.left = `${Math.random() * 100}%`;
    risamalvada.style.animationDuration = `${Math.random() * 5 + 2}s`;
    container.appendChild(risamalvada);
  }
}

function createLike() {
  const container = document.getElementById("like-container");
  const risamalvadaCount = 10;

  for (let i = 0; i < risamalvadaCount; i++) {
    const risamalvada = document.createElement("div");
    risamalvada.classList.add("like");
    risamalvada.style.left = `${Math.random() * 100}%`;
    risamalvada.style.animationDuration = `${Math.random() * 5 + 2}s`;
    container.appendChild(risamalvada);
  }
}
function startTypingAnimation() {
  const text =
    "Muchos éxitos en tu nueva aventura corazón de mondongo, sé que lo harás bien :) tqm.";
  const textElement = document.getElementById("animated-text");
  const cursorElement = document.getElementById("cursor");
  textElement.textContent = ""; // Limpiar el contenido inicial
  cursorElement.style.display = "inline"; // Mostrar el cursor
  let index = 0;

  function type() {
    if (index < text.length) {
      textElement.textContent += text[index];
      index++;
      setTimeout(type, 100); // Ajusta el tiempo entre caracteres aquí
    } else {
      cursorElement.style.display = "none"; // Ocultar el cursor al finalizar la animación
    }
  }

  type();
}

function link(){
  location.href="corazondemondongo.html";
}