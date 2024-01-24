console.log('Welcome!')



const burgerOpen = document.querySelector('.nav__open');
const burgerClose = document.querySelector('.nav__exit-btn');
const burgerMenu = document.querySelector('.nav');
const body = document.querySelector('body');
const filter = document.querySelector('.filter');

const navLink = document.querySelectorAll('.nav__list-link');

for (let i = 0; i < navLink.length; i++) {
    const el = navLink[i];
    el.addEventListener('click', () => {
        burgerMenu.classList.remove('active')
        body.classList.remove('active')
        filter.classList.remove('active')
    })
}

burgerOpen.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    body.classList.toggle('active')
    filter.classList.toggle('active')
})

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active')
    body.classList.remove('active')
    filter.classList.remove('active')
})

filter.addEventListener('click', () => {
    burgerMenu.classList.remove('active')
    body.classList.remove('active')
    filter.classList.remove('active')
})

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
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
        1024: {
            spaceBetween: 16,
            slidesPerView: 3,
        },
        576: {
            spaceBetween: 12,
            slidesPerView: 2,
        },
    },
    on: {
        slideChange: function () {
            swiperMain.autoplay.stop();
            swiperMain.autoplay.start();
        }
    }
});


function scrollToSection(id) {
    const targetBlock = document.getElementById(id);
    if (targetBlock) {
        // const offsetTop = targetBlock.offsetTop - 80;
        const offsetTop = targetBlock.offsetTop;
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


let lastScrollTop = 0;
let delta = 50; // Расстояние, на котором будет реагировать хедер

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(lastScrollTop - currentScroll) <= delta) {
        return; // Не делаем ничего, если скролл недостаточный
    }

    if (currentScroll > lastScrollTop) {
        // Скролл вниз
        document.querySelector('.header').classList.add('active');
        document.querySelector('.nav').classList.add('move');
    } else {
        // Скролл вверх
        document.querySelector('.header').classList.remove('active');
        document.querySelector('.nav').classList.remove('move');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});