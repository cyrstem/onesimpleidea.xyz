function inicio(){
    // $(".work").css("display","none");
    console.log("./ready Clear");
     $('button').click(function(){
        $(".intro").fadeOut("slow", function(){
            $(".intro").remove();
            $("#paint").remove();
        });
            misCosas();
    });
}//end setup

function misCosas(){
 console.log("./Loading Proyectos");
 $(".work").load("work.html").prepend("body");
 $('html').css("overflow-y","scroll");
iso();
}// mis cosas 

function iso(){
 console.log("./listo -fin creo ojala ya nose qmas hacer ");
     var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('center').remove();
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 450,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
}
$( window ).scroll(function() {
    $('center').remove();
});

window.onload = inicio;
