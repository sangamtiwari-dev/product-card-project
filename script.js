let productDiv = document.getElementById("products");
let searchInput = document.getElementById("search");

let allProducts = [];


fetch("https://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })

  .then((data) => {
    allProducts = data;

    displayProducts(allProducts);
  });


function displayProducts(products) {

  productDiv.innerHTML = "";

  products.forEach((item) => {

    let card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
    
      <img src="${item.image}">
      
      <h3>${item.title}</h3>

      <p>Price : $${item.price}</p>

      <p>${item.category}</p>

      <button>Add to Cart</button>
    
    `;

    productDiv.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {

  let searchValue = searchInput.value.toLowerCase();

  let filteredProducts = allProducts.filter((item) => {

    return item.title.toLowerCase().includes(searchValue);

  });

  displayProducts(filteredProducts);

});