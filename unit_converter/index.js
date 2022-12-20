/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const conversions = [{
        type: "Length (Meter/Feet)",
        mult: 3.281,
        sentence: [" meters = ", " feet | ", " feet = ", " meters"]
    }, {
        type: "Volume (Litres/Gallons)",
        mult: 0.264,
        sentence: [" litres = ", " gallons | ", " gallons = ", " litres"]
    }, {
        type: "Mass (Kilograms/Pounds)",
        mult: 2.204,
        sentence: [" kilos = ", " pounds | ", " pounds = ", " kilos"]
    }
]
const info = document.getElementById("info")
const convert = document.getElementById("convert-btn")
const metric = document.getElementById("number")

let converted = convert.addEventListener("click", function() {
    for (let i=0; i < conversions.length; i++) {
        let type = conversions[i].type
        let mult = conversions[i].mult
        let calc = metric.value * mult
        let imperial = metric.value / mult
        info.innerHTML += `
        <div class="info">
            <h5>
                ${type}
            </h5>
            <p>
                ${metric.value}${conversions[i].sentence[0]}${calc.toFixed(3)}${conversions[i].sentence[1]}${metric.value}${conversions[i].sentence[2]}${imperial.toFixed(3)}${conversions[i].sentence[3]}
            </p>
        </div>
        `
    }
})
