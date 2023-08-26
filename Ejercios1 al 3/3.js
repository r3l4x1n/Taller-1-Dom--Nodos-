let newH1 = document.createElement("h1");
newH1.textContent = "My Presentation";

let container = document.getElementById("container");
container.insertAdjacentElement("beforebegin", newH1);

let newP = document.createElement("p");
newP.textContent = "my best friend is Mickey";

let existingP = document.querySelector("#container p");
existingP.insertAdjacentElement("afterend", newP);

let title = document.querySelector("h1");
title.style.color = "purple";

let lastP = document.querySelector("div p:last-of-type");
lastP.style.fontWeight = "bold";
lastP.style.backgroundColor = "gold";

