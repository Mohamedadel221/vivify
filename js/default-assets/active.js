(function ($) {
  "use strict";

  var mona_window = $(window);

  // *******************************
  // :: 1.0 Preloader Active Code
  // *******************************
  mona_window.on("load", function () {
    setTimeout(() => {
      $(".preloader").fadeOut("3000", function () {
        $(this).remove();
        // if (mona_window.width() > 767) {
        // }
        new WOW().init();
        $("#content").fadeIn(500);
        if ($(".swiper").length) {
          const autoplayDelay = 5000; // Swiper autoplay delay in milliseconds (5 seconds)
          const swiper = new Swiper(".swiper", {
            slidesPerView: 1,
            effect: "fade",
            rewind: true,
            speed: 2000,
            autoplay: {
              delay: autoplayDelay,
              disableOnInteraction: false,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            on: {
              autoplayStart: function () {
                startProgressBarAnimation();
              },
              slideChangeTransitionStart: function () {
                // Update progress bar at the start of the transition
                // const progressBar = $(".swiper-progress-bar");
                // progressBar.css("animation", "none");
                updateSlideCount();
                resetProgressBarAnimation();
                startProgressBarAnimation();
              },
            },
          });
          // Function to start progress bar animation
          function startProgressBarAnimation() {
            const progressBar = $(".swiper-progress-bar");
            progressBar.css("animation", "none"); // Reset any previous animation
            void progressBar[0].offsetWidth; // Trigger reflow to restart the animation
            progressBar.css(
              "animation",
              `progress-animation ${autoplayDelay / 1000}s linear forwards`
            );
          }
          function resetProgressBarAnimation() {
            const progressBar = $(".swiper-progress-bar");
            progressBar.css("width", "0%"); // Reset width when slide changes
            progressBar.css("animation", "none"); // Reset animation
          }

          function updateSlideCount() {
            const currentSlide = swiper.realIndex + 1; // Get current slide index (realIndex avoids loop duplicates)
            const totalSlides = swiper.slides.length; // Subtract loop duplicates
            $("#current-slide").text(currentSlide);
            $("#total-slides").text(totalSlides);
          }
          updateSlideCount();
        }
        const section_2 = document.getElementById("horizontal");
        if (section_2) {
          if (window.innerWidth >= "1200") {
            const section_2 = document.getElementById("horizontal");
            let box_items = gsap.utils?.toArray(".horizontal-item");
            // if (!section_2 || box_items.length === 0) return;
            const calculateScrollEnd = () => {
              const lastItem = box_items[box_items.length - 1];
              const sectionOffsetWidth = section_2.offsetWidth;
              const lastItemOffsetWidth = lastItem.offsetWidth;

              // Total width required for all items minus the last item's width
              return (
                section_2.scrollWidth - sectionOffsetWidth + lastItemOffsetWidth
              );
            };
            gsap.to(box_items, {
              xPercent: -80 * (box_items.length - 1), // Use -100% for full scroll effect
              // duarition: 10,
              ease: "none",
              scrollTrigger: {
                trigger: section_2,
                pin: true,
                scrub: 1.5,
                // snap: 1 / (box_items.length - 1),
                snap: {
                  snapTo: 1 / (box_items.length - 1),
                  duration: 10,
                  ease: "power1.inOut",
                },
                // end: "+=" + section_2?.offsetWidth,
                end: () => `+=${calculateScrollEnd()}`, // Dynamically calculate scroll distance
                markers: false,
              },
            });
          } else {
            const section_2 = document.getElementById("horizontal");
            let box_items = gsap.utils?.toArray(".horizontal-item");
            // if (!section_2 || box_items.length === 0) return;
            if (box_items && box_items.length > 0) {
              const calculateScrollEnd = () => {
                const lastItem = box_items[box_items.length - 1];
                const sectionOffsetWidth = section_2.offsetWidth;
                const lastItemOffsetWidth = lastItem.offsetWidth;

                // Total width required for all items minus the last item's width
                return (
                  section_2.scrollWidth -
                  sectionOffsetWidth +
                  lastItemOffsetWidth
                );
              };
              gsap.to(box_items, {
                xPercent: -106 * (box_items.length - 1), // Use -100% for full scroll effect
                // duarition: 10,
                ease: "none",
                scrollTrigger: {
                  trigger: section_2,
                  pin: true,
                  scrub: 1.5,
                  // snap: 1 / (box_items.length - 1),
                  snap: {
                    snapTo: 1 / (box_items.length - 1),
                    duration: 10,
                    ease: "power1.inOut",
                  },
                  // end: "+=" + section_2?.offsetWidth,
                  end: () => `+=${calculateScrollEnd()}`, // Dynamically calculate scroll distance
                  markers: false,
                },
              });
            }
          }
        }
        const hero_bg = document.getElementById("hero-background");
        if (hero_bg) {
          gsap.to(".hero-bg2", {
            backgroundPosition: "0% 100%",
            scrollTrigger: {
              trigger: ".hero-bg2",
              start: "top center",
              end: "bottom top",
              scrub: 3,
              markers: false,
            },
          });
        }
      });
    }, 4500);
  });

  mona_window.on("load", function () {
    setTimeout(() => {
      $(".preload-holder").addClass("show");
    }, 200);
  });

  // *******************************
  // :: 2.0 ClassyNav Active Code
  // *******************************

  if ($.fn.classyNav) {
    $("#monaNav").classyNav();
  }

  // ***********************************
  // :: 3.0 Welcome Carousel Active Code
  // ***********************************

  //   $(document).on("mousemove", function (event) {
  //     $("#highlight").css({
  //       top: event.pageY + "px",
  //       left: event.pageX + "px",
  //     });
  //   });

  $(document).on("mousemove", function (event) {
    const x = event.pageX; // Mouse X position
    const y = event.pageY; // Mouse Y position

    // Translate the element using transform matrix
    $("#highlight").css(
      "transform",
      `matrix(1, 0, 0, 1, ${x}, ${y})translate(-50% , -50%)`
    );
  });

  if ($.fn.owlCarousel) {
    var welcomeSlider = $(".welcome-slides");
    welcomeSlider.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
      autoplayTimeout: 7000,
      nav: true,
      navText: ["", '<i class="fa fa-angle-left" aria-hidden="true"></i>'],
    });
    welcomeSlider.on("translate.owl.carousel", function () {
      var layer = $("[data-animation]");
      layer.each(function () {
        var anim_name = $(this).data("animation");
        $(this)
          .removeClass("animated " + anim_name)
          .css("opacity", "0");
      });
    });
    $("[data-delay]").each(function () {
      var anim_del = $(this).data("delay");
      $(this).css("animation-delay", anim_del);
    });
    $("[data-duration]").each(function () {
      var anim_dur = $(this).data("duration");
      $(this).css("animation-duration", anim_dur);
    });
    welcomeSlider.on("translated.owl.carousel", function () {
      var layer = welcomeSlider
        .find(".owl-item.active")
        .find("[data-animation]");
      layer.each(function () {
        var anim_name = $(this).data("animation");
        $(this)
          .addClass("animated " + anim_name)
          .css("opacity", "1");
      });
    });
  }

  // ***********************************
  // :: 4.0 Post Carousel Active Code
  // ***********************************
  if ($.fn.owlCarousel) {
    var slidePost = $(".slide-post");
    slidePost.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      smartSpeed: 1500,
    });
  }

  // ***********************************
  // :: 5.0 Model Carousel Active Code
  // ***********************************
  if ($.fn.owlCarousel) {
    var sliderPost = $(
      ".mona-all-model-slide, .mona-models-slide, .mona-actor-slide, .mona-singer-slide"
    );
    sliderPost.owlCarousel({
      items: 5,
      margin: 10,
      loop: true,
      autoplay: true,
      autoplayTimeout: 10000,
      smartSpeed: 1500,
      nav: true,
      navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          items: 4,
        },
        1200: {
          items: 5,
        },
      },
    });
  }

  // ***********************************
  // :: 6.0 ImagesLoaded Active Code
  // ***********************************
  if ($.fn.imagesLoaded) {
    $(".mona-portfolio").imagesLoaded(function () {
      // init Isotope
      var $grid = $(".mona-portfolio").isotope({
        itemSelector: ".single_gallery_item",
        percentPosition: true,
        masonry: {
          columnWidth: ".single_gallery_item",
        },
      });
    });
  }

  // ***********************************
  // :: 7.0 Slick Slider Active Code
  // ***********************************
  if ($.fn.slick) {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
    });
    $(".slider-nav").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      asNavFor: ".slider-for",
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      slide: "div",
      autoplay: true,
      centerMode: true,
      centerPadding: "30px",
      mobileFirst: true,
      prevArrow: '<i class="fa fa-angle-left"></i>',
      nextArrow: '<i class="fa fa-angle-right"></i>',
    });
  }

  // ***********************************
  // :: 8.0 Magnific Popup Active Code
  // ***********************************
  if ($.fn.magnificPopup) {
    $(".video-play-btn").magnificPopup({
      type: "iframe",
    });
  }

  // ***********************************
  // :: 9.0 Tooltip Active Code
  // ***********************************
  if ($.fn.tooltip) {
    $('[data-toggle="tooltip"]').tooltip();
  }

  // ***********************************
  // :: 11.0 Jarallax Active Code
  // ***********************************
  if ($.fn.jarallax) {
    $(".jarallax").jarallax({
      speed: 0.2,
    });
  }

  // ***********************************
  // :: 12.0 Scrollup Active Code
  // ***********************************
  mona_window.on("scroll", function () {
    if (mona_window.scrollTop() > 700) {
      $("#scrollTop").css({ display: "block" });
    } else {
      $("#scrollTop").css({ display: "none" });
    }
  });
  $("#scrollTop").on("click", function () {
    lenis.scrollTo(0, { duration: 2, easing: (t) => 1 - Math.pow(1 - t, 3) }); // Smooth cubic easing
  });

  // if ($.fn.scrollUp) {
  //   mona_window.scrollUp({
  //     scrollSpeed: 2000,
  //     scrollText: '<i class="fa fa-angle-up"</i>',
  //   });
  // }

  // ***********************************
  // :: 13.0 Sticky Active Code
  // ***********************************
  mona_window.on("scroll", function () {
    if (mona_window.scrollTop() > 0) {
      $(".main-header-area").addClass("sticky");
    } else {
      $(".main-header-area").removeClass("sticky");
    }
  });

  // ***********************************
  // :: 14.0 Prevent Default 'a' Click
  // ***********************************
  $('a[href="#"]').click(function ($) {
    $.preventDefault();
  });

  // ***********************************
  // scroll lens
  // ***********************************
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smooth: true,
    smoothTouch: true,
    touchMultiplier: 2,
    infinite: false,
    virtualScroll: (e) => {
      e.deltaY /= 1.6;
    },
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // ***********************************
  // gsap animation
  // ***********************************
  //   gsap.to('.welcome-area', {
  //     scrollTrigger: {
  //       trigger: '.welcome-area2',
  //       start: 'top bottom',
  //       end: 'bottom top',
  //       scrub: true,
  //       markers: false,
  //       toggleActions: 'play reverse play reverse',
  //     },
  //     yPercent: 100,
  //     // duration: 3,
  //   });

  //   ScrollTrigger.create({
  //     trigger: ".mona-about-us-area",
  //     start:"top center",
  //     end: "bottom center",
  //     scrub: 3,
  //     toggleClass: {targets: ".body-wrapper" , className: "bg-change"}
  //   });

  const svgPath = document.querySelectorAll(".path");

  const svgText = anime({
    targets: svgPath,
    loop: true,
    direction: "alternate",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 2000,
    delay: (el, i) => {
      return i * 250;
    },
  });
})(jQuery);
