window.addEventListener('load', function() {
    const carouselBtns = document.querySelectorAll('.carouselBtn');
    const carouselItems = document.querySelectorAll('.carouselItem');
    const carouselPauseBtn = document.querySelector('.carouselPauseBtn');
    const carouselPauseIcon = document.querySelector('.carouselPauseIcon');

    setInterval(function() {
        let activeCarouselBtn = document.querySelector('.activeCarouselBtn');

        if(!(carouselPauseBtn.classList.contains('isPaused'))) {
            autoUpdateCarousel(activeCarouselBtn, carouselBtns, carouselItems);
        }
    }, 15000);
    
    carouselPauseBtn.addEventListener('click', function() {
        if(!(carouselPauseBtn.classList.contains('isPaused'))) {
            // Add paused class
            carouselPauseBtn.classList.add('isPaused');
            carouselPauseIcon.textContent = 'play_arrow';
        } else if(carouselPauseBtn.classList.contains('isPaused')) {
            // Remove paused class
            carouselPauseBtn.classList.remove('isPaused');
            carouselPauseIcon.textContent = 'pause';
        }
    });

    for(let i = 0; i < carouselBtns.length; i++) {
        let carouselBtn = carouselBtns[i];

        carouselBtn.addEventListener('click', function() {
            if(!(carouselBtn.classList.contains('activeCarouselBtn'))) {
                removeActiveClasses(carouselBtns, carouselItems);
                carouselBtn.classList.add('activeCarouselBtn');
                updateCarousel(carouselBtn, carouselItems);
            }
        });
    }
});

function autoUpdateCarousel(activeCarouselBtn, carouselBtns, carouselItems) {
    const currentClassNum = activeCarouselBtn.classList[1];

    if(currentClassNum.includes('1')) {
        removeActiveClasses(carouselBtns, carouselItems);
        carouselBtns[1].classList.add('activeCarouselBtn');
        carouselItems[1].classList.add('activeCarouselItem');

    } else if(currentClassNum.includes('2')) {
        removeActiveClasses(carouselBtns, carouselItems);
        carouselBtns[2].classList.add('activeCarouselBtn');
        carouselItems[2].classList.add('activeCarouselItem');

    } else if(currentClassNum.includes('3')) {
        removeActiveClasses(carouselBtns, carouselItems);
        carouselBtns[3].classList.add('activeCarouselBtn');
        carouselItems[3].classList.add('activeCarouselItem');

    } else if(currentClassNum.includes('4')) {
        removeActiveClasses(carouselBtns, carouselItems);
        carouselBtns[0].classList.add('activeCarouselBtn');
        carouselItems[0].classList.add('activeCarouselItem');

    }
}

function removeActiveClasses(carouselBtns, carouselItems) {
    for(let i = 0; i < carouselBtns.length; i++) {
        // Remove all active classes from carousel buttons
        carouselBtns[i].classList.remove('activeCarouselBtn');
    }

    for(let i = 0; i < carouselItems.length; i++) {
        // Remove all active classes from carousel items
        carouselItems[i].classList.remove('activeCarouselItem');
    }
}

function updateCarousel(carouselBtn, carouselItems) {
    for(let i = 0; i < carouselItems.length; i++) {
        let carouselItem = carouselItems[i];

        if(carouselBtn.classList.contains('carouselBtn1') &&
            carouselItem.classList.contains('carouselItem1')) {
            // Set the 1st carousel item to the active item
            carouselItem.classList.add('activeCarouselItem');
        } else if(carouselBtn.classList.contains('carouselBtn2') &&
            carouselItem.classList.contains('carouselItem2')) {
            // Set the 2nd carousel item to the active item
            carouselItem.classList.add('activeCarouselItem');
        } else if(carouselBtn.classList.contains('carouselBtn3') &&
            carouselItem.classList.contains('carouselItem3')) {
            // Set the 3rd carousel item to the active item
            carouselItem.classList.add('activeCarouselItem');
        } else if(carouselBtn.classList.contains('carouselBtn4') &&
            carouselItem.classList.contains('carouselItem4')) {
            // Set the 4th carousel item to the active item
            carouselItem.classList.add('activeCarouselItem');
        }
    }
}