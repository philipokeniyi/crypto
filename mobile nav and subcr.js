// visited links on nav ********************

document.querySelectorAll(".nav-link").forEach((navLink) => {
  navLink.addEventListener("click", function () {
    // Remove the visited class from all links
    document.querySelectorAll(".nav-link").forEach((l) => {
      l.classList.remove("visited");
    });

    // Add the visited class to the clicked link
    this.classList.add("visited");
  });
});

// *********************************************

// Subscribe-input
const subscribeInput = document.getElementById("subscribeInput");

subscribeInput.addEventListener("click", () => {
  subscribeInput.style.border = "none";
  subscribeInput.style.borderBottom = "1px solid white";
});

// ************************************************

// Nav Bar for mobile

const menuButton = document.getElementById("menu-button");
const hideSidebar1 = document.getElementById("hideSidebar");
const sidebar = document.getElementById("sidebar");

function showSidebar() {
  sidebar.style.display = "flex";
}

function hideSidebar() {
  sidebar.style.display = "none";
}

menuButton.addEventListener("click", showSidebar);
hideSidebar1.addEventListener("click", hideSidebar);

// Add an event listener for window resize

window.addEventListener("resize", function () {
  if (window.innerWidth > 800) {
    hideSidebar(); // Hide sidebar when screen width exceeds 800px
  }
});
