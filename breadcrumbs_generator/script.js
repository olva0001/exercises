// console.log('Hello, world!');



// document.querySelector("ul").innerHTML = `<li><a href="">Detter er et link</a></li>`;

// document.querySelector("ul").innerHTML += `<li><a href="">Detter er endnu et link</a></li>`;

const bc = [{ name: "Hvidevarer", link: "/hvidevarer" },{ name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },{ name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },];


// document.querySelector("ul").innerHTML = bc.map((item) => `<li><a href="${item.link}">${item.name}</a></li>`).join("/");

document.querySelector("button").addEventListener("click", createBreadcrumbs);


function createBreadcrumbs() {

    document.querySelector("ul").innerHTML = bc
      .map((item, index) => 
        `<li>${index === bc.length - 1 ? item.name : `<a href="${item.link}">${item.name}</a>`}</li>`
      )
      .join("/");
}

document.querySelector("button").addEventListener("dblclick", removeBreacrumbs);

function removeBreacrumbs() {
    document.querySelector("ul").innerHTML = "";
}


