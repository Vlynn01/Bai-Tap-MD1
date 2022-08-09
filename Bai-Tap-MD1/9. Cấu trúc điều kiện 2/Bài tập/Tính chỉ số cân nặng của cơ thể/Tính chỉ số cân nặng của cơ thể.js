function kiemTra() {
    let canNang = document.getElementById("canNang").value
    let chieuCao = document.getElementById("chieuCao").value
    let bmi = canNang / (Math.pow(chieuCao, 2));
    let ketQua = "";

    if (bmi < 16)
        ketQua = "Gầy độ 3"
    else if (bmi < 17)
        ketQua = "Gầy độ 2"
    else if (bmi < 18.5)
        ketQua = "Gầy độ 1"
    else if (bmi < 25)
        ketQua = "Bình Thường"
    else if (bmi < 30)
        ketQua = "Thừa cân"
    else if (bmi < 35)
        ketQua = "Béo phì độ 1"
    else if (bmi < 40)
        ketQua = "Béo phì độ 2"
    else
        ketQua = "Beo phì độ 3"

    document.getElementById("ketQua").innerHTML = "Chỉ số BMI của bạn là:" + bmi + "Bạn" + ketQua;

}