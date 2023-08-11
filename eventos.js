document.addEventListener("DOMContentLoaded", () => {
  const hola = function hola() {
    document.querySelector("div").removeEventListener("click", soydiv);
    alert("¡Hola!");
    setTimeout(() => {
      document.querySelector("div").addEventListener("click", soydiv);
    }, 10);
  };
  document.querySelector("button").addEventListener("click", hola);

  const soydiv = function () {
    alert("¡Hola! Soy el div");
  };
  document.querySelector("div").addEventListener("click", soydiv);
});