// add money to the account 

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // prevent page reload after form submit
    event.preventDefault();

    const addMoneyInput = getInputFieldValueById('input-add-money');

    const pinNumberInput = getInputFieldValueById('input-pin-number');


    // temporary check
    if (pinNumberInput === 1234) {
        const balance = getTextFieldById('account-balance');

        const newBalance = balance + addMoneyInput;

        document.getElementById('account-balance').innerText = newBalance;
    } else {
        alert('Failed to add money! Please try again');
    }
});