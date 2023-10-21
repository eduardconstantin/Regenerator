$(document).ready(function () {
  setTimeout(function () {
    $(".begin").fadeIn(1000, function () {});
  }, 200);

  $(".begin").click(function () {
    $(".begin").fadeOut("slow", function () {});
    setTimeout(function () {
      $(".bg").fadeOut(3000, function () {});
      setTimeout(function () {
        $(".audio").trigger("play");
      }, 2000);
       $(".flower").fadeIn(2000, function () {});
    }, 10000);

    setTimeout(function () {
      $(".text h1").fadeIn(1000, function () {});
    }, 500);
    setTimeout(function () {
      $(".text h1").fadeOut(1000, function () {});
    }, 5500);

    setTimeout(function () {
      $(".text p.first").fadeIn(1500, function () {});
    }, 4500);
    setTimeout(function () {
      $(".text p.first").fadeOut(2000, function () {});
    }, 9000);

  });
});

audiojs.events.ready(function () {
  var a1 = audiojs.create($("audio"), {
    css: false,
    createPlayer: {
      markup: false,
      playPauseClass: "play-pauseZ",
      scrubberClass: "scrubberZ",
      progressClass: "progressZ",
      loaderClass: "loadedZ",
      timeClass: "timeZ",
      durationClass: "durationZ",
      playedClass: "playedZ",
      errorMessageClass: "error-messageZ",
      playingClass: "playingZ",
      loadingClass: "loadingZ",
      errorClass: "errorZ",
    },
  });
});
