function toggleMenu(){
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active")
}

let index = 0;

function showSlide(i) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    index = (i + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() { showSlide(index - 1); }
function nextSlide() { showSlide(index + 1); }

// Auto-slide every 3 seconds
setInterval(() => { nextSlide(); }, 10000);




function toggleContent() {
    const content = document.querySelector('.additional-content');
    const btn = document.querySelector('.read-more-btn');
  
    if (content.style.display === "none") {
      content.style.display = "block";
      btn.textContent = "Read Less";
    } else {
      content.style.display = "none";
      btn.textContent = "Read More";
    }
}


// Select elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Open lightbox on image click
document.querySelectorAll(".service-img").forEach(img => {
    img.addEventListener("click", function () {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
    });
});

// Close lightbox when clicking the close button
closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", function (e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});