
let arrayProducts = [];

let elettronica = [];
let abbigliamento_uomo = [];
let abbigliamento_donna = [];
let accessori = [];
let arredamento = [];



let arrayCart = JSON.parse(localStorage.getItem("carrello")) ? JSON.parse(localStorage.getItem("carrello")) : []; 


fetch('https://dummyjson.com/products?limit=100')
    .then(response => response.json())
    .then(json => {
        
        arrayProducts = json.products;
        
        estraiCategorie();
        
        arrayProducts.forEach(prodotto => {
            prodotto.quantity = 0;
            prodotto.price += 0.99;
        });

        aggiornaCarrello();

    let paginaCorrente = window.location.href.split("/").pop()

        if (paginaCorrente == "index.html") {
            creaCardSwiper();
        }else if (paginaCorrente == "catalogo.html"){
            creaCardCatalogo();
        }
        
    });

    let arrayCategorie = [];
    
    function estraiCategorie() {

    let smartphone = arrayProducts.filter((prodotto) => prodotto.category == "smartphones");
    let laptop = arrayProducts.filter((prodotto) => prodotto.category == "laptops");
    elettronica = smartphone.concat(laptop);

    let camicie_uomo = arrayProducts.filter((prodotto) => prodotto.category == "mens-shirts");
    let scarpe_uomo = arrayProducts.filter((prodotto) => prodotto.category == "mens-shirts");
    abbigliamento_uomo = camicie_uomo.concat(scarpe_uomo);

    let magliette_donna = arrayProducts.filter((prodotto) => prodotto.category == "womens-shirts");
    let scarpe_donna = arrayProducts.filter((prodotto) => prodotto.category == "womens-shoes");
    let top = arrayProducts.filter((prodotto) => prodotto.category == "tops");
    abbigliamento_donna = magliette_donna.concat(scarpe_donna).concat(top);

    let orologi_uomo = arrayProducts.filter((prodotto) => prodotto.category == "mens-watches");
    let orologi_donna = arrayProducts.filter((prodotto) => prodotto.category == "womens-watches");
    let borse = arrayProducts.filter((prodotto) => prodotto.category == "womens-bags");
    let gioielli = arrayProducts.filter((prodotto) => prodotto.category == "womens-jewellery");
    let occhiali_da_sole = arrayProducts.filter((prodotto) => prodotto.category == "sunglasses");
    let profumi = arrayProducts.filter((prodotto) => prodotto.category == "fragrances");
    accessori = orologi_uomo.concat(orologi_donna).concat(borse).concat(gioielli).concat(occhiali_da_sole).concat(profumi);

    let decorazioni = arrayProducts.filter((prodotto) => prodotto.category == "home-decoration");
    let mobili = arrayProducts.filter((prodotto) => prodotto.category == "furniture");
    arredamento = decorazioni.concat(mobili);

}



 function creaCardSwiper() {

    estraiCategorie();
    let carosello_elettronica = document.getElementById('carosello_elettronica');

    elettronica.forEach(prodotto => {
        carosello_elettronica.innerHTML +=
        `
        <div class="swiper-slide">
            <div class="card-body">
                <div class="card-title fs-5 mb-2">${prodotto.title}</div>
                <img src="${prodotto.images[0]}">
                <p>${prodotto.price}€</p> 
                
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
    
    localStorage.setItem("carrello", JSON.stringify(arrayCart)); //lo salviamo in LocalStorage
    let divProdottiCarrello = document.getElementById('divProdottiCarrello');

    divProdottiCarrello.innerHTML = "";
    if (arrayCart.length == 0) {
        divProdottiCarrello.textContent = 'Il tuo carrello è vuoto, per ora...'
    }
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
            
            <p>${prodotto.price * prodotto.quantity}€</p>
        </div>
        <hr>
        `
      
 
    });

}




function creaCardCatalogo() {
    
}

// 

// pagina del singolo prodotto //Yeison

// checkout utente 

// carrello // Saverio

// notifica cancellazione prodotto dal carrello
// bottoni modifica quantità prodotto
// notifica pagamento/ordine effettuato


// al click del logo torna alla home








