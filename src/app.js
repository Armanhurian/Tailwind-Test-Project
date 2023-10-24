const swiper = new Swiper('.swiper', {
    // Optional parameters

    
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
      },
      1024: {
        slidesPerView : 3,
        grid: {
          rows: 2,
        },
      },
      750: {
        slidesPerView : 2,
        grid: {
          rows: 2,
        },
      },
      500: {
        slidesPerView : 2,
        grid: {
          rows: 2,
        },
      },
      360: {
        spaceBetween: 10,
        slidesPerView : 2,
        grid: {
          rows: 2,
        },
      },
    },
    
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable : true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });


