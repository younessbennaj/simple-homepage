document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  const closeButton = document.getElementById("close");
  const sidebar = document.getElementById("sidebar");
  const switchButton = document.getElementById("switch");

  menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  closeButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  switchButton.addEventListener("click", () => {
    switchButton.classList.toggle("active");
  });
});
