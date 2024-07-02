// Función para cargar el carrito desde localStorage
function loadCart() {
    const CART_CONTAINER = document.getElementById('cart-container');
    CART_CONTAINER.innerHTML = ''; // Limpiar el contenedor antes de recargarlo
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(product => {
        const CARD_ELEMENT = document.createElement("div");
        CARD_ELEMENT.classList.add("cart-card");

        CARD_ELEMENT.innerHTML = `
            <img src=${product.img} alt=${product.alt} class="cart-card-img">
            <div class="cart-card-content">
                <h2 class="cart-card-title">${product.title}</h2>
                <p class="cart-card-description">${product.description}</p>
                <div class="cart-card-price">Precio: $${product.totalPrice}</div>
                <div class="cart-card-quantity">Cantidad: ${product.amount}</div>
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
