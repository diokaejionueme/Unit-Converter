/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let metertoFeet = 3.281;
let feetToMeter = 0.3048;
let literToGallons = 0.264;
let gallonsToLiters = 3.785;
let kiloToPounds = 2.204;
let poundsToKilos = 0.45359237;

let elText = document.getElementById("input");
let elClicked = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length-meter");
let volumnEl = document.getElementById("volumn-meter");
let massEl = document.getElementById("mass-meter");
let value = 0;

volumnEl.textContent  = "";
massEl.textContent = "";
lengthEl.textContent = "";
function convertLength(value)
{
    lengthEl.innerHTML = `${value} meters = ${(value * metertoFeet).toFixed(3)} feet || ${value} feet = ${(value * feetToMeter).toFixed(3)} meters`;
}

function convertVolumn(value){
    volumnEl.innerHTML = `${value} liters = ${(value * literToGallons).toFixed(3)} gallons || ${value} gallons = ${(value * gallonsToLiters).toFixed(3)} liters `;
}

function convertMass(value){
    massEl.textContent = `${value} kilos = ${(value * kiloToPounds).toFixed(3)} pounds || ${value} pounds = ${(value * poundsToKilos).toFixed(3)} kilos`;
}

elClicked.addEventListener("click", () => {
    let value = elText.value;
    
    if(!(isNaN(value))){
        convertLength(value);
        convertVolumn(value);
        convertMass(value);
    }else {
        alert("Please enter a valid Number ");
        return -1;
    }
})


