$(document).ready(function () {

	$('#radio').click(function () {
		if (this.paused == false) {
			if ($('title').html().indexOf('▶ ') != -1) {
				$('title').text($('title').html().substring(2, $('title').html().length));
			}		
		} else {
			$('title').prepend('▶ ');
		}
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