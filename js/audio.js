$(document).ready(function () {

	$('#radio').click(function () {
		if (this.paused == false) {
			$('h1').text('Press Play');
			$('title').text($('title').html().substring(2, $('title').html().length));
		} else {
			$('h1').text('Now Playing');
			$('title').prepend('▶ ');
		}
	});

	getOnAir();

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
				$('#one').text('On air: ' + $(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(1).text());
				$('#one').append(' (' + $(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(0).text() + ')');
				$('#two').text('with ' + $(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(2).text());
				break;
			} else if (i == trimmedTimes.length) {
				$('#one').text('On air: ' + $(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(1).text());
				$('#one').append(' (' + $(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(0).text() + ')');
				$('#two').text('with ' + $(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(2).text());
			}
		}
	});
}