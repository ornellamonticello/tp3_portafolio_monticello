const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

function mostrarGaleria(id, bloquearScroll = false) {
  document.getElementById(id).style.display = 'flex';
  if (bloquearScroll) {
    document.body.classList.add('bloquear-scroll');
  }
}

function ocultarGaleria(id, bloquearScroll = false) {
  document.getElementById(id).style.display = 'none';
  if (bloquearScroll) {
    document.body.classList.remove('bloquear-scroll');
  }
}


window.addEventListener("click", function () {
  const audio = document.getElementById("musica");
  audio.play();
}, { once: true }); 
