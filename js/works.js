function inicio(){
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
    $(".work").load("work.html").prependTo("body");
    $('html').css("overflow-y","scroll");

    isoTest();  
}// mis cosas 

function isoTest(){
console.log("./listo -fin creo ojala ya nose qmas hacer ");
$('body').css("background-color","000000");
}

$( window ).scroll(function() {
    $('center').remove();
});

function listo(){
var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
});//load init

$('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); //end filter lit
}


window.onload = inicio;
window.ready = listo;

