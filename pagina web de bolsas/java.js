// script.js

// Variable del carrito
let contador = 0;

// Función para agregar productos
function agregarCarrito(){

    contador++;

    document.getElementById("contador").textContent = contador;

    alert("👜 Producto agregado al carrito");
}

// Mensaje botón principal
function mostrarMensaje(){

    alert("✨ Bienvenida a Elegance Bags ✨");
}

// Objeto de ejemplo
const tienda = {

    nombre: "Elegance Bags",
    productos: 4,
    categoria: "Bolsas de moda"
};

console.log(tienda);

// Estructuras de control

// IF
if(contador === 0){
    console.log("El carrito está vacío");
}

// FOR
for(let i = 1; i <= 3; i++){
    console.log("Producto destacado #" + i);
}

// SWITCH
let temporada = "verano";

switch(temporada){

    case "verano":
        console.log("Colección verano disponible");
        break;

    case "invierno":
        console.log("Colección invierno disponible");
        break;

    default:
        console.log("Nueva colección");
}