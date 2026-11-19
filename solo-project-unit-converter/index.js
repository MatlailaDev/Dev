const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


function calculateLength() {
    // 1m = 3.28084 Foot
    // 1 Foot = 0.3048m
    const inputValue = inputEl.value

    let metersToFeet = Number(inputValue) * 3.28084

    let feetToMeters = Number(inputValue) / 3.28084

    lengthEl.textContent = `${inputValue} meters = ${metersToFeet.toFixed(2)} feet | ${inputValue} feet = ${feetToMeters.toFixed(2)} meters`
}

function calculateVolume() {
    // 1 liter = 0.264172 Gallons
    // 1 Gallon = 3.78541 liters
    const inputValue = inputEl.value

    let gallonsToLiters = Number(inputValue) * 3.78541

    let litersToGallons = Number(inputValue) / 3.78541

    volumeEl.textContent = `${inputValue} liters = ${litersToGallons.toFixed(2)} gallons | ${inputValue} gallons = ${gallonsToLiters.toFixed(2)} liters`
}

function calculateMass() {
    // 1kg = 2.20462 pounds
    // 1 pound = 0.453592kg
    const inputValue = inputEl.value

    let kiloToPounds = Number(inputValue) * 2.20462

    let poundsToKilos = Number(inputValue) / 2.20462

    massEl.textContent = `${inputValue} kg = ${kiloToPounds.toFixed(2)} pounds | ${inputValue} pounds = ${poundsToKilos.toFixed(2)} kg`
}

convertBtn.addEventListener("click", function() {
    calculateLength()
    calculateVolume()
    calculateMass()
})

