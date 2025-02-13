

// Kør load animation på knappen
window.onload = function() {
    document.getElementById("button").classList.add('loaded');
}

// Gør skærmen sort ved klik på knappen, og tilføj classen noDisplay til knappen
document.querySelector("button").addEventListener("click", turnScreenBlack);

function turnScreenBlack() {
    document.querySelector("body").classList.add('blackScreen');
    document.querySelector("button").classList.add('noDisplay');
    // Lock mouse movements once screen turns black
    isBlackScreen = true;
}

// Gør skærmen sort hvis knappen loades færdig
document.getElementById("button").addEventListener("transitionend", function() {
    if (!mouseMoved && !isBlackScreen) {
        // If the mouse hasn't moved and screen hasn't turned black, turn the screen black
        document.querySelector("body").classList.add('blackScreen');
        document.querySelector("button").classList.add('noDisplay');
        // Lock mouse movements once screen turns black
        isBlackScreen = true;
    }
});

// Variable to track mouse activity
let mouseMoved = false;

// Variable to track if the screen has turned black
let isBlackScreen = false;

// When the mouse moves, mark mouseMoved as true and reset everything, unless the screen is already black
document.addEventListener("mousemove", function() {
    if (!isBlackScreen) {
        mouseMoved = true;
        // Remove blackScreen and noDisplay if mouse moves before transition is finished
        document.querySelector("body").classList.remove('blackScreen');
        document.querySelector("button").classList.remove('noDisplay');
    }
});

// If the mouse doesn't move for 5 seconds, call turnScreenBlack
let inactivityTimeout;
function startInactivityTimeout() {
    inactivityTimeout = setTimeout(function() {
        if (!mouseMoved && !isBlackScreen) {
            // Only turn screen black if it hasn't already been turned black
            turnScreenBlack();
        }
    }, 8000);
}

// Call the function startInactivityTimeout on initial load
startInactivityTimeout();
