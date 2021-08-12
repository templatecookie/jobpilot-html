/*
* ----------------------------------------------------------------------------------------
    Template Name: 
    Template URI: 
    Description: 
    Author: 
    Author URI: 
    Version: 
  

* ----------------------------------------------------------------------------------------
*/
(function($) {


    
    if ($(window).width() < 991.98) {
        $(".menu-item-has-children > a").on("click", function() {
            var element = $(this).parent("li");
            if (element.hasClass("open")) {
                element.removeClass("open");
                element.find("li").removeClass("open");
                element.find("ul").slideUp(500);
                element.find(".rt-mega-menu").slideUp(500);
            } else {
                element.addClass("open");
                element.children("ul").slideDown(500);
                element.children(".rt-mega-menu").slideDown(500);
                element.siblings("li").children("ul").slideUp();
                element.siblings("li").removeClass("open");
                element.siblings("li").find("li").removeClass("open");
                element.siblings("li").find("ul").slideUp();
            }
        });
    }
 
 
    function stickyHeader() {
        let mainheader = $('.rt-sticky'),
            height = mainheader.outerHeight(),
            scroll = $(document).scrollTop();
        $(window).on('load', function() {
            if ($(document).scrollTop() > height) {
                if (mainheader.hasClass('rt-sticky-active')) {
                    mainheader.removeClass('rt-sticky-active');
                } else {
                    mainheader.addClass('rt-sticky-active');
                }
            }
        });
        $(window).on('scroll', function() {
            let scrolled = $(document).scrollTop(),
                header = $('.rt-sticky-active');
            if (scrolled > scroll) {
                header.addClass('sticky');
            } else {
                header.removeClass('sticky');
            }
            if (scrolled === 0) {
                mainheader.removeClass('rt-sticky-active');
            } else {
                mainheader.addClass('rt-sticky-active');
            }
            scroll = $(document).scrollTop();
        });
    }
    
    if ($(window).width() > 991.98) {
        stickyHeader();
    }




        // menu menu active link

        $(".main-menu ul li").on("click", function () {

            $(".main-menu ul li").removeClass("active");
            $(this).addClass("active");

        });


        // mobile menu click
        $(".menu-click").on("click", function () {

            $(".main-menu").toggleClass('active-mobile-menu');
            $(".rt-mobile-menu-overlay").addClass("active")
            return false;
        });

        $(".rt-mobile-menu-close, .rt-mobile-menu-overlay").on("click", function () {

            $(".main-menu").removeClass('active-mobile-menu');
            $(".rt-mobile-menu-overlay").removeClass("active")
            return false;
        });


 })(jQuery)
 
 
 
 
 