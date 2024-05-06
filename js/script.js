
let arrayProducts = [];

let smartphones = [];
let laptops = [];
let elettronica = [];


let arrayCart = JSON.parse(localStorage.getItem("carrello")) ? JSON.parse(localStorage.getItem("carrello")) : []; 
console.log(arrayCart);


// se c'è, ti rida il json, altrimenti ti restituisce il carrello vuoto


fetch('https://dummyjson.com/products?limit=100')
    .then(response => response.json())
    .then(json => {


        arrayProducts = json.products;

        smartphones = arrayProducts.filter((prodotto) => prodotto.category == "smartphones");
        laptops = arrayProducts.filter((prodotto) => prodotto.category == "laptops");
        elettronica = smartphones.concat(laptops);
        console.log(elettronica);
        creaCard();

        arrayProducts.forEach(prodotto => {
            prodotto.quantity = 0;
            
        });
        aggiornaCarrello();
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
                
                <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" data-product-id="${prodotto.id}" class="btn-aggiungi-carrello">Aggiungi al carrello<span class="fa-solid fa-cart-plus"></span></button>
            </div>
        </div>
        `
        
    });
    
    let allBtnAggiungiAlCarrello = document.querySelectorAll(`.btn-aggiungi-carrello`);
    [...allBtnAggiungiAlCarrello].forEach(btn => {
        btn.addEventListener('click',function(){
            aggiungiAlCarrello(arrayProducts[this.getAttribute('data-product-id')-1]);
        });
    });




}




function aggiungiAlCarrello(oggettoProdotto) {
    
    let containsProduct = arrayCart.some(prodotto => prodotto.id == oggettoProdotto.id)
    if (!containsProduct){ 
        arrayCart.push(oggettoProdotto);
    }
    let productIndex = arrayCart.findIndex(prodotto => prodotto.id == oggettoProdotto.id)
    
    arrayCart[productIndex].quantity += 1;
    
    aggiornaCarrello();
    
};







function aggiornaCarrello() {
     console.log("debug");
    
    
    localStorage.setItem("carrello", JSON.stringify(arrayCart)); //lo salviamo in LocalStorage
    let divProdottiCarrello = document.getElementById('divProdottiCarrello');

    divProdottiCarrello.innerHTML = "";

    arrayCart.forEach(prodotto => {
        
        divProdottiCarrello.innerHTML += 
        `
        <div class="elProdottoCarrello">
            <div class="carrelloNomeEImgProdotto">
                <img src="${prodotto.images[0]}" alt="foto prodotto">
                <p>${prodotto.title}</p>
            </div>

            <div class="carrelloQuantita">
                <span class="fa-solid fa-minus decreaseQuantity"></span>
                <input type="number" class="quantityInput" max="99" min="1" value="${prodotto.quantity}">
                <span class="fa-solid fa-plus increaseQuantity"></span>
            </div>
            
            <p>${prodotto.price * prodotto.quantity},99€</p>
        </div>
        <hr>
        `
      
 
    });

    

    
    
}



// pagina del prodotto
// pagina categorie
// checkout
// al click del logo torna alla home
// responsiveness secondo swiper







