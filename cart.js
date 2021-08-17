function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart") || []);
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  const productsElement = document.getElementById("products-container");
  const product = productsElement.children[index];
  console.log(product);
  productsElement.removeChild(product);
}

window.onload = function () {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const productsElement = document.getElementById("products-container");

  //   console.log(cart);

  cart.forEach((item) => {
    console.log(item[0]);

    let cartItem = item[0];

    const container = document.createElement("div");

    // adding products-item class
    container.classList.add("products-item");

    // creating text elements
    const productImage = document.createElement("img");
    const name = document.createElement("p");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const button = document.createElement("button");

    button.onclick = function () {
      removeFromCart(cartItem[0]);
    };

    // changing text of products
    console.log(cartItem);
    productImage.innerText = cartItem[5];
    name.innerText = cartItem[2];
    description.innerText = cartItem[3];
    price.innerText = cartItem[4];
    button.innerText = "Remove From Cart";

    // appending the text to the product
    container.append(productImage);
    container.append(name);
    container.append(description);
    container.append(price);
    container.append(button);

    // appending the product to the main container
    productsElement.append(container);
  });

  //   for (let i = 0; i < cart.length; i++) {
  //     console.log(cart[i]);
  //     const product = cart[i];

  //     // creating main element for product
  //     const container = document.createElement("div");

  //     // adding products-item class
  //     container.classList.add("products-item");

  //     // creating text elements
  //     const productImage = document.createElement("img");
  //     const name = document.createElement("p");
  //     const description = document.createElement("p");
  //     const price = document.createElement("p");
  //     const button = document.createElement("button");

  //     button.onclick = function () {
  //       removeFromCart(i);
  //     };

  //     // changing text of products
  //     console.log(product);
  //     productImage.innerText = product[5];
  //     name.innerText = product[2];
  //     description.innerText = product[3];
  //     price.innerText = product[4];
  //     button.innerText = "Remove From Cart";

  //     // appending the text to the product
  //     container.append(productImage);
  //     container.append(name);
  //     container.append(description);
  //     container.append(price);
  //     container.append(button);

  //     // appending the product to the main container
  //     productsElement.append(container);
  //   }
};
