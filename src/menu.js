const menuButton = document.querySelector("#menu-button");
const menuButtonClose = document.querySelector("#menu-button-close");
const fullScreenMenu = document.querySelector(".fullscreen-menu");

menuButton.addEventListener("click", (e) => {
  e.preventDefault();
  changeDisplayMenu();
});

menuButtonClose.addEventListener("click", (e) => {
  e.preventDefault();
  changeDisplayMenu()
});

function changeDisplayMenu() {
  let menuDisplay = getComputedStyle(fullScreenMenu).display;

  if (menuDisplay === "none") {
    fullScreenMenu.style.display = "flex";
  } else {
    fullScreenMenu.style.display = "none";
  }
}
