

$(".work").css("display","none");
//  var $elementos = $('.webs,.grap,.code');

//inicia  lalalal
function inicio(){
    console.log("./ready Clear");
	//esconde  portafolio

	$('button').click(function(){
        $('html').css("overflow-y","scroll");
		$(".intro").fadeOut("slow", function(){
			$(".intro").remove();
            $("#paint").remove();
		});
	 		$(".work").css("display","block");
            $(".work").fadeIn("slow");
            misCosas();
	});

    
}//end setup

 function misCosas(){
     //$elementos.hide();
    console.log("./Loading Proyectos");
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
