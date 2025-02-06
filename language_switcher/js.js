"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const Dansk = "da";
const Tysk = "de";


document.addEventListener("DOMContentLoaded", visDansk);


function switchLanguage(lang) {
  let text = texts[lang];
  switch (lang) {
    case "de":
      text.texts.forEach((element) => {
        document.querySelector(element.location).textContent = element.text;
      });
      break;
    case "da":
      text.texts.forEach((element) => {
        document.querySelector(element.location).textContent = element.text;
      });
      break;
  }
}

document.querySelector(".dansk").addEventListener("click", visDansk);
document.querySelector(".tysk").addEventListener("click", visTysk);

function visDansk() {
  switchLanguage(Dansk);
}

function visTysk() {  
  switchLanguage(Tysk);
}