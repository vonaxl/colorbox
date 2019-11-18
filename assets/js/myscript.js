//Funzione che genera le 6x6 caselle
function generateCells() {
  for (var i = 0; i < 144; i++) {
    $(".wrap").append('<div class="box"></div>');
  }
}
$(document).ready(function() {
  var x = "black";
  $("#color").html(x);
  $(".color.r").click(function() {
    console.log("red");
    x = "red";
    $("#color").html(x);
  });
  $(".color.g").click(function() {
    console.log("red");
    x = "green";
    $("#color").html(x);
  });
  $(".color.b").click(function() {
    console.log("red");
    x = "blue";
    $("#color").html(x);
  });
  $(".color.bl").click(function() {
    console.log("red");
    x = "black";
    $("#color").html(x);
  });
  $(".color.w").click(function() {
    console.log("red");
    x = "white";
    $("#color").html(x);
  });
  $(this).on("click", ".box", function() {
    jQuery(this).attr("class", "box");
    $(this).addClass(x);
    $(this).addClass(x);
  });
  generateCells();
});
