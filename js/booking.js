const pop = document.querySelector(".pop_up");
const btnBook = document.querySelectorAll(".hero-BTN");
const butBook = document.querySelector(".close");

console.log(btnBook);
const sendEmail = () => {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "ZFnO8CdFpLhS6KrOu",
  });
};
// these IDs from the previous steps
emailjs.sendForm("contact_service", "contact_form", this).then(
  () => {
    console.log("SUCCESS!");
  },
  (error) => {
    console.log("FAILED...", error);
  }
);

for (i = 0; i < btnBook.length; i++) {
  btnBook[i].addEventListener("click", function (e) {
    let bTn = btnBook[i];
    pop.style.display = "block";
  });
}

for (i = 0; i < btnBook.length; i++) {
  butBook.addEventListener("click", function (e) {
    let bTn = btnBook[i];
    pop.style.display = "none";
  });
  sendEmail();
}
