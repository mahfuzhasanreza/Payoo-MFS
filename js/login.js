
document.getElementById('btn-login').addEventListener('click', function (event) {
    // prevent reloading browser (for form: form submit reloading the page)
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // temporary check
    if (phoneNumber === '1' && pinNumber === '1234') {
        window.location.href = '/home.html';
    } else {
        alert('Wrong phone number or pin');
    }
})