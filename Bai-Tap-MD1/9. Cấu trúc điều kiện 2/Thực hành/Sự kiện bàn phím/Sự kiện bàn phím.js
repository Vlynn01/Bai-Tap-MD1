function nhanLenTren() {
    let nhanVat = document.getElementById("nobita");
    nhanVat.style.top = parseInt(nhanVat.style.top) - 5 + "px";

}

function nhanXuongDuoi() {
    let nhanVat = document.getElementById("nobita");
    nhanVat.style.top = parseInt(nhanVat.style.top) + 5 + "px";
}

function nhanSangTrai() {
    let nhanVat = document.getElementById("nobita");
    nhanVat.style.left = parseInt(nhanVat.style.top) - 5 + "px";
}

function nhanSangPhai() {
    let nhanVat = document.getElementById("nobita");
    nhanVat.style.left = parseInt(nhanVat.style.top) + 5 + "px";
}

function diChuyen(dcd) {
    switch (dcd.keyCode) {
        case 37:
            nhanSangTrai();
            break;
        case 39:
            nhanSangPhai();
            break;
        case 38:
            nhanLenTren();
            break;
        case 40:
            nhanXuongDuoi();
            break;

    }
}

function sanSangChay() {
    window.addEventListener("keydown", diChuyen);

}
