console.log('Welcome!')


var swiperMain = new Swiper(".mySwiper", {
    direction: "vertical",
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // controller: {
    //     control: swiperArticle
    // },
    autoplay: {
        delay: 3500,
        pauseOnMouseEnter: true,
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
});


function scrollToSection(id) {
    const targetBlock = document.getElementById(id);
    if (targetBlock) {
        const offsetTop = targetBlock.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        })
    }
}

var swiperArticle = new Swiper(".mySwiperArticle", {
    loop: true,
    spaceBetween: 25,
    allowTouchMove: false,
    // controller: {
    //     control: swiperMain
    // }
});

swiperArticle.controller.control = swiperMain;
swiperMain.controller.control = swiperArticle;

