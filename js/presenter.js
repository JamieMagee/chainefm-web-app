var info = {"Andrew Houston": "Andy joined Chaine FM in 2012 having been a mobile DJ a few years ago. Andy is also involved in sport and community activity generally. He is our community  manager and the guy to chat to if you want your group or club featured on the station. This year he's moved from late night, to some of the stations prime time slots.", "Andy Kane and Len Johnston": "Andy and Len joined Chaine FM in 2012, the comedy act met at Ulster Hospital radio and since then they've been a team. With over 15 years broadcasting experience between them.",
    "Chris Armstrong": "Chris is new to Chaine FM in 2013 and is so excited to get onboard.", "Ciara Van Es": "2013 marks the first year for Ciara at Chaine FM. She\u00a0has a long history in media publishing and magazines\u2026 This year see her takes on her first attempt at radio which is a completely different avenue but she is excited about it nonetheless!. Chaine FM wishes Ciara the best of luck for her first attempt at radio.", "Damien McAtackney": "Damien has been a life-long music lover and hosted shows on Chaine FM in the past before returning to look after overnights in 2012. This year he's looking after our Late Night slot.",
    "Eamonn Pratt": "Eamonn has always loved music and has been DJing for many years. He joined Chaine FM at the start in 2007 and is now a fixed part of the team.", "Evan Taylor": "Evan started Djing and promoting events at the tender age of 14 and has played at venues home and away. After having a break from djing Evan returned to the decks 4 years ago when he took on a residency at Chekkers Wine Bar. He has become one of the most popular DJs around Larne.", "Gary Andrews": "Gary is one of the founders of Chaine FM and has been Station Director since 2007. Starting in radio when still at school, Gary has had a long career hosting radio shows from 2000 onwards. This year he's took a step back from Chaine FM, and is now hosting Friday Breakfast and sharing Saturday Brunch with Mark McWhirter.",
    "Gary Thompson": "2013 is Gary's first year at Chaine FM, and boy is he excited. Chaine FM welcomes Gary, and eagerly awaits his first show", "Gillian Mills": "Gillian is well in touch with the local music scene, running the Red7 Studio in Larne. She's sure to know a bit about music. Chaine FM welcomes Gillian in 2013 and wishes her the best for her first show.", "Lisa Crooks": "Lisa returns to Chaine FM for her second year at the station after joining in 2012, Lisa's caught the radio bug and has now taken on two new shows in 2013.\u00a0Lisa has been involved for a long-time in the community raising money for Cancer Research.",
    "Louise Moore": "Louise first got into broadcasting working as Gary Andrews co-host on Radio Moyle hospital radio. Such was the chemistry of their radio double act, complete with squabbling, that some people thought they were a married couple. Louise joined Chaine FM to co-host the weekend 'Girls Night In' strand and now takes the reign as a presenter in her own right.", "Mark Dobbin": "Mark is one of Larne's best known DJs with a long career of DJing in some of the best known nightspots in the country. Joining Chaine FM in 2012, Mark hosted the Evening Show on Chaine FM. This year he's been promoted to the\u00a0busiest\u00a0show on Chaine FM \u2013 Drive time.",
    "Mark McWhirter": "Earlier this year Mark relocated to Leeds, West Yorkshire. But he returns at Christmas to lend a helping hand with Chaine FM. Mark joined Chaine FM in 2010. Mark hosted the Weekend Breakfast show last year, Mark is now sharing the Saturday Brunch show on the weekends he's home with Gary. Mark is also made the iPhone app", "Noel Hyndman": "After many years in hospital radio in Belfast and Antrim including serving as a member for nine years on the Executive Committee of Hospital Radio nationally. Noel went on to work on a variety of Northern Ireland commercial radio stations.Noel joined Chaine FM in 2012. This year he's been promoted to the honour of Weekday Breakfast.",
    "Pat Thompson": "Pat has been a mobile DJ for more years than he cares to remember. He spent many years on hospital radio before joining Chaine FM in 2010 as Weekend Breakfast host.", "Peter Henderson": "Peter has a long history in broadcasting. He began at Belfast City Hospital before moving on to Radio Moyle when that came to an end. He has been a core part of the Chaine team since the station began and has hosted a wide range of slots. As well as his current late shows, he is the main daytime stand-in presenter.",
    "Si\u00e2n Parry": "Si\u00e2n is new to Chaine FM in 2013 and so excited to get going. Studying Media and Moving Images at Belfast Met \u2013 she's a huge movie and radio fan.", "Stephen Craig": "Stephen has had a long career as a broadcast engineer and consultant. Having first got involved in radio in Larne as part of the set-up team for hospital radio station, Radio Moyle, he went on to become one of the founders of Chaine FM and its technical manager. This year Stephen hosts our Brunch show.", "Stephen Snoddy": "Life-long rocker Stephen is one of the original Chaine FM presenters and has hosted the station's Rock strand since day one until 2013 where he takes over the Late Night slot on Thursdays.",
    "Steven Armour": "Steven is new to Chaine FM in 2013 and is very eager to get behind the mic. Studying English\u00a0Literature\u00a0and Film Studies at Uni \u2013 he has a vast knowledge in all things cinema.", "Steven Reid": "Despite his relative youth, Steven has been DJing for over 20 years and was one of the leading DJs in the 90s nightclub scene in Northern Ireland. In 2012 Steven took over the Mid-Morning show and this year he returns to Chaine FM, sharing the Afternoon show with Louise Moore.",
    "Victoria Hood": "2013 is Victoria's first year at Chaine FM, although this isn't her first attempt at radio.\u00a0Studying Creative Media Production (Broadcast Journalism) at Belfast Met, and working at Blast 106 in Belfast Victoria's sure to know how to work the mic (no pressure!)", "Warren Boyd and Scott Ross": "Warren and Scott have both performed in a variety of bands both playing Drums. They both got involved in 2010, Scott is still Warren's right hand man.", "Zarak Bartley": "2013 marks the first year of Chaine FM for Zarak, and his first ever attempt at Radio Broadcasting.\u00a0Chaine FM wishes all the best to Zarak for his first show."
};

