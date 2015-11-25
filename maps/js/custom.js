
var locations = [
     ['Title A', 35.64416,139.7075938, 1, '<div class="btn btn-info"><i class="fa fa-globe"></i></div>'],
     ['Title B', 35.64416,139.6075938, 2, '<img src="img/img1.jpg" class="img-responsive" style="max-width: 150px">'],
     ['Title C', 35.64416,139.5075938, 3, '<div class="btn btn-info"><i class="fa fa-globe"></i></div>'],
     ['Title D', 35.64416,139.3075938, 4, '<img src="img/img2.jpg" class="img-responsive" style="max-width: 150px">']
];
 var map;
 function initMap() {
 
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 35.64416, lng: 139.6075938} 
  });
  var infowindow = new google.maps.InfoWindow;

var marker, i;

for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
         position: new google.maps.LatLng(locations[i][1], locations[i][2]),
         map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
         return function() {
             infowindow.setContent(locations[i][4]);
             infowindow.open(map, marker);
         }
    })(marker, i));
}

}
 
$(document).ready(function(){
  initMap();
 
       
document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
    $(".overall").toggleClass("active");
  });

   


$(".menu p").click(function(){
  var plat = $(this).attr('data-lat');
  var plng = $(this).attr('data-long');
  var latLng = new google.maps.LatLng(plat, plng);

  map.panTo(latLng);

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



 