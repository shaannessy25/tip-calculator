const inputBill = document.getElementById('input-bill');
console.log(inputBill.value) //shows the value of input
inputBill.addEventListener('change', function(e) {
    console.log(inputBill.value) 
})
const inputTip = document.getElementById('input-tip');
inputTip.addEventListener('change', function(e) {
    console.log(inputTip.value)
})
const inputPeople = document.getElementById('input-people');
inputPeople.addEventListener('change', function(e){
    console.log(inputPeople.value)
})