// Variabler
let attempts = 0;
let randomNum = Math.floor(Math.random() * 100 + 1);

const guess = document.getElementById("guess");

const submit = document.getElementById("submit");

const hint = document.getElementById("hint");

const attemptsText = document.getElementById("attempts");


// Event listeners
submit.addEventListener("click", checkGuess);
restart.addEventListener("click", restartGame);

function checkGuess() {
    const userValue = Number(guess.value);
    attempts++;

    // Conditions
    if (userValue === randomNum) {
        hint.textContent = "Tillykke, du gættede det!";

                // Add confetti effect
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                });
    } else if (userValue < randomNum) {
        hint.textContent = "Desværre, dit gæt er for lavt - prøv igen!";
    } else {
        hint.textContent = "For højt, gæt noget lavere!";
    }

    attemptsText.textContent = "Attempts: " + attempts;
}

function restartGame() {
    guess.value = "";
    location.reload();
}