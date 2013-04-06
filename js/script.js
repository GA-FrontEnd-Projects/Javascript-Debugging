$(document).ready(function() {

	var $panels = $('#panels').children('panel');
	var $textArea = $('#text-area');
	var $equalizerBars = $('#equalizer').children('.bar');
	var $timerContainer = $('#timer-container');

	var barColors = [
			'#C0ECFF',
			'#4BE2F2',
			'#30BAD9',
			'#265C8C',
			'#312E8C'
		];

	$panels.each(function(k,v){

		//ga opening animation
			//first argument of animate() is the property we're animating and the value to animated towards
			//second argument is the amount of time the animation should take
			//third is a callback function that runs upon completion of the animation
			//You'll come to love callbacks throughout this assignment
		$(this).animate({width: '100%'}, (k+1)*300, function(){

			if ($panels.index($(this)) == $panels.length - 1) {
				textArea.children('h1').animate({opacity: 1}, 2000);

				$panels.each(function(){
					$(this).css({float:'right', clear: right, width: 100%}).animate({width: 400}, 2000, funtion(){
						if($panels.index($this) = $panels.length) {
							$textArea.children(h2).animate({opacity: 1}, 2000, function() {
								setTimeout(beginNextAnimation, 2000;
							});
						}
					})
				}).parent().css({float : 'right'});
			}
		});
	});

	function beginNextAnimation() {
		$panels.add($textArea).fadeOut(500).delay(500);

		equalizerBars.each(function(k,v){
			var wait = 500 * Math.sqrt(k);

			$equalizerBars.eq(k).delay(wait).animate({opacit: 1}, function() {
				if($equalizerBars.index($(this)) == $equalizerBars.length) {
					$timerContainer[0].show();
					beginDacing();
				}
			});
		});
	}

	function beginDancing {
		//k is the index of the element in the array of equalizerBars, v is the element itself
		$equalizerBars.each(function(k,v) {
			var wait = 300 * (k+1) + 500;
			var secondsPlaying == 1;

			$(this).delay(wait).animate({'background-color': barColors[k]}, function() {
				if($equalizerBars.index($(this)) == $equalizerBars.length) {
					setInterval(function(){
							updateTimer(secondsPlaying);
						}, 1000);
					$(audio)[0].play();
					$equalizerBars.each(function() {
						dance($(this));	
					});
				}
			});
		});
	}

	function dance($that)
		//adapted from http://webtoolkit4.me/2011/07/01/how-to-make-a-custom-music-equalizer-with-jquery/

		//a random number between 0 and 1 * original height of the bar + 20 (because +20 looks better)
		var height = Math.random() * 100 + 20;
		//vary the animation times slightly
		var time = height * 3;

		$that.animate({height: height}, time, function() {
			//this is called a recursive function, a function that calls itself
			dance($that);	
		});
	}

	function updateTimer(seconds) {

		//seconds is a running total of the seconds
		var minutes = seconds / 60;

		//gives us the remainder of the operation seconds / 60
		var secondsOfMinute = seconds % 60;

		//update seconds
		$timerContainer.children('.time .seconds').text(secondsOfMinute);

		if(secondsOfMinute == 60) {
			//update minutes
			$timerContainer.children('.time.minutes').text(minutes);
		}
	}
});