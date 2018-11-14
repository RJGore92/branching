$(document).ready(function() {
  $("form#wikiSelector").submit(function(event) {
    event.preventDefault();

    var selectedWiki = parseInt($("input:radio[name=animalType]:checked").val());

    $("#initialQuestion").hide();
    $("#alternateQuestion").show();

    if (selectedWiki == 1) {
      $("#dogWiki").show();
      $("#catWiki").hide();
      $("#fishWiki").hide();
      $("#radio1").hide();
      $("#radio2").show();
      $("#radio3").show();
    }
    if (selectedWiki == 2) {
      $("#dogWiki").hide();
      $("#catWiki").show();
      $("#fishWiki").hide();
      $("#radio2").hide();
      $("#radio1").show();
      $("#radio3").show();
    }
    if (selectedWiki == 3) {
      $("#dogWiki").hide();
      $("#catWiki").hide();
      $("#fishWiki").show();
      $("#radio3").hide();
      $("#radio1").show();
      $("#radio2").show();
    }
  });
});
