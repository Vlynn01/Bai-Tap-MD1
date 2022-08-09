let nguoiDung = prompt("Ai thế?");

if (nguoiDung=="admin") {
    alert("Welcome");
}else if(nguoiDung==null) {
    alert("Canceled");
}else{
    alert("I don’t know you");
}

let pass=prompt("Password?", '')
if(pass="theMaster") {
    alert("Welcome");
}else {
    if (pass = null) {
        alert("canceld");
    } else {
        alert("Wrong password");
    }
}

