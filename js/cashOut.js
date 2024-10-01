
document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    // prevent page reload after form submit
    event.preventDefault();

    const CashOutMoney = getInputFieldValueById('input-cash-out');

    const pinNumber = getInputFieldValueById('input-cash-out-pin');

    // temporary check
    if (pinNumber === 1234) {
        const balance = getTextFieldById('account-balance');

        if (balance >= CashOutMoney) {
            const newBalance = balance - CashOutMoney;

            document.getElementById('account-balance').innerText = newBalance;
        } else {
            alert('Your account have not enough money! Please try again');
        }
    } else {
        alert('Failed to cash out! Please try again');
    }

});