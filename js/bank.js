var total = 0, withdrawtotal = 0;
var subtotal;
document.getElementById('Deposite-btn').addEventListener('click', function () {

    const depositValue = document.getElementById('Deposite-ammount');
    //console.log(depositValue.value);
    total = total + parseFloat(depositValue.value);
    document.getElementById('dipositTotal').innerText = total;

    var currentBalance = document.getElementById('totalBalance');
    subtotal = parseFloat(currentBalance.innerText) + parseFloat(depositValue.value);
    document.getElementById('totalBalance').innerText = subtotal;
    //console.log(typeof (subtotal));
    depositValue.value = '';

})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdraw = document.getElementById('withdraw-ammount');

    var currentBalance = document.getElementById('totalBalance');
    subtotal = parseFloat(currentBalance.innerText) - parseFloat(withdraw.value);
    document.getElementById('totalBalance').innerText = subtotal;
    withdrawtotal = withdrawtotal + parseFloat(withdraw.value);
    document.getElementById('withdrawammount').innerText = withdrawtotal;
    withdraw.value = '';

})