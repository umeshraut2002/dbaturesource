let currentSlide = 0;
        const slides = document.querySelectorAll('.slider-text');
        const totalSlides = slides.length;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('visible');
                slide.classList.add('hidden');
                if (i === index) {
                    slide.classList.remove('hidden');
                    slide.classList.add('visible');
                }
            });
        }
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }

        setInterval(nextSlide, 3000);