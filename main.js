function fromFahrenheit() {
    document.getElementById("celValue").value = Math.round((document.getElementById("farValue").value - 32) / 1.8 * 100) / 100;
    document.getElementById("kelValue").value = Math.round(((document.getElementById("farValue").value - 32) / 1.8 + 273.15) * 100) / 100;
}
function fromCelsius() {
    document.getElementById("farValue").value = Math.round((document.getElementById("celValue").value * 1.8 + 32) * 100) / 100;
    document.getElementById("kelValue").value = Math.round(((document.getElementById("celValue").value * 1) + 273.15) * 100) / 100;
}
function fromKelvin() {
    document.getElementById("farValue").value = Math.round(((document.getElementById("kelValue").value - 273.15) * 1.8 + 32) * 100) / 100;
    document.getElementById("celValue").value = Math.round(document.getElementById("kelValue").value - 273.15 * 100) / 100;
}