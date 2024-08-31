

// *****************************************************************

// Head  carousel 

const allMainHead = document.querySelector(".all-main-head");
const slides = document.querySelectorAll(".main-head");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
let currentIndex = 0;
const slideInterval = 20000; // 20 seconds
let autoSlide;

// Function to update the allMainHead position
function updateAllMainHead() {
  allMainHead.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateAllMainHead();
}

// Function to move to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateAllMainHead();
}

// Automatically move to the next slide at intervals
function startAutoSlide() {
  autoSlide = setInterval(nextSlide, slideInterval);
}

// Stop the automatic slide
function stopAutoSlide() {
  clearInterval(autoSlide);
}

// Restart the auto-slide after user interaction
function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// Event listeners for buttons
nextButton.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevButton.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

// Start the automatic sliding when the page loads
startAutoSlide();



// *******************************************************************

// Customers feedback carousel desktop

const allCustomer = document.querySelector(".all-customer-desktop");
const slidesCustomer = document.querySelectorAll(".customer-head");
const nextButtonCustomer = document.getElementById("next1");
const prevButtonCustomer = document.getElementById("prev1");
const slideIntervalCustomer = 20000; // 20 seconds
let autoSlideCustomer;

// Clone the slides to allow for continuous motion
slidesCustomer.forEach((slide) => {
  const clone = slide.cloneNode(true);
  allCustomer.appendChild(clone);
});

// Function to move to the next slide
function nextSlideCustomer() {
  allCustomer.style.transition = "transform 0.5s ease-in-out";
  allCustomer.style.transform = `translateX(-100%)`;

  allCustomer.addEventListener(
    "transitionend",
    () => {
      // Move the first slide to the end after the transition completes
      allCustomer.appendChild(allCustomer.firstElementChild);
      allCustomer.style.transition = "none";
      allCustomer.style.transform = "translateX(0)";
      allCustomer.offsetHeight; // Trigger a reflow to make the transition work again
      allCustomer.style.transition = "transform 0.5s ease-in-out";
    },
    { once: true }
  );
}

// Function to move to the previous slide

function prevSlideCustomer() {
  allCustomer.style.transition = "none";
  // Move the last slide to the beginning
  allCustomer.insertBefore(
    allCustomer.lastElementChild,
    allCustomer.firstElementChild
  );
  allCustomer.style.transform = "translateX(-100%)";

  allCustomer.offsetHeight; // Trigger a reflow to make the transition work
  allCustomer.style.transition = "transform 0.5s ease-in-out";
  allCustomer.style.transform = "translateX(0)";
}

// Automatically move to the next slide at intervals
function startAutoSlideCustomer() {
  autoSlideCustomer = setInterval(nextSlideCustomer, slideIntervalCustomer);
}

// Stop the automatic slide
function stopAutoSlideCustomer() {
  clearInterval(autoSlideCustomer);
}

// Restart the auto-slide after user interaction
function resetAutoSlideCustomer() {
  stopAutoSlideCustomer();
  startAutoSlideCustomer();
}

// Event listeners for buttons
nextButtonCustomer.addEventListener("click", () => {
  nextSlideCustomer();
  resetAutoSlideCustomer();
});

prevButtonCustomer.addEventListener("click", () => {
  prevSlideCustomer();
  resetAutoSlideCustomer();
});

// Pause the auto-slide when mouse is over the carousel
allCustomer.addEventListener("mouseover", stopAutoSlideCustomer);

// Resume the auto-slide when mouse leaves the carousel
allCustomer.addEventListener("mouseout", startAutoSlideCustomer);

// Start the automatic sliding when the page loads
startAutoSlideCustomer();




// *****************************************************************

// Customers feedback carousel mobile


const allCustomerMobile = document.querySelector(".all-customer-mobile");
const slidesCustomerMobile = document.querySelectorAll(".customer-head-mobile");
let currentSlideIndex = 0;
let autoSlideCustomerMobile;


// Clone the slides to allow for continuous motion mobile
slidesCustomerMobile.forEach((slide) => {
  const cloneMobile = slide.cloneNode(true);
  allCustomerMobile.appendChild(cloneMobile);
});


// Function to move to the next slide (mobile)


function nextSlideCustomerMobile() {
  allCustomerMobile.style.transition = "transform 0.5s ease-in-out";
  allCustomerMobile.style.transform = `translateX(-100%)`;

  allCustomerMobile.addEventListener(
    "transitionend",
    () => {
      // Move the first slide to the end after the transition completes
      allCustomerMobile.appendChild(allCustomerMobile.firstElementChild);
      allCustomerMobile.style.transition = "none";
      allCustomerMobile.style.transform = "translateX(0)";
      allCustomerMobile.offsetHeight; // Trigger a reflow to make the transition work again
      allCustomerMobile.style.transition = "transform 0.5s ease-in-out";
    },
    { once: true }
  );
}


// Function to move to the previous slide (mobile)

function prevSlideCustomerMobile() {
  allCustomerMobile.style.transition = "none";
  // Move the last slide to the beginning
  allCustomerMobile.insertBefore(
    allCustomerMobile.lastElementChild,
    allCustomerMobile.firstElementChild
  );
  allCustomerMobile.style.transform = "translateX(-100%)";

  allCustomerMobile.offsetHeight; // Trigger a reflow to make the transition work
  allCustomerMobile.style.transition = "transform 0.5s ease-in-out";
  allCustomerMobile.style.transform = "translateX(0)";
}


// Event listeners for navigation buttons
document.getElementById("next1").addEventListener("click", () => {
  nextSlideCustomerMobile();
  resetAutoSlideCustomerMobile();
});

document.getElementById("prev1").addEventListener("click", () => {
  prevSlideCustomerMobile();
  resetAutoSlideCustomerMobile();
});

// Automatically move to the next slide at intervals (mobile)
function startAutoSlideCustomerMobile() {
  autoSlideCustomerMobile = setInterval(nextSlideCustomerMobile, slideIntervalCustomer);
}

// Stop the automatic slide (mobile)
function stopAutoSlideCustomerMobile() {
  clearInterval(autoSlideCustomerMobile);
}

// Restart the auto-slide after user interaction (mobile)
function resetAutoSlideCustomerMobile() {
  stopAutoSlideCustomerMobile();
  startAutoSlideCustomerMobile();
}

// Pause the auto-slide when mouse is over the carousel
allCustomerMobile.addEventListener("mouseover", stopAutoSlideCustomerMobile);

// Resume the auto-slide when mouse leaves the carousel
allCustomerMobile.addEventListener("mouseout", startAutoSlideCustomerMobile);

// Start the automatic sliding when the page loads (mobile)
startAutoSlideCustomerMobile();




