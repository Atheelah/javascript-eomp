// console.log(cart);

//   {
//     imgUrl: "./eclaires.jpeg",
//     imgAlt: "Eclaires",
//     productName: "Eclaires",
//     productDescription:
//       "Crunchy shoe pastry, filled with banana slices, caramel and fresh cream, drizzled with a smooth chocolate ganache",
//     productPrice: "R5.00",
//   },
//   {
//     imgUrl: "./jeff-siepman-MssPSnkV1yM-unsplash(1).jpg",
//     imgAlt: "Banana loaf",
//     productName: "Banana loaf",
//     productDescription:
//       "Moist sweet cake like bread, made with bananas and enjoyed with a cup of coffee or tea",
//     productPrice: "R30.00",
//   },
//   {
//     imgUrl: "./date cake.jpeg",
//     imgAlt: "Date Loaf",
//     productName: "Date Loaf",
//     productDescription:
//       "Delcious sweet cake made of juicy dates and crunchy walnuts, leaving an amazing taste in your mouth ",
//     productPrice: "R40.00",
//   },
//   {
//     imgUrl: "./granadilla-cake-cut-595x397.jpg",
//     imgAlt: "Banana loaf",
//     productName: "Banana loaf",
//     productDescription:
//       "Moist and fluffy center, with a sweet and tangy flour using fresh passion fruit. Topped with a glossy passion fruit glaze ",
//     productPrice: "R30.00",
//   },
//   {
//     imgUrl: "./owen-bruce-fJ2aEP5bsnA-unsplash.jpg",
//     imgAlt: "Red velvet cupcakes",
//     productName: "Red velvet cupcakes",
//     productDescription:
//       "Fluffy cupcake with a beautiful red color and slight chocolate flavor. Topped with a cream cheese buttery frosting",
//     productPrice: "R8.00",
//   },
//   {
//     imgUrl: "./oudi-44-Z82BjB1z95o-unsplash.jpg",
//     imgAlt: "Macaroons",
//     productName: "Macaroons",
//     productDescription:
//       " A light biscuit made with egg white, sugar, and ground almonds or coconut.",
//     productPrice: "R4.00",
//   },
// ];

let images = [
  {
    imgUrl: "./ibrahim-boran-Q9KUfbgzGnA-unsplash(1).jpg",
    imgAlt: "Choclate cupcake",
  },
  {
    imgUrl: "./vanilla.jpeg",
    imgAlt: "Vanilla cupcake",
  },
  {
    imgUrl: "./KOEKSISTERS.jpg",
    imgAlt: "Koeksister",
  },
] 

function renderImage(card){
  let item = document.querySelector(".item")
  let imageMade = item.innerHTML +=` <img src="${card.imgUrl}" alt="${card.imgAlt}">` 
  return imageMade
}

fetch("https://desolate-forest-25770.herokuapp.com/view-cart/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data);
    productCard(data)
  });

function productCard(cards) {
  let productsContainer = document.querySelector("#products-container");
  
  productsContainer.innerHTML = "";
  console.log(cards.data)  
  cards.data.forEach(card => {
    productsContainer.innerHTML +=`
    <div class="item"> 
      <h2 class="name">${card[1]}</h2>
      <p class="description">${card[4]}</p>
      <p class="price">${card[2]}</p>  
      <button class="card-btn">Add to Cart</button>  
    </div>`;
document.querySelectorAll('.card-btn').forEach(button => {
  button.addEventListener('click', () => {
    addToCart(button.parentElement.querySelector('.name').innerHTML, button.parentElement.querySelector('.price').innerHTML)
  })
})
  })
}




// productsList.forEach((card) => {
//   productsContainer.innerHTML += productCard(card);
// });

function addToCart(name, price) {
  // let cart = JSON.parse(window.localStorage.cart);
  let item = {name: name, price: price}
  cart.append(item)
  window.localStorage['cart'] = JSON.stringify(cart)
}

// function searchForProducts(){
//   let searchTerm = document.querySelector("#searchTerm").value;
//   console.log(searchTerm)

//   let searchedProducts = products.filter(product => product.view-cart.toLowerCase().contains()(searchTerm.toLowerCase()));
//   console.log(searchTerm)
// }

function toggleCart(){
  document.querySelector("#cart").classList.toggle("active")
}

function populateCart() {
  console.log(cart)
  document.getElementById('cart').innerHTML = ""
  cart.forEach(item => {
    productsContainer.innerHTML +=`
    <div class="item">  
    <h2 class="name">${card[1]}</h2>
    <p class="description">${card[4]}</p>
    <p class="price">${card[2]}</p>  
  </div>`;
    console.log(item)
    document.getElementById('cart').innerHTML += ``
  })
}

// populateCart()

