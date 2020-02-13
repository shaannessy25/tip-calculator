const inputBill = document.getElementById('input-bill')
const inputTip = document.getElementById('input-tip')
const inputPeople = document.getElementById('input-people')

const displayTip = document.getElementById('display-tip')
const displayTotal = document.getElementById('display-total')
const displayPeople = document.getElementById('display-people')

inputBill.addEventListener('change', handleBill)
inputTip.addEventListener('change', handleBill)
inputPeople.addEventListener('change', handleBill)


function handleBill() {
    const bill = parseInt(inputBill.value)
    const percent = parseInt(inputTip.value)
    const people = parseInt(inputPeople.value)

    const tip = bill * percent / 100
    const total = bill + tip
    const per_person = total / people 

    displayTip.innerHTML = '$' + tip.toFixed(2)
    displayTotal.innerHTML = '$' + total.toFixed(2)
    displayPeople.innerHTML= '$' + per_person.toFixed(2)
}