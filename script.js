        // first, create the map object supplying it with the id of the html element
        // that should contain it
        var map = L.map('map-container');

        // tell the map where it's center is [latitude, longitude] and what
        // zoom level to start at (1 being waaaaay out, and 18 being basically street level)
        map.setView([44.971724, -93.243239], 16);

        // create our basemap layer and add it to the map
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(map);

        // add a marker at Blegen Hall and attach a popup with some content to it
        // that will open when the marker is clicked.
        L.marker([44.971724, -93.243239]).addTo(map)
            .bindPopup("<b>Hi there world!</b><br />I am a popup, just popping around Blegen Hall")
            .openPopup(); //openPopup means that the popup will be opened initially when the map loads.