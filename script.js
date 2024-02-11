const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });

    
    link.classList.add("active");
  });
});


const scrollToSection = (event) => {
  event.preventDefault();

  const target = event.target.getAttribute("href");
  const section = document.querySelector(target);

  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth"
  });
};

navLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});


const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.textContent =
    "Form submitted successfully! We will get back to you soon.";

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 3000);

 
  contactForm.reset();
});
function popup() {
  document.getElementById("popup").style.cssText = "visibility:visible";
  document.getElementById("contact-form").style.cssText = "visibility:hidden";
}
function cln() {
  document.getElementById("popup").style.cssText = "visibility:hidden";
  document.getElementById("contact-form").style.cssText = "visibility:visible";
}
function n1() {
  document.getElementById("nav1").style.cssText =
    "background-color: #02356cc1;color: white;padding: 10px 20px;border-radius: 10px;font-weight: bold;";
}
function n2() {
  document.getElementById("nav2").style.cssText =
    "background-color: #02356cc1;color: white;padding: 10px 20px;border-radius: 10px;font-weight: bold;";
}
function n3() {
  document.getElementById("nav3").style.cssText =
    "background-color: #02356cc1;color: white;padding: 10px 20px;border-radius: 10px;font-weight: bold;";
}
function n4() {
  document.getElementById("nav4").style.cssText =
    "background-color: #02356cc1;color: white;padding: 10px 20px;border-radius: 10px;font-weight: bold;";
}
