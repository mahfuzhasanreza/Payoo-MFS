
// search: form submit reloading the page

document.getElementById('btn-login').addEventListener('click', function(event){
    // prevent reloading browser (for form)
    event.preventDefault();
    console.log('login button click');

    const phoneNumber=document.getElementById('phone-number').value;
    console.log(phoneNumber);
})