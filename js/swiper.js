import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
window.addEventListener('load', function(){
    let perView = window.screen.width <= 500 ? 2 : 4
    let reviewSwiperPerView = window.screen.width <= 768 ? 1 : 2
    let perView2, perView3
    let typeNav

    let mySwiper = new Swiper("#mySwiper", {
    slidesPerView: perView,
    spaceBetween: 10,
    direction: 'horizontal',
    loop: false,
    freeMode: true,
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
    });

    let mySwiperMatching = new Swiper("#mySwiperMatching", {
        slidesPerView: 2,
        spaceBetween: 10,
        direction: 'horizontal',
        loop: false,
        allowTouchMove: false,
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 4,
            },
        },
        // freeMode: true,
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    });

    let mySwiperFull = new Swiper("#mySwiperFull", {
        slidesPerView: 2,
        spaceBetween: 10,
        direction: 'horizontal',
        loop: false,
        freeMode: true,
        // If we need pagination

        breakpoints: {
            500: {
                slidesPerView: 4,
            },
            1200: {
                spaceBetween: 90,
                slidesPerView: 4
            },
            1600: {
                spaceBetween: 30,
                slidesPerView: 5
            },
        },

        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    });
    

    if(window.screen.width <= 500){
        perView2 = 1
    }
    else if(window.screen.width <= 768){
        perView2 = 2
    }
    else perView2 = 4

    if(window.screen.width <= 500){
        perView3 = 1
    }
    else if(window.screen.width <= 768){
        perView3 = 2
    }
    else perView3 = 3

    let mySwiper2 = new Swiper("#mySwiper2", {
        slidesPerView: perView2,
        spaceBetween: 10,
        direction: 'horizontal',
        loop: false,
        freeMode: true,
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    });

    let mySwiper3 = new Swiper("#mySwiper3", {
        slidesPerView: perView3,
        spaceBetween: 10,
        direction: 'horizontal',
        loop: false,
        freeMode: true,
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    });

    const swiper = new Swiper('#swiper', {
        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

        scrollbar: {
        el: '.swiper-scrollbar',
        },
    });

    let productSwiper2 = new Swiper("#product-swiper-2", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        watchSlidesProgress: true,
        freeMode: true,        
    });

    let reviewSwiper = new Swiper("#review-swiper", {
        slidesPerView: reviewSwiperPerView,
        spaceBetween: 44,
        direction: 'horizontal',
        // freeMode: true,
        loop: false,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    let reviewSwiper2 = new Swiper("#review-swiper2", {
        slidesPerView: 1,
        spaceBetween: 44,
        direction: 'horizontal',
        // freeMode: true,
        loop: false,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
      
    if(window.screen.width < 768)
        typeNav = 'fraction'
    else{
        typeNav = 'bullets'
    }
    let productSwiper = new Swiper('#product-swiper', {
        // Optional parameters
        loop: true,
        spaceBetween: 10,
        direction: 'horizontal',
        // If we need pagination
        thumbs: {
            swiper: productSwiper2,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: typeNav,
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
})

window.addEventListener('resize', function(){
    let perView = window.screen.width <= 500 ? 2 : 4
    let reviewSwiperPerView = window.screen.width <= 768 ? 1 : 2
    let perView2, perView3
    let typeNav

    let mySwiper = new Swiper("#mySwiper", {
    slidesPerView: perView,
    spaceBetween: 10,
    direction: 'horizontal',
    loop: false,
    freeMode: true,
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
    });

    

    if(window.screen.width <= 500){
        perView2 = 1
    }
    else if(window.screen.width <= 768){
        perView2 = 2
    }
    else perView2 = 4


    if(window.screen.width <= 500){
        perView3 = 1
    }
    else if(window.screen.width <= 768){
        perView3 = 2
    }
    else perView3 = 3

    let mySwiper2 = new Swiper("#mySwiper2", {
        slidesPerView: perView2,
        spaceBetween: 10,
        direction: 'horizontal',
        loop: false,
        freeMode: true,
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    });

    let mySwiper3 = new Swiper("#mySwiper3", {
        slidesPerView: perView3,
        spaceBetween: 10,
        direction: 'horizontal',
        loop: false,
        freeMode: true,
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
    });

    const swiper = new Swiper('#swiper', {
        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

        scrollbar: {
        el: '.swiper-scrollbar',
        },
    });

    let productSwiper2 = new Swiper("#product-swiper-2", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        watchSlidesProgress: true,
        freeMode: true,        
    });

    let reviewSwiper = new Swiper("#review-swiper", {
        slidesPerView: reviewSwiperPerView,
        spaceBetween: 44,
        direction: 'horizontal',
        // freeMode: true,
        loop: false,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    let reviewSwiper2 = new Swiper("#review-swiper2", {
        slidesPerView: 1,
        spaceBetween: 44,
        direction: 'horizontal',
        // freeMode: true,
        loop: false,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
      
    if(window.screen.width < 768)
        typeNav = 'fraction'
    else{
        typeNav = 'bullets'
    }
    let productSwiper = new Swiper('#product-swiper', {
        // Optional parameters
        loop: true,
        spaceBetween: 10,
        direction: 'horizontal',
        // If we need pagination
        thumbs: {
            swiper: productSwiper2,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: typeNav,
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
})