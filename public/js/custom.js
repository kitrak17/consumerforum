$('.search-button').click(function(){
    $('.header-search').slideToggle();
});


$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});


$(document).ready(function () {
      $("#businessBtn").click(function (event) {
        event.preventDefault();
        $("#businessBtn>i").addClass('fa-refresh fa-spin').removeClass('fa-thumbs-up');
        var form = $('#register_business')[0];
        var data = new FormData(form);
        $("#businessBtn").prop("disabled", true);
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: '/api/v1/business/signup',
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (result) {
          alert(result.msg);
          $("#businessBtn").prop("disabled", false);
          $('#register_business')[0].reset();
          $("#businessBtn>i").addClass('fa-thumbs-up').removeClass('fa-refresh fa-spin');
        },
        error: function(res) {
            var errors = JSON.parse(res.responseText);
            if(errors.errors[0]) {
              alert(errors.errors[0].msg);
            } else if(errors.errors.code) {
              alert(errors.errors.errmsg);
            } else {
              alert("unknown error");
            }
            $("#businessBtn").prop("disabled", false);
            $("#businessBtn>i").addClass('fa-thumbs-up').removeClass('fa-refresh fa-spin');
        }
      });
  });
});


// function registerBusiness() {
//     $.ajax({
//         url: '/business/signup/',
//         dataType: 'json',
//         type: 'POST',
//         contentType: 'application/json',
//         data: JSON.stringify( { "business_name": $('#business_name').val(), 
//                                 "category_id": $('#category_id').val(),
//                                 "address": $('#address').val(),
//                                 "country": $('#country').val(),
//                                 "state": $('#state').val(),
//                                 "city": $('#city').val(),
//                                 "zipcode": $('#zipcode').val(),
//                                 "website": $('#website').val(),
//                                 "email": $('#email').val(),
//                                 "phone_number": $('#phone_number').val(),
//                               } ),
//         processData: false,
//         error: function(error) {
//           $('#error-msg').html(error);
//         },
//         success: function(result) {
//           $('#success-msg').html(result)
//         }
//   });
// }