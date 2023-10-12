export default function responsiveInit() {
  const productsContainer = document.querySelector("#products");
  const productsHeight = document.querySelector("[data-products-catalog] ul");

  window.addEventListener("resize", () => {
    productsContainer.style.height =
      productsHeight.getBoundingClientRect().height + 200 + "px";
  });
}
