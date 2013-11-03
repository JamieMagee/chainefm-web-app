$(document).ready(function () {
  
  var currentDate = new Date()
  
  getHistory(currentDate.getFullYear(), ("0"+parseInt(currentDate.getMonth()+1,10)).slice(-2), ("0"+currentDate.getDate()).slice(-2));
  
  $('#datepicker').datetimepicker({
    pickTime: false,
    format: "DD/MM/YYYY",
    endDate: ("0"+parseInt(currentDate.getMonth()+1,10)).slice(-2)+'/'+("0"+currentDate.getDate()).slice(-2)+'/'+currentDate.getFullYear(),
    icons: {    
      date: "fa fa-calendar",
    }
  });
  
  $('input').val(("0"+currentDate.getDate()).slice(-2)+'/'+("0"+parseInt(currentDate.getMonth()+1,10)).slice(-2)+'/'+currentDate.getFullYear());
  
  $("#datepicker").on("change.dp", function(){
    var date = $('input').val().split('/');
    getHistory(date[2], date[1], date[0]);
  });
});

function getHistory(year, month, day) {
  $('table.table>tbody>tr').remove();
  $.when(
    $.getJSON("icecast-stats/history/"+year+"/"+month+"/"+day+".json", function(data) {
      $(data).each(function() {
        $('table.table>tbody').append('<tr><td>'+this['time']+'</td><td><a target="_blank" href="'+this['song_url']+'">'+this['song']+'</a> <a target="_blank" href="'+this['itunes_track']+'"><span class="label label-success">Buy</span></a></td><td><a target="_blank" href="'+this['artist_url']+'">'+this['artist']+'</a></td><td><a target="_blank" href="'+this['album_url']+'">'+this['album']+'</a> <a target="_blank" href="'+this['itunes_album']+'"><span class="label label-success">Buy</span></a></td></tr>');
      });
    })
  ).done( function() {
    $('table.table>tbody>tr>td>a').each( function() {
      if ($(this).attr('href') == "null" || || $(this).attr('href') == "undefined" || $(this).html() == "Not found") {
        if ($(this).html() == '<span class="label label-success">Buy</span>'){$(this).remove()}
        else $(this).contents().unwrap()
      }
    });
    $('table.table>tbody').html($('table.table>tbody').children('tr').get().reverse());
  });
}