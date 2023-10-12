export default function favoriteInit() {
  const bestSeller = [];
  const bestSellerDesc = document.querySelectorAll(".productDesc");
  bestSellerDesc.forEach((e, i) => {
    bestSeller.push({
      titulo: e.innerText,
      dataProduct: i,
    });
  });

  const favoriteIcon = document.querySelectorAll(".favoriteIcon");
  const alertFavorite = document.querySelector(".alerts");
  const alertDesc = document.querySelector("[data-desc-alert]");
  favoriteIcon.forEach((e, i) => {
    e.addEventListener("click", () => {
      if (e.getAttribute("src") === "img/starActive.png") {
        e.src = "img/star.png";
        alertDesc.innerHTML = `<span style="color: #a9a9a9">${bestSeller[i].titulo}</span> foi removido dos favoritos.`;
        alertFavorite.classList.add("active");
        setTimeout(() => {
          alertFavorite.classList.remove("active");
        }, 2000);
      } else {
        e.src = "img/starActive.png";
        alertDesc.innerHTML = `<span style="color: #a9a9a9">${bestSeller[i].titulo}</span> foi adicionado aos favoritos.`;
        alertFavorite.classList.add("active");
        setTimeout(() => {
          alertFavorite.classList.remove("active");
        }, 2000);
      }
    });
  });
}
