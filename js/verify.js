$(document).ready(function() {
  var inputCode = $('#input-code');
  var cbutton = $('.check-button');
  var resend = $('.resend');
  var random = randomCode();

  inputCode.on('input', function() {
    if ($(this).val() === localStorage.code || $(this).val() === localStorage.codetwo ) {
      cbutton.attr('disabled', false);
    } else {
      cbutton.attr('disabled', true);
    }
  });
  cbutton.on('click', function(event) {
    event.preventDefault();
    inputCode.val('');
    window.location.href = 'signup-form.html';
  });
  resend.on('click', function(event) {
    event.preventDefault(event);
    localStorage.codetwo = random;
    alert('Tu código: LAB -' + random);
  });
  function randomCode() {
    var one = Math.floor(Math.random() * 9);
    var two = Math.floor(Math.random() * 9);
    var three = Math.floor(Math.random() * 9);
    var total = one + '' + two + '' + three;
    return total;
  }
});    