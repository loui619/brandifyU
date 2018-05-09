$(document).ready(function(){
    $('.menuIconContainer').click(function(){
        $('.menuItems').toggle("slide");
        //$('.icon2').toggleClass('menuSlide1');
        //$('.icon3').toggleClass('menuSlide2');
    });
    $('.design').click(function(){
        $('.homeImage').hide("slide");
        $('.gallery').show("slide");
    })
    $('.home').click(function(){
        $('.gallery').hide("slide");
        $('.homeImage').show("slide");
    });
    $('.carousel').carousel();

    $(".serviceMenu").hover(
        function () {
           $('ul.nav-submenu').slideDown('medium');
        }, 
        function () {
           $('ul.nav-submenu').slideUp('medium');
        }
      );
      $('#menuIcon').click(function(){
		$(this).toggleClass('open');
    });
    $(".mainNav a[href^='#']").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 300, function(){
            window.location.hash = this.hash;
        });
    });
});

   