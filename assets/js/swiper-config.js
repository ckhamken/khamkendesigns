// Swiper Carousel Configuration with Mobile Optimization
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on a touch device
  const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
  };

  const swiper = new Swiper('#swiper-1', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoHeight: false,
    speed: 300,
    // Mobile and tablet optimizations
    breakpoints: {
      // Mobile devices (< 576px)
      0: {
        slidesPerView: 1,
        spaceBetween: 8,
        centeredSlides: false,
        navigation: {
          enabled: true,
        },
      },
      // Tablets (≥ 576px)
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true,
        navigation: {
          enabled: true,
        },
      },
      // Larger tablets (≥ 992px)
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        navigation: {
          enabled: true,
        },
      },
    },
    // Touch support optimizations
    touchEventsTarget: 'container',
    simulateTouch: true,
    grabCursor: isTouchDevice(),
    resistanceRatio: 0.85,
    threshold: 5,
    // Keyboard support for accessibility
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    // Mouse wheel support (optional)
    mousewheel: {
      invert: false,
    },
  });

  // Log initialization for debugging
  console.log('Swiper initialized. Touch device detected:', isTouchDevice());
});