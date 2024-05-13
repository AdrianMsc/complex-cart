// COST ALOCATION SWITHC
const orderLevelCostLocationForm = document.getElementById(
  "orderLevelContentForm"
);
const orderLevelCostLocationSwitch = document.getElementById(
  "costLocationToggler"
);

toggleContent = () =>
  (orderLevelCostLocationForm.style.display =
    orderLevelCostLocationSwitch.checked ? "block" : "none");

orderLevelCostLocationSwitch.addEventListener("change", toggleContent);

//CART OPTIONS

let cartOptionsButton = document.getElementById("co-button");
let menu = document.getElementById("responsive-menu");

cartOptionsButton.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});
