var d = new Date();
var umur = document.getElementById("umur");
umur.innerHTML = d.getFullYear() - 1982;

const scriptURL = "https://script.google.com/macros/s/AKfycbzx0-DDj-sSK-ixAjJKTGTel1rToWi-i5-MUfOyPMBiiwhVJ0Z4o6-_RsN_n7kuktPnVQ/exec";
const form = document.forms["Contactform"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol submit
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
