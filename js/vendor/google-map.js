// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 16,
				zoomControl: false,
				streetViewControl: false,
				mapTypeControl: false,
				scrollwheel: false,

				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng(55.709468, 37.442295),

				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [
									{
											"featureType": "all",
											"elementType": "all",
											"stylers": [
													{
															"saturation": -100
													},
													{
															"gamma": 0.5
													}
											]
									}
								]
		};

		// Get the HTML DOM element that will contain your map 
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
				position: new google.maps.LatLng(55.7096039, 37.4426143,17.92),
				map: map,
				title: 'Верейская Плаза III',
				icon: "../images/landmark.png"
		});

		// click scroll on
		map.addListener('click', function() {
			map.setOptions({
				scrollwheel: true
			});
		});
		// drag scroll on
		map.addListener('drag', function() {
			map.setOptions({
				scrollwheel: true
			});
		});
		// mouseout scroll off
		map.addListener('mouseout', function() {
			map.setOptions({
				scrollwheel: false
			});
		});

		
var historicalOverlay;

var imageBounds = {
	north: 55.713700,
	south: 55.709089327297300,
	east: 37.454533,
	west: 37.43749994279453 
};

historicalOverlay = new google.maps.GroundOverlay(
		'../images/navigation.png',
		imageBounds);
historicalOverlay.setMap(map);

}
