// ===============================
// JUST LISTED SLIDER (INDEX PAGE)
// ===============================

const slider = document.getElementById("justListedRow");

if (slider) {
  let isDragging = false;
  let startX;
  let startScrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDragging = true;
    slider.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = slider.scrollLeft;
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
    slider.classList.remove("dragging");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startX;
    slider.scrollLeft = startScrollLeft - walk;
  });

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX;
    startScrollLeft = slider.scrollLeft;
  }, { passive: true });

  slider.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX;
    const walk = x - startX;
    slider.scrollLeft = startScrollLeft - walk;
  }, { passive: true });

  window.moveLeft = function () {
    slider.scrollBy({ left: -320, behavior: "smooth" });
  };

  window.moveRight = function () {
    slider.scrollBy({ left: 320, behavior: "smooth" });
  };
}


// ===============================
// LISTINGS PAGE: HEART TOGGLE
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  const hearts = document.querySelectorAll(".like-btn");

  hearts.forEach(icon => {
    icon.addEventListener("click", function () {

      this.classList.toggle("active");

      if (this.classList.contains("fa-regular")) {
        this.classList.remove("fa-regular");
        this.classList.add("fa-solid");
      } else {
        this.classList.remove("fa-solid");
        this.classList.add("fa-regular");
      }

    });
  });

});


// ===============================
// PROPERTY GALLERY
// ===============================

let images = [];
let currentIndex = 0;

function openGallery(index) {

  const pageImages = document.querySelectorAll(".main-image img, .side-images img");
  images = [];

  pageImages.forEach(img => {
    images.push(img.src);
  });

  currentIndex = index;

  document.getElementById("galleryImage").src = images[currentIndex];
  document.getElementById("galleryModal").style.display = "flex";
}

function closeGallery() {
  document.getElementById("galleryModal").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("galleryImage").src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("galleryImage").src = images[currentIndex];
}

function setImage(i) {
  currentIndex = i;
  document.getElementById("galleryImage").src = images[currentIndex];
}


// ===============================
// KEYBOARD CONTROL FOR GALLERY
// ===============================

document.addEventListener("keydown", function (e) {

  const modal = document.getElementById("galleryModal");
  if (!modal || modal.style.display !== "flex") return;

  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "Escape") closeGallery();

});


// ===============================
// REQUEST TOUR FORM HANDLER
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  const requestBtn = document.querySelector(".btn-green");
  if (!requestBtn) return;

  requestBtn.addEventListener("click", function (e) {

    e.preventDefault();

    const agentCard = this.closest(".pd-agent-card");
    const inputs = agentCard.querySelectorAll("input");

    let allFilled = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        allFilled = false;
      }
    });

    if (!allFilled) {
      alert("Please fill the details");
      return;
    }

    document.getElementById("requestModal").style.display = "flex";

    setTimeout(() => {
      document.getElementById("requestModal").style.display = "none";
      inputs.forEach(i => i.value = "");
    }, 2500);

  });

});


// ===============================
// SEARCH TABS (INDEX PAGE)
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  const tabs = document.querySelectorAll(".tab");
  const indicator = document.querySelector(".tab-indicator");

  if (!tabs.length || !indicator) return;

  function moveIndicator(element) {
    indicator.style.width = element.offsetWidth + "px";
    indicator.style.left = element.offsetLeft + "px";
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", function () {

      tabs.forEach(t => t.classList.remove("active"));
      this.classList.add("active");

      moveIndicator(this);

      localStorage.setItem("selectedTab", this.dataset.type);

    });
  });

  const savedTab = localStorage.getItem("selectedTab");

  if (savedTab) {
    tabs.forEach(tab => {
      if (tab.dataset.type === savedTab) {
        tab.classList.add("active");
        moveIndicator(tab);
      } else {
        tab.classList.remove("active");
      }
    });
  } else {
    const activeTab = document.querySelector(".tab.active");
    if (activeTab) moveIndicator(activeTab);
  }

});
