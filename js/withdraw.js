// step-1:add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step-2:get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;

    // step 7:clear the input field
    withdrawField.value = '';
    
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number')
        return;
    }
    // also make sure to convert the inout into a number by using parseFloat
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3:get the withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-5:get the prevous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousDepositTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousDepositTotalString);



    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Gorib tor bank e eto taka nai')
        return;
    }
    // step-4:calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6:calculate and set the new balance

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})