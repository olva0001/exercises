

let timesclicked = 0;

document.querySelector("img").addEventListener("click", cookieClicked);

function cookieClicked() {
    timesclicked++;
    document.querySelector("h1").innerHTML = "You have clicked the cookie " + timesclicked + " times!";
}