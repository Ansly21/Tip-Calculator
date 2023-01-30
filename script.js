const billInput = document.getElementById('bill-inp')
const peopleInput = document.getElementById('people-inp')
const tipAmt = document.getElementById('tip-amt')
const totalAmt = document.getElementById('total-amt')
const tipCustom = document.getElementById('tip-custom')

function calculate(tip) {
    const billPercent = parseFloat(((tip * billInput.value)/peopleInput.value).toFixed(2)) //TIP AMOUNT PER PERSON
    const total = parseFloat(((billInput.value/peopleInput.value) + billPercent).toFixed(2)) //TOTAL AMOUNT PER PERSON
    const custom = parseFloat((((tipCustom.value/100) * billInput.value)/peopleInput.value).toFixed(2))
    const custom2 = parseFloat(((billInput.value/peopleInput.value) + custom).toFixed(2))

    if (billInput.value && peopleInput.value && tipCustom.value=="") {
 
        tipAmt.innerText = "$" + billPercent;  //TIP AMOUNT
        totalAmt.innerText = "$" + total; //TOTAL AMOUNT
        
    } else if (tipCustom.value && peopleInput.value=="") {
        console.log("have custom, no people")
        const hcnp = (tipCustom.value/100) * billInput.value
        tipAmt.innerText = "$" + hcnp;
        totalAmt.innerText = "$0.00"; 

    }else if (tipCustom.value && peopleInput.value) {
        console.log("have custom, have people")
        tipAmt.innerText = "$" + custom;
        totalAmt.innerText = "$" + custom2; 

    }
    else if (billInput.value && tipCustom.value=="" && peopleInput.value==""){
        const billnoPeople = (tip * billInput.value)
        tipAmt.innerText = "$" + billnoPeople;
        totalAmt.innerText = "no people"
        console.log("no people")    
    } else {

        tipAmt.innerText = "none";
        totalAmt.innerText = "none"
        console.log("none")
    }
   
console.log(tipCustom.value)

}

function reset() {
    billInput.value = "";
    peopleInput.value = "";
    tipAmt.innerText = "$0.00";
    totalAmt.innerText = "$0.00";
    console.log("reset complete")
}