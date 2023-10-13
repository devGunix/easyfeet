export default function responsiveInit() {
  const productsContainer = document.querySelector("#products");
  const productsHeight = document.querySelector("[data-products-catalog] ul");
  window.addEventListener("resize", resizeProducts);

  function resizeProducts() {
    productsContainer.style.height =
      productsHeight.getBoundingClientRect().height + 200 + "px";
  }
  window.onload = resizeProducts();
}
