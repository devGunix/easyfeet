export default function animeScrollInit() {
  window.addEventListener("scroll", animeScroll);

  function animeScroll() {
    const containersScroll = document.querySelectorAll("[data-anime-scroll]");
    containersScroll.forEach((e) => {
      if (e.getBoundingClientRect().top > window.innerHeight - 50) {
        e.classList.remove("active");
        e.style.opacity = "0";
      } else {
        e.style.opacity = "1";
        e.classList.add("active");
      }
    });
  }
}
