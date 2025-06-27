let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let currentInput = "";

buttons.forEach(button => {
    const value = button.getAttribute("data-value");

    if (value) {
        button.addEventListener("click", () => {
            currentInput += value;
            display.value = currentInput;
        });
    }
});

document.getElementById("equals").addEventListener("click", () => {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch {
        display.value = "Error";
        currentInput = "";
    }
});

document.getElementById("clear").addEventListener("click", () => {
    currentInput = "";
    display.value = "";
});

document.getElementById("delete").addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
});
