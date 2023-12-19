var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
});


function scrollToSection() {
    // const targetBlock = document.getElementById('works');
    // if (targetBlock) {
    //     targetBlock.scrollIntoView({ behavior: 'smooth' });
    // }

    const targetBlock = document.getElementById('works');
    if (targetBlock) {
        const offsetTop = targetBlock.offsetTop - 90;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        })
    }
}