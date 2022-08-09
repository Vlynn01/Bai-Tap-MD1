let nam = parseInt(prompt("Vui lòng nhập năm"));

let namNhuan = false;

let tinhNamNhuan = nam % 4 == 0;

if (tinhNamNhuan) {
    let tinhNamNhuan100 = nam % 100 == 0;
    if (tinhNamNhuan100) {
        let tinhNamNhuan400 = nam % 400 == 0;

        if (tinhNamNhuan400) {
            namNhuan = true;
        }
    } else {
        namNhuan = true;
    }
}
if (namNhuan) {
    alert(nam + "Đây là năm nhuận");
} else {
    alert(nam + "Đây không phải là năm nhuận");
}