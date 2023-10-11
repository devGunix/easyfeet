export default function favoriteInit() {
  const favoriteIcon = document.querySelectorAll(".favoriteIcon");
  favoriteIcon.forEach((e) => {
    e.addEventListener("click", () => {
      if (e.getAttribute("src") === "img/starActive.png") {
        e.src = "img/star.png";
      } else {
        e.src = "img/starActive.png";
      }
    });
  });
}
