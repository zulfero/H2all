const pop = document.querySelector(".pop_up");
const btnBook = document.querySelectorAll(".hero-BTN");
const butBook = document.querySelector(".close");
const popupContainer = document.querySelector(".popup-container");

console.log(btnBook);
const sendEmail = () => {
  const templateParams = {
    message: `
    Dear customer;
    We are happy to inform you that your request has been received. 
      we will notify you on your purchase within 24 hours.
      Thank you for choosing H2ALL services,

      kind regards.
    `,
  };
  // https://dashboard.emailjs.com/admin/account

  // these IDs from the previous steps
  emailjs.send("service_gnlfyaw", "booking request").then(
    () => {
      console.log("SUCCESS!");
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
};

for (i = 0; i < btnBook.length; i++) {
  btnBook[i].addEventListener("click", function (e) {
    let bTn = btnBook[i];
    popupContainer.style.display = "flex";
  });
}

for (i = 0; i < btnBook.length; i++) {
  butBook.addEventListener("click", function (e) {
    let bTn = btnBook[i];
    popupContainer.style.display = "none";
  });
  sendEmail();
}
