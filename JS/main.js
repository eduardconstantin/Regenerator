$(document).ready(function () {
	setTimeout(function () {
		$('.begin').fadeIn(1000, function () {})
	}, 200)

	$('.begin').click(function () {
		$('.begin').fadeOut('slow', function () {})
		setTimeout(function () {
			$('.bg').fadeOut(3000, function () {})
			setTimeout(function () {
				$('.audio').trigger('play')
			}, 2000)
		}, 18000)

		setTimeout(function () {
			$('.text h1').fadeIn(1000, function () {})
		}, 500)
		setTimeout(function () {
			$('.text h1').fadeOut(1000, function () {})
		}, 5500)

		setTimeout(function () {
			$('.text p.first').fadeIn(1500, function () {})
		}, 4500)
		setTimeout(function () {
			$('.text p.first').fadeOut(2000, function () {})
		}, 9000)

		setTimeout(function () {
			$('.hands').fadeIn(5000, function () {})
		}, 5000)
		setTimeout(function () {
			$('.hands').fadeOut(2000, function () {})
		}, 16000)

		setTimeout(function () {
			$('.text p.second').fadeIn(3000, function () {})
		}, 9800)
		setTimeout(function () {
			$('.text p.second').fadeOut(2000, function () {})
		}, 16000)
	})
})

audiojs.events.ready(function () {
	var audios = $('audio')

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
			errorClass: 'errorZ',
		},
	})
})
