const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("form button");
const ulElement = document.querySelector("ol");


buttonElement.onclick = ev => {
    ev.preventDefault();

    /* if(inputElement.value) {
        const liElement = document.createElement("li");
        liElement.innerHTML = `<span>${inputElement.value}</span>`;
        ulElement.appendChild(liElement);
        inputElement.value = "";
    } */

    if(inputElement.value) {
        const textElement = document.createElement("span");
        textElement.innerHTML = inputElement.value;
        
        const btnElement = document.createElement("button");
        btnElement.innerHTML = "Remover";

        const liElement = document.createElement("li");
        liElement.appendChild(textElement);
        liElement.appendChild(btnElement);

        btnElement.onclick = () => {
            ulElement.removeChild(liElement);
        }

        ulElement.appendChild(liElement);
        inputElement.value = "";
    }
    
};