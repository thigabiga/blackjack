
(function () {
    "use strict";

    // to the url we add &appid= and our personal api key to retreive the json string
    
    // Weather Example:
    // var url = "http://api.openweathermap.org/data/2.5/weather?q=London",
    //        apiKey = "fd3cfbe1637ea69a5e1c4caa935bcd9f",
    //        httpRequest;
    
    // London Transport app id = 2d232908
    // key = 0627161b18ee1d3aceb686029bf05101
    
    var url = "https://api.tfl.gov.uk",
        apiKey = "0627161b18ee1d3aceb686029bf05101",
        apiID = "2d232908",
        httpRequest;
    
    makeRequest();
 
    // create and send an XHR request
    function makeRequest() {
        // XMLHttpRequest is an object in Javascript
        httpRequest = new XMLHttpRequest();
        // api.openweathermap.org/data/2.5/weather?q=London&appid=fd3cfbe1637ea69a5e1c4caa935bcd9f
        // this appid stuff is in the documentation for the weather api
        httpRequest.onreadystatechange = responseMethod();
        httpRequest.open("GET", url + "&app_id=" + apiID + "&app_key=" + apiKey);
        httpRequest.send();
    }

    // handle XHR response
    function responseMethod() {
        if (httpRequest.readyState === 4) {
            // console.log(httpRequest.responseText);
            // httpRequest.responseText is a json string
            if (httpRequest.status === 200) {
                updateUISuccess(httpRequest.responseText);
            } else {
                updateUIError();
            }
        }
    }

    function updateUISuccess() {
        // parsing the json string into key value pairs, creating an object
        var response = JSON.parse(httpRequest.responseText),
            
//            condition = response.weather[0].main,
//            degC = response.main.temp - 273.15,
//            degCInt = Math.floor(degC),
//            degF = degC * 1.8 + 32,
//            degFInt = Math.floor(degF),
//            weatherBox = document.getElementById("weather");
//		weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
    }

    // handle XHR error
    function updateUIError() {
//        var weatherBox = document.getElementById("weather");
//        weatherBox.hide();
    }
    
    

}());





