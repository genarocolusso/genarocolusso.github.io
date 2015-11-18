
$(document).ready(function(){

  
 $(window).load(function(){

jQuery(".status").fadeOut(1000);
        // will fade out the whole DIV that covers the website.
  jQuery(".preloader").delay(10).fadeOut("slow");
 $("body").removeClass("preload");
 });
       


 
$(".lingua").click(function() {
   
    var language = $(this).text().toLowerCase();
    $.ajax({
        url: 'languages.xml',
        success: function(xml) {
            $(xml).find('translation').each(function(){
                var id = $(this).attr('id');
                var text = $(this).find(language).html();
                 
                $("." + id).html(text);
            });
        }
    });
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

 