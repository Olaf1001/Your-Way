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

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll(".scroll-counter")
    elements.forEach(function(item) {
      item.counterAlreadyFired = false
      item.counterSpeed = item.getAttribute("data-counter-time") / 45
      item.counterTarget = +item.innerText
      item.counterCount = 0
      item.counterStep = item.counterTarget / item.counterSpeed
  
      item.updateCounter = function() {
        item.counterCount = item.counterCount + item.counterStep
        item.innerText = Math.ceil(item.counterCount)
  
        if (item.counterCount < item.counterTarget) {
          setTimeout(item.updateCounter, item.counterSpeed)
        } else {
          item.innerText = item.counterTarget
        }
      }
    })
    var isElementVisible = function isElementVisible(el) {
      var scroll = window.scrollY || window.pageYOffset
      var boundsTop = el.getBoundingClientRect().top + scroll
      var viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
      }
      var bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight,
      }
      return (
        (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
        (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
      )
    }
    var handleScroll = function handleScroll() {
      elements.forEach(function(item, id) {
        if (true === item.counterAlreadyFired) return
        if (!isElementVisible(item)) return
        item.updateCounter()
        item.counterAlreadyFired = true
      })
    }
    window.addEventListener("scroll", handleScroll)
  })
var a = 0;
  $(window).scroll(function () {
    var oTop = $("#project-summarize-stats").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },
                {
                    duration: 3000,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("pl")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("pl")
                        );
                    }
                }
            );
        });
        a = 1;
    }
});

    
