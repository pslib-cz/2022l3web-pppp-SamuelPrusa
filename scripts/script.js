document.addEventListener("DOMContentLoaded", () => {
  let hamelmnts = document.querySelector(".hamburger");
  hamelmnts.addEventListener("click", () => {
    hamelmnts.classList.toggle("open");
  });
});
