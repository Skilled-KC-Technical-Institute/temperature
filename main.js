function selectUnit() {
    let userOutput;
    let isChecked = document.getElementById("farenheitTemp").checked
    let tempInput = document.getElementById("userInput").value 
    if (isChecked == true) {

        userOutput = (5/9) * (tempInput - 32);

    }

    else {
        userOutput = (tempInput * (9/5) + 32);
    }
    document.getElementById("userOutput").value = userOutput;
}




