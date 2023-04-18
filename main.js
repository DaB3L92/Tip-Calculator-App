let bill = document.querySelector(".pay-input input");
let billNumber = parseInt(bill.value);


let alert = document.querySelector(".alert")

let peopleInput = document.querySelector(".people-input");
let people = document.querySelector(".people-input input");
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector(".amount");
let tipTotal = document.querySelector(".total");



let buttons = document.querySelectorAll(".btn");

let tipValue = 0;

buttons.forEach(element => {
    element.addEventListener("click", event => {
        tipValue = parseInt(event.target.innerText.slice(0, -1));

        calculateTip()

    });
});

// Actualizando Valor del input Bill
bill.addEventListener("input", () => {
    billNumber = parseFloat(bill.value);
    calculateTip()
});

// btn Reset
let btnReset = document.querySelector(".btn-reset");

btnReset.addEventListener("click", () => {
    bill.value = 0;
    billNumber = 0;
    people.value = 5;
    peopleNumber = 5;
    customInput.value = 'Custom';
    calculateTip()
});

function calculateTip() {
    //cálculo tip amount
    tipResult.innerText = ((billNumber * tipValue / 100) / peopleNumber).toFixed(2);

    //cálculo tip total
    tipTotal.innerText = (((billNumber * tipValue / 100) + billNumber) / peopleNumber).toFixed(2);
}

// Actualizando Valor del input people
people.addEventListener("input", () => {
    peopleNumber = parseFloat(people.value);

    if (peopleNumber == 0 || isNaN(peopleNumber)) {
        peopleInput.style.borderColor = 'Red';
        alert.classList.remove("hidden");
    } else {
        peopleInput.style.borderColor = 'rgb(38, 192, 171)';
        alert.classList.add("hidden");
        calculateTip()
    }

});

//Actualizando Custom
let customInput = document.querySelector(".custom");
customInput.addEventListener("input", () => {
    tipValue = parseInt(customInput.value);
    if (isNaN(tipValue)) {

    } else {
        calculateTip()
    }

});

