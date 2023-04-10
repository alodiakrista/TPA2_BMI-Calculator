let berat = document.getElementById("berat");
let tinggi = document.getElementById("tinggi");
let form = document.getElementById("form");

const cekHitung = () => {
  
    let keterangan = "";
    let BMI = (berat.value / (tinggi.value / 100)**2).toFixed(1);
    
    if(berat.value == "" || tinggi.value == "" || parseInt(berat.value) < 0 || parseInt(tinggi.value) < 0) {
        document.getElementById("hasil").style.visibility = "hidden";
        alert("Your Input is not valid");
        form.reset();
    } else {

        if (BMI < 18.5) {
            keterangan = "UNDERWEIGHT";
        } else if (BMI <= 24.9) {
            keterangan = "NORMAL";
        } else if (BMI <= 29.9) {
            keterangan = "OVERWEIGHT";
        } else if (BMI >= 30) {
            keterangan = "OBESITY";
        }
    
        document.getElementById("BMI").innerText = BMI;
        document.getElementById("keterangan").innerText = keterangan;
        document.getElementById("hasil").style.visibility = "visible";

        form.reset();
    }
}

document.getElementById("submit").addEventListener("click", cekHitung);