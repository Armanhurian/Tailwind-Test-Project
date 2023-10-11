const swiper = new Swiper('.swiper', {
    // Optional parameters

    slidesPerView: 4,
    spaceBetween: 30,
    grid: {
        rows: 2,
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

