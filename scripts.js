const display = document.querySelector('#display')
const billInput = document.querySelector('#bill')
const tipInput = document.querySelector('#tip')
const pplInput = document.querySelector('#ppl')

function calculateTip() {
    const billValue = parseFloat(billInput.value)
    const tipValue = parseInt(tipInput.value)
    const num = (billValue * tipValue / 100)
    //round((num+epsilon)*100)/100 accurately rounds to two decimal places through scaling, you cannot have $.001
    const tipAmount = Math.round((num + Number.EPSILON)*100) /100
    const total = billValue + tipAmount
    if(parseInt(pplInput.value) > 1){
        split(tipAmount)
    }
    else{
        display.innerHTML = (`Total: ${parseFloat(billInput.value)}, Tip: ${tipAmount}`)
    }
}
function split(tipAmount){
    const pplValue = parseInt(pplInput.value)
    const num = (tipAmount / pplValue)
    const perPerson = Math.round((num + Number.EPSILON)*100)/100
    const totalPP = (parseFloat(billInput.value) / pplValue) + perPerson
    display.innerHTML = (`Total: ${parseFloat(billInput.value)}, Tip: ${tipAmount}, Tip per person: ${perPerson}, Total per person: ${totalPP}`)
}

billInput.addEventListener('input', calculateTip)
tipInput.addEventListener('input', calculateTip)
pplInput.addEventListener('input', calculateTip)