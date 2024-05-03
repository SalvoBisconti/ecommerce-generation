
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
        
    });
    
    let allBtnAggiungiAlCarrello = document.querySelectorAll(`.btn-aggiungi-carrello`);
    [...allBtnAggiungiAlCarrello].forEach(btn => {
        btn.addEventListener('click',function(){
            aggiungiAlCarrello(this.getAttribute('product-id'));
        });
    });




}




function aggiungiAlCarrello(prodottoId) {
    console.log("debug");

    let divProdottiCarrello = document.getElementById('divProdottiCarrello');

    divProdottiCarrello.innerHTML += 
    `
    <div class="elProdottoCarrello">
        <div class="carrelloNomeEImgProdotto">
            <img src="${arrayProducts[prodottoId - 1].images[0]}" alt="foto prodotto">
            <p>${arrayProducts[prodottoId - 1].title}</p>
        </div>

        <div class="carrelloQuantita">
            <span class="fa-solid fa-minus decreaseQuantity"></span>
            <input type="number" class="quantityInput" max="99" min="1" value="1">
            <span class="fa-solid fa-plus increaseQuantity"></span>
        </div>
        
        <p>${arrayProducts[prodottoId - 1].price},99€</p>
    </div>
    <hr>
    `;

    divProdottiCarrello.addEventListener('click', function(event) {
        const target = event.target;

        if (target.classList.contains('decreaseQuantity')) {
            const input = target.nextElementSibling; // troverà l'input
            if (input.value > 1) {
                input.value = parseInt(input.value) - 1;
                target.style.color = "black"; // ripristina il colore
            } else {
                target.style.color = "gray"; // se il valore è 1 o inferiore
            }
        }

        if (target.classList.contains('increaseQuantity')) {
            const input = target.previousElementSibling; // troverà l'input
            if (input.value < 99) {
                input.value = parseInt(input.value) + 1;
                target.style.color = "black"; // ripristina il colore
            } else {
                target.style.color = "gray"; // se il valore è 99 o superiore
            }
        }
    });
}