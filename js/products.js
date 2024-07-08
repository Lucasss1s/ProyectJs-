/* PRODUCTS */

const PRODUCTS_DATA = [
    {
        img: "../img/remera.jpg",
        alt: "Product 1",
        title: "Product 1",
        description: "Description of product 1",
        price: 100,
        amount: 1
    },
    {
        img: "../img/remera.jpg",
        alt: "Product 2",
        title: "Product 2",
        description: "Description of product 2",
        price: 100,
        amount: 1
    },
    {
        img: "../img/remera.jpg",
        alt: "Product 3",
        title: "Product 3",
        description: "Description of product 3",
        price: 100,
        amount: 1
    },
    {
        img: "../img/remera.jpg",
        alt: "Product 4",
        title: "Product 4",
        description: "Description of product 4",
        price: 100,
        amount: 1
    },
    {
        img: "../img/remera.jpg",
        alt: "Product 5",
        title: "Product 5",
        description: "Description of product 5",
        price: 100,
        amount: 1
    },
    {
        img: "../img/remera.jpg",
        alt: "Product 6",
        title: "Product 6",
        description: "Description of product 6",
        price: 100,
        amount: 1
    },
    {
        img: "../img/remera.jpg",
        alt: "Product 7",
        title: "Product 7",
        description: "Description of product 7",
        price: 100,
        amount: 1
    },
    {
        img: "../img/remera.jpg",
        alt: "Product 8",
        title: "Product 8",
        description: "Description of product 8",
        price: 100,
        amount: 1
    },   
    
];

const PRODUCTS = document.querySelector('.product-gallery');

function generateCardsProducts(data){
    data.forEach(product => {
        const PRODUCT_ELEMENT = document.createElement("div");
        PRODUCT_ELEMENT.classList.add('product-item');
        PRODUCT_ELEMENT.innerHTML = `
            <img src="${product.img}" alt="${product.alt}">
            <div class="product-price-overlay">Price: $${product.price}</div>
`;
    PRODUCTS.appendChild(PRODUCT_ELEMENT);
    })
};

generateCardsProducts(PRODUCTS_DATA);




const PRODUCT_ITEM = document.querySelectorAll('.product-item');

const selectedProductContainer = document.querySelector('.selected-product');

PRODUCT_ITEM.forEach((item, index) => {
    item.addEventListener('click', () => {
        const selectedProduct = PRODUCTS_DATA[index];

        const selectedProductCard = document.createElement('div');
        selectedProductCard.classList.add('selected-product-card');
        selectedProductCard.innerHTML = `
            <img src="${selectedProduct.img}" alt="${selectedProduct.alt}">
            <div class="product-details">
                <h2>${selectedProduct.title}</h2>
                <p>${selectedProduct.description}</p>
                <p class='product-price'>Price: $${selectedProduct.price}</p>
                <div class="product-buttons">        
                    <div class="quantity-controls">
                        <button class="quantity-button minus">-</button>
                        <span class="quantity-indicator">${selectedProduct.amount}</span>
                        <button class="quantity-button plus">+</button>
                    </div>
                    <button class="buy-button">Add to cart</button>
                    <button class="close-button">Close</button>
                </div>
            </div>
        `;

      /* limpiamos la card q se genera cuando se selecciona otra (para tener una sola) */
        selectedProductContainer.innerHTML = null;
        selectedProductContainer.appendChild(selectedProductCard);

        selectedProductCard.querySelector('.minus').addEventListener('click', () => {
            if (selectedProduct.amount > 1) {
                selectedProduct.amount--
                updateCard(selectedProduct, selectedProductCard);
            }
        });

        selectedProductCard.querySelector('.plus').addEventListener('click', () => {
            selectedProduct.amount++
            updateCard(selectedProduct, selectedProductCard);
        });

        selectedProductCard.querySelector('.close-button').addEventListener('click', () => {
            selectedProductContainer.innerHTML = null;
        });
        
        selectedProductCard.querySelector('.buy-button').addEventListener('click', () => {
            addToCart(selectedProduct);
        });

        let cartConfirmation = document.querySelector(".buy-button");
        cartConfirmation.addEventListener("click", () =>{
                Toastify({
                    text:"ADDED TO CART",
                    duration: 1000,
                    position:"right",
                    gravity: "top",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();

            })

    });
});



function updateCard(selectedProduct, selectedProductCard) {
    selectedProductCard.querySelector('.quantity-indicator').textContent = selectedProduct.amount;

    selectedProductCard.querySelector('.product-price').textContent = 'Price $'+(selectedProduct.price * selectedProduct.amount);
};

// Función para agregar productos al carrito
function addToCart(selectedProduct) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productExisting = cart.find(item => item.title === selectedProduct.title);

    if (productExisting) {
        productExisting.amount += selectedProduct.amount;
        productExisting.totalPrice = productExisting.amount * selectedProduct.price; 
    } else {
        cart.push({...selectedProduct, totalPrice: selectedProduct.amount * selectedProduct.price});
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}


