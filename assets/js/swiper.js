function initResponsiveSlider(sliderSelector, sliderParams, breakpoint = 900) {
  
    let sliderInstance = null;
    let originalClasses = ''; // Сохраняем исходные классы контейнера
    let slides = []; // Сохраняем исходные слайды
  
    // Создаём структуру Swiper
    function initSlider() {
      if (!sliderInstance) {
        const swiperEl = document.querySelector(sliderSelector);
        if(swiperEl) {
            // Сохраняем исходные классы и содержимое
            originalClasses = swiperEl.className;
            slides = Array.from(swiperEl.children);
            
            // Создаём структуру Swiper
            swiperEl.classList.add('swiper');
            const wrapper = document.createElement('div');
            wrapper.className = 'swiper-wrapper';
            
            // Переносим слайды в wrapper
            slides.forEach(slide => {
                slide.classList.add('swiper-slide')
                wrapper.append(slide);
            });
            
            // Очищаем контейнер и добавляем wrapper
            swiperEl.innerHTML = '';
            swiperEl.append(wrapper);

            if(sliderParams.scrollbar) {
                const scrollbarWrapper = document.createElement('div');
                scrollbarWrapper.className = 'scrollbar-wrapper';

                const scrollbar = document.createElement('div');
                scrollbar.className = 'swiper-scrollbar';

                scrollbarWrapper.append(scrollbar);
                swiperEl.append(scrollbarWrapper);
            }
            
            // Инициализируем Swiper
            sliderInstance = new Swiper(sliderSelector, sliderParams);
            console.log(`Слайдер ${sliderSelector} инициализирован`);
        }
      }
    }

    function destroySlider() {
        if (sliderInstance) {
          const swiperEl = document.querySelector(sliderSelector);
          if(swiperEl) {
				// Уничтожаем Swiper
				sliderInstance.destroy(true, true);
				sliderInstance = null;
				console.log(slides)
				// Восстанавливаем исходные классы и содержимое
				swiperEl.className = originalClasses;
				swiperEl.innerHTML = '';
				slides.forEach(slide => {
					slide.classList.remove('swiper-slide');
					swiperEl.appendChild(slide);
				});
          }
          
          console.log(`Слайдер ${sliderSelector} уничтожен, разметка восстановлена`);
        }
    }
  
    function handleResize() {
		const windowWidth = window.innerWidth;
			console.log(windowWidth, breakpoint);
		if (windowWidth <= breakpoint && !sliderInstance) {
			initSlider();
		} else if (windowWidth > breakpoint && sliderInstance) {
			destroySlider();
		}
    }
  
    // Проверяем при загрузке
    handleResize();
  
    // Оптимизация ресайза
    let resizeTimeout;
    window.addEventListener('resize', () => {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(handleResize, 100);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    
    initResponsiveSlider('.video-reviews__gallery', {
        slidesPerView: 'auto',
        spaceBetween: 35,
        scrollbar: {
            el: '.video-reviews__gallery .swiper-scrollbar',
            draggable: true,
        },
    });

	initResponsiveSlider('.info-block-1__gallery', {
        slidesPerView: 'auto',
        spaceBetween: 35,
    });

	initResponsiveSlider('.reviews__grid', {
        slidesPerView: 'auto',
        spaceBetween: 18,
    });

	const productThumbsSlider = new Swiper(".product__thumb-slider", {
      spaceBetween: 11,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
	});
	
  const productMainSlider = new Swiper(".product__main-slider", {
    grabCursor: true,
		navigation: {
		  nextEl: ".product__main-slider .product__arrow-right",
		  prevEl: ".product__main-slider .product__arrow-left",
		},
		thumbs: {
		  swiper: productThumbsSlider,
		},
	});

});

