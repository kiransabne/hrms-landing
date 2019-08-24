$('.alert .close').on('click', function(e) {
    $(this).parent().hide();
});

$('#signup-btn').click(function () {
  $.ajax({
    url: '/pages/submit-form',
    type: 'POST',
    cache: false,
    data: {
      firstname: $('#firstname').val(),
      lastname: $('#lastname').val(),
      companyname: $('#companyname').val(),
      email: $('#email').val(),
      mobile: $('#mobile').val(),
      employeecount: $('#employeecount').val(),

    },
    success: function () {
      $('#error-group').css('display', 'none');
      alert('Your submission was successful');
    },
    error: function (data) {

      $('#error-group').css('display', 'block');
      var errors = JSON.parse(data.responseText);
      console.log(errors)

      var errorsContainer = $('#errors');
      errorsContainer.innerHTML = '';
      var errorsList = '';

      for (var i = 0; i < errors.length; i++) {
        errorsList += '<li>' + errors[i].msg  + ' for ' + errors[i].param + '</li>';
      }
      //errorsContainer.html(errorsList);
      //$('#login-error').show(errors);
      //    $('#login-error').text(errorsList);
      $('#alertt').show();
      $('#alertt').html(errorsList)
    }
  });
});