$(document).ready(function () {
  $.when(
    $.get("schedule.html", function (data) {
      var data = $(data);
      var presenters = [];
      $('Table>tbody>tr>td:nth-child(3)>a', data).each( function () {presenters.push($(this).html());});
      presenters=unique(presenters.sort());

      for (var i = 0; i < presenters.length; i++) {
        $('#accordion').append('<div class="panel panel-default" id="'+presenters[i].replace(/\s/g, "")+'"><a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse'+presenters[i].replace(/\s/g, "")+'"><div class="panel-heading"><h4 class="panel-title">'+presenters[i]+'</h4></div></a><div id="collapse'+presenters[i].replace(/\s/g, "")+'" class="panel-collapse collapse"><div class="panel-body"><img class="pull-left media-object" src="/img/presenters/'+presenters[i]+'.png" alt="'+presenters[i]+'"><h4>About</h4>'+info[presenters[i]]+'<br><h4>On Air</h4><table class="table table-striped"><thead><tr><th>Day</th><th>Time</th><th>Show</th></tr></thead><tbody class="'+presenters[i].replace(/\s/g, "")+'"></tbody></div></div></div>');
      };
      
      for (var i = 0; i < presenters.length; i++) {
        $('Table>tbody>tr>td:nth-child(3)>a', data).each( function () {
          if ($(this).html()==presenters[i]){
            $('tbody.'+presenters[i].replace(/\s/g, "")).append('<tr><td>'+toTitleCase($(this).closest('Table').attr('id').substr(0,$(this).closest('Table').attr('id').length-5))+'</td><td>'+$($($(this).closest('tr').get(0)).find('td')[0]).text()+'</td><td data-container="body" data-placement="bottom" data-toggle="popover" data-content="'+$($($(this).closest('tr').get(0)).find('td')[3]).text()+'"><a>'+$($($(this).closest('tr').get(0)).find('td')[1]).text()+'</a></td></tr>');
            $('Table>tbody>tr>td:nth-child(3)').popover();
          }
        });
      };  
      if (location.hash){
        $(location.hash).collapse('show');
        $(location.hash).on('shown.bs.collapse', function() {
          $('html, body').animate({scrollTop: $(location.hash).offset().top-100}, 2000);
        });
      }
    })
  ).done( function() {
    $('table>tbody>tr>td').on('click', function() {
      $('td').not(this).popover('hide');
    });
  }, function() {
    $('.collapse').on('hide.bs.collapse', function() {
      $('td').popover('hide');
    });
  });
  
});



function unique(array) {
  return $.grep(array, function(el, index) {
      return index == $.inArray(el, array);
  });
};

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