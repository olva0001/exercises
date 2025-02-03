let minNum = 1;
let maxNum = 100;
let answer = Math.floor((minNum + maxNum) / 2);
console.log("Det her er answer:", answer)
let guess = 0;

document.addEventListener("DOMContentLoaded", function () {
    beforeGame();
    document.querySelector("#text").textContent = "Du skal tænke på et tal mellem 1 og 100, og så vil jeg (computeren) gætte det!";
});

function beforeGame () {
document.querySelector("#startSpillet").addEventListener("click", startGame)
}

function startGame() {
    document.querySelector("#text").textContent = `Jeg gætter på ${answer}?`;
    document.querySelector("#forHoejt").addEventListener("click", forHoejt);
    document.querySelector("#forLavt").addEventListener("click", forLavt);
    document.querySelector("#perfekt").addEventListener("click", spilletSlutter);
}

function forHoejt() {
    guess++;
    maxNum = answer - 1;
    answer = Math.floor((minNum + maxNum) / 2);
    document.querySelector("#text").textContent = `Er det ${answer}?`;
}

function forLavt() {
    guess++;
    minNum = answer + 1;
    answer = Math.floor((minNum + maxNum) / 2);
    document.querySelector("#text").textContent = `Er det ${answer}?`;
}

function spilletSlutter() {
    document.querySelector("#text").textContent = `Sådan! Jeg gættede det på ${guess + 1} forsøg`;
}