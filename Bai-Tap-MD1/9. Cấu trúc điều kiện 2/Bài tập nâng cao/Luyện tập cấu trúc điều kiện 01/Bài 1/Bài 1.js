function kiemTra() {
    let a = document.getElementById("num1").value
    let b = document.getElementById("num2").value
    let c = a % b

    if (c == 0) {
        result = "a chia hết cho b"
    } else {
         result = "a không chia hết cho b"
    }

    document.getElementById("result").innerHTML = result
}


