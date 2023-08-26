let orderedList = document.querySelector("ol");

let unorderedList = document.createElement("ul");
unorderedList.classList.add("tareas-lista");

while (orderedList.firstChild) {
    let listItem = orderedList.firstChild;
    let clonedListItem = listItem.cloneNode(true);
    unorderedList.appendChild(clonedListItem);
    orderedList.removeChild(listItem);
}

orderedList.parentNode.replaceChild(unorderedList, orderedList);