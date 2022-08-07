function BM() {
    alert("18.5 ≤ BMI <25: Cân đối");
    alert("BMI <18.5: Thiếu cân");
    alert("BMI >25: Thừa cân");

}

var icannang;
var ichieucao;

icannang = prompt("Vui lòng nhập cân nặng");
ichieucao = prompt("Vui lòng nhập chiều cao");

var cannang = parseInt(icannang);
var chieucao = parseInt(ichieucao);


var chisoBMI = (cannang / (chieucao * chieucao)) * 10000;

document.write("Chỉ số BMI cơ thể của bạn là:" + chisoBMI);