// mobile navigation

const hamburger = document.querySelector(".mobile__open");
const navBar = document.querySelector(".navbar");
const mobileClose = document.querySelector(".mobile__close");
const links = document.querySelectorAll(".nav__links li a");
const button = document.querySelector(".contact__btn");

hamburger.addEventListener("click", () => {
  navBar.classList.add("active");
});

mobileClose.addEventListener("click", () => {
  navBar.classList.remove("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
});

button.addEventListener("click", () => {
  navBar.classList.remove("active");
});

// contact section - email submit

document.querySelector("form").addEventListener("submit", function (e) {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;

  // Regular expression for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(email)) {
    e.preventDefault(); // Prevent form submission
    showAlert("Please enter a valid email address.");
    emailInput.focus(); // Focus on the email input
  }
});

function showAlert(message) {
  const alertBox = document.getElementById("customAlert");
  document.getElementById("alertMessage").textContent = message;
  alertBox.style.display = "block";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}

// gear tabs

// Function to show a specific tab
function showTab(tabId) {
  // Get all tab contents and tabs
  const contents = document.querySelectorAll(".tab__content");
  const tabs = document.querySelectorAll(".tab");

  // Hide all tab contents and remove 'active' class from all tabs
  contents.forEach((content) => {
    content.style.display = "none"; // Hide all content
    content.classList.remove("active");
  });

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  // Show the selected tab content and add 'active' class to the clicked tab
  const activeContent = document.getElementById(tabId);
  if (activeContent) {
    activeContent.classList.add("active");
    activeContent.style.display = "flex"; // Show the selected tab content
  }

  const activeTab = Array.from(tabs).find((tab) =>
    tab.textContent.includes(tabId.charAt(0).toUpperCase() + tabId.slice(1))
  );
  if (activeTab) {
    activeTab.classList.add("active");
  }
}

//scroll reveal

const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
});

sr.reveal(".main__header", {
  origin: "left",
});
sr.reveal(".img__box", {
  origin: "left",
});
sr.reveal(".about__text", {
  origin: "right",
});
sr.reveal(".news", {
  origin: "top",
});
sr.reveal(".gallery", {
  origin: "bottom",
});
sr.reveal(".gear", {
  origin: "right",
});
