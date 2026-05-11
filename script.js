const inputTugas = document.getElementById("inputTugas");
const btnTambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");
const inputTanggal = document.getElementById("inputTanggal");

btnTambah.addEventListener("click", function() {

  let teksTugas = inputTugas.value;
  let tanggalTugas = inputTanggal.value;
  let status = "Progres"

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
  let div = document.createElement("div")
  let btnHapus = document.createElement("button")
  let btnEdit = document.createElement("button")
  let btnDone = document.createElement("button")

  btnHapus.className = "btnHapus"
  btnDone.className = "btnDone"
  btnEdit.className = "btnEdit"

   spanbaru.innerHTML = teksTugas + " - " + tanggalTugas + " = " + status;
   btnHapus.innerHTML = "X"
   btnEdit.innerHTML = "Edit"
   btnDone.innerHTML = "Done"

   listbaru.appendChild(spanbaru);
   listbaru.appendChild(div);
   div.appendChild(btnHapus);
   div.appendChild(btnEdit);
   div.appendChild(btnDone);


    daftarTugas.appendChild(listbaru);

    btnHapus.addEventListener("click", function(){
      listbaru.remove();
   })

   btnDone.addEventListener("click", function(){
      status = "Done";
      btnEdit.style.display = "none";
      spanbaru.innerHTML = teksTugas + " - " + tanggalTugas + " - " + status;
   })

   btnEdit.addEventListener("click", function(){
    let tugasBaru = prompt("Edit tugas", teksTugas);
    let tanggalBaru = prompt("Edit tanggal", tanggalTugas);

     

    if(tugasBaru !== null && tanggalBaru !== null){

        teksTugas = tugasBaru;
        tanggalTugas = tanggalBaru;

        spanbaru.innerHTML = teksTugas + " - " + tanggalTugas;
    }

  })
  
  inputTugas.value = "";
  inputTanggal.value = "";


});