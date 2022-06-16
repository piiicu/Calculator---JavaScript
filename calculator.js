function volum() {
    var raza = document.getElementById("raza").value;
    var inaltimea = document.getElementById("inaltimea").value;
    var volum = raza * raza * 3.14 * inaltimea
    document.getElementById("result").innerHTML = volum
  }
  