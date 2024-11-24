"use strict";

//Change Navbar color on Scroll
function changeBg() {
  let navbar = document.getElementById("navbar");
  let scrollValue = window.scrollY;

  if (scrollValue < 100) {
    navbar.classList.remove("bgColor");
  } else {
    navbar.classList.add("bgColor");
  }
}

window.addEventListener("scroll", changeBg);
///Navbar Active
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 4) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Function to close the navbar
  const closeNavbar = () => {
    navbarToggler.classList.remove("navbar-toggler-close");
    document.querySelector(".navbar-collapse").classList.remove("show");
  };

  // Toggle the navbar toggler icon on click
  navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("navbar-toggler-close");
  });

  // Close navbar when clicking on a navigation link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeNavbar();
    });
  });

  // Close navbar when clicking outside
  document.addEventListener("click", (event) => {
    const isNavbarToggler = event.target.matches(".navbar-toggler");
    const isNavbarLink = event.target.closest(".navbar-nav");
    if (!isNavbarToggler && !isNavbarLink) {
      closeNavbar();
    }
  });

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 4) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.parentElement.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.parentElement.classList.add("active");
      }
    });
  });
});
///////////////////////////////////////////////////////////////////////////////////
//Portfolio buttons

///Lazy Loading
// document.addEventListener("DOMContentLoaded", function () {
//   const lazyImages = document.querySelectorAll(".lazy-image");

//   const imageObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const img = entry.target;
//         img.src = img.dataset.src; // Load the actual image
//         img.onload = () => img.classList.add("loaded"); // Add loaded class
//         observer.unobserve(img); // Stop observing
//       }
//     });
//   });

//   lazyImages.forEach((img) => {
//     imageObserver.observe(img);
//   });
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Filter images by category
function filterImages(category) {
  let items = document.getElementsByClassName("portfolio-item");
  let buttons = document.getElementsByClassName("filter-btn");

  // Loop through filter buttons to remove 'active' class
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Add 'active' class to clicked button
  e.target.classList.add("active");

  // Loop through portfolio items
  for (let i = 0; i < items.length; i++) {
    if (category === "all") {
      items[i].classList.remove("hidden");
    } else {
      if (items[i].classList.contains(category)) {
        items[i].classList.remove("hidden");
      } else {
        items[i].classList.add("hidden");
      }
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
//Contact Form
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
//////////////////////////////////////////////////////////////////////////////////////////////
//Submit button Alert

document.addEventListener("DOMContentLoaded", function () {
  // Select the submit button by className
  const submitButton = document.querySelector(".btn");
  const alertMessage = document.querySelector(".alert");
  const btnClose = document.querySelector(".btn--close-alert");
  const formData = document.querySelector(".form-data");

  // Add an event listener to the submit button
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Show an alert message
    alertMessage.classList.remove("hide");
    formData.reset();
  });

  btnClose.addEventListener("click", function (e) {
    e.preventDefault();

    //Close the alert window
    alertMessage.classList.add("hide");
  });
});
