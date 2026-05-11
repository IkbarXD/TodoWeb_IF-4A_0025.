const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");
const inputTanggal = document.getElementById("inputTanggal");

btnTambah.addEventListener("click", function() {

  let teksTugas = inputTugas.value;
  let tanggalTugas = inputTanggal.value;

  if(teksTugas === ""){
    alert("Data Harus Dimasukkan");
    return;
  }

   if(tanggalTugas === ""){
    alert("Tanggal Harus Dimasukkan");
    return;
   }


  let listbaru = document.createElement("li")
  let spanbaru = document.createElement("span")

   spanbaru.innerHTML = teksTugas + " - " + tanggalTugas;

   listbaru.appendChild(spanbaru);

    daftarTugas.appendChild(listbaru);

    const warnabaru = document.querySelectorAll("li");
  warnabaru.forEach((item, index) => {
    if(index % 2 === 0) {
        item.style.color = "red";
    } else {
        item.style.color = "green";
    }
  });
  
  inputTugas.value = "";
  inputTanggal.value = "";

});