// Función para cargar el carrito desde localStorage
function loadCart() {
    const CART_CONTAINER = document.getElementById('cart-container');
    CART_CONTAINER.innerHTML = ''; // Limpiar el contenedor antes de recargarlo
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach((product, index) => {
        const CARD_ELEMENT = document.createElement("div");
        CARD_ELEMENT.classList.add("cart-card");

        CARD_ELEMENT.innerHTML = `
            <img src=${product.img} alt=${product.alt} class="cart-card-img">
            <div class="cart-card-content">
                <h2 class="cart-card-title">${product.title}</h2>
                <p class="cart-card-description">${product.description}</p>
                <div class="cart-card-actions">
                    <button class="cart-card-action remove" data-index="${index}">Eliminar</button>
                    <button class="cart-card-action buy" data-index="${index}">Comprar</button>
                </div>
            </div>
            <div class="cart-card-quantity">
                <button class="quantity-button minus" data-index="${index}">-</button>
                <span class="quantity-indicator">${product.amount}</span>
                <button class="quantity-button plus" data-index="${index}">+</button>
            </div>
            <div class="cart-card-price">$${product.totalPrice}</div>
        `;

        CART_CONTAINER.appendChild(CARD_ELEMENT);
    });

    document.querySelectorAll('.quantity-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            if (event.target.classList.contains('minus')) {
                updateQuantity(index, -1);
            } else if (event.target.classList.contains('plus')) {
                updateQuantity(index, 1);
            }
        });
    });

    document.querySelectorAll('.cart-card-action.remove').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            removeFromCart(index);
        });
    });

    document.querySelectorAll('.cart-card-action.buy').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            buyItem(index);
        });
    });
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index].amount + change > 0) {
        cart[index].amount += change;
        cart[index].totalPrice = cart[index].amount * cart[index].price;
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function buyItem(index) {

    
}

document.getElementById('cart-empty').addEventListener('click', () => {
    localStorage.removeItem('cart');
    loadCart();
});

loadCart();
