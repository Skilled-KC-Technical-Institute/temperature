// Mathmatical formulas for conversion
function fromFahrenheit() {
    // If statement for clearing input bubbles after deleting input.
    if (document.getElementById("farValue").value.length == 0) {
        document.getElementById("celValue").value = ""
        document.getElementById("kelValue").value = ""
    }
    else {
        // Else statement for math equations
        document.getElementById("celValue").value = Math.round((document.getElementById("farValue").value - 32) / 1.8 * 100) / 100;
        document.getElementById("kelValue").value = Math.round(((document.getElementById("farValue").value - 32) / 1.8 + 273.15) * 100) / 100;    
    }
}
function fromCelsius() {
    if (document.getElementById("celValue").value.length == 0) {
        document.getElementById("farValue").value = ""
        document.getElementById("kelValue").value = ""
    }
    else {
        document.getElementById("farValue").value = Math.round((document.getElementById("celValue").value * 1.8 + 32) * 100) / 100;
        document.getElementById("kelValue").value = Math.round(((document.getElementById("celValue").value * 1) + 273.15) * 100) / 100;
    }
}
function fromKelvin() {
    if (document.getElementById("kelValue").value.length == 0) {
        document.getElementById("farValue").value = ""
        document.getElementById("celValue").value = ""
    }
    else {
        document.getElementById("farValue").value = Math.round(((document.getElementById("kelValue").value - 273.15) * 1.8 + 32) * 100) / 100;
        document.getElementById("celValue").value = Math.round((document.getElementById("kelValue").value - 273.15) * 100) / 100;    
    }
}