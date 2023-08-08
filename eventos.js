function saludar() {
  alert("¡Hola!");
}

function soydiv() {
  alert("¡Hola! Soy el div");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("div").addEventListener("click", soydiv);
});