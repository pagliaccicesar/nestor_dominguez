/* 
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".btn");
  const modalOverlay = document.querySelector(".modal-overlay");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const modalId = button.getAttribute("data-modal");
      const modal = document.getElementById(modalId);

      // Mostrar modal
      modalOverlay.style.display = "flex";
      modal.classList.add("active");

      // Agregar evento para cerrar modal con clic en "x"
      const closeButton = modal.querySelector(".modal-close");
      if (closeButton) {
        closeButton.addEventListener("click", function() {
          closeModal(modal);
        });
      }

      // Agregar evento para cerrar modal con tecla "Esc"
      document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
          closeModal(modal);
        }
      });
    });
  });

  // Función para cerrar el modal
  function closeModal(modal) {
    modalOverlay.style.display = "none";
    modal.classList.remove("active");
  }
});*/

//  cookies

/*const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const botonRechazarCookies = document.getElementById('btn-rechazar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if(!localStorage.getItem('cookies-aceptadas')){
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
} else {
	dataLayer.push({'event': 'cookies-aceptadas'});
}

botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	fondoAvisoCookies.classList.remove('activo');

	localStorage.setItem('cookies-aceptadas', true);

	dataLayer.push({'event': 'cookies-aceptadas'});
});*/

const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const botonRechazarCookies = document.getElementById('btn-rechazar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if (!localStorage.getItem('cookies-aceptadas')) {
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
} else {
    dataLayer.push({ 'event': 'cookies-aceptadas' });
}

botonAceptarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    localStorage.setItem('cookies-aceptadas', true);

    dataLayer.push({ 'event': 'cookies-aceptadas' });
});

botonRechazarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    localStorage.removeItem('cookies-aceptadas');

    // Opcional: puedes añadir un evento al dataLayer para indicar que se rechazaron las cookies
    dataLayer.push({ 'event': 'cookies-rechazadas' });
});





  






document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".btn");
  const modalOverlay = document.querySelector(".modal-overlay");

  buttons.forEach(button => {
    button.addEventListener("click", function() {
      const modalId = button.getAttribute("data-modal");
      const modal = document.getElementById(modalId);

      // Mostrar overlay y modal
      modalOverlay.style.display = "flex";
      modal.classList.add("active");

      // Agregar evento para cerrar modal con clic en "x"
      const closeButton = modal.querySelector(".modal-close");
      if (closeButton) {
        closeButton.addEventListener("click", function() {
          closeModal(modal);
        });
      }

      // Agregar evento para cerrar modal con tecla "Esc"
      document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
          closeModal(modal);
        }
      });
    });
  });

  // Función para cerrar el modal
  function closeModal(modal) {
    modalOverlay.style.display = "none";
    modal.classList.remove("active");
  }
});

