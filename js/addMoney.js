// add money to the account 

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // prevent page reload after form submit
    event.preventDefault();

    const addMoneyInput = getInputFieldValueById('input-add-money');

    const pinNumberInput = getInputFieldValueById('input-pin-number');

    if (isNaN(addMoneyInput)) {
        alert('Failed to add money');
        return;
    }

    // temporary check
    if (pinNumberInput === 1234) {
        const balance = getTextFieldById('account-balance');

        const newBalance = balance + addMoneyInput;

        document.getElementById('account-balance').innerText = newBalance;

        // transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoneyInput} Tk. New Balance: ${newBalance}`;

        document.getElementById('transaction-container').appendChild(p);
    } else {
        alert('Failed to add money! Please try again');
    }
});