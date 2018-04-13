// example URL for notes:    https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

// finally, it fucking works - 3/27/2018

(function () {
    "use strict";
    // London Transport app id = 2d232908
    // key = 0627161b18ee1d3aceb686029bf05101
    // https://api.tfl.gov.uk/BikePoint?&app_key=0627161b18ee1d3aceb686029bf05101&app_id=2d232908
    
    var url = "https://api.tfl.gov.uk/",
        apiKey = "0627161b18ee1d3aceb686029bf05101",
        apiID = "2d232908",
        httpRequest = new XMLHttpRequest();
    
    console.log("UNSENT", httpRequest.readyState);
    
    httpRequest.open("GET", url + "BikePoint?" + "&app_key=" + apiKey + "&app_id=" + apiID);
    
    console.log("OPENED", httpRequest.readyState);
    
    httpRequest.onprogress = function () {
        console.log("LOADING", httpRequest.readyState);
        if (httpRequest.status === 200 && httpRequest.readyState === 4) {
            console.log("WAIT FOR IT...");
            // parse
            var response = JSON.parse(httpRequest.responseText),
                commonName = response[0].commonName;
            document.getElementById("bikes").innerHTML = "<p>" + commonName + "</p>";
            console.log("OH, BOBBY!", response[0].commonName);
        } else {
            console.log("ERROR");
        }
    };
    
    httpRequest.send();
    
    console.log("SENT", httpRequest.readyState);

}());

// example item in the array: {"$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities","category":"Description","key":"NbDocks","sourceSystemKey":"BikePoints","value":"33","modified":"2018-03-22T19:12:52.7Z"}],"children":[],"childrenUrls":[],"lat":51.493372,"lon":-0.09968}



