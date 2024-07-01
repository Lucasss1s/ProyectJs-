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
                actualizarTarjeta(selectedProduct, selectedProductCard);
            }
        });

        selectedProductCard.querySelector('.plus').addEventListener('click', () => {
            selectedProduct.amount++
            actualizarTarjeta(selectedProduct, selectedProductCard);
        });

        selectedProductCard.querySelector('.close-button').addEventListener('click', () => {
            selectedProductContainer.innerHTML = null;
        });
        
        

    });
});



function actualizarTarjeta(selectedProduct, selectedProductCard) {
    selectedProductCard.querySelector('.quantity-indicator').textContent = selectedProduct.amount;

    selectedProductCard.querySelector('.product-price').textContent = 'Price $'+(selectedProduct.price * selectedProduct.amount);
};

