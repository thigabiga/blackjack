
  (function(){

    var form = document.getElementById('login');

    form.addEventListener("submit", function(e)
    {
        e.preventDefault();  //prevents default exectuion of /login
                    
        var elements = this.elements;                    // Get all form elements
        var username = elements.username.value;          // Select username entered
        var msg      = 'Welcome ' + username;            // Create welcome message
        document.getElementById('main').textContent = msg; // Write welcome message


    }, false);

  })(); //self executing function
