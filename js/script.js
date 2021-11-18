// event pada saat link di klik
$(".nav-link").on("click", function (e) {
  var tujuan = $(this).attr("href");
  var elemenTujuan = $(tujuan);

  $("html , body").scrollTop(elemenTujuan.offset().top - 65);

  e.preventDefault();
});

//Contact

const scriptURL =
  "https://script.google.com/macros/s/AKfycbx2qfbF6hLShw5J1Po_Cocb_CUPm23Tq_1CrBm5eJLj_sY1FbQ8Rr17NBBp4gY0tkfQ/exec";
const form = document.forms["yayasan-contact-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //when submit button has clicked
  // show loading button , get rid of send button
  btnLoading.classList.toggle("d-none");
  btnSend.classList.toggle("d-none");

  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      // show loading send button, get rid of loading button
      btnLoading.classList.toggle("d-none");
      btnSend.classList.toggle("d-none");
      //show allert
      myAlert.classList.toggle("d-none");
      //reset
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
