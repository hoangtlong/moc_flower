document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.list');
    const items = Array.from(list.children);

    function updateClasses() {
        items.forEach((item, index) => {
            item.className = '';
            if (index === 0) {
                item.classList.add('hide');
            } else if (index === 1) {
                item.classList.add('prev');
            } else if (index === 2) {
                item.classList.add('act');
            } else if (index === 3) {
                item.classList.add('next');
            } else if (index === 4) {
                item.classList.add('next', 'new-next');
            }
        });
    }

    function nextSlide() {
        items.push(items.shift());
        items.forEach(item => list.appendChild(item));
        updateClasses();
    }

    function prevSlide() {
        items.unshift(items.pop());
        items.forEach(item => list.appendChild(item));
        updateClasses();
    }

    list.addEventListener('click', event => {
        if (event.target.tagName === 'LI' || event.target.closest('LI')) {
            const clickedItem = event.target.tagName === 'LI' ? event.target : event.target.closest('LI');

            if (clickedItem.classList.contains('next') || clickedItem.classList.contains('new-next')) {
                nextSlide();
            } else if (clickedItem.classList.contains('prev')) {
                prevSlide();
            }
        }
    });

    updateClasses();
});










  let currentSlide = 0;

  function showSlide(index) {
	  const slides = document.querySelectorAll('#custom-carousel .custom-carousel-item');
	  const totalSlides = slides.length;
	  const itemsPerSlide = 4;
	  if (index >= totalSlides / itemsPerSlide) {
		  currentSlide = 0;
	  } else if (index < 0) {
		  currentSlide = Math.floor((totalSlides - 1) / itemsPerSlide);
	  } else {
		  currentSlide = index;
	  }
	  const carouselInner = document.querySelector('#custom-carousel .custom-carousel-inner');
	  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  function prevSlide() {
	  showSlide(currentSlide - 1);
  }
  
  function nextSlide() {
	  showSlide(currentSlide + 1);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
	  showSlide(currentSlide);
  });
  