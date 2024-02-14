document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  const closeButton = document.getElementById("close");
  const sidebar = document.getElementById("sidebar");
  const switchButton = document.getElementById("switch");
  const switchMobile = document.getElementById("switch-mobile");
  const htmlElement = document.documentElement;

  menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  closeButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  switchButton.addEventListener("click", () => {
    switchButton.classList.toggle("active");

    const dataTheme = document.documentElement.getAttribute("data-theme");

    if (dataTheme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  });

  switchMobile.addEventListener("click", () => {
    switchMobile.classList.toggle("active");

    const dataTheme = document.documentElement.getAttribute("data-theme");

    if (dataTheme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  });
});
