const body = document.querySelector("body")
const container = document.querySelector(".container");
const buttonContainer = document.createElement("div");
const button = document.createElement("button");
const resetButton = document.createElement("button");

buttonContainer.classList.add("buttonContainer")
resetButton.textContent = "Reset";
button.textContent = "Number of Grids";


button.addEventListener('click', () => {
   let num = prompt("Number of Grids");
    if (num > 100) {
        alert("ERROR NUMBER SHOULD BE LOWER THAN 100");
    } else {
    container.replaceChildren();
    createDiv(num);
    }
});

resetButton.addEventListener('click', () => {
    const rows = document.querySelectorAll(".row");
    rows.forEach( row  => {
        row.style.backgroundColor = "";
    });
});


function createDiv(gridNum) {
        for (let i = 0; i < gridNum; i++){
        const column = document.createElement("div");
        column.classList.add('column');
        
            for (let j = 0; j < gridNum; j++){
                const row = document.createElement("div");
                row.classList.add('row');
                column.appendChild(row);

                row.addEventListener('mouseover', () => {
                const newColor = generateRandomColor();
                row.style.backgroundColor = newColor;
                });
            }
            container.appendChild(column);
    }
}

function generateRandomColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    randomColor = randomColor.padStart(6, '0');
    return `#${randomColor.toUpperCase()}`;
}

createDiv(16);
body.appendChild(buttonContainer);
body.appendChild(container);
buttonContainer.appendChild(button);
buttonContainer.appendChild(resetButton);





