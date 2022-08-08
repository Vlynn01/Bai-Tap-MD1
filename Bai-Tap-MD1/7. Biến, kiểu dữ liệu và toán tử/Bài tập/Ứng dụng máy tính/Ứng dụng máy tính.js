function Cong() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var Ketqua = Number(number1) + Number(number2);
    document.getElementById("KQ").innerHTML = Ketqua;
}

function Tru() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var Ketqua = Number(number1) - Number(number2);
    document.getElementById("KQ").innerHTML = Ketqua;
}
function Nhan() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var Ketqua = Number(number1) * Number(number2);
    document.getElementById("KQ").innerHTML = Ketqua;
}
function Chia() {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var Ketqua = Number(number1) / Number(number2);
    document.getElementById("KQ").innerHTML = Ketqua;
}