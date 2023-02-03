const v1 = ["pizza", "pasta"];
const v2 = ["pizza", "calzones"];
const v3 = ["lobster"];
const v4 = ["calzones"];
const allMenus = [v1, v2, v3, v4];

const menuNode = document.getElementById("combined-menu");
function addToWeb(dish) {
  let foodNode = document.createElement("li");
  foodNode.innerText = dish;
  menuNode.appendChild(foodNode);
}

function foodTruckFest(menus) {
  let menuSet = new Set();
  let flatMenus = menus.flat();
  flatMenus.forEach((dish) => menuSet.add(dish));
  menuSet.forEach((item) => addToWeb(item));
}

foodTruckFest(allMenus);
