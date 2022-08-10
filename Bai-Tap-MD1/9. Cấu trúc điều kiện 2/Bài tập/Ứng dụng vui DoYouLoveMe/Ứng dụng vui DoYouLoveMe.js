function anVaoCo()
{
    alert("Đồng ý rồi thì nhắn tin cho anh nha");
}
function khongAnVao()
{
    var x = Math.round(Math.random() * window.innerWidth);
    var y = Math.round(Math.random() * window.innerHeight);
    document.getElementById('btnNo').style.left = x + 'px';
    document.getElementById('btnNo').style.top = y + 'px';
}