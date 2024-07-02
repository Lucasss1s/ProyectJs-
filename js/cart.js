// Función para cargar el carrito desde localStorage
function loadCart() {
    const CART_CONTAINER = document.getElementById('cart-container');
    CART_CONTAINER.innerHTML = ''; // Limpiar el contenedor antes de recargarlo
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(producto => {
        const CARD_ELEMENT = document.createElement("div");
        CARD_ELEMENT.classList.add("cart-card");

        CARD_ELEMENT.innerHTML = `
            <img src="../${producto.img}" alt=${producto.alt} class="cart-card-img">
            <div class="cart-card-content">
                <h2 class="cart-card-title">${producto.title}</h2>
                <p class="cart-card-description">${producto.description}</p>
                <div class="cart-card-price">Precio: $${producto.totalPrice}</div>
                <div class="cart-card-quantity">Cantidad: ${producto.amount}</div>
            </div>
        `;

        CART_CONTAINER.appendChild(CARD_ELEMENT);
    });
}

const EMPTY_CART = document.getElementById('cart-empty').addEventListener('click', () => {
    localStorage.removeItem('cart');
    loadCart();
});

loadCart();
