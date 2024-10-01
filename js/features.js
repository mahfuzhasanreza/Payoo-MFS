// show the cash out form
document.getElementById('btn-show-cash-out').addEventListener('click', function () {
    showSectionById('cash-out-form');
});

// show add money form and hide the cash out form
document.getElementById('btn-show-add-money').addEventListener('click', function () {
    showSectionById('add-money-form');
})

// show transaction
document.getElementById('btn-show-transaction').addEventListener('click', function () {
    showSectionById('transaction-section');
})