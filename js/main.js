var showBtn = document.getElementById("show"),
    navItems = document.querySelector("#nav_items");

showBtn.addEventListener("click", function () {
    navItems.classList.toggle("active");
});

/////////////////////////////////////
var productsContainer = document.getElementById("products_container");
var productsRequest = new XMLHttpRequest();

productsRequest.onreadystatechange = function () {
    let allProducts = JSON.parse(this.response);

    // allProducts = allProducts.slice(0 , 10);
    if (this.status === 200 && this.readyState === 4) {
        allProducts.map(
            (product) =>
                (productsContainer.innerHTML += `<div class="view_card">
                    <img src="${product.image}" alt="${product.title}">
                    <h6>${product.title}</h6>
                    <div class="add_dollar">${product.price}</div>
                </div>`)
        );

        // var selectedProducts = [];

        // for (let index = 0; index < 8; index++) {
        //     var randomNum = Math.round(Math.random() * 7);
        //     let product = allProducts[randomNum];

        //     if(selectedProducts.includes(product))
        //     {
        //         console.log("Yes")
        //     }
        //     else
        //     {
        //         console.log("NO")
        //         selectedProducts.push(product);
        //     }

        //     productsContainer.innerHTML += 
        //     `<div class="view_card">
        //         <img src="${product.image}" alt="${product.title}">
        //         <h6>${product.title}</h6>
        //         <div class="add_dollar">${product.price}</div>
        //     </div>`
        // }
    }
};
productsRequest.open("GET", "../data/products.json");

productsRequest.send();
