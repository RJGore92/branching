var inputToCentimeters = function (heightFeetInput, heightInchesInput) {
  var totalInchesHeight = (heightFeetInput * 12) + heightInchesInput;
  console.log(totalInchesHeight);
  var totalCentimetersHeight = totalInchesHeight * 2.54;
  console.log(totalCentimetersHeight);
  return parseInt(totalCentimetersHeight);
}

$(document).ready(function() {
  $("form#riderHeightInfo").submit(function(event) {
    event.preventDefault();

    var heightFeetInput = parseInt($("#heightF").val());
    var heightInchesInput = parseInt($("#heightI").val());

    var finalHeight = inputToCentimeters(heightFeetInput, heightInchesInput);
    console.log(finalHeight);

    if (finalheight >= 210) {
      
    }
  });
});
