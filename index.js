function selectUnit() {
    let outputTemp;
    let isChecked = document.getElementById('tempF').checked;
    let tempInput = document.getElementById("tempInput").nodeValue;
    if (isChecked == true) {

        outputTemp = (5/9)*(tempInput-32);
    }
    else {

        outputTemp = (tempInput *(9/5)) + 32;
    }

    document.getElementById("tempOutput").value = outputTemp;
}