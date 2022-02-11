document.getElementById('submit-btn').addEventListener('click', function () {
    const email = document.getElementById('email');

    const password = document.getElementById('password');
    // email.value = '';
    // password.value='';

    if (email.value == 'asfe@gmail.com' && password.value == '1234') {
        //window.location.href = 'banking.html';
        console.log(email.innerText);
    }
    else {
        alert("wrong password or email");
    }

})

