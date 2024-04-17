$(document).ready(function () {
  $("#menu").click(function () {
    $(".navbar").toggleClass("active");
  });

  $(window).on("scroll load", function () {
    $("#menu #icon").removeClass("fa-xmark");
    $("#menu #icon").addClass("fa-bars");
    $(".navbar").removeClass("active");
    i = 0;
  });
});
