/*
1. add event handler with the withdraw
2. get the withdrow amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat
3. Get previous withdraw total
4. calculate total withdraw amount
4-5. set total withdraw amount 
5. get the previous balance total
6. calculate new balance total
6-5. set the new balance total
7. clear the input field
*/ 

// step-1
document.getElementById('btn-withdrow').addEventListener('click', function(){

    // step-2
    const withdrawFilde = document.getElementById('withdraw-filde');
    const newWithdrawAmountString = withdrawFilde.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const pheviousWithdrawTotalString = withdrawTotalElement.innerText;
    const pheviousWithdrawTotal = parseFloat(pheviousWithdrawTotalString);

    // step-4
    const currentWithdrawTotal = pheviousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    
    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const pheviousBalanceTotalString = balanceTotalElement.innerText;
    const pheviousBalanceTotal = parseFloat(pheviousBalanceTotalString);

    // step-6
    const currentBalanceTotal = pheviousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7
    withdrawFilde.value = '';
});
