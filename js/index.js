const CAROUSEL = document.querySelector('.carousel');
CAROUSEL.innerHTML = `
        <h2>Welcome to Home</h2>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="./img/carousel.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="./img/carousel.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="./img/carousel.jpg" class="d-block w-100" alt="...">
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
`;

const COLLECTIONS = document.querySelector('.section-2');
COLLECTIONS.innerHTML = `
    <h2>Collections</h2>
        <div class="collections">
        <div class="collection">
            <img src="./img/remera.jpg" alt="Colección 1">
            <h3>Colección 1</h3>
            <p>Descripción de la colección 1.</p>
        </div>
        <div class="collection">
            <img src="./img/remera.jpg" alt="Colección 2">
            <h3>Colección 2</h3>
            <p>Descripción de la colección 2.</p>
        </div>
        <div class="collection">
            <img src="./img/remera.jpg" alt="Colección 3">
            <h3>Colección 3</h3>
            <p>Descripción de la colección 3.</p>
        </div>
        </div>
`;

const NEWSLETTER = document.querySelector('.newsletter');
NEWSLETTER.innerHTML = `
    <div class="newsletter-section">
        <h1>Newsletter</h1>
        <p>Get timely updates from your favorite products.</p>
        <div class="newsletter-input-container">
            <input type="email" placeholder="Your email">
            <button type="submit">></button>
        </div>
    </div>
`;

const FOOTER = document.querySelector('.footer');
FOOTER.innerHTML = `
    <p>&copy; 2024 Javascript App. All rights reserved.</p>
`;



