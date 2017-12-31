$(document).ready(function() {
  var $number = $('#input-box');
  var $submit = $('#next');
  var random = randomCode();
  var phoneLength = 9;

  // $('.menu-style a').on('click', function(){    
  // $('.btn-style').html($(this).html());  
  // });

  $('#mexico').click(function() {
    $('#changeicon').attr('src', '../assets/icons/mexico.ico');
    $('.phone-code').text('+52');
    $number.focus();
  });
  
  $('#venezuela').click(function() {
    $('#changeicon').attr('src', '../assets/icons/venezuela.ico');
    $('.phone-code').text('+58');
    $number.focus();
  });
  $('#peru').click(function() {
    $('#changeicon').attr('src', '../assets/icons/peru.ico');
    $('.phone-code').text('+51');
    $number.focus();
  });
  $('#states').click(function() {
    $('#changeicon').attr('src', '../assets/icons/states.ico');
    $('.phone-code').text('+1');
    $number.focus();
  });

  $number.on('input', function(event) {
    console.log($(this).val());
    if ($(this).val().length === phoneLength) {
      $submit.attr('disabled', false);
    } else {
      $submit.attr('disabled', true);
    }
  });
  function randomCode() {
    var one = Math.floor(Math.random() * 9);
    var two = Math.floor(Math.random() * 9);
    var three = Math.floor(Math.random() * 9);
    var total = one + '' + two + '' + three;
    return total;
  }

  $submit.on('click', function(event) {
    event.preventDefault(event);
    $number.val('');
    localStorage.number = $number.val();
    localStorage.code = random;
    alert('Tu código: LAB -' + random);
    window.location.href = 'verify.html';
  });
});