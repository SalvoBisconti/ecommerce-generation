
let arrayProducts = [];

let smartphones = [];
let laptops = [];
let elettronica = [];


fetch('https://dummyjson.com/products?limit=100')
    .then(response => response.json())
    .then(json => {

        arrayProducts = json.products;

        smartphones = arrayProducts.filter((prodotto) => prodotto.category == "smartphones");
        laptops = arrayProducts.filter((prodotto) => prodotto.category == "laptops");
        elettronica = smartphones.concat(laptops);
        console.log(elettronica);
        creaCard();
    });
 

 function creaCard() {
    let carosello_elettronica = document.getElementById('carosello_elettronica');

    elettronica.forEach(prodotto => {
        carosello_elettronica.innerHTML +=
        `
        <div class="swiper-slide">
            <div class="card-body">
                <div class="card-title fs-5 mb-2">${prodotto.title}</div>
                <img src="${prodotto.images[0]}">
                <p>${prodotto.price},99€</p> 
                <button product-id="${prodotto.id}" class="btn-aggiungi-carrello">Aggiungi al carrello<span class="fa-solid fa-cart-plus"></span></button>
            </div>
        </div>
        `

        let aaa = document.getElementById('aa');
        aaa.innerHTML = `<button product-id="${prodotto.id}" class="btn-aggiungi-carrello">Aggiungi al carrello<span class="fa-solid fa-cart-plus"></span></button>`

        let btnAggiungiAlCarrello = document.querySelector(`.btn-aggiungi-carrello[product-id="${prodotto.id}"]`);

        btnAggiungiAlCarrello.addEventListener('click',function() {
                aggiungiAlCarrello(prodotto.id);
            });
        
    });

}




function aggiungiAlCarrello(prodottoId) {
    console.log("debug");

    let divProdottiCarrello = document.getElementById('divProdottiCarrello');

    divProdottiCarrello.innerHTML = 
    `
    <div class="elProdottoCarrello">
      <img ${arrayProducts[prodottoId - 1].images[0]} alt="foto prodotto">
      <i>-</i>
      <input type="number" name="" id="" maxlength="2" min="1" value="1">
      <i>+</i>
      <p>${arrayProducts[prodottoId - 1].price},99€</p>
    </div>
    <hr>
    `
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