let productDiv = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
.then((res)=>{
    return res.json();
})

.then((data)=>{

    data.forEach((item)=>{

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
        
        <img src="${item.image}">
        
        <h3>${item.title}</h3>

        <p>Price : $${item.price}</p>

        <button>Add to Cart</button>
        
        `;

        productDiv.appendChild(card);

    });

});