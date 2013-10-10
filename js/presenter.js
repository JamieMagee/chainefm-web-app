var info = {
  'Gary Andrews': 'Gary is one of the founders of Chaine FM and has been Station Director since the station first went on-air in 2007. Starting in radio when still at school, Gary has had a long career hosting radio shows on Hospital Radio and then short-term radio stations from 2000 onwards. He is also regularly to be seen behind the decks as a local DJ. Having hosted the afternoon show during the first four Chaine FM broadcasts, Gary now moves to Breakfast, a move he describes as "taking sleep deprivation to a new level."'
}

$(document).ready(function () {
  $.get("schedule.html", function (data) {
    var data = $(data);
    var presenters = [];
    $('Table>tbody>tr>td:nth-child(3)', data).each( function () {presenters.push($(this).html());});
    presenters=unique(presenters.sort());

    function unique(array) {
        return $.grep(array, function(el, index) {
            return index == $.inArray(el, array);
        });
    };

    for (var i = 0; i < presenters.length; i++) {
      $('#accordion').append('<div class="panel panel-default" id="'+presenters[i]+'"><a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse'+toTitleCase(convert(i+1))+'"><div class="panel-heading"><h4 class="panel-title">'+presenters[i]+'</h4></div></a><div id="collapse'+toTitleCase(convert(i+1))+'" class="panel-collapse collapse"><div class="panel-body"><div class="media"><img class="pull-left media-object" src="/img/presenters/'+presenters[i]+'" alt="'+presenters[i]+'"><div class="media-body"><h4 class="media-heading">About</h4>'+info[presenters[i]]+'</div></div></div></div></div>');
    };
  });
});

var ones=['','one','two','three','four','five','six','seven','eight','nine'];
var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];


function convert_millions(num){
    if (num>=1000000){
        return convert_millions(Math.floor(num/1000000))+"million"+convert_thousands(num%1000000);
    }
    else {
        return convert_thousands(num);
    }
}

function convert_thousands(num){
    if (num>=1000){
        return convert_hundreds(Math.floor(num/1000))+"thousand"+convert_hundreds(num%1000);
    }
    else{
        return convert_hundreds(num);
    }
}

function convert_hundreds(num){
    if (num>99){
        return ones[Math.floor(num/100)]+"hundred"+convert_tens(num%100);
    }
    else{
        return convert_tens(num);
    }
}

function convert_tens(num){
    if (num<10) return ones[num];
    else if (num>=10 && num<20) return teens[num-10];
    else{
        return tens[Math.floor(num/10)]+ones[num%10];
    }
}

function convert(num){
    if (num==0) return "zero";
    else return convert_millions(num);
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}