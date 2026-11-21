
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

document.getElementById("bookingForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const sport = document.getElementById("sport").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "91XXXXXXXXXX";

    const enquiry =
      `Hello Titan Sports Arena!

Name: ${name}
Phone: ${phone}
Sport: ${sport}
Message: ${message}

I would like to enquire about booking.`;

    const url =
      "https://wa.me/" + whatsappNumber +
      "?text=" + encodeURIComponent(enquiry);

    window.open(url, "_blank");
  });
