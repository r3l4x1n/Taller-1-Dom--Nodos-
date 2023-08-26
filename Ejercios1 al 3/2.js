let newP = document.createElement("p");
newP.textContent = "my best friend is Mickey";


let existingP = document.querySelector("#container p");
existingP.insertAdjacentElement("afterend", newP);
