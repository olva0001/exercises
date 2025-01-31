export function sayHi(user) {
    console.log(`Hello, ${user}!`);
}


export function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

export function $(sel) {
    return document.querySelector(sel);
}

export function $$(sel) {
    return document.querySelector(sel);
}