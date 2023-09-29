const menuIcon = document.querySelector("#hamburger-line");
const checkbox = document.querySelector(".checkbox");
const menuItem = document.getElementById("menu-item");

checkbox.addEventListener("click", function () {
  menuItem.classList.toggle("hidden");
});
