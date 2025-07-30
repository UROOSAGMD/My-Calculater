var screen = document.getElementById("screen")
 var currentInput = " ";
 


 function press(value) {
    if (value === "AC") {
        currentInput = "";
        screen.value = "";
    } else {
        currentInput += value;
        screen.value = currentInput;
    }
}

function clearScreen() {
     
    currentInput = currentInput.slice(0, -1);
    screen.value = currentInput;
}

function submit() {
    try {
        let result = eval(currentInput);
        screen.value = result;
        currentInput = result.toString();  
    } catch (error) {
        screen.value = "";
    }
}