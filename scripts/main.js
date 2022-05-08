
var appController = {
    controller: new ScrollMagic.Controller(),

      init: function(){
          appController.stickyNav();
          appController.hamburgerNavClick();
          appController.chartClick();
      },

      stickyNav: function(){

          // Custom function which toggles between sticky class (is-sticky)
            var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
                var stickyHeight = sticky.outerHeight();
                var stickyTop = stickyWrapper.offset().top;
                if (scrollElement.scrollTop() >= (stickyTop-40)) {
                    stickyWrapper.height(stickyHeight);
                    sticky.addClass("is-sticky");
                }
                else {
                    sticky.removeClass("is-sticky");
                    stickyWrapper.height('auto');
                }
            };

            // Find all data-toggle="sticky-onscroll" elements
            $('[data-toggle="sticky-onscroll"]').each(function () {
                var sticky = $(this);
                var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
                sticky.before(stickyWrapper);
                console.log('w:' + $(window).width());
                if($(window).width() > 767){
                    sticky.addClass('sticky');
                }
                // Scroll & resize events
                $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
                    if($(window).width() > 767){
                        stickyToggle(sticky, stickyWrapper, $(this));
                        if($('nav').is(':visible')) {
                            $('nav').hide();
                            $('.hamburger').removeClass('active');
                        } else {

                        }
                    }
                });

                // On page load
                stickyToggle(sticky, stickyWrapper, $(window));
            });
        },

        chartClick: function(){

            $('.mobile-graphs .figure').click(function() {
                $(this).parent().toggleClass("show");
            });

        },

        hamburgerNavClick: function(){

            $('.hamburger').click(function() {
                if(!$('nav').is(':visible')) {
                    $('nav').slideDown();
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                    $('nav').slideUp();
                }
            });


            $(document).on('click',function (e) {
                var popup = $("#navbar");
                var hamburger = $("#hamburger");
                if ((!popup.is(e.target) && popup.has(e.target).length == 0) && (!hamburger.is(e.target) && hamburger.has(e.target).length == 0)) {
                    popup.slideUp();
                    $('.hamburger').removeClass('active');
                }
            });
        },

}


$(document).ready(function () {

    appController.init();

});
