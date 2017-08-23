$(document).ready(function(){
  $("#fifty").hide();
  $("#Ruby").hide();
  $("#CSS").hide();
  $('#Java').hide();
  $('#bye').hide();
  $('.btn-outline-success').hide();


   $("form#languagequiz").submit(function() {
      var question1 = $("select#question1").val();
      var question2 = $("select#question2").val();
      var question3 = $("select#question3").val();
      var question4 = $("select#question4").val();
      var question5 = $("select#question5").val();
      $("#fifty").hide();
      $("#Ruby").hide();
      $("#CSS").hide();
      $('#JAVA').hide();
      $('#bye').hide();
      $('.btn-outline-success').show();

    // $(".btn-outline-success").button(function() {
    //   $("#fifty").hide();
    //   $("#Ruby").hide();
    //   $("#CSS").hide();
    //   $('#Java').hide();
    //   $('#bye').hide();
    //   $('.btn-outline-success').hide();
    // }

    if(question1 === "yes"){
      $('#Ruby').show();
    } else if(question2 === "yes" && question3 === "yes" && question4 === "yes" && question5 === "yes"){
      $('#fifty').show();
    } else if(question2 === "yes" && question4 === "yes"){
      $('#CSS').show();
    } else if(question3 === "yes" && question5 ==="yes"){
      $('#Java').show();

    } else {
      $('#bye').show();
    }

    event.preventDefault();
  });
});
