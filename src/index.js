// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const productPrice = price.innerHTML
  const productQuantity = quantity.value
  const productSubtotal = productPrice * productQuantity
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = productSubtotal
  return productSubtotal
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let productsAll = document.querySelectorAll(".product");
  productsAll = [...productsAll]
  const allProductsSubtotal = productsAll.map(updateSubtotal);

  // ITERATION 3
  //... your code goes here
  const totalProducts = allProductsSubtotal.reduce(function (acc, cur) {
    return acc + cur;
  })
  const total = document.querySelector("#total-value span");
  total.innerHTML = totalProducts
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const product = target.parentNode.parentNode
  product.parentNode.removeChild(product)
  calculateAll()

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll(".btn-remove")
  removeButtons.forEach(function (button) {
    button.addEventListener("click", removeProduct)
  })
  //... your code goes here
});
