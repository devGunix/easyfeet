export default function modalInit() {
  const loginBtn = document.querySelector("[data-login-modal]");
  const closeLoginBtn = document.querySelector("[data-close-modal]");
  const modal = document.querySelector("[data-modal]");

  loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.add("active");
    closeLoginBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
    modal.addEventListener("click", outSideClick);
  });

  function outSideClick(event) {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  }
}
