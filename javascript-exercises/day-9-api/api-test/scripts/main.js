"use strict";

(function() {
    // to the url we add &appid= and our api key to retreive the json string
    var url = "http://api.openweathermap.org/data/2.5/weather?q=London";
    var apiKey = "fd3cfbe1637ea69a5e1c4caa935bcd9f"; // your own api key
    var httpRequest;
    makeRequest();
 
    // create and send an XHR request
    function makeRequest() {
        console.log("request")
        httpRequest = new XMLHttpRequest(); // XMLHttpRequest is an object in Javascript
        // api.openweathermap.org/data/2.5/weather?q=London&appid=fd3cfbe1637ea69a5e1c4caa935bcd9f
        // this appid stuff is in the documentation for the weather api
        httpRequest.onreadystatechange = responseMethod();
        httpRequest.open("GET", url + "&appid=" + apiKey);
        httpRequest.send();
    };

    // handle XHR response
    function responseMethod() {
        if (httpRequest.readyState === 4) {
            // console.log(httpRequest.responseText);
            // httpRequest.responseText is a json string
            if (httpRequest.status == 200) {
                updateUISuccess(httpRequest.responseText);
            } else {
                updateUIError();
            };
        };
    };

    function updateUISuccess() {
        // parsing the json string into key value pairs, creating an object
        var response = JSON.parse(httpRequest.responseText);
        console.log(response);
        var condition = response.weather[0].main;
        var degC = response.main.temp - 273.15;
        var degCInt = Math.floor(degC);
        var degF = degC * 1.8 + 32;
        var degFInt = math.floor(degF);
        var weatherBox = document.getElementById("weather");
		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";

    };

    // handle XHR error
    function updateUIError() {
        var weatherBox = document.getElementById("weather");
        weatherBox.hide();
    };

})();


`
In jQuery, you'd condense the make request and response.
jQuery automatically parses the JSON string for you.

$.get(url + "&appid= + "appKey).done(function(response) {
    updateUISuccess(response);
}).fail(function(error) {
    updateUIError();
});

`