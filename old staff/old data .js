
var me =[
	"<h3>I'm a designer/coder with a background in Multimedia Design, i love to code and create interactive apps.</h3>",
	"<h3>I'm also fluent in: /Interaction Design /3d Animation /Motion Design.</h3>",
    "<h3>you can contact me on this networks:</h3>",
    '<center>',
    '<a href="http://ec.linkedin.com/in/jacobohz" target="_blank"><img src="assets/in.png" width="45"></a>',
  '<a href="https://github.com/cyrstem/"target="_blank"><img src="assets/git.png" width="45"></a>',
  '<a href="mailto:cyrstem@gmail.com"><img src="assets/mail.png" width="45"></a>',
  '</center>'
].join("\n");

var misDatos =  [

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
          $('nav').css("opacity","1");
          console.log("i'm working on this so don't judge me");
      }
  };
 
  var animate = setInterval(function() {
      loading();
  }, time);

	$("#w").click(function(){
		$('.all').html($('<div>', {class: 'work'}));
		$(".work").css("display","block");
		$(".work").css({"-webkit-animation":"bounceIn 1s ease-in"," -moz-animation":"bounceIn 1s ease-in","animation":"bounceIn 1.2s ease-in"});
	    $("#close").css("visibility","visible");
	});

	$("#i").click(function(){
		$(".work").hide();
		$('.all').html($('<div>', {class: 'me'}));
		$(".me").css({"-webkit-animation":"bounceIn 1s ease-in"," -moz-animation":"bounceIn 1s ease-in","animation":"bounceIn 1.2s ease-in"});
		$("#close").css("visibility","visible")
		$(".me").append(me);
	});

	$("#c").click(function(){
		$(".work").hide();
		$('.all').html($('<div>', {class: 'contact'}));
		$(".contact").append(misDatos);
		$(".contact").css({"-webkit-animation":"bounceIn 1s ease-in"," -moz-animation":"bounceIn 1s ease-in","animation":"bounceIn 1.3s ease-in"});
		$("#close").css("visibility","visible");
	});

	$("#close").click(function(){
		if ($('.work').length > 0) { 
    		$(".work").hide();
    		$("#close").css("visibility","hidden");
		}

		 if ($('.me').length > 0) {
			$(".me").hide();
			$("#close").css("visibility","hidden");
		}
		else if ($('.contact').length > 0) {
			$(".contact").hide();
			$("#close").css("visibility","hidden");
		}
    });
	});



