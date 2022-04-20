/*
* ----------------------------------------------------------------------------------------
    Template Name:  Jobpilot - Job Portal Bootstrap 5 Template
    Template URI: https://themeforest.net/user/templatecookie/portfolio
    Description: It’s a High-Quality and well organized Job Board HTML Template.
    Author: templatecookie
    Author URI: https://themeforest.net/user/templatecookie/portfolio
    Version: 1.0.0 

    1.0 Dropdown Menu
    1.01 Sticky Menu  
    1.02 Main Menu  
    1.03 Mobile Menu  
    1.04 Counter  
    1.05 Newestjob  
    1.06 Testomonial  
    1.07 Scrollup  
    1.08 Select-2  
    1.09 Filtering  
    1.09 Map 
    1.1 Map 
    1.1.0 Filter 
    1.1.1 Hide Tag 
    1.1.2 Advanced Filter 
    1.1.3 Custom 
    1.1.4 Conditional Filter 
    1.1.5 Menu Active 
    1.1.6 Card 
    1.1.8 Video Popup 
    

* ----------------------------------------------------------------------------------------
*/
(function ($) {
  /* 1.0 Dropdown Menu  */

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

  /* 1.01 Sticky Menu  */
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
  /* 1.02 Main Menu  */
  $(".main-menu ul li").on("click", function () {
    $(".main-menu ul li").removeClass("active");
    $(this).addClass("active");
  });

  // mobile menu click
  /* 1.03 Mobile Menu */
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
  /* 1.04 Counter */
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  /* 1.05 Newestjob */
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
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
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
  /* 1.06 Testomonial */
  if ($(".testimonail_active").length > 0) {
    $(".testimonail_active").slick({
      slidesToShow: 3,
      infinite: true,
      slidesToScroll: 2,
      dots: true,
      prevArrow: $(".slickprev2"),
      nextArrow: $(".slicknext2"),
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
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

  // scroll up js
  /* 1.07 Scrollup */
  $.scrollUp({
    scrollText: '<i class="ph-caret-up-light"></i>',
  });

  // select 2 active
  /* 1.08 Select-2 */
  $(".rt-selectactive").select2({
    // minimumResultsForSearch: Infinity,
  });

  // filltering
  /* 1.09 Filtering */
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
  /* 1.1 Map */
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


  /* 1.1.0 Filter Sidebar */
  $(".toggle-filter-sidebar").on("click", function () {
    $(".sidebar-widget-overlay, .jobsidebar").toggleClass("active");
  });
  $(".sidebar-widget-overlay, .close-me").on("click", function () {
    $(".sidebar-widget-overlay, .jobsidebar").removeClass("active");
  });


  /* 1.1.1 Hide Tag */
  $(".close-tag").on("click", function () {
    $(this).parent(".single-tag").hide();
  });

  // advanced fillter
  /* 1.1.2 Advanced Filter */
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
  /* 1.1.3 Custom Scroll */
  $(".custom-scroll").overlayScrollbars({
    //className: "os-theme-thick-dark",
  });

  //conditional filter
  /* 1.1.4 Conditional Filter */
  var getToggleClass = document.getElementById("togglclass1");
  var toggleSidebar = document.getElementById("toggoleSidebar");
  var productCloumnClass = document.getElementsByClassName("condition_class");

  $(".toggole-colum-classes").on("click", function () {
    $(toggleSidebar).toggleClass("d-none");

    if (!toggleSidebar.classList.contains("d-none")) {
      getToggleClass.classList.add("col-lg-8");
      getToggleClass.classList.remove("col-xl-12");
    } else {
      getToggleClass.classList.add("col-xl-12");
      getToggleClass.classList.remove("col-lg-8");
    }

    if (getToggleClass.classList.contains("col-lg-8")) {
      $(productCloumnClass).removeClass("col-xl-4");
    } else {
      $(productCloumnClass).addClass("col-xl-4");
    }
  });

  // menu active classes
  /* 1.1.5 Menu Active */
  $(".menu-active-classes li").on("click", function () {
    $(".menu-active-classes li").removeClass("active");
    $(this).addClass("active");
  });
  $(function () {
    $(
      '.menu-active-classes li a[href^="/' +
        location.pathname.split("/")[1] +
        '"]'
    ).addClass("active");
  });

  var hasckeditor = document.getElementById("default");
  if (hasckeditor) {
    ClassicEditor.create(document.querySelector("#default")).catch((error) => {
      console.error(error);
    });
  }
  // card
  /* 1.1.6 Card */
  var stripe = Stripe(
    "pk_test_51JRsN5Cl4slzBgQyhl4Wgui3DkB1y2LDYLJE1TndQiPwtfdliCotVcREIzViCP6SCxhY36u6OpzcqlZwbVd291C800phGfRoMt"
  );
  var elements = stripe.elements();
  var cardElement = elements.create("card", {
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: "#333",
        fontWeight: "400",
        fontFamily: "Inter,sans-serif",
        fontSize: "16px",
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
  cardElement.mount("#card-element");

  // chart
  /* 1.1.7 Chart */
  var options = {
    chart: {
      height: 340,
      type: "area",
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: { curve: "smooth", width: 2 },
    series: [
      {
        name: "Series 1",
        data: [50, 75, 60, 80, 55, 70, 60],
      },
    ],
    colors: ["#0066FF"],

    fill: {
      type: "gradient",
      colors: "#0066FF",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.1,
        opacityTo: 0.9,
        stops: [0, 100, 0],
      },
    },
    markers: {
      size: 5,
      colors: ["#fff"],
      strokeColor: "#0066FF",
      strokeWidth: 2,
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
    },
    shared: false,
    style: {
      fontSize: '16px',
      fontFamily: "Inter",
    },
    marker: {
      show: false,
  },
  custom: function({series, seriesIndex, dataPointIndex, w}) {
    return '<div class="arrow_box">' +
      '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
      '<span class="d-block">' +
      w.globals.labels[dataPointIndex] +
      ': ' +
      '</div>'
  },
      
    },
    xaxis: {
      borderColor: "red",
      categories: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    },
  };
if(document.getElementById("area-spaline")){
  var chart = new ApexCharts(document.querySelector("#area-spaline"), options);

  chart.render();
}
$(window).Scrollax();

  // video popup
  /* 1.1.8 Video Popup */
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

  AOS.init({
    disable: "mobile",
    easing: 'ease-in-out-sine',
    once: true, 
  });

  //toggle password 
  $(".togglepass").on("click", function () {
    var x = document.getElementById("myInput");
    if(x.type === "password"){
        x.type = "text" ;
    }else{
        x.type = "password" ;
    }
  })
  // toggle password
  $(".togglepass2").on("click", function () {
    var y = document.getElementById("myInput2");
    if(y.type === "password"){
        y.type = "text" ;
    }else{
        y.type = "password" ;
    }
  });

  //sidbear toggle 
  $(".sidebar-open-nav").on("click", function () {
    $(".d-sidebar, .d-page-content ").toggleClass("acitve");
  })

  // pricing toggle 
  $("#flexSwitchCheckDefault").on("change", function () {
    $("body").toggleClass("price-toggole");
  })

  // notifications
  const $menu = $('.notification-icon');
    $(document).mouseup((e) => {
      if (
        !$menu.is(e.target) && // if the target of the click isn't the container...
        $menu.has(e.target).length === 0
      ) {
        // ... nor a descendant of the container
        $menu.removeClass('notification-visiable');
      }
    });

    $('.notification-icon').on('click', (event) => {
      event.preventDefault();
      $menu.toggleClass('notification-visiable');
    });
    //end notification
  
  // 6. input type changer 
  function showPassword(input, icon) { 
  icon.addEventListener('click', (e) => { 
    // todo 1:  toggle eye show / hide  
    icon.classList.toggle('ph-eye-slash');
    // todo 2: input type 
    input.type === 'password' ? input.type = 'text' : input.type = 'password';
  })
  }

  const input =  document.querySelector("#password-hide_show");
  const inputIcon = document.querySelector(".has-badge i");

  const finputOne = document.querySelector("#password-hide_show1");
  const ficonOne = document.querySelector(".select-icon__one i");

  
  // login & registration page
  if(input || inputIcon) { 
    showPassword(input,inputIcon)
  }
    if (finputOne || ficonOne) { 
    showPassword(finputOne,ficonOne)
  }


$('#basic').flagStrap();

// top company slider init
// if ($(".testimonal2-active").length > 0) {
//   $(".testimonal2-active").slick({
//     slidesToShow: 1,
//     infinite: true,
//     slidesToScroll: 1,
//     dots: true,
//     fade: true,
//     prevArrow: $(".slickprev3"),
//     nextArrow: $(".slicknext3"),
//   });
// }

if ($(".top-company-slider").length > 0) {
  $(".top-company-slider").slick({
      dots: false,
      rows: 2,
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        }
     
      ],
    });
}

// dataicker
$( "#datepicker" ).datepicker({
  dateFormat: "dd-mm-yy"
  ,	duration: "fast"
});


})(jQuery);


  var input = document.querySelector("#phone");
  if(input){
  window.intlTelInput(input, {
      separateDialCode: true,
  });
}


  var input2 = document.querySelector("#phone2");
  if(input2){
    window.intlTelInput(input2, {
    separateDialCode: true,
});
}



  //  Range Slider
  const sliderRange = document.querySelector('.sliderrange');
  const output = document.querySelector('#value-range');
  if (output) {
    output.innerHTML = `${sliderRange.value} miles`;
  }
  
  if (sliderRange) {
    sliderRange.oninput = function () {
      output.innerHTML = `${this.value} miles`;
    };
  
    sliderRange.addEventListener('mousemove', function () {
      var x = sliderRange.value;
  
      var color = `linear-gradient(
        90deg,
        #0066FF ${x}%,
        rgb(218, 221, 229) ${x}%
      )`;
  
      sliderRange.style.background = color;
    });
  }
  