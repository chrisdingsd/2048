// markup should have a div with classname score-progress 
// and score-counter is for counter


function circleScore(settings){
		var _settings = {
			score: 100,
			progress: '.score-progress',
			counter: '.score-counter',
			beforeColor: '#fff',
			afterColor: '#000',
			size: '50px',
      circleWidth: '10px'
		}
		settings = settings || {};
		settings = $.extend(_settings, settings);
	
    var score = parseInt(settings.score);
    var progress = $(settings.progress);
		var counter = $(settings.counter);
	
		var cover = $('<div>');
		cover.css({
			'position': 'absolute',
			'top': '10px',
			'left': '10px',
			'width': '30px',
			'height': '30px',
			'border-radius': '100%',
			'background-color': '#fff'
		});
		progress.append(cover);
	
		progress.css({
			'position': 'relative',
			'background-color': settings.afterColor,
			'background-image': 'linear-gradient(91deg, transparent 50%, ' + settings.beforeColor + ' 50%), linear-gradient(90deg, ' + settings.beforeColor + ' 50%, transparent 50%)',
			'width': settings.size,
			'height': settings.size,
			'border-radius': '100%'
		})
    
		var percentage = 0;
    var i;

    function fillUp () {
        i = percentage * 360 / 100;
				var style1 = 'linear-gradient(' + (90 + i) + 'deg, transparent 50%, ' + settings.beforeColor + ' 50%),linear-gradient(90deg, ' + settings.beforeColor + ' 50%, transparent 50%)';
				var	style2 = 'linear-gradient(' + (i - 90) + 'deg, transparent 50%, ' + settings.afterColor + ' 50%),linear-gradient(90deg, ' + settings.beforeColor + ' 50%, transparent 50%)';
        counter.text(Math.round(percentage) + '%');
        if (i <= 180) {
            progress.css('background-image', style1);
        }
        else {
            progress.css('background-image', style2);
        }
        if( ++percentage <= score) {
            requestAnimationFrame(fillUp);
        }
    }

    requestAnimationFrame(fillUp);
	}
