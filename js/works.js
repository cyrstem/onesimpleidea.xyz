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
  var progressbar = $('#progressbar'),
    max = progressbar.attr('max'),
    time = (1000/max)*5,  
      value = progressbar.val();
 
  var loading = function() {
      value += 1;
      addValue = progressbar.val(value);
       
      $('.progress-value').html(value + '%');
 
      if (value == max) {
          clearInterval(animate);  
          $('#progressbar').remove();              
      }
  };
 
  var animate = setInterval(function() {
      loading();
  }, time);





	$("#w").click(function(){
		$('.all').html($('<div>', {class: 'work'}));
		$(".work").css("display","block");
		$(".work").css({"-webkit-animation":"bounceIn 1s ease-in"," -moz-animation":"bounceIn 1s ease-in","animation":"bounceIn 1.2s ease-in"});
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





