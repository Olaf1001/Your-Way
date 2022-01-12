const hamburgerMenuIcon = document.querySelector('.mobile-menu');
const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
const mobileMenu = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-links a');

document.addEventListener('DOMContentLoaded', () => {
    hamburgerMenuIcon.addEventListener('click' , () => {
        hamburgerMenuIcon.classList.toggle('mobile-menu-icon-active');
        htmlTag.classList.toggle('scroll-disable');
        bodyTag.classList.toggle('scroll-disable');
        mobileMenu.classList.toggle('mobile-nav-active');
    })

    for (let i = 0; i < mobileLinks.length; i++) {
        mobileLinks[i].addEventListener("click", () => {
            htmlTag.classList.toggle('scroll-disable');
            bodyTag.classList.toggle('scroll-disable');
            hamburgerMenuIcon.classList.toggle('mobile-menu-icon-active');
            mobileMenu.classList.toggle('mobile-nav-active');
        });
    }
})

$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});
