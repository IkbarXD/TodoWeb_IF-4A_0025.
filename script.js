const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btnTambah.addEventListener("click", function() {

  let teksTugas = inputTugas.value;
  let tanggalTugas = tanggal.value;

  if(teksTugas === ""){
    alert("Data Harus Dimasukkan");
    return;
  }

  let listbaru = document.createElement("li")
  let spanbaru = document.createElement("span")
  let btnHapus = document.createElement("button")

   spanbaru.innerHTML = teksTugas;

   listbaru.appendChild(spanbaru);

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

});