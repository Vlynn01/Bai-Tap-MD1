let browser=prompt("Nhập tên trình duyệt!", "");
switch(browser){
    case "Edge":
        alert("Bạn đã có trình duyệt Edge!");
        break;
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        alert("Okay we support these browers too");
        break;
    default:
        alert("We hope that thi page looks ok!");

}
