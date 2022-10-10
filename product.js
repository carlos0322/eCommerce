let http = new XMLHttpRequest();

http.open("get", "product.json", true);

http.send();

http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let product = JSON.parse(this.responseText);

    let output = "";

    for (let item of product) {
      output += `
    <div class="products">
  
    <img class="image" src="${item.image}" alt="${item.image}">
    <p class="console">${item.console}</p>
    <p class="description">${item.discription}</p>
    <p class="price">
    <span>${item.price}</span>
    
    </p>
    <p class="cart">Add To Cart <i class="bx bx-cart-alt"></i></p>
    </div>
    `;
    }
    document.querySelector(".product").innerHTML = output;
  }
};
