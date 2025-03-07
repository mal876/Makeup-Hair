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