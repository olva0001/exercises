const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];


document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
    
    btn.classList.add("active");

    filterhandler(btn.dataset.filter);
  });
});

  
function filterhandler(filter) {
    console.log("filterhandler", filter);
    let filteredArr;
    switch (filter) {
      case "alle":
        filteredArr = vehicles;
        break;
      case "AlleElBiler":
        filteredArr = alleElBiler;
        break;
      case "alleMedToSaeder":
        filteredArr = alleMedToSaeder;
        break;
      case "AlleElBilerEjetAfJonas":
        filteredArr = AlleElBilerEjetAfJonas;
        break;
      case "DrevetAfRugbroed":
        filteredArr = DrevetAfRugbroed;
        break;
    }
    showTheseVehicles(filteredArr);
}




const tbodyPointer = document.querySelector("tbody");

const alleElBiler = vehicles.filter((vehicles) => vehicles.isElectric);

const alleMedToSaeder = vehicles.filter((vehicles) => vehicles.passengers > 2);

const AlleElBilerEjetAfJonas = vehicles.filter((vehicles) => vehicles.ownedBy === "Jonas" && vehicles.isElectric);

const DrevetAfRugbroed = vehicles.filter((vehicles) => vehicles.fuel === "Rugbrød" && vehicles.passengers > 1);


showTheseVehicles(vehicles);
// showTheseVehicles(alleElBiler);
// showTheseVehicles(alleMedToSaeder);
// showTheseVehicles(AlleElBilerEjetAfJonas);
// showTheseVehicles(DrevetAfRugbroed);


function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
      <td>${beautifyStr(each.type)}</td>
      <td>${beautifyStr(each.fuel)}</td>
      <td>${beautifyStr(each.passengers)}</td> 
      <td>${beautifyStr(each.stops)}</td>
      <td>${beautifyStr(each.ownedBy)}</td>
      <td>${beautifyStr(each.isElectric)}</td> 
      <td>${beautifyStr(each.isTandem)}</td>
    </tr>`;
  });
}

function beautifyStr(str) {
  switch (str) {
    case undefined:
      str = "-";
      break;
    case true:
      str = "✓";
      break;
  }
  return str;
}
