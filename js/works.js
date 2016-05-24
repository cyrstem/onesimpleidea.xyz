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
    //$(".work").load("work.html").append('body');
    $('html').css("overflow-y","scroll");

    isoTest();  
}// mis cosas 

function isoTest(){
console.log("./listo -fin creo ojala ya nose qmas hacer ");
$('body').css("background-color","000000");
 var $container = $('.portfolioContainer');
    $container.isotope({
        filter:'*',
        animationOptions:{
            duration:750,
            easing:'linear',
            queue:false
        }
    });

$('.portfolioFilter a').on("click",function(){
    console.log("hello");
});

}

$( window ).scroll(function() {
    $('center').remove();
});

window.onload = inicio;

