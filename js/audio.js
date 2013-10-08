$(document).ready(function () {

	$('#volume').slider({
		value : 75,
		step  : 1,
		range : 'min',
		min   : 0,
		max   : 100,
		slide : function(){
			var value = $('#volume').slider('value');
			$('#radio')[0].volume = (value / 100);
			if (value >= 50) {
				$('#volume-icon').attr( "class", "icon-volume-up icon-2x" )
			}
			else if (value > 1 && value < 50) {
				$('#volume-icon').attr( "class", "icon-volume-down icon-2x" )
			}
			else {
				$('#volume-icon').attr( "class", "icon-volume-off icon-2x" )
			}
		}
	});
	
	$('#volume').draggable();

	$('#playpause').click(function () {
		if (!$('#playpause').hasClass('icon-spinner')) {
			if ($('#radio')[0].paused == false) {
				$('#playpause').removeClass('icon-pause').addClass('icon-play');
				$('#radio')[0].pause();
				if ($('title').html().indexOf('▶ ') != -1) {
					$('title').text($('title').html().substring(2, $('title').html().length));
				}		
			} else {
				$('#playpause').removeClass('icon-play').addClass('icon-pause');
				$('#radio')[0].play();
				$('title').prepend('▶ ');
			}
		}
	});
	
	$('#volume-icon').click(function () {
		if ($('#radio')[0].volume != 0) {
			$('#radio')[0].volume = 0;
			$('#volume').slider('value', 0);
			$('#volume-icon').attr( "class", "icon-volume-off icon-2x");
		}
		else {
			$('#radio')[0].volume = .8;
			$('#volume').slider('value', 80);
			$('#volume-icon').attr( "class", "icon-volume-up icon-2x");
		}
	});
	
	$("#radio").on("canplaythrough", function(){
		console.log('canplaythrough');
		$('#playpause').attr( "class", "icon-play icon-2x");
	});
	
	$("#radio").on("stalled", function(){
		$('#playpause').attr( "class", "icon-spinner icon-spin icon-2x");
	});
	
	
	
	getOnAir();
	getStats();
	
	window.setInterval(function () {
		getStats();
	}, 10000);

	window.setInterval(function () {
		getOnAir();
	}, 60000);
});

function getOnAir() {
	$.get("schedule.html", function (data) {

		var weekDay = new Array('#sunday', '#monday', '#tuesday', '#wednesday', '#thursday', '#friday', '#saturday');
		var day = new Date().getDay();
		var curHour = new Date().getHours();
		var trimmedTimes = [];
		var times = [];

		var data = $(data);

		$(weekDay[day] + 'Table>tbody>tr>td:nth-child(1)', data).each(function () {
			times.push($(this).text().split('-'));
		});

		$.each(times, function () {
			trimmedTimes.push($.trim(this).substring(0, 2));
		});

		for (var i = 0; i <= trimmedTimes.length; i++) {
			if (curHour < trimmedTimes[i]) {
				$('.panel-title').text($(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')' + " ", data).find("td").eq(1).text());
				$('.align-right').text('(' + $(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(0).text() + ')');
				$('.panel-title').append(' <small>with ' + $(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(2).text() + '</small>');
				$('.panel-body').text($(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(3).text());
				break;
			} else if (i == trimmedTimes.length) {
				$('.panel-title').text($(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')' + " ", data).find("td").eq(1).text());
				$('.align-right').text('(' + $(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(0).text() + ')');
				$('.panel-title').append(' <small>with ' + $(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(2).text() + '</small>');
				$('.panel-body').text($(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(3).text());
			}
		}
	});
}

function getStats() {
	$.ajax({
		timeout: 10000,
		url: "icecast-stats/icecast.php"
	});

	$.getJSON("icecast-stats/info.json", function( data ) {
	  $('.albumart').attr('src',atob(data['album'].image_m));
	  $('.track').text(atob(data['info'].song));
	  $('.artist').text(atob(data['info'].artist));
	  $('.album').text(atob(data['album'].title));
	});
}