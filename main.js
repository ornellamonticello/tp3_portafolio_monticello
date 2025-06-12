const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

/* galeria de imagenes afiche*/

  function cambiarDisplay(id, visibilidad) {
    document.getElementById(id).style.display = visibilidad;
  }

  function mostrarGaleria(id) {
    cambiarDisplay(id, 'flex');
  }

  function ocultarGaleria(id) {
    cambiarDisplay(id, 'none');
  }


/* galeria de imagenes revista*/

  function mostrarGaleria(id) {
    cambiarDisplay(id, 'flex');
    document.body.classList.add('bloquear-scroll');
  }
  
  function ocultarGaleria(id) {
    cambiarDisplay(id, 'none');
    document.body.classList.remove('bloquear-scroll');
  }