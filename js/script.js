
let arrayProducts = [];

let smartphone = [];
let laptops = [];
let elettronica = [];

fetch('https://dummyjson.com/products?limit=100')
    .then(response => response.json())
    .then(json => {

        arrayProducts = json.products;

        smartphone = arrayProducts.filter((prodotto) => prodotto.category == "smartphones");
        laptops = arrayProducts.filter((prodotto) => prodotto.category == "laptops");
        elettronica = smartphone.concat(laptops);
        console.log(elettronica);
        creaCard();
    });


let carosello_elettronica = document.getElementById('carosello_elettronica')
function creaCard() {
    elettronica.forEach(prodotto => {
        carosello_elettronica.innerHTML +=
        `
        <div class="swiper-slide">
        <div class="card-body">
        <div class="card-title fs-5">${prodotto.title}</div>
        <img src="${prodotto.images[0]}">
        <p class="card-description">${prodotto.description}</p>
        <a href="#" class="btn btn-primary">
            <i class="bi bi-cart-plus"></i>
            Add to cart</a>
        </div>
        </div>
        `

    });

    console.log(elettronica);

}







/* categorie
[
"smartphones",
"laptops",
"fragrances",
"skincare",
"groceries",
"home-decoration",
"furniture",
"tops",
"womens-dresses",
"womens-shoes",
"mens-shirts",
"mens-shoes",
"mens-watches",
"womens-watches",
"womens-bags",
"womens-jewellery",
"sunglasses",
"automotive",
"motorcycle",
"lighting"
] */
