/*These are functions to convert to and from three different tempreture unit. I have to main funstions that calls on the other functions*/ 


// converts from fahrenheit to celsius
function fahrenCels(userInput){
    let output = Math.round(((userInput - 32)/1.8)*100)/100;
    return output;
}
// converts from fahrenheit to kelvin
function fahrenKel(userInput){
    let output = Math.round((((userInput -32)/1.8 + 273.15)*100)/100);
    return output;
}
// converts from celsius to fahrenheit
function celsFahren(userInput){
    let output = Math.round(((userInput * 1.8) + 32)*100)/100;
    return output;
}
// converts from celsius to kelvin
function celsKel(userInput){
    let output = Math.round((userInput + 273.15)*100)/100;
    return output;
}
// converts from kelvin to Fahrenhiet
function kelFahren(userInput){
    let output = Math.round(((userInput -273.15) * 1.8 + 32)*100)/100;
    return output;
}
// converts from kelvin to celsius
function kelCels(userInput){
    let output = Math.round(((userInput -273.15)*100)/100)
    return output;
}

//This is the fuction that input one and unit one calls on. 
function conversion(){
    unit1 = document.getElementById("unit1").value; 
    unit2 = document.getElementById("unit2").value;
    userInput = document.getElementById("input1").value;
    // so that when the input is empty it doesn't think its 0. 
    if (userInput.length ==0){
        document.getElementById("input2").value = "";
    }
    else if(unit1 == unit2){
        document.getElementById("input2").value = userInput;
    }
    else{
        if((unit1 == "fahrenheit") && (unit2 == "celsius")){
            document.getElementById("input2").value = fahrenCels(userInput);
        }
        else if((unit1== "fahrenheit") && (unit2 == "kelvin")){
            document.getElementById("input2").value = fahrenKel(userInput);
        }
        else if((unit1== "celsius") &&(unit2 == "fahrenheit")){
            document.getElementById("input2").value = celsFahren(userInput);
        }
        else if((unit1== "celsius") &&(unit2 == "kelvin")){
            document.getElementById("input2").value = celsKel(userInput);
        }
        else if((unit1== "kelvin") &&(unit2 == "celsius")){
            document.getElementById("input2").value = kelCels(userInput);
        }
        else if((unit1== "kelvin") &&(unit2 == "fahrenheit")){
            document.getElementById("input2").value = kelFahren(userInput);
        }
    }
}
//This is the fuction that input 2 and unit 2 calls on. 
function conversion1(){
    unit1 = document.getElementById("unit1").value; 
    unit2 = document.getElementById("unit2").value;
    userInput = document.getElementById("input2").value;
    // so that when the input is empty it doesn't think its 0. 
    if (userInput.length ==0){
        document.getElementById("input1").value = "";
    }
    else if (unit1 == unit2){
        document.getElementById("input1").value = userInput;
    }
    else{
        if((unit2 == "fahrenheit") && (unit1 == "celsius")){
            document.getElementById("input1").value = fahrenCels(userInput);
        }
        else if((unit2== "fahrenheit") && (unit1 == "kelvin")){
            document.getElementById("input1").value = fahrenKel(userInput);
        }
        else if((unit2== "celsius") &&(unit1 == "fahrenheit")){
            document.getElementById("input1").value = celsFahren(userInput);
        }
        else if((unit2== "celsius") &&(unit2 == "kelvin")){
            document.getElementById("input1").value = celsKel(userInput);
        }
        else if((unit2== "kelvin") &&(unit1 == "celsius")){
            document.getElementById("input1").value = kelCels(userInput);
        }
        else if((unit2== "kelvin") &&(unit1 == "fahrenheit")){
            document.getElementById("input1").value = kelFahren(userInput);
        }
    }
}
