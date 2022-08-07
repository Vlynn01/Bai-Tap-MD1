function ChangeMoney() {
    var SoTien = document.getElementById("ST").value;
    var ChuyenTu = document.getElementById("FR").value;
    var Sang = document.getElementById("TO").value;
    var KetQua;


    if (ChuyenTu == "USD" && Sang == "VND") {
        KetQua = "KQ: " + (SoTien * 23000) + " vnđ";
    }
    else if (ChuyenTu == "VND"&& Sang =="USD"){
        KetQua = "KQ: "+ (SoTien / 23000) + " $";
    }
    else if (ChuyenTu == "VND") {
        KetQua = "KQ: " + SoTien + " Đ"
    } else {
        KetQua = "KQ: " + SoTien + " $"
    }

    document.getElementById("KQ").innerHTML = KetQua;
}

