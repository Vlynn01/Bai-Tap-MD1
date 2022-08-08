vatLy = prompt("Vui lòng nhập điểm Vật Lý");
hoaHoc = prompt("Vui lòng nhập điểm Hóa Học");
sinhHoc = prompt("Vui lòng nhập điểm Sinh Học");

let diemVatLy = parseInt(vatLy);
let diemHoaHoc = parseInt(hoaHoc);
let diemSinhHoc = parseInt(sinhHoc);

let tongDiem3mon = diemVatLy + diemHoaHoc + diemSinhHoc;
let diemTrungBinh3Mon = tongDiem3mon / 3;

document.write("Điểm trung bình 3 môn:" + diemTrungBinh3Mon);
document.write("<br>")
document.write("Tổng điểm 3 môn:" + tongDiem3mon);


