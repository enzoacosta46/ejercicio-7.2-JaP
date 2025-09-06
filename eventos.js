const contenedor = document.getElementById("contenedor");
const btnSaludar = document.getElementById("btnSaludar");

contenedor.addEventListener("click", () => {
    alert("Hola! Soy el div.");
});

btnSaludar.addEventListener("click", (evento) => {
    alert("Hola!");
    evento.stopPropagation(); // Evita que el evento se accione en el div
});