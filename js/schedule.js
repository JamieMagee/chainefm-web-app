$(document).ready(function () {

	getDayNum();

	window.setInterval(function () {
		$('.panel').removeClass('panel-primary');
		$('tr').removeClass('success');
		getDayNum();
	}, 60000);

});

function getDayNum() {
	var day = new Date().getDay();

	switch (day) {
	case 0:
		$("#Sunday").addClass('panel-primary');
		highlightTime('#sunday');
		$("#collapseSeven").collapse('show').on('shown.bs.collapse', function() {
      $('html, body').animate({scrollTop: $(this).offset().top-100}, 1000);
    });
		break;
	case 1:
		$("#Monday").addClass('panel-primary');
		highlightTime('#monday');
		$("#collapseOne").collapse('show').on('shown.bs.collapse', function() {
      $('html, body').animate({scrollTop: $(this).offset().top-100}, 1000);
    });
		break;
	case 2:
		$("#Tuesday").addClass('panel-primary');
		highlightTime('#tuesday');
		$("#collapseTwo").collapse('show').on('shown.bs.collapse', function() {
      $('html, body').animate({scrollTop: $(this).offset().top-100}, 1000);
    });
		break;
	case 3:
		$("#Wednesday").addClass('panel-primary');
		highlightTime('#wednesday');
		$("#collapseThree").collapse('show').on('shown.bs.collapse', function() {
      $('html, body').animate({scrollTop: $(this).offset().top-100}, 1000);
    });
		break;
	case 4:
		$("#Thursday").addClass('panel-primary');
		highlightTime('#thursday');
		$("#collapseFour").collapse('show').on('shown.bs.collapse', function() {
      $('html, body').animate({scrollTop: $(this).offset().top-100}, 1000);
    });
		break;
	case 5:
		$("#Friday").addClass('panel-primary');
		highlightTime('#friday');
		$("#collapseFive").collapse('show').on('shown.bs.collapse', function() {
      $('html, body').animate({scrollTop: $(this).offset().top-100}, 1000);
    });
		break;
	case 6:
		$("#Saturday").addClass('panel-primary');
		highlightTime('#saturday');
		$("#collapseSix").collapse('show').on('shown.bs.collapse', function() {
      $('html, body').animate({scrollTop: $(this).offset().top-100}, 1000);
    });
		break;
	}
}

function highlightTime(day) {

	var curHour = new Date().getHours();
	var trimmedTimes = [];
	var times = [];

	$(day + 'Table>tbody>tr>td:nth-child(1)').each(function () {
		times.push($(this).text().split('-'));
	});

	$.each(times, function () {
		trimmedTimes.push($.trim(this).substring(0, 2));
	});

	for (var i = 0; i <= trimmedTimes.length; i++) {
		if (curHour < trimmedTimes[i]) {
			$(day + 'Table>tbody>tr:nth-child(' + i + ')').addClass('success');
			break;
		} else if (i == trimmedTimes.length) $(day + 'Table>tbody>tr:nth-child(' + i + ')').addClass('success');
	}
}