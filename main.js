function selectUnit() {
    let isChecked = document.getElementById('celcius').checked;
    let tempInput = document.getElementById("tempInput").value;
    if (isChecked == true) {
        // F = (C*9) / (5 + 32)
        tempOutput = (tempInput * 9) / (5 + 32);
    }
    else {
        // C = (5/9) * (F-32)
        tempOutput = ((5/9) * (tempInput - 32));
    }
    document.getElementById("tempOutput").value = tempOutput
}
