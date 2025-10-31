
mapboxgl.accessToken = mapToken
const map = new mapboxgl.Map({
    container:"map", //container ID
    //choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style:"mapbox://styles/mapbox/streets-v12", //style url
    center: listing.geometry.coordinates, // starting postion [lng, lat]
    zoom:2, //starting zoom
});

// console.log(listing.geometry.coordinates);
const marker = new mapboxgl.Marker({color:'red'})
.setLngLat(listing.geometry.coordinates)
.setPopup(
    new mapboxgl.Popup({offset:25}).setHTML(
        `<h4>${listing.location}</h4><p>Exact location provided after booking<p/>`
    )
)
.addTo(map);
