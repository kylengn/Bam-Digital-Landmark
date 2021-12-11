$(document).ready(function () {
  $("#2").hover(function () {
    $("#menu-bg").css(
      "background-image",
      'url("https://www.landmarkonrobson.com/assets/images/banner.4f66d09.jpg")'
    );
    $("#menu-bg").animate(
      {
        opacity: "1",
      },
      700,
      "linear",
      function () {
        $("#menu-bg").css("visibility", "visible");
      }
    );
  });

  $("#3").hover(function () {
    $("#menu-bg").css(
      "background-image",
      'url("https://www.landmarkonrobson.com/assets/images/banner.a5afc18.jpg")'
    );
    $("#menu-bg").animate(
      {
        opacity: "1",
      },
      700,
      "linear",
      function () {
        $("#menu-bg").css("visibility", "visible");
      }
    );
  });

  $("#4").hover(function () {
    $("#menu-bg").css(
      "background-image",
      'url("https://www.landmarkonrobson.com/assets/images/img-1.e6ec235.jpg")'
    );
    $("#menu-bg").animate(
      {
        opacity: "1",
      },
      700,
      "linear",
      function () {
        $("#menu-bg").css("visibility", "visible");
      }
    );
  });
  $("#5").hover(function () {
    $("#menu-bg").css(
      "background-image",
      'url("https://www.landmarkonrobson.com/assets/images/banner.c12aa70.jpg")'
    );
    $("#menu-bg").animate(
      {
        opacity: "1",
      },
      700,
      "linear",
      function () {
        $("#menu-bg").css("visibility", "visible");
      }
    );
  });
  $("#6").hover(function () {
    $("#menu-bg").css(
      "background-image",
      'url("https://www.landmarkonrobson.com/assets/images/banner.c0b3009.jpg")'
    );
    $("#menu-bg").animate(
      {
        opacity: "1",
      },
      700,
      "linear",
      function () {
        $("#menu-bg").css("visibility", "visible");
      }
    );
  });
  $("#7").hover(function () {
    $("#menu-bg").css(
      "background-image",
      'url("https://www.landmarkonrobson.com/assets/images/banner.4a35f4b.jpg")'
    );
    $("#menu-bg").animate(
      {
        opacity: "1",
      },
      700,
      "linear",
      function () {
        $("#menu-bg").css("visibility", "visible");
      }
    );
  });
  $("#8").hover(function () {
    $("#menu-bg").css(
      "background-image",
      'url("https://www.landmarkonrobson.com/assets/images/banner.3934d5d.jpg")'
    );
    $("#menu-bg").animate(
      {
        opacity: "1",
      },
      700,
      "linear",
      function () {
        $("#menu-bg").css("visibility", "visible");
      }
    );
  });
  $("#9").hover(function () {
    $("#menu-bg").css(
      "background-image",
      'url("https://www.landmarkonrobson.com/assets/images/banner.8891249.jpg")'
    );
    $("#menu-bg").animate(
      {
        opacity: "1",
      },
      700,
      "linear",
      function () {
        $("#menu-bg").css("visibility", "visible");
      }
    );
  });
  $("#10").hover(function () {
    $("#menu-bg").css(
      "background-image",
      'url("https://www.landmarkonrobson.com/assets/images/banner.2c8d931.jpg")'
    );
    $("#menu-bg").animate(
      {
        opacity: "1",
      },
      700,
      "linear",
      function () {
        $("#menu-bg").css("visibility", "visible");
      }
    );
  });

  $("#main-menu-trigger").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $("#menu-bg").animate(
        {
          opacity: "0",
        },
        300,
        "linear",
        function () {
          $("#menu-bg").css("visibility", "hidden");
        }
      );
    } else {
      $(this).addClass("active");

      $("#menu-bg").animate(
        {
          opacity: "1",
        },
        300,
        "linear",
        function () {
          $("#menu-bg").css("visibility", "visible");
        }
      );
    }
  });
});
