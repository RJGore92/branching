$(document).ready(function() {
  $("form#voterInputForm").submit(function(event) {
    event.preventDefault();
    var voterAgeInput = parseInt($("#voterAge").val());
    console.log(voterAgeInput);

    $("#voterInputForm").hide();

    if (voterAgeInput >= 18) {
      $("#eligibleToVote").show();
      $("#eligibleResources").show();
    }
    else if (voterAgeInput == 17) {
      $("#closeToEligible").show();
      $("#eligibleResources").show();
      $("#ineligibleResources").show();
    }
    else {
      $("#ineligibleToVote").show();
      $("#ineligibleResources").show();
    }

  });
});
