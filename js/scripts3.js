var inputToCentimeters = function (heightFeetInput, heightInchesInput) {
  var totalInchesHeight = (heightFeetInput * 12) + heightInchesInput;
  console.log(totalInchesHeight);
  var totalCentimetersHeight = Math.ceil(totalInchesHeight * 2.54);
  console.log(totalCentimetersHeight);
  return parseInt(totalCentimetersHeight);
}

$(document).ready(function() {
  $("form#riderHeightInfo").submit(function(event) {
    var heightFeetInput = parseInt($("#heightF").val());
    var heightInchesInput = parseInt($("#heightI").val());

    var finalHeight = inputToCentimeters(heightFeetInput, heightInchesInput);
    console.log(finalHeight);
    $("form#riderHeightInfo").hide();
    if (finalHeight > 225) {
      $(".tooTall").show();
    }
    else if (finalHeight >= 215) {
      $(".rides").show();
      $(".tall-ride").addClass("green-bg");
      $(".above-average-ride").addClass("green-bg");
      $(".average-ride").addClass("blue-bg");
      $(".below-average-ride").addClass("red-bg");
      $(".short-ride").addClass("red-bg");
    }
    else if (finalHeight >= 190) {
      $(".rides").show();
      $(".tall-ride").addClass("green-bg");
      $(".above-average-ride").addClass("green-bg");
      $(".average-ride").addClass("blue-bg");
      $(".below-average-ride").addClass("blue-bg");
      $(".short-ride").addClass("red-bg");
    }
    else if (finalHeight >= 150) {
      $(".rides").show();
      $(".tall-ride").addClass("yellow-bg");
      $(".above-average-ride").addClass("green-bg");
      $(".average-ride").addClass("green-bg");
      $(".below-average-ride").addClass("blue-bg");
      $(".short-ride").addClass("blue-bg");
    }
    else if (finalHeight >= 120) {
      $(".rides").show();
      $(".tall-ride").addClass("red-bg");
      $(".above-average-ride").addClass("yellow-bg");
      $(".average-ride").addClass("yellow-bg");
      $(".below-average-ride").addClass("green-bg");
      $(".short-ride").addClass("blue-bg");
    }
    else if (finalHeight >= 70) {
      $(".rides").show();
      $(".tall-ride").addClass("red-bg");
      $(".above-average-ride").addClass("red-bg");
      $(".average-ride").addClass("yellow-bg");
      $(".below-average-ride").addClass("yellow-bg");
      $(".short-ride").addClass("green-bg");
    }
    else if (finalHeight >= 40) {
      $(".rides").show();
      $(".tall-ride").addClass("red-bg");
      $(".above-average-ride").addClass("red-bg");
      $(".average-ride").addClass("red-bg");
      $(".below-average-ride").addClass("yellow-bg");
      $(".short-ride").addClass("yellow-bg");
    }
    else {
      $(".tooShort").show();
    }
    event.preventDefault();
  });
});
