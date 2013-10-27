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
      if (value >= 75) {
        $('#volume-icon').html('<i class="fa fa-volume-up fa-2x"></i>')
      }
      else if (value >= 25 && value < 75) {
        $('#volume-icon').html('<i class="fa fa-volume-down fa-2x"></i>')
      }
      else if (value > 1 && value < 25) {
        $('#volume-icon').html('<i class="fa fa-volume-off fa-2x"></i>')
      }
      else {
        $('#volume-icon').html('<span class="fa-stack"><i class="fa fa-volume-off fa-stack-1x fa-2x"></i><i class="fa fa-ban fa-stack-2x text-error"></i></span>')
      }
    }
  });
  
  $('#volume').draggable();

  $('#playpause').click(function () {
    if (!$('#playpause').hasClass('fa-refresh')) {
      if ($('#radio')[0].paused == false) {
        $('#playpause').removeClass('fa-pause').addClass('fa-play');
        $('#radio')[0].pause();
        if ($('title').html().indexOf('▶ ') != -1) {
          $('title').text($('title').html().substring(2, $('title').html().length));
        }    
      } else {
        $('#playpause').removeClass('fa-play').addClass('fa-pause');
        $('#radio')[0].play();
        $('title').prepend('▶ ');
      }
    }
  });
  
  $('#volume-icon').click(function () {
    if ($('#radio')[0].volume > .01) {
      $('#radio')[0].volume = 0;
      $('#volume').slider('value', 0);
      $('#volume-icon').html('<span class="fa-stack"><i class="fa fa-volume-off fa-stack-1x fa-2x"></i><i class="fa fa-ban fa-stack-2x text-error"></i></span>')
    }
    else {
      $('#radio')[0].volume = .8;
      $('#volume').slider('value', 80);
      $('#volume-icon').html('<i class="fa fa-volume-up fa-2x"></i>')
    }
  });
  
  $("#radio").on("canplaythrough", function(){
    $('#playpause').attr( "class", "fa fa-play fa-2x");
  });
  
  $("#radio").on("stalled", function(){
    $('#playpause').attr( "class", "fa fa-refresh fa-spin fa-2x");
    if ($('title').html().indexOf('▶ ') != -1) {
      $('title').text($('title').html().substring(2, $('title').html().length));
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
        //$('.align-right').text('(' + $(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(0).text() + ')');
        $('.panel-title').append(' <small>with <a target="_blank" href="presenters#collapse' + $(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(2).text().replace(/\s/g, "")+'">'+$(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(2).text()+'</a></small>');
        $('.panel-body').text($(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(3).text());
        $('.panel-footer').html('Sponsored by '+$(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(4).html());
        break;
      } else if (i == trimmedTimes.length) {
        $('.panel-title').text($(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')' + " ", data).find("td").eq(1).text());
        //$('.align-right').text('(' + $(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(0).text() + ')');
        $('.panel-title').append(' <small>with <a target="_blank" href="presenters#collapse' + $(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(2).text().replace(/\s/g, "")+'">'+$(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(2).text()+'</a></small>');
        $('.panel-body').text($(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(3).text());
        $('.panel-footer').html('Sponsored by '+$(weekDay[day] + 'Table>tbody>tr:nth-child(' + i + ')', data).find("td").eq(4).html());
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
    $('#albumart-link').attr('href',atob(data['album'].image_xl)).attr('title', atob(data['album'].title));
    if (atob(data['album'].title) != 'Not found') {
      $('.track').html('<a target="_blank" href="'+atob(data['track'].lastfm_url)+'">'+atob(data['info'].song)+'</a> <a target="_blank" href="'+atob(data['track'].buylink['download'].iTunes['link'])+'"<span class="label label-success">Buy</span></a>');
    }
    else $('.track').html('<a target="_blank" href="'+atob(data['track'].lastfm_url)+'">'+atob(data['info'].song)+'</a>');
    $('.artist').html('<a target="_blank" href="'+atob(data['artist'].lastfm_url)+'">'+atob(data['info'].artist)+'</a>');
    if (atob(data['album'].title) != 'Not found') {
      $('.album').html('<a target="_blank" href="'+atob(data['album'].lastfm_url)+'">'+atob(data['album'].title)+'</a> <a target="_blank" href="'+atob(data['album'].buylink['download'].iTunes['link'])+'"<span class="label label-success">Buy</span></a>');
    }
    else $('.album').text(atob(data['album'].title));
  });
}