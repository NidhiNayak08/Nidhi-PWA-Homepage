// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Example of adding featured products dynamically
  const products = [
    { name: "Product 1", price: "$19.99", image: "img.jpg" },
    { name: "Product 2", price: "$24.99", image: "img2.jpg" },
    { name: "Product 3", price: "$29.99", image: "img3.jpg" },
  ];

  const productContainer = document.querySelector(".product-list");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="add-to-cart-btn">Add to Cart</button>
        `;
    productContainer.appendChild(productCard);
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function (registration) {
      console.log(
        "Service worker registration successful:",
        registration.scope
      );
    })
    .catch(function (error) {
      console.log("Service worker registration failed:", error);
    });
}
