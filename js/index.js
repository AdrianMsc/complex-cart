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

// ITEM LEVEL COSTO ALLOCATION
toggleIOverrideOrderLevel = () => {
  document.getElementById("slipItemSection").classList.toggle("hidden");
};

document
  .getElementById("overrideOrderLevelSwitch")
  .addEventListener("change", toggleIOverrideOrderLevel);

//CART OPTIONS

let cartOptionsButton = document.getElementById("co-button");
let menu = document.getElementById("responsive-menu");

cartOptionsButton.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

// ADD SLIP

const slipXample = `
<div class="grid grid-cols-12 gap-2 px-5 py-3">
<div
  class="lg:col-span-2 md:col-span-2 col-span-12 flex mb-3 justify-center"
>
  <label class="font-bold mr-3">Qty</label>
  <input
    type="text"
    class="border rounded w-full text-center md:max-w-[100%] max-w-[30%]"
    value="1"
  />
</div>

<select
  class="border border-[#212121]/[.38] text-[#212121]/[.60] rounded lg:col-span-2 md:col-span-2 col-span-12 text-sm h-[28px] mb-3"
>
  <option value="1">Category 1</option>
</select>
<select
  class="border border-[#212121]/[.38] text-[#212121]/[.60] rounded lg:col-span-2 md:col-span-2 col-span-12 text-sm h-[28px] mb-3"
>
  <option value="1">Category 2</option>
</select>
<select
  class="border border-[#212121]/[.38] text-[#212121]/[.60] rounded lg:col-span-2 md:col-span-2 col-span-12 text-sm h-[28px] mb-3"
>
  <option value="1">Category 3</option>
</select>
<select
  class="border border-[#212121]/[.38] text-[#212121]/[.60] rounded lg:col-span-2 md:col-span-2 col-span-12 text-sm h-[28px] mb-3"
>
  <option value="1">Category 4</option>
</select>
<select
  class="border border-[#212121]/[.38] text-[#212121]/[.60] rounded lg:col-span-2 md:col-span-2 col-span-12 text-sm h-[28px] mb-3"
>
  <option value="1">Category 5</option>
</select>
</div>
`;
toggleIRemoveSlip = (soh) => {
  if (soh != "show") {
    document.getElementById("removeSlipBtn").classList.add("hidden");
  } else {
    document.getElementById("removeSlipBtn").classList.remove("hidden");
  }
};

let count = 0; // Variable para llevar la cuenta

addSlip = () => {
  if (count < 4) {
    // Solo permite la inserción si count es menor a 5
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = slipXample.trim();
    let newNode = tempDiv.firstChild;
    document.getElementById("itemLevelAllocation").appendChild(newNode);
    count++; // Incrementa la cuenta
  } else {
    console.log("Se ha alcanzado el límite de inserciones.");
  }

  toggleIRemoveSlip("show");
};

removeSlip = () => {
  // Obtén el elemento padre
  let parentElement = document.getElementById("itemLevelAllocation");

  // Verifica si el elemento padre tiene hijos
  if (parentElement.childNodes.length > 2) {
    // Si tiene hijos, remueve el último hijo
    parentElement.removeChild(parentElement.lastChild);
    // Decrementa la cuenta
    count--;
  } else {
    toggleIRemoveSlip("hide");
    console.log("No hay más elementos para remover.");
  }
};
