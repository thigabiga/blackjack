// example:    https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY


(function () {
    "use strict";
    // London Transport app id = 2d232908
    // key = 0627161b18ee1d3aceb686029bf05101
    // https://api.tfl.gov.uk/BikePoint?&app_key=0627161b18ee1d3aceb686029bf05101&app_id=2d232908
    
    var url = "https://api.tfl.gov.uk/",
        apiKey = "0627161b18ee1d3aceb686029bf05101",
        apiID = "2d232908",
        httpRequest = new XMLHttpRequest();
    
    console.log(httpRequest.readyState);
    
    httpRequest.open("GET", url + "BikePoint?" + "&app_key=" + apiKey + "&app_id=" + apiID);

    console.log(httpRequest.readyState);



        
        httpRequest.send();
        httpRequest.onreadystatechange = responseMethod();
    }

    // handle XHR response
    function responseMethod() {
        console.log(httpRequest.readyState);
        if (httpRequest.readyState === 4) { // done
            console.log("HEY");
            // httpRequest.responseText is a json string
            if (httpRequest.status === 200) { // complete
                updateUISuccess(httpRequest.responseText);
            } else {
                updateUIError();
            }
        }
    }

    function updateUISuccess(responseText) {
        // parsing the json string into key value pairs, creating an object
        var response = JSON.parse(responseText);
        console.log(response);
    }

    // handle XHR error
    function updateUIError() {
        console.log("error");
    }
    
    

}());





