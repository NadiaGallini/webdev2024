const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}


function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide();
}

function nextSlide() {
    currentSlide++;

    if (currentSlide === slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

nextSlide();

setInterval(nextSlide, 3000); 