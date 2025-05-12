// Información de los eventos
const Evento1 = {
    nombre: "Concierto de Los Piojos",
    lugar: "Estadio Unión de Santa Fe",
    fecha: "2025-09-26", 
    precio: 50000};
const Evento2 = {
    nombre: "Obra de teatro", 
    lugar: "Centro Cultural", 
    fecha: "2025-10-15", 
    precio: 9000};
const Evento3 = {
    nombre: "Concierto de La Renga",
    lugar: "Estadio Obras",
    fecha: "2025-11-20", 
    precio: 20000};

// Crear un array con los objetos de los eventos
const eventos = [Evento1, Evento2, Evento3];

// Funcion para mostrar los eventos en la consola
function mostrarEventos() {
    alert("Eventos disponibles:");
    for (let i = 0; i < eventos.length; i++) {
        alert(`Nombre: ${eventos[i].nombre}\nLugar: ${eventos[i].lugar}\nFecha: ${eventos[i].fecha}\nPrecio: $${eventos[i].precio}`);
        console.log(`Nombre: ${eventos[i].nombre}\nLugar: ${eventos[i].lugar}\nFecha: ${eventos[i].fecha}\nPrecio: $${eventos[i].precio}`)
            }
        }

// Función para que el usuario seleccione un evento
function seleccionarEvento() {
    const indice = parseInt(prompt("Seleccione el número del evento que desea comprar (1, 2 o 3):"));
    if (indice >= 1 && indice <= eventos.length) {
        return eventos[indice - 1];
    } else {
        alert("Selección inválida. Por favor, seleccione un número válido.");
        return seleccionarEvento();
    }
}

// Función para saber la cantidad de entradas
function obtenerCantidadEntradas() {
    const cantidadEntradas = parseInt(prompt("Ingrese la cantidad de entradas que desea comprar:"));
    if (cantidadEntradas > 0) {
        return cantidadEntradas;
    } else {
        alert("Cantidad inválida. Por favor, ingrese un número mayor a 0.");
        return obtenerCantidadEntradas();
    }
}

// Función para calcular el precio total
function calcularPrecioTotal(evento, cantidadEntradas) {
    return evento.precio * cantidadEntradas;
}

//Funcion para confirmar la compra
function confirmarCompra() {
    const confirmacion = confirm("¿Desea confirmar la compra?");
    if (confirmacion) {
        alert("Compra confirmada. ¡Gracias por su compra!");
    } else {
        alert("Compra cancelada.");
    }
}

// Ejecutar el flujo de compra
mostrarEventos();
const eventoSeleccionado = seleccionarEvento();
const cantidadEntradas = obtenerCantidadEntradas();
const precioTotal = calcularPrecioTotal(eventoSeleccionado, cantidadEntradas);
alert("Usted ha seleccionado el evento: " + eventoSeleccionado.nombre + "\n" +
    "Lugar: " + eventoSeleccionado.lugar + "\n" +
    "Fecha: " + eventoSeleccionado.fecha + "\n" +
    "Cantidad de entradas: " + cantidadEntradas + "\n" +
    "Precio total: $" + precioTotal);
confirmarCompra();
// Fin del código