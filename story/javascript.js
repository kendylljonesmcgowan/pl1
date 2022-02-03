// Kendyll Jones-McGowan, s60
// Shawn Morgan - GEOM 99 - Web GIS Development
// story deliverable for Practical Lab 1
// please enjoy a map of some nice walks

// JavaScript for Night Mode custom Google Map inspired by: https://developers.google.com/maps/documentation/javascript/examples/style-array#maps_style_array-javascript
// JavaScript for infowindow inspired by: https://developers.google.com/maps/documentation/javascript/infowindows#open

function initMap() {
// styles the map in night-mode
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 60.970, lng: -89.578 },
    zoom: 4,
 styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });
 
// JavaScript for marker accessibility inspired by: https://developers.google.com/maps/documentation/javascript/examples/marker-accessibility
  const tourStops = [
    [{ lat: 48.438, lng: -124.0927 }, "Mystic Beach Trailhead"],
    [{ lat: 49.954, lng: -123.0135 }, "Panorama Ridge Trailhead"],
    [{ lat: 44.357, lng: -78.724 }, "Ol' Reliable"],
    [{ lat: 45.566, lng: -64.984 }, "Matthew's Head Trailhead"],
    [{ lat: 46.443, lng: -62.746 }, "St. Peter's Harbour Lighthouse"],
    
  ];
// creates an info window to share between markers
  const infoWindow = new google.maps.InfoWindow();

// creates the markers
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

// adds a click listener for each marker, and set up the info window
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });

}


