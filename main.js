let latitude = 13.60874537357245, longitude =  79.552160236708;

// Initializing Mapbox
mapboxgl.accessToken='pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'

 var map =new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude, latitude],
    zoom:4
});

//Add Mapbox Geocoder
map.addControl(
    new MapGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl
    })
);


var img1 = document.querySelector("#amber")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker1=new mapboxgl.Marker({
    element:img1
})
.setLngLat([75.85133, 26.98547])

// Create a  Gateway of India, Mumbai Marker and add it to the map.
var img2 = document.querySelector("#gateway of india")

var marker2=new mapboxgl.Marker({
    element:img2
})
.setLngLat([18.922116019994025, 72.83461137916137])

// Create a India Gate Marker and add it to the map.
var img3 = document.querySelector("#india gate")

var marker3=new mapboxgl.Marker({
    element:img3
})
.setLngLat([28.612979451805476, 77.22950743620667])



// Create a Lotus Temple, Delhi Marker and add it to the map.
var img4 = document.querySelector("#lotus temple")

var marker4=new mapboxgl.Marker({
    element:img4
})
.setLngLat([28.553642758024402, 77.25879420834046])


//Create a Victoria Memorial, Kolkata Marker and add it to the map.
var img5 = document.querySelector("#victoria memorial")

var marker5=new mapboxgl.Marker({
    element:img5
})
.setLngLat([22.54497663136348, 88.34255779461573])
