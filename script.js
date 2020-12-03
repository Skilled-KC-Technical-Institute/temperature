function selectUnit(){
    let unit1 = document.getElementById("unit1").value;
    let unit2 = document.getElementById("unit2").value;
    if(unit1==unit2){
       let valv = true; 
       return valv;
    }
    else{
        let valv = false; 
        return false
    }
}

function conversion(){
    let valv = selectUnit()
    if (valv == true){
        document.getElementById("input2").value = document.getElementById("input1").value;
        return;
    }
    else{
        if((document.getElementById("unit1").value == "fahrenheit") &&(document.getElementById("unit2").value == "celsius")){
            document.getElementById("input2").value = Math.round((document.getElementById("input1").value -32)/1.8 *100)/100
        }
        else if(((document.getElementById("unit1").value == "fahrenheit") &&(document.getElementById("unit2").value == "kelvin"))||((document.getElementById("unit1").value == "kelvin") &&(document.getElementById("unit2").value == "fahrenheit"))){
            document.getElementById("input2").value = Math.round(((document.getElementById("input1").value - 32)/1.8 + 273.15)*100)/100
        }
        else if((document.getElementById("unit1").value == "celsius") &&(document.getElementById("unit2").value == "kelvin")){
            document.getElementById("input2").value = document.getElementById("input1").value*1 + 273.15;
            return  document.getElementById("input1").value;
        }
    }
}

function conversion1(){
    let valv = selectUnit()
    if (valv == true){
        document.getElementById("input1").value = document.getElementById("input2").value;
        return;
    }
    else{
        if((document.getElementById("unit1").value == "fahrenheit") &&(document.getElementById("unit2").value == "celsius")){
            document.getElementById("input1").value = Math.round(((document.getElementById("input2").value)*1.8 + 32) *100)/100
        }
        else if((document.getElementById("unit1").value == "fahrenheit") &&(document.getElementById("unit2").value == "kelvin")){
            document.getElementById("input1").value = Math.round(((document.getElementById("input2").value - 273.15)*1.8 +32) *100)/100
        }
        else if((document.getElementById("unit2").value == "celsius") &&(document.getElementById("unit1").value == "kelvin")){
            document.getElementById("input1").value = document.getElementById("input2").value - 273.15;
            return  document.getElementById("input1").value;
        }
    }
}
