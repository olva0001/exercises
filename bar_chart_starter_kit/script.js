const list = document.querySelector("ul");

const li = document.createElement("li");
li.style.setProperty("--height", "30");
list.appendChild(li);

setInterval(generateBars, 300);

function generateBars() {
    const li = document.createElement("li");
    li.style.setProperty("--height", Math.floor(Math.random() * 100));
    list.appendChild(li);
    if (list.children.length > 43) {
        list.removeChild(list.children[0]);
    }
    
}

