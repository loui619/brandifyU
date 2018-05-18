$(document).ready(function(){
    var id=0;
    $('.carousel').carousel();
    $('#menuIcon').click(function(){
        $('.menuHolder').toggle('slide');
        $(this).toggleClass('open');
        $('#'+id).hide('slide');
    });
    $(".mainNav a[href^='#']").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 300, function(){
            window.location.hash = this.hash;
        });
    });
    $('.menuOpen').click(function(){
         id = $(this).find('a').attr('data-type');
        $('#'+id).show('slide');
    });
});

   