$(document).ready(function () {
  $("#menu").click(function () {
    $(".navbar").toggleClass("active");
  });
   $(window).on("scroll load", function () {
    $("#menu #icon").removeClass("fa-xmark");
    $("#menu #icon").addClass("fa-bars");
    $(".header .header-2 .navbar").removeClass("active");
    i = 0;

    if ($(window).scrollTop() > 68) {
      $(".header .header-2").addClass("active");
    } else {
      $(".header .header-2").removeClass("active");
    }
    });
  });

