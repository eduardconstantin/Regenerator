$(document).ready(function() {

    Height();
    setTimeout(function() {
        $( ".begin" ).fadeIn( 1000, function() {});
    }, 200);
    

    $( ".begin" ).click(function() {
        
        setTimeout(function() {
            demo.init();
            $( "canvas" ).fadeIn( 5000, function() {});
        }, 19500);
       
       $( ".begin" ).fadeOut( "slow", function() {});
       setTimeout(function() {
            $( ".bg" ).fadeOut( 3000, function() {});
            setTimeout(function() {
               $(".audio").trigger('play');
            }, 2000);
       }, 18000);

       setTimeout(function() {
            $( ".text h1" ).fadeIn( 1000, function() {});
       }, 500);
       setTimeout(function() {
            $( ".text h1" ).fadeOut( 1000, function() {});
       }, 5500);

       setTimeout(function() {
            $( ".text p.first" ).fadeIn( 1500, function() {});
       }, 4500);
       setTimeout(function() {
            $( ".text p.first" ).fadeOut( 2000, function() {});
       }, 9000);

       setTimeout(function() {
            $( ".hands" ).fadeIn( 5000, function() {});
       }, 5000);
       setTimeout(function() {
            $( ".hands" ).fadeOut( 2000, function() {});
       }, 16000);

       setTimeout(function() {
            $( ".text p.second" ).fadeIn( 3000, function() {});
       }, 9800);
       setTimeout(function() {
            $( ".text p.second" ).fadeOut( 2000, function() {});
       }, 16000);

       
    });

});

$(window).on('load resize', function() {

});    

/* ==================================================
HEIGHT
================================================== */
function Height() {
    var windowHeight = ($(window).height());
    var windowWidth = ($(window).width());

    if (windowHeight >= 600) {
        if (windowWidth < 974) {
            $('header').css('height', 500);
        } else {
            $('header').css('height', windowHeight);
        }
    } else {
        if (windowWidth < 974) {
            $('header').css('height', 500);
        } else {
            $('header').css('height', windowHeight);
        }
    }

}

const SETTINGS = {
    rebound: {
        tension: 14,
        friction: 10
    },
    spinner: {
        id: 'spinner',
        radius: 90,
        sides: 5,
        depth: 8,
        colors: {
            background: '#00272C',
            stroke: null,
            base: null,
            child: '#02C39A'
        },
        alwaysForward: true, // When false the spring will reverse normally.
        restAt: null, // A number from 0.1 to 0.9 || null for full rotation
        renderBase: false
    }
};

audiojs.events.ready(function() {
    var audios = document.getElementsByTagName('audio');

    var a1 = audiojs.create(audios[0], {
        css: false,
        createPlayer: {
            markup: false,
            playPauseClass: 'play-pauseZ',
            scrubberClass: 'scrubberZ',
            progressClass: 'progressZ',
            loaderClass: 'loadedZ',
            timeClass: 'timeZ',
            durationClass: 'durationZ',
            playedClass: 'playedZ',
            errorMessageClass: 'error-messageZ',
            playingClass: 'playingZ',
            loadingClass: 'loadingZ',
            errorClass: 'errorZ'
        }
    });
});