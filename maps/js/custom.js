
$(document).ready(function(){

  
 $(window).load(function(){
 
 });
       
document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
    $(".overall").toggleClass("active");
  });

  
// var movementStrength = 25;
// var height = movementStrength / $(window).height();
// var width = movementStrength / $(window).width();
// $("#chessection").mousemove(function(e){
//           var pageX = e.pageX - ($(window).width() / 2);
//           var pageY = e.pageY - ($(window).height() / 2);
//           var newvalueX = width * pageX * -1 - 30;
//           var newvalueY = height * pageY * -1 - 30;
//           $('.imgflow').css("background-position", newvalueX+"px     "+newvalueY+"px");
// });

 
	});

 