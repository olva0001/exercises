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
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td> 
  <td>${each.isTandem}</td>
</tr>`;
  });
  document.querySelectorAll("td").forEach((cell) => {
    if (cell.innerHTML === "undefined") {
      cell.innerHTML = "";
    }
  });
}
