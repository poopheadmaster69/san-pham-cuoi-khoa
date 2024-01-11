let productList = [];

const productListElm = document.getElementById("product-list");
const productTemp = document.getElementById("product-template");

function getProductList() {
  fetch("https://65816cbf3dfdd1b11c433d35.mockapi.io/shop")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productList = data;
      renderProductList();
    });
}

function renderProductList() {
  for (let index = 0; index < productList.length; index++) {
    const product = productList[index];
    const productItem = productTemp.content.cloneNode(true);
    productItem.getElementById("product-image").src = product.avatar;
    productItem.getElementById("product-name").textContent = product.name;
    productItem.getElementById("product-price").textContent = product.price;
    productItem.getElementById("product-description").textContent = product.description;
    productListElm.appendChild(productItem);
  }
}

getProductList();


