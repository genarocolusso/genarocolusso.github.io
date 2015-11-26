
var locations = [
     ['Agudo, RS', -29.6261548, -53.2395973, 1, '<div class="btn btn-info"><i class="fa fa-globe"></i></div>'],
     ['Balneário Camboriú, RS', -26.9930938,-48.6356285, 2, '<img src="img/img1.jpg" class="img-responsive" style="max-width: 150px">'],
     ['Cacequi, RS', -29.9426675,-54.8291259, 3, '<div class="btn btn-info"><i class="fa fa-globe"></i></div>'],
     ['Cachoeira do Sul, RS', -30.0336816,-52.893221, 4, '<img src="img/img2.jpg" class="img-responsive" style="max-width: 150px">'],
     ['Cerro Largo, RS', -28.1437464,-54.7192376, 5, '<img src="img/img2.jpg" class="img-responsive" style="max-width: 150px">'],
     ['Camargo, RS', -28.5884715,-52.200741, 6, ' '],  
     ['Constantina, RS', -27.6725055,-52.893221, 7, ' '],
     ['Cruz Alta, RS', -28.6454883,-53.605355, 8, ' '],
     ['Encantado, RS', -29.2360837,-51.869606, 9, ' '],
     ['Faxinal do Soturno, RS', -29.5613969,-53.4122052, 10, ' '],
     ['Herval, RS', -32.0288506,-53.3936083, 11, ' '],
     ['Itaqui, RS', -29.2429935,-56.4719928, 12, ' '],
     ['Jaquinara, RS', -28.9656101,-50.3894858, 13, ' '],
     ['Jacuizinho, RS', -29.0343692, -53.0599854, 14, ' '],
     ['Jaguarão, RS', -32.5608765,-53.3775707, 15, ' '],
     ['Novo Hamburgo, RS', -29.6880479,-51.1333376, 16, ' '],
     ['Palmeiras das Missões, RS', -27.9001784,-53.3140353, 17, ' '],
     ['Panambi, RS', -28.2866506,-53.4989324, 18, ' '],
     ['Picada Café, RS', -29.4541701,-51.137068, 19, ' '],
     ['Quaraí, RS', -30.3845133,-56.4488086, 20, ' '],
     ['Restinga Seca, RS', -29.8005709,-53.3474304, 21, ' '],
     ['Santa Vitória do Palmar, RS', -33.5258836, -53.3721736, 22, ' '],
     ['Santana do Livramento, RS', -30.8772854, -55.5392304, 23, ' '],
     ['Santa Maria, RS', -29.68725, -53.8154499, 24, ' '],
     ['Santo Antônio da Patrulha, RS', -29.8272707, -50.5179942, 25, ' '],
     ['São Francisco de Paula, RS', -29.442271, -50.5797679, 26,' '],
     ['São João do Polêsine, RS', -29.6559255, -53.4878165, 27, ' '],
     ['São Lourenço do Sul, RS', -31.3628498, -51.9818, 28, ' '],
     ['São Sepé, RS', -30.2032499, -53.6068646, 29, ' '],
     ['Sapiranga, RS', -29.6353852, -51.0069543, 30, ' '],
     ['Sapucaia do Sul, RS', -29.8287957, -51.14418, 31, ' '],
     ['Sarandi, RS', -27.946449, -52.9164069, 32, ' '],
     ['Sarafina Corrêa, RS', -28.7087726, -51.9397875, 33, ' '],
     ['Sobradinho, RS', -29.4130634, -53.024933, 34, ' '],
     ['Tapejara, RS', -28.0648514, -52.0061729, 35, ' '],
     ['Tio Hugo, RS', -28.5799496, -52.5997165, 36, ' '],
     ['Três de Maio, RS', -27.780531, -54.2362302, 37, ' '],
     ['Três Passos, RS', -27.4559325, -53.9301575, 38, ' '],
     ['Vila Flores, RS', -28.8615917, -51.5465539, 39, ' '],
     ['Fortaleza, CE', -3.7318616, -38.5266704, 40, ' '],
     ['Cruzeiro do Oeste, PR', -23.7400793, -53.0888943, 41, ' '],
     ['Foz do Iguaçu, PR', -25.5162467, -54.5854238, 42, ' '],
     ['Jales, SP', -20.2686874, -50.5490441, 43, ' '],
     ['Palmas, TO', -10.249091, -48.3242858, 44, ' '] 

];
 


 var map;
 function initMap() {
 
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat: -29.68725, lng: -53.8154499},
    styles:  [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]
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
             infowindow.setContent(locations[i][0]);
             infowindow.open(map, marker);
         }
    })(marker, i));

    $(".coords").append(' <p data-lat="'+locations[i][1]+'" data-long="'+locations[i][2]+'"> '+locations[i][0]+' </p>');

}

}
 
$(document).ready(function(){
  
 
       
$( "#nav-toggle" )
  .click( function() {
    $(this).toggleClass( "active" );
    $(".overall").toggleClass("active");
  });

   


$(".menu .coords").on('click', 'p', function(){
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



 