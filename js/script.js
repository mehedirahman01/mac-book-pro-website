//modify cost
function modifyCost(costId, costRate) {
    const cost = document.getElementById(costId, costRate);
    cost.innerText = costRate;

    //Call function to modify total price
    modifyTotalPrice();

    //enable apply coupon button
    document.getElementById('apply-promo').disabled = false;
}


//get cost
function getCost(costId) {
    const costText = document.getElementById(costId).innerText;
    const cost = parseInt(costText);
    return cost;
}


//set total and bottom total price
function setTotal(newTotal) {
    const totalPrice = document.getElementById('total-cost');
    totalPrice.innerText = newTotal;

    //set bottom total price
    const bottomTotalPrice = document.getElementById('bottom-total');
    bottomTotalPrice.innerText = newTotal;
}


//modify total price
function modifyTotalPrice() {
    //get each cost
    const bestPrice = getCost('best-price');
    const memoryCost = getCost('memory-cost');
    const storageCost = getCost('storage-cost');
    const deliveryCost = getCost('delivery-cost');

    //add all the costs
    const newTotal = bestPrice + memoryCost + storageCost + deliveryCost;

    //call function to set new total price
    setTotal(newTotal);
}


// for 8gb memory
document.getElementById('8gb-memory').addEventListener('click', function () {
    modifyCost('memory-cost', '0')
})

// for 16 gb memory
document.getElementById('16gb-memory').addEventListener('click', function () {
    modifyCost('memory-cost', '180')
})

// for 256 gb ssd
document.getElementById('256gb-ssd').addEventListener('click', function () {
    modifyCost('storage-cost', '0')
})

// for 512 gb ssd
document.getElementById('512gb-ssd').addEventListener('click', function () {
    modifyCost('storage-cost', '100')
})

// for 1 tb ssd
document.getElementById('1tb-ssd').addEventListener('click', function () {
    modifyCost('storage-cost', '180')
})

// for normal delivery
document.getElementById('normal-delivery').addEventListener('click', function () {
    modifyCost('delivery-cost', '0')
})

//for late delivery
document.getElementById('fast-delivery').addEventListener('click', function () {
    modifyCost('delivery-cost', '20')
})

//for promo code
document.getElementById('apply-promo').addEventListener('click', function () {
    const promo = document.getElementById('promo')
    const promoValue = promo.value
    if (promoValue == "stevekaku") {
        //get current total price
        const currentTotal = getCost('total-cost')

        //reduce total price by 20%
        let newTotal = currentTotal - (currentTotal * 20 / 100)

        //set new total price upto 2 decimal places
        newTotal = newTotal.toFixed(2)

        //call function to set new total price
        setTotal(newTotal);

        //remove coupon
        promo.value = ""

        //disable apply coupon button
        document.getElementById('apply-promo').disabled = true
    }
})