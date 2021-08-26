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
(function ($) {
  if ($(window).width() < 991.98) {
    $(".menu-item-has-children > a").on("click", function () {
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

  $(".has-children > .jobwidget_tiitle").on("click", function () {
    var element = $(this).parent("li");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
      element.find("ul").slideUp(200);
    } else {
      element.addClass("open");
      element.children("ul").slideDown(200);
      element.siblings("li").children("ul").slideUp();
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
      element.siblings("li").find("ul").slideUp();
    }
  });

  function stickyHeader() {
    let mainheader = $(".rt-sticky"),
      height = mainheader.outerHeight(),
      scroll = $(document).scrollTop();
    $(window).on("load", function () {
      if ($(document).scrollTop() > height) {
        if (mainheader.hasClass("rt-sticky-active")) {
          mainheader.removeClass("rt-sticky-active");
        } else {
          mainheader.addClass("rt-sticky-active");
        }
      }
    });
    $(window).on("scroll", function () {
      let scrolled = $(document).scrollTop(),
        header = $(".rt-sticky-active");
      if (scrolled > scroll) {
        header.addClass("sticky");
      } else {
        header.removeClass("sticky");
      }
      if (scrolled === 0) {
        mainheader.removeClass("rt-sticky-active");
      } else {
        mainheader.addClass("rt-sticky-active");
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
    $(".main-menu").toggleClass("active-mobile-menu");
    $(".rt-mobile-menu-overlay").addClass("active");
    return false;
  });

  $(".rt-mobile-menu-close, .rt-mobile-menu-overlay").on("click", function () {
    $(".main-menu").removeClass("active-mobile-menu");
    $(".rt-mobile-menu-overlay").removeClass("active");
    return false;
  });

  // counter active
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  if ($(".newestjob_active").length > 0) {
    $(".newestjob_active").slick({
      slidesToShow: 3,
      infinite: true,
      slidesToScroll: 2,
      dots: true,
      prevArrow: $(".slickprev"),
      nextArrow: $(".slicknext"),
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 210,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  if ($(".testimonail_active").length > 0) {
    $(".testimonail_active").slick({
      slidesToShow: 3,
      infinite: true,
      slidesToScroll: 2,
      dots: true,
      prevArrow: $(".slickprev2"),
      nextArrow: $(".slicknext2"),
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 210,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  if ($(".testimonal2-active").length > 0) {
    $(".testimonal2-active").slick({
      slidesToShow: 1,
      infinite: true,
      slidesToScroll: 1,
      dots: true,
      fade: true,
      prevArrow: $(".slickprev3"),
      nextArrow: $(".slicknext3"),
    });
  }
  // brands active
  if ($(".brand-active").length > 0) {
    $(".brand-active").slick({
      slidesToShow: 6,
      infinite: true,
      slidesToScroll: 4,
      dots: false,
      arrows: false,

      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 210,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  // scroll up js
  $.scrollUp({
    scrollText: '<i class="ph-caret-up-light"></i>',

  });

  // select 2 active
  $(".rt-selectactive").select2({
    // minimumResultsForSearch: Infinity,

  });

  // filltering
  $(".grid").imagesLoaded(function () {
    var $grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1,
      },
    });
  });
  $(".filter-list").on("click", "li", function () {
    $(".filter-list li").removeClass("active");
    $(this).addClass("active");
    var filterValue = $(this).attr("data-filter");
    $(".grid").isotope({
      filter: filterValue,
    });
    $(window).trigger("resize");
  });

  // map active
  var Map1 = document.getElementById("mapid");
  if (Map1) {
    var mymap = L.map("mapid").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      accessToken: "your.mapbox.access.token",
    }).addTo(mymap);
  }

  // filter sidebar toggole
  $(".toggle-filter-sidebar").on("click", function () {
    $(".sidebar-widget-overlay, .jobsidebar").toggleClass("active");
  });
  $(".sidebar-widget-overlay, .close-me").on("click", function () {
    $(".sidebar-widget-overlay, .jobsidebar").removeClass("active");
  });

  // hide tags

  $(".close-tag").on("click", function () {
    $(this).parent(".single-tag").hide();
  });

  // advanced fillter
  $(".open-adf").on("click", function () {
    $(".jobsearchBox").toggleClass("active-adf");
    $(".job-filter-overlay").toggleClass("active");
    $(".advance-hidden-filter-menu").slideToggle(300);
    $("body").toggleClass("body-no-scrolling");
  });
  $(".job-filter-overlay").on("click", function () {
    $(".jobsearchBox").removeClass("active-adf");
    $(".job-filter-overlay").removeClass("active");
    $(".advance-hidden-filter-menu").slideUp(300);
    $("body").removeClass("body-no-scrolling");
  });

  // custom scroll
  $(".custom-scroll").overlayScrollbars({
    //className: "os-theme-thick-dark",
  });

  //conditional filter
  var getToggleClass = document.getElementById("togglclass1");
  var toggleSidebar = document.getElementById("toggoleSidebar");
  var productCloumnClass = document.getElementsByClassName("condition_class");

  $(".toggole-colum-classes").on("click", function () {
    $(toggleSidebar).toggleClass("d-none");

    if (!toggleSidebar.classList.contains("d-none")) {
      getToggleClass.classList.add("col-xl-8");
      getToggleClass.classList.remove("col-xl-12");
    } else {
      getToggleClass.classList.add("col-xl-12");
      getToggleClass.classList.remove("col-xl-8");
    }

    if (getToggleClass.classList.contains("col-xl-8")) {
      $(productCloumnClass).removeClass("col-xl-4");
    } else {
      $(productCloumnClass).addClass("col-xl-4");
    }
  });

// menu active classes 
$(".menu-active-classes li").on("click", function(){

  $(".menu-active-classes li").removeClass("active");
  $(this).addClass("active");
});
$(function() {
  $('.menu-active-classes li a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});

var hasckeditor = document.getElementById("default");
if(hasckeditor){
  ClassicEditor
  .create( document.querySelector( '#default' ) )
  .catch( error => {
      console.error( error );
  } );
}


var stripe = Stripe('pk_test_51JRsN5Cl4slzBgQyhl4Wgui3DkB1y2LDYLJE1TndQiPwtfdliCotVcREIzViCP6SCxhY36u6OpzcqlZwbVd291C800phGfRoMt');
  var elements = stripe.elements();
  var cardElement = elements.create('card', {
    style: {
      base: {
        iconColor: '#c4f0ff',
        color: '#333',
        fontWeight: '400',
        fontFamily: 'Inter,sans-serif',
        fontSize: '16px',
        // fontSmoothing: 'antialiased',
        // ':-webkit-autofill': {
        //   color: '#fce883',
        // },
        // '::placeholder': {
        //   color: '#87BBFD',
        // },
      },
      // invalid: {
      //   iconColor: '#FFC7EE',
      //   color: '#FFC7EE',
      // },
    },
  });
  cardElement.mount('#card-element');
 
  var options = {
    chart: {
      height: 340,
      type: "area",
      toolbar: {
        autoSelected: "pan",
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: { curve: "smooth", width: 2 },
    series: [
      {
        name: "Series 1",
        data: [50, 75, 60, 80, 55, 70, 60] 
      }
    ],
    colors: ['#0066FF'],
    
    fill: {
      type: "gradient",
      colors: "#0066FF",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.1,
        opacityTo: 0.9,
        stops: [0, 100 , 0]
      }
    },
    markers: {
      size: 5,
      colors: ["#fff"],
      strokeColor: "#0066FF",
      strokeWidth: 2
    },
    tooltip: {
      theme: "dark"
    },
    xaxis: {
      borderColor: "red",
      categories: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
      ]
    }
  };

  var chart = new ApexCharts(
    document.querySelector("#area-spaline"),
    options
);

chart.render();
// playvideo 
$(".playVideo").magnificPopup({
  type: "iframe",
  iframe: {
    patterns: {
      youtube: {
        index: "youtube.com/",
        id: function (url) {
          var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
          if (!m || !m[1]) return null;
          return m[1];
        },
        src: "//www.youtube.com/embed/%id%?rel=0&autoplay=1",
      },

      vimeo: {
        index: "vimeo.com/",
        id: function (url) {
          var m = url.match(
            /(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/
          );
          if (!m || !m[5]) return null;
          return m[5];
        },
        src: "//player.vimeo.com/video/%id%?autoplay=1",
      },
    },
  },
  removalDelay: 300,
  mainClass: "mfp-fade",
});


})(jQuery);
