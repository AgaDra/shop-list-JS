const textInput = document.querySelector("#item");
const btnAdd = document.querySelector("#btn");
const shopList = document.querySelector("#list");

// dodanie zmiany koloru (nowa klassa- w .css) po kliknięciu:
btnAdd.addEventListener("click", () => {
  btnAdd.classList.add("btnYellow");
});

btnAdd.addEventListener("click", () => {
  let itemName = document.createElement("span");
  let checkbox = document.createElement("input");
  let btnDelete = document.createElement("button");
  checkbox.type = "checkbox";
  btnDelete.innerText = "Usuń";
  //   createElement jest w tej funkcji jest uchwytem do elementu, który się pojawi,
  //   więc nie musimu dodatkowo w liście powyżej, pisac do niego uchwytu,
  // i możemy go (itemName) zmieniać, dopóki nie podamy komendy appendChild
  itemName.id = "item";
  itemName.innerText = textInput.value;
  shopList.appendChild(itemName);
  itemName.appendChild(checkbox);
  itemName.appendChild(btnDelete);
  //   shopList.innerHTML = `<span id="item">${textInput.value}</span>`; - taki zapis powoduje, że
  // wpisany produkt zastępuje ten wcześniejszy, a nie tworzy się lista - to innerHTML tak działa
  textInput.value = "";
  //   dzięki powyższemu,po wpisaniu na listę znika produkt z okienka
  btnDelete.addEventListener("click", () => {
    shopList.removeChild(itemName);
  });
});
// wyjaśnienie 54min. webonaru DOMAPI
