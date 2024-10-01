
document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    // prevent page reload after form submit
    event.preventDefault();

    const CashOutMoney = document.getElementById('input-cash-out').value;

    const pinNumber = document.getElementById('input-cash-out-pin').value;

    // temporary check
    if (pinNumber === '1234') {
        const balance = document.getElementById('account-balance').innerText;

        if (parseFloat(balance) >= parseFloat(CashOutMoney)) {
            const newBalance = parseFloat(balance) - parseFloat(CashOutMoney);

            document.getElementById('account-balance').innerText = newBalance;
        } else {
            alert('Your account have not enough money! Please try again');
        }

    } else {
        alert('Failed to cash out! Please try again');
    }
});