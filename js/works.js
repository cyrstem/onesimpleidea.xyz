 //console.log("./ready Clear");
var me =[
	"<h2>I'm a designer/coder with a background in Multimedia Design, i love to code and create interactive apps.</h2>",
	"<h2>I'm also fluent in: /Interaction Design /3d Animation /Motion Design.</h2>"
].join("\n");

var misDatos =  [
	"<h2>you can contact me on this networks:</h2>",
    '<center>',
    '<a href="http://ec.linkedin.com/in/jacobohz" target="_blank"><img src="assets/in.png" width="45"></a>',
	'<a href="https://github.com/cyrstem/"target="_blank"><img src="assets/git.png" width="45"></a>',
	'<a href="mailto:cyrstem@gmail.com"><img src="assets/mail.png" width="45"></a>',
	'</center>'
].join("\n");


$(document).ready(function(){	

	$("#w").click(function(){
		$('.all').html($('<div>', {class: 'work'}));

		$(".work").css("display","block");
		$(".work").css({"-webkit-animation":"bounceIn 1s ease-in"," -moz-animation":"bounceIn 1s ease-in","animation":"bounceIn 1.2s ease-in"});
		// $(".work").append(works);
		carga();
				
	});

	$("#i").click(function(){
		$(".work").hide();
		$('.all').html($('<div>', {class: 'me'}));
		$(".me").css({"-webkit-animation":"bounceIn 1s ease-in"," -moz-animation":"bounceIn 1s ease-in","animation":"bounceIn 1.2s ease-in"});
		$(".me").append(me);

	});

	$("#c").click(function(){
		$(".work").hide();
		$('.all').html($('<div>', {class: 'contact'}));
		$(".contact").append(misDatos);
		$(".contact").css({"-webkit-animation":"bounceIn 1s ease-in"," -moz-animation":"bounceIn 1s ease-in","animation":"bounceIn 1.3s ease-in"});

	});

});

function carga(){
	$('#container').imagesLoaded()
  .always( function( instance ) {
    console.log('all images loaded');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  });
}