let quaBong = null;
quaBong=document.getElementById("anhCuaToi");
function anhQuaBong(){
    quaBong=document.getElementById("anhCuaToi");
    quaBong.style.position="relative";
    quaBong.style.left="0px";

}
function diSangPhai (){
    quaBong.style.left= parseInt(quaBong.style.left) +10 +"px";

}
window.onload=anhQuaBong;