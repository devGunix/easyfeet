export default function accordionInit() {}

const accordionTitle = document.querySelectorAll(".aboutSubContainer dt");
const descContainer = document.querySelector("[data-desc-list]");

accordionTitle.forEach((e) => {
  e.addEventListener("click", accordionShow);
  e.addEventListener("touch", accordionShow);
});

function accordionShow() {
  if (this.classList.contains("active")) {
    descContainer.classList.remove("active");
    this.classList.remove("active");
    this.nextElementSibling.classList.remove("active");
  } else {
    accordionTitle.forEach((e) => {
      e.classList.remove("active");
      descContainer.classList.remove("active");
      e.nextElementSibling.classList.remove("active");
    });
    this.nextElementSibling.classList.add("active");
    this.classList.add("active");
    descContainer.classList.add("active");
  }
}
