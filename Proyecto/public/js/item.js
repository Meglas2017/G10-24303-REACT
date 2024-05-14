const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const quantity = document.querySelector("#quantity");

add.addEventListener("click", () => {
    quantity.value = Number(quantity.value)+1
});

subtract.addEventListener("click", () => {
    if (quantity.value > 0) {
        quantity.value = Number(quantity.value)-1
    }
});

quantity.addEventListener("input", () => {
    const valor = quantity.value;
    let reconstruction = "";
    for (let i = 0; i < valor.length; i++) {
        const caracter = valor[i];
        const isNumber = !isNaN(caracter) && isFinite(caracter);
        if (isNumber){
            reconstruction = reconstruction + caracter;
            quantity.value = reconstruction.trim();
        } else {
            quantity.value = reconstruction.trim();
        }
    };
});