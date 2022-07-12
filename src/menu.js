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
    document.body.style.overflowY = "hidden";
    fullScreenMenu.style.display = "flex";
  } else {
    document.body.style.overflowY = "visible";
    fullScreenMenu.style.display = "none";
  }
}
