
document.addEventListener("DOMContentLoaded", function () {
  const shareBtn = document.querySelector(".share-icon");
  const footer = document.querySelector(".footer");

  shareBtn.addEventListener("click", function () {
    footer.classList.toggle("active");
  });
});
