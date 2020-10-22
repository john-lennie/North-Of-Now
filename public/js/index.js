document.addEventListener("DOMContentLoaded", (e) => {
  (function () {
    'use strict';

    var viewportWidth = window.innerWidth || document.documentElement.clientWidth,
        slideContainer = document.getElementsByClassName('slide-container'),
        slides = document.getElementsByClassName('slide'),
        tooltip = document.querySelectorAll('.slide-tooltip'),
        scrollPos = document.scrollTop;

    function showToolTip(e) {
      for (var i = tooltip.length; i--;) {
        tooltip[i].style.left = e.clientX + 'px';
        tooltip[i].style.top = e.clientY + 'px';
      }
    }

    slideContainer[0].style.height = "" + (slides.length * window.innerHeight)  + "px";

    window.addEventListener('scroll', function(e) {
      for (var i = 0; i < slides.length; i++) {
        console.log(slides[i].getBoundingClientRect().bottom, window.innerHeight - 60);
        if (slides[i].getBoundingClientRect().bottom < 0 && i > 1) {
          slides[i - 1].classList.add("scrolling");
          slides[i - 1].style.top = "" + (slides.length - i)  + "00vh";
        }
        if (slides[i].getBoundingClientRect().bottom >= window.innerHeight - 120) {
          slides[i].classList.remove("scrolling");
          slides[i].style.top = null;
        }
      }
    })

    if (viewportWidth > 768) {
      window.addEventListener('mousemove', showToolTip);
    }

  })();
})
