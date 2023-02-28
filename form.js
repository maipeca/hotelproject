$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("#form").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        nome: "required",
        sobrenome: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        
      },
      // Specify validation error messages
      messages: {
        nome: "Please enter your firstname",
        sobrenome: "Please enter your lastname",
       
        email: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });


  //MAP

  var map = L.map('map').setView([39.48, -0.37], 12);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circle = L.circle([39.483, -0.39], {
    color: '#010b2e',
    fillColor: '#b49b4a',
    fillOpacity: 0.8,
    radius: 150
}).addTo(map);

var circle = L.circle([39.479, -0.35], {
    color: '#010b2e',
    fillColor: '#b49b4a',
    fillOpacity: 0.8,
    radius: 150
}).addTo(map);

var circle = L.circle([39.487, -0.39], {
    color: '#010b2e',
    fillColor: '#b49b4a',
    fillOpacity: 0.8,
    radius: 150
}).addTo(map);
  