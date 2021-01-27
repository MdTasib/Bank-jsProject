// login button event handler
let login = document.getElementById('btn').addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

// calculate current number
function calculateNumber(id, depositNumber) {
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totleBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totleBalance;
}
// input value
function getInputValue(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
// deposit button event handler
const depositBtn = document.getElementById('addDeposit').addEventListener('click', function () {
    // deposit input value
    const depositNumber = getInputValue('depositAmount');
    // current deposit number
    calculateNumber('currentDeposit', depositNumber)
    // current deposit balance number
    calculateNumber('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = '';
})

// withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw').addEventListener('click', function () {
    // withdraw input value
    const withdrawNumber = getInputValue('withdrawAmount');
    // current Withdraw number
    calculateNumber('currentWithdraw', withdrawNumber)
    // current withdraw balance number
    calculateNumber('currentBalance', - 1 * withdrawNumber);

    document.getElementById('withdrawAmount').value = '';
})