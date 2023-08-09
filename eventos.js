document.addEventListener("DOMContentLoaded", () => {
  const hola = function hola() {
    alert("¡Hola!");
  };
  document.querySelector("button").addEventListener("click", hola);

  const soydiv = function () {
    alert("¡Hola! Soy el div");
  };
  document.querySelector("div").addEventListener("click", soydiv);
});
