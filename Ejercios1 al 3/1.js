let newH1 = document.createElement("h1");
newH1.textContent = "My Presentation";

let container = document.getElementById("container");
container.insertAdjacentElement("beforebegin", newH1);