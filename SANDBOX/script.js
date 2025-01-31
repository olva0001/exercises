// console.log("hej fra script")

import { sayHi } from "./utils.js";

sayHi("John");


import { getRandomNumber } from "./utils.js";

console.log(getRandomNumber(3));

import { $ } from "./utils.js";

$("h1").textContent = "Dette er en H1!";

import { $$ } from "./utils.js";

$$("p").textContent = "Dette er en P!";