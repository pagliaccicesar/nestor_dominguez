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

