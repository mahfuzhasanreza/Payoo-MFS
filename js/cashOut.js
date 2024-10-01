
document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    // prevent page reload after form submit
    event.preventDefault();

    const CashOutMoney = getInputFieldValueById('input-cash-out');

    const pinNumber = getInputFieldValueById('input-cash-out-pin');

    if (isNaN(CashOutMoney)) {
        alert('Failed to add money');
        return;
    }

    // temporary check
    if (pinNumber === 1234) {
        const balance = getTextFieldById('account-balance');

        if (balance >= CashOutMoney) {
            const newBalance = balance - CashOutMoney;

            document.getElementById('account-balance').innerText = newBalance;

            // add to transaction history
            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
                <h4 class="text-2xl font-bold">Cash Out</h4>
                <p>${CashOutMoney} withdraw. New Balance ${newBalance}</p>
            `
            document.getElementById('transaction-container').appendChild(div);
        } else {
            alert('Your account have not enough money! Please try again');
        }
    } else {
        alert('Failed to cash out! Please try again');
    }

});