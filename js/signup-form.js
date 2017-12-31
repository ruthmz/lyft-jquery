$(document).ready(function() {
  var userName = $('.user-name');
  var userEmail = $('#user-email');
  var checkbox = $('input[type="checkbox"]');

  var validateUsername = false;
  var validateEmail = false; 
  var validateCheckbox = false;  

  function activeButton() {
    if (validateUsername && validateEmail && validateCheckbox) {
      $('#next').attr('disabled', false);
    }
  }
  function desactiveButton() {
    if (validateUsername && validateEmail && validateCheckbox) {
      $('#next').attr('disabled', true);
    }
  }
  $('#next').on('click', function(event) {
    event.preventDefault();
    window.location.href = 'close.html';
  });

  userName.on('input', function() {
    if ($(this).val().length >= 2) {
      validateUsername = true;
      activeButton(); 
    } else {
      desactiveButton(); 
    }
  });
      
  userEmail.on('input', function(event) {
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton(); 
    } else {
      desactiveButton();
    }
  });
 
  checkbox.on('click', function(event) {
    if (event.target.checked) {
      validateCheckbox = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });
});    