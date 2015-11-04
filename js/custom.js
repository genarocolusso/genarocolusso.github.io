
 
 
 
$(document).ready(function(){
new WOW().init();
 $(window).load(function(){

 		jQuery(".preloader").fadeOut(2000);
 
 		 $("body").removeClass("preload");

	});
 	$(".test").hover(
				
               function () {
                  $(this).addClass("ativo");
               }, 
				
               function () {
                  $(this).removeClass("ativo");
               }
 	);
 });