let header = document.getElementById('header')

header.innerHTML = `<a href="./index.html"><img id = "logo" src="./img/logo.webp" alt=""></a>

<div class="container align-items-center" style="grid-template-columns: 1fr 2fr;">
  <div class="d-flex align-items-center">

    <form class="w-100 me-3">
      <input type="search" class="form-control" placeholder="Cerca su Amatron" aria-label="Search">
    </form>

    <div class="box_profile_cart d-flex">
      <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
    </div>

    <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-cart-shopping mx-3 "></i></a>

  </div>


  
  <div class="navbar_categorie">

    <div class="dropdown">
      <a data-bs-toggle="dropdown" aria-expanded="false" class="pippo" href="">
        <p>Elettronica</p>
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Smartphone</a></li>
        <li><a class="dropdown-item" href="#">Laptop</a></li>
      </ul>
    </div>

    <div class="dropdown">
      <a data-bs-toggle="dropdown" aria-expanded="false" class="pippo" href="">
        <p>Abbigliamento Donna</p>
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Magliette</a></li>
        <li><a class="dropdown-item" href="#">Top</a></li>
        <li><a class="dropdown-item" href="#">Scarpe</a></li>
      </ul>
    </div>

    <div class="dropdown">
      <a data-bs-toggle="dropdown" aria-expanded="false" class="pippo" href="">
        <p>Abbigliamento Uomo</p>
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Camicie</a></li>
        <li><a class="dropdown-item" href="#">Scarpe</a></li>
      </ul>
    </div>

    <div class="dropdown">
      <a data-bs-toggle="dropdown" aria-expanded="false" class="pippo" href="">
        <p>Accessori Donna & Uomo</p>
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Orologi Donna</a></li>
        <li><a class="dropdown-item" href="#">Orologi Uomo</a></li>
        <li><a class="dropdown-item" href="#">Borse</a></li>
        <li><a class="dropdown-item" href="#">Gioielli</a></li>
        <li><a class="dropdown-item" href="#">Profumi</a></li>
        <li><a class="dropdown-item" href="#">Occhiali da sole</a></li>
      </ul>
    </div>

    <div class="dropdown">
      <a data-bs-toggle="dropdown" aria-expanded="false" class="pippo" href="">
      <p>Arredamento</p>
      </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Decorazioni per la casa</a></li>
        <li><a class="dropdown-item" href="#">Mobili</a></li>
      </ul>
    </div>

  </div>

</div>
`





let footer = document.getElementById('footer')

footer.innerHTML = `   
<a href="./"><img id = "logo" src="./img/logo.webp" alt=""></a>
<ul>
  <a href="">
    <li>Condizioni generali di uso e vendita</li>
  </a>
  <a href="">
    <li>Informativa sulla privacy</li>
  </a>
  <a href="">
    <li>Area legale</li>
  </a>
  <a href="">
    <li>Cookie</li>
  </a>
  <a href="">
    <li>Pubblicità definita in base agli interessi</li>
  </a>
</ul>
<p>©2024 Amatron.com, Inc. o società affiliate</p> `



let offcanvasRight = document.getElementById('offcanvasRight')

offcanvasRight.innerHTML = `    <div class="offcanvas-header">
<h5 class="offcanvas-title" id="offcanvasRightLabel">Il tuo carrello</h5>
<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
<hr>
</div>
<div class="offcanvas-body">
<div id="divProdottiCarrello">
</div>
</div>
`



