  console.log("./ready Clear");
//----------------------------------------------------
//Inicio
//----------------------------------------------------
var isUp;
var $container;

function inicio(){
    $("button").click(function(){
    $(".intro").fadeOut("slow",function(){
        $(".intro").remove();
        $("#paint").remove();
    });
//ejecuta despue del click
  $(".work").load("work.html",laGrid).prependTo("body");
   $('body').css("background-color","#1f1f1f");
    $('html').css("overflow-y","scroll");
   
//funcion del scroll
  
});//aqui termina boton

}//fin setup


//----------------------------------------------------
//loading y fincionamiento de isotope
//----------------------------------------------------
function laGrid(){
    $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.portfolioFilter a').click(function(){
      $('#mensaje').fadeOut("slow");
       $('#mensaje').remove();

        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions:{
                duration:750,
                easing:'linear',
                queue: false
            }
        });
        return true;
    });
}
//----------------------------------------------------
// update creo 
//----------------------------------------------------
function update(){

}

//----------------------------------------------------
//inicia todo 
//----------------------------------------------------

window.onload = inicio;