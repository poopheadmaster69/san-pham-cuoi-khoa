let productList = [];
const productListElm = document.getElementById("product-list");
const productTemp = document.getElementById("product-template");

function getAPI() {
  fetch("https://65816cbf3dfdd1b11c433d35.mockapi.io/shop")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productList = data;
      renderAPI();
    });
}

function renderAPI() {
  for (let index = 0; index < productList.length; index++) {
    const product = productList[index];}
  }