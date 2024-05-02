
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
        // pippa();
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
        // ,99€ è la commissione per Amatron
       
        
        


        btnAggiungiAlCarrello.addEventListener('click', aggiungiAlCarrello);
        
    });

    // <p class="card-description">${prodotto.description}</p>

    console.log(elettronica);

}


 let btnAggiungiAlCarrello = document.querySelector(`[product-id = "${prodotto.id}"]`);
function aggiungiAlCarrello() {
    console.log("miao");
    let divProdottiCarrello = document.getElementById('divProdottiCarrello');
    divProdottiCarrello.innerHTML = 
    `
    <div class="elProdottoCarrello">
      <img ${arrayProducts[prodotto.id - 1].images[0]} alt="foto prodotto">
      <i>-</i>
      <input type="number" name="" id="" maxlength="2" min="1" value="1">
      <i>+</i>
      <p>${arrayProducts[prodotto.id - 1].price},99€</p>
    </div>
    <hr>
    `
}

// fare una funzione che al click del btn-aggiungi-carrello prende i prodotti e li aggiunge all'offcanvas

// creare una funzione che aggiunge a ogni bottone btn-aggiungi-carrello il corrispettivo id con un addEvent...





// pippa = Aggiungi Eventi Ai Bottoni Aggiungi Al Carrello

// function pippa(prodotto) {
//     let btnAggiungi = document.querySelectorAll('.btn-aggiungi-carrello');
//         [...btnAggiungi].forEach(bottone => {
//             bottone.addEventListener('click', function(){
//                 // this.getAttribute('product-id');
               
//             });
//         });
// }






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
