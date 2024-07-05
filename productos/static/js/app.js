// Variable que mantiene el estado visible del carrito
let carritoVisible = false;

// Esperamos a que todos los elementos de la página carguen para ejecutar el script
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    // Agregamos funcionalidad a los botones eliminar del carrito
    document.querySelectorAll('.btn-eliminar').forEach(button => {
        button.addEventListener('click', eliminarItemCarrito);
    });

    // Agregamos funcionalidad al botón sumar cantidad
    document.querySelectorAll('.sumar-cantidad').forEach(button => {
        button.addEventListener('click', sumarCantidad);
    });

    // Agregamos funcionalidad al botón restar cantidad
    document.querySelectorAll('.restar-cantidad').forEach(button => {
        button.addEventListener('click', restarCantidad);
    });

    // Agregamos funcionalidad al botón Agregar al carrito
    document.querySelectorAll('.boton-item').forEach(button => {
        button.addEventListener('click', agregarAlCarritoClicked);
    });

    // Agregamos funcionalidad al botón comprar
    document.querySelector('.btn-pagar').addEventListener('click', pagarClicked);
}

// Eliminamos todos los elementos del carrito y lo ocultamos
function pagarClicked() {
    alert("Gracias por la compra");
    // Elimino todos los elementos del carrito
    const carritoItems = document.querySelector('.carrito-items');
    while (carritoItems.firstChild) {
        carritoItems.removeChild(carritoItems.firstChild);
    }
    actualizarTotalCarrito();
    ocultarCarrito();
}

// Función que controla el botón clickeado de agregar al carrito
function agregarAlCarritoClicked(event) {
    const button = event.target;
    const item = button.parentElement;
    const titulo = item.querySelector('.titulo-item').innerText;
    const precio = item.querySelector('.precio-item').innerText;
    const imagenSrc = item.querySelector('.img-item').src;

    agregarItemAlCarrito(titulo, precio, imagenSrc);

    hacerVisibleCarrito();
}

// Función que hace visible el carrito
function hacerVisibleCarrito() {
    carritoVisible = true;
    const carrito = document.querySelector('.carrito');
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';

    const items = document.querySelector('.contenedor-items');
    items.style.width = '60%';
}

// Función que agrega un item al carrito
function agregarItemAlCarrito(titulo, precio, imagenSrc) {
    const item = document.createElement('div');
    item.classList.add('item');
    const itemsCarrito = document.querySelector('.carrito-items');

    // Controlamos que el item que intenta ingresar no se encuentre en el carrito
    const nombresItemsCarrito = itemsCarrito.querySelectorAll('.carrito-item-titulo');
    for (let i = 0; i < nombresItemsCarrito.length; i++) {
        if (nombresItemsCarrito[i].innerText == titulo) {
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }

    const itemCarritoContenido = `
        <div class="carrito-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa fa-minus-circle restar-cantidad"></i>
                    <input type="text" value="1" class="carrito-item-cantidad" disabled>
                    <i class="fa fa-plus-circle sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
            </div>
            <button class="btn-eliminar">
                <i class="fa fa-trash"></i>
            </button>
        </div>
    `;
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.appendChild(item);

    // Agregamos la funcionalidad eliminar al nuevo item
    item.querySelector('.btn-eliminar').addEventListener('click', eliminarItemCarrito);

    // Agregamos la funcionalidad restar cantidad del nuevo item
    item.querySelector('.restar-cantidad').addEventListener('click', restarCantidad);

    // Agregamos la funcionalidad sumar cantidad del nuevo item
    item.querySelector('.sumar-cantidad').addEventListener('click', sumarCantidad);

    // Actualizamos total
    actualizarTotalCarrito();
}

// Aumento en uno la cantidad del elemento seleccionado
function sumarCantidad(event) {
    const buttonClicked = event.target;
    const selector = buttonClicked.parentElement;
    let cantidadActual = parseInt(selector.querySelector('.carrito-item-cantidad').value);
    cantidadActual++;
    selector.querySelector('.carrito-item-cantidad').value = cantidadActual;
    actualizarTotalCarrito();
}

// Resto en uno la cantidad del elemento seleccionado
function restarCantidad(event) {
    const buttonClicked = event.target;
    const selector = buttonClicked.parentElement;
    let cantidadActual = parseInt(selector.querySelector('.carrito-item-cantidad').value);
    cantidadActual--;
    if (cantidadActual >= 1) {
        selector.querySelector('.carrito-item-cantidad').value = cantidadActual;
        actualizarTotalCarrito();
    }
}

// Elimino el item seleccionado del carrito
function eliminarItemCarrito(event) {
    const buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    // Actualizamos el total del carrito
    actualizarTotalCarrito();

    // La siguiente función controla si hay elementos en el carrito
    // Si no hay, oculto el carrito
    ocultarCarrito();
}

// Función que controla si hay elementos en el carrito. Si no hay, oculta el carrito.
function ocultarCarrito() {
    const carritoItems = document.querySelector('.carrito-items');
    if (carritoItems.childElementCount === 0) {
        const carrito = document.querySelector('.carrito');
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;

        const items = document.querySelector('.contenedor-items');
        items.style.width = '100%';
    }
}

// Actualizamos el total de Carrito
function actualizarTotalCarrito() {
    // Seleccionamos el contenedor carrito
    const carritoContenedor = document.querySelector('.carrito');
    const carritoItems = carritoContenedor.querySelectorAll('.carrito-item');
    let total = 0;
    // Recorremos cada elemento del carrito para actualizar el total
    carritoItems.forEach(item => {
        const precioElemento = item.querySelector('.carrito-item-precio');
        // Quitamos el símbolo peso y el punto de milesimos.
        const precio = parseFloat(precioElemento.innerText.replace('$', '').replace('.', ''));
        const cantidadItem = item.querySelector('.carrito-item-cantidad');
        const cantidad = parseInt(cantidadItem.value);
        total += precio * cantidad;
    });
    total = Math.round(total * 100) / 100;

    document.querySelector('.carrito-precio-total').innerText = `$${total.toLocaleString("es")},00`;
}
