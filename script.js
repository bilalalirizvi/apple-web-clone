let menuDropDown = document.getElementById("menuDropDown");
menuDropDown.style.display = "none";

let closeMenu = document.getElementsByClassName("bi-x-lg")[0];
closeMenu.addEventListener("click", () => {
  menuDropDown.style.display = "none";
});

let menuBarOpen = document.getElementById("menuBarOpen");

menuBarOpen.addEventListener("click", () => {
  menuDropDown.style.display = "block";
});
