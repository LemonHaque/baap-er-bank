// step-1: add event handler/ event listener
document.getElementById('btn-deposit').addEventListener('click', function () {
    //   step-2: get the deposit amount from the input field
    // For input field use .value to the inside the input field
    const depositField = document.getElementById('deposite-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    console.log(typeof newDepositAmount)

    // step-3:get the current deposite total
    // for non input(element other than input,textarea) use .innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-4:add numbers to set the total deposit
    const currentDepositeTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositeTotal;

    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalString);

    // step-6:calculate current total balace
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //  set the balance total
    balanceTotalElement.innerText = currentBalanceTotal


    // step-7: clear the default value
    depositField.value = '';
})