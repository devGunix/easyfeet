export default function responsiveInit() {
  const productsContainer = document.querySelector("#products");
  const productsHeight = document.querySelector("[data-products-catalog] ul");
  window.addEventListener("resize", resizeProducts);

  function resizeProducts() {
    productsContainer.style.height =
      productsHeight.getBoundingClientRect().height + 200 + "px";
  }

  const menuMobile = document.querySelector("[data-menu-mobile]");
  const events = ["touch", "click"];
  events.forEach((event) => {
    menuMobile.addEventListener(event, menuMobileActive);
  });

  function menuMobileActive() {
    menuMobile.classList.toggle("active")
  }

  window.onload = () => {
    resizeProducts();
  };
}
