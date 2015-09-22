        // first, create the map object supplying it with the id of the html element
        // that should contain it
        var map = L.map('map-container');

        // tell the map where it's center is [latitude, longitude] and what
        // zoom level to start at (1 being waaaaay out, and 18 being basically street level)
        map.setView([44.971724, -93.243239], 16);

        // create our basemap layer and add it to the map
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

        $.getJSON('https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson',function(data){
                var geojson = new L.geoJson(data).addTo(map); 
        });
        
        $(".red.box").click(function(e){
                alert("box click");
        });
