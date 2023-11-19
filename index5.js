document.getElementById("submitBtn").onclick = function () {
    let temp;
    if (document.getElementById("cbtn").checked) {
        temp = document.getElementById("ingrau").value;
        temp = Number(temp);
        temp = Kelvin(temp);
        document.getElementById("temp").innerHTML = (Math.floor(temp) + "C");
    }
    else if (document.getElementById("Fbtn").checked) {
        temp = document.getElementById("ingrau").value;
        temp = Number(temp);
        temp = Fahreint(temp);
        document.getElementById("temp").innerHTML = (Math.floor(temp) + "F");
    }
    else {
        document.getElementById("temp").innerHTML = "Select a unit";
    }
}
function Kelvin(temp) {
    return (temp + 273.15);
}


function Fahreint(temp) {
    return (temp * 9 / 5 + 32)
}
function limpar() {
    document.getElementById("ingrau").value = "";
    document.getElementById("temp").innerHTML = "";

}
