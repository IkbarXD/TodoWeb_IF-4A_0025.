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
  let btnHapus = document.createElement("button")

   spanbaru.innerHTML = teksTugas + " - " + tanggalTugas;
   btnHapus.innerHTML = "X"

   listbaru.appendChild(spanbaru);
   listbaru.appendChild(btnHapus);


    daftarTugas.appendChild(listbaru);

    btnHapus.addEventListener("click", function(){
      listbaru.remove();
   })

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