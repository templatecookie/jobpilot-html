"use strict";

/*
* ----------------------------------------------------------------------------------------
    Template Name: mr stater
    Template URI: https://spellbit.com/
    Description: 
    Author: mahedi amin
    Author URI: https://mahediamin.com
    Version: 1.0.0



    -------------INDEX----------------
   01.Mobile Menu
   02.Sticky Menu
   03.All Owl Slider
   04.Offcanvas & Cart
   05. Counter
   06. scroll up
   07. Magnify active
   08. Preloder Active
   09. WOW Active
   10. PROGRESSBAR ACTIVATION
   11. Tooltip activation
   12. ui activation
   13. Filter Acitve
   14. Select Two Activation
   15. Paralx Init

* ----------------------------------------------------------------------------------------
*/
(function ($) {
  'use strict';

  jQuery(document).on("ready", function () {
    /*---------------====================
    01.Mobile Menu 
    ================-------------------*/
    if ($(window).width() < 991.98) {
      $(".main-menu ul li.menu-item-has-children > a").on("click", function () {
        var element = $(this).parent("li");

        if (element.hasClass("open")) {
          element.removeClass("open");
          element.find("li").removeClass("open");
          element.find("ul").slideUp(100, "linear");
          element.find(".rt-mega-menu").slideUp(100, "linear");
        } else {
          element.addClass("open");
          element.children("ul").slideDown(100, "linear");
          element.children(".rt-mega-menu").slideDown(100, "linear");
          element.siblings("li").children("ul").slideUp();
          element.siblings("li").removeClass("open");
          element.siblings("li").find("li").removeClass("open");
          element.siblings("li").find("ul").slideUp();
        }
      });
    }



    $(".main-menu ul li").on("click", function () {
      $(".main-menu ul li").removeClass("active");
      $(this).addClass("active");
    }); // mobile menu click

    $(".menu-icon").on("click", function () {
      $(".menu-icon").toggleClass("open-menu");
      $(".main-menu").toggleClass('active-mobile-menu');
      $(".rt-mobile-menu-overlay").addClass("active");
      return false;
    }); // mobile menu close

    $(".rt-mobile-menu-close, .rt-mobile-menu-overlay").on("click", function () {
      $(".menu-icon").removeClass("open-menu");
      $(".main-menu").removeClass('active-mobile-menu');
      $(".rt-mobile-menu-overlay").removeClass("active");
      return false;
    });
    $('a.smooth-scroll').on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 70
      }, 1200, 'easeInOutExpo');
      e.preventDefault();
    });
    $('body').scrollspy({
      target: '.navbar-collapse',
      offset: 195
    });
    $(".navbar-toggler").on('click', function () {
      $(".navbar-toggler").toggleClass("cg");
    });
    $('.open-creatac').on("click", function () {
      $(".rt-modal-input.two , .rt-modal-headr.two").addClass("show-cac");
      $(".rt-modal-input.one, .rt-modal-headr.one").addClass("hide-cac");
    });
    $(".rt-one-page-menu ul > li.nav-item > a.nav-link").on('click', function () {
      $(".navbar-collapse").removeClass("show");
      $(".navbar-toggler").removeClass("cg");
    });

    $('.rt-btn').on('mouseenter', function (e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;

      if ($(this).find('.btn-revel-effects ')) {
        $('.rt-btn .btn-revel-effects ').css({
          top: relY,
          left: relX
        });
      }
    });
    $('.rt-btn').on('mouseout', function (e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;

      if ($(this).find('.btn-revel-effects ')) {
        $('.rt-btn .btn-revel-effects ').css({
          top: relY,
          left: relX
        });
      }
    });

 

    $(".rt-search-open").on("click", function () {
      $(".rt-hidden-search").addClass("rt-search-active");
    });
    $(".rt-search-close").on("click", function () {
      $(".rt-hidden-search").removeClass("rt-search-active");
    });
    $(".rt-search-open2").on("click", function () {
      $(".rt-site-header").toggleClass("searchactive-menuhide");
    });
    
  

  
    /*---------------====================
    09.WOW Active
    ================-------------------*/

    if ($('.wow').length) {
      var wow = new WOW({
        boxClass: 'wow',
        // animated element css class (default is wow)
        animateClass: 'animated',
        // animation css class (default is animated)
        offset: 0,
        // distance to the element when triggering the animation (default is 0)
        mobile: false,
        // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)

      });
      wow.init();
    }
    
   
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
  });


 /*
          ======== 15.Paralx Init =========
        */
       function initparallax() {
        var a = {
            Android: function Android() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function BlackBerry() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function iOS() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function Opera() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function Windows() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function any() {
                return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
            }
        };
        var trueMobile = a.any();

        if (null == trueMobile) {
            var b = new Scrollax();
            b.reload();
            b.init();
        }
    }

    initparallax();





    if ($(".np-active").length > 0) {
      $('.np-active').owlCarousel({
        center: true,
        items:3,
        loop:true,
        margin:0,
        dots: true,
        responsive: {
          210: {
              items: 1
          },
          320: {
              items: 1
          },
          479: {
              items: 1
          },
          768: {
              items: 1
          },
          980: {
              items: 3,
          },
          1199: {
              items: 3
          }
      }

      
    });
    }



   
  });
})(jQuery);