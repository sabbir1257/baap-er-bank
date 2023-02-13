// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    // For input field use. value to the value inside the input field
    const depositFild = document.getElementById('deposit-filde');
    const newDepositAmountString = depositFild.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-2: get the current deposit total 
    // for non-input (element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const pheviousDepositTotalString = depositTotalElement.innerText;
    const pheviousDepositTotal = parseFloat(pheviousDepositTotalString);

    // step-4: add numbers to set the total deposit
    const currentDepositTotal = pheviousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get ballance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const pheviousBalanceTotalString = balanceTotalElement.innerText;
    const pheviousBalanceTotal = parseFloat(pheviousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = pheviousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7: clear the deposit field
    depositFild.value = '';
});