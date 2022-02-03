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
 
// sets content of "Ol' Reliable walk infowindow, generates infowindow, generates and tethers infowindow to marker
 const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Ol Reliable</h1>' +
    '<div id="bodyContent">' +
    "<p>This is the trail I walk almost every day. Walking is a very important " +
    "part of my everyday life, especially since COVID started. So, I thought I would " +
    "make a map dedicated to my top 4 favourite walks in Canada (so far...). " +
    "I hope you enjoy, and I hope you get to go on some of these walks one day too! " +
    "Trail names from left to right: Mystic Beach Trailhead, Panorama Ridge Trailhead, Matthew's Head Trailhead, and St. Peter's Harbour Lighthouse</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: { lat: 44.357, lng: -78.724 },
    map,
    title: "Ol' Reliable",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  }); 
 
// makes Mystic Beach marker
  new google.maps.Marker({
    position: { lat: 48.438, lng: -124.0927},
    map,
    title: "Mystic Beach Trailhead",
  });

// makes Panorama Ridge marker
    new google.maps.Marker({
    position: { lat: 49.954, lng: -123.0135},
    map,
    title: "Panorama Ridge Trailhead",
  });

// makes Matthew's Trailhead marker
    new google.maps.Marker({
    position: { lat: 45.566, lng: -64.984},
    map,
    title: "Matthew's Head Trailhead",
  });
  
  // makes St. Peter's Harbour marker
    new google.maps.Marker({
    position: { lat: 46.443, lng: -62.746},
    map,
    title: "St. Peter's Harbour Lighthouse",
  });

}


