let productsContainer = document.querySelector("#products-container");
let productsList = [
  {
    imgUrl: "./ibrahim-boran-Q9KUfbgzGnA-unsplash(1).jpg",
    imgAlt: "Choclate cupcake",
    productName: "Chocolate Cupcake",
    productDescription:
      "Moist chocolate cupcake, with a fluffy chocolate frosting, topped with chocolate sprinkles",
    productPrice: "R6.00",
  },
  {
    imgUrl: "./vanilla.jpeg",
    imgAlt: "Vanilla cupcake",
    productName: "Vanilla Cupcake",
    productDescription:
      "Tasty vanilla cupcake , with a fresh cream swirl, toppped with a strawberry ",
    productPrice: "R6.00",
  },
  {
    imgUrl: "./KOEKSISTERS.jpg",
    imgAlt: "Koeksister",
    productName: "Koeksisters",
    productDescription:
      "Mouth watering Cape Malay Koeksister, flavoured with cinnamon, cardamon, mixed spice and aniseed. Dipped into a sugar syrup and coated in coconut. ",
    productPrice: "3 for R10",
  },
  {
    imgUrl: "./eclaires.jpeg",
    imgAlt: "Eclaires",
    productName: "Eclaires",
    productDescription:
      "Crunchy shoe pastry, filled with banana slices, caramel and fresh cream, drizzled with a smooth chocolate ganache",
    productPrice: "R5.00",
  },
  {
    imgUrl: "./jeff-siepman-MssPSnkV1yM-unsplash(1).jpg",
    imgAlt: "Banana loaf",
    productName: "Banana loaf",
    productDescription:
      "Moist banana sweet cake, enjoyed with a cup of coffee or tea",
    productPrice: "R30.00",
  },
  {
    imgUrl: "./date cake.jpeg",
    imgAlt: "Date Cake",
    productName: "Date Cake",
    productDescription: "Delcious cake made of juicy dates and crunchy walnuts",
    productPrice: "R40.00",
  },
  {
    imgUrl: "./granadilla-cake-cut-595x397.jpg",
    imgAlt: "Banana loaf",
    productName: "Banana loaf",
    productDescription:
      "Moist and fluffy center, with a sweet and tangy flour using fresh passion fruit. Topped with a glossy passion fruit glaze ",
    productPrice: "R30.00",
  },
  {
    imgUrl: "./owen-bruce-fJ2aEP5bsnA-unsplash.jpg",
    imgAlt: "Red velvet cupcakes",
    productName: "Red velvet cupcakes",
    productDescription:
      "Fluffy cupcake with a beautiful red color and slight chocolate flavor. Topped with a cream cheese buttery frosting",
    productPrice: "R8.00",
  },
  {
    imgUrl: "./oudi-44-Z82BjB1z95o-unsplash.jpg",
    imgAlt: "Macaroons",
    productName: "Macaroons",
    productDescription:
      " A light biscuit made with egg white, sugar, and ground almonds or coconut.",
    productPrice: "R4.00",
  },
];

fetch("https://desolate-forest-25770.herokuapp.com/view-cart/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data);
    getItems(data.data);
  });

function productCard(card) {
  let displayedCard = `
    <div class="item">
    <img class="product-image" src="${card.imgUrl}" alt="${card.imgAlt}">
    
    <h2 class="name">
        ${card.productName}
    </h2>
    <p class="description">
        ${card.productDescription}
    </p>
    <p class="price">
        ${card.productPrice}
    </p>
    
    <button class="card-btn">Add to Cart</button>  
</div>`;
  return displayedCard;
}

productsList.forEach((card) => {
  productsContainer.innerHTML += productCard(card);
});
