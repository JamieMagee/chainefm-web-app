<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A mobile web app for listening to Chaine FM on the go!">
    <meta name="author" content="Jamie Magee">
    <!-- Apple-->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <!-- Android -->
    <meta name="mobile-web-app-capable" content="yes">
    <!-- Blackberry -->
    <meta name="HandheldFriendly" content="true">

    <title>Chaine FM - Contact</title>

    <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Roboto">
    <link rel="stylesheet" type="text/css" href="css/custom.css">
	
    <!-- favicon -->
    <link rel="shortcut icon" sizes="32x32" href="favicon.ico">
    <!-- For iPad with high-resolution Retina display running iOS ≥ 7: -->
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="img/apple-touch-icon-152x152-precomposed.png">
    <!-- For iPad with high-resolution Retina display running iOS ≤ 6: -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/apple-touch-icon-144x144-precomposed.png">
    <!-- For iPhone with high-resolution Retina display running iOS ≥ 7: -->
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="img/apple-touch-icon-120x120-precomposed.png">
    <!-- For iPhone with high-resolution Retina display running iOS ≤ 6: -->
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/apple-touch-icon-114x114-precomposed.png">
    <!-- For the iPad mini and the first- and second-generation iPad on iOS ≥ 7: -->
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="img/apple-touch-icon-76x76-precomposed.png">
    <!-- For the iPad mini and the first- and second-generation iPad on iOS ≤ 6: -->
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/apple-touch-icon-72x72-precomposed.png">
    <!-- For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
    <link rel="apple-touch-icon-precomposed" href="img/apple-touch-icon-precomposed.png">
    <!-- For Chrome Mobile 31+ -->
    <link rel="shortcut icon" sizes="196x196" href="img/nice-highres.png">
    <link rel="shortcut icon" sizes="128x128" href="img/niceicon.png">
    
  </head>

  <body>

    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="."><img src="img/icon25px.png" alt="Chaine FM logo"> <span style="color: #2184cf">Chaine</span> FM</a>
        </div>
        
        <div class="collapse navbar-collapse navbar-ex1-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#"><i class="fa fa-comments"></i> Contact</a></li>
            <li><a href="schedule"><i class="fa fa-calendar"></i> Schedule</a></li>
            <li><a href="presenters"><i class="fa fa-group"></i> Presenters</a></li>
            <li><a href="history"><i class="fa fa-clock-o"></i> History</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="about"><i class="fa fa-info-circle"></i> About</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-share-square-o"></i> Share <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li id="facebook"><a onclick="window.open('//www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href)); return false;"><i class="fa fa-facebook-square"></i> Facebook</a></li>
                <li id="twitter"><a onclick="window.open('//twitter.com/intent/tweet?url='+encodeURIComponent(location.href)); return false;"><i class="fa fa-twitter-square"></i> Twitter</a></li>
                <li id="google-plus"><a onclick="window.open('//plus.google.com/share?url='+encodeURIComponent(location.href)); return false;"><i class="fa fa-google-plus-square"></i> Google+</a></li>
                <li id="pinterest"><a onclick="window.open('//pinterest.com/pin/create/button/?url='+encodeURIComponent(location.href)+'&media='+encodeURIComponent(location.host)+'/img/apple-touch-icon-152x152-precomposed.png&description=A%20mobile%20web%20app%20for%20listening%20to%20Chaine%20FM%20on%20the%20go!'); return false;"><i class="fa fa-pinterest-square"></i> Pinterest</a></li>
                <li id="email"><a onclick="window.open('mailto:?subject=Chaine FM Web App&amp;body='+encodeURIComponent(location.href)); return false;"><i class="fa fa-envelope"></i> Email</a></li>
                <li id="sms"><a onclick="window.open('sms:?body='+encodeURIComponent(location.href)); return false;"><i class="fa fa-comment"></i> SMS</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-xs-12">
          <?php  
            if (isset($_GET['s'])) echo "<div class=\"alert alert-success\">".$_GET['s']."</div>";  
            elseif (isset($_GET['e'])) echo "<div class=\"alert alert-danger\">".$_GET['e']."</div>";  
          ?>
          <form class="form-horizontal" role="form" method="POST" action="contact-form-submission.php">
            <div class="form-group">
              <label for="input1" class="col-sm-2 control-label">Name</label>
              <div class="col-sm-10">
                <input name="contact_name" type="text" class="form-control" id="input1" placeholder="Name">
              </div>
            </div>
            <div class="form-group">
              <label for="input2" class="col-sm-2 control-label">Message</label>
              <div class="col-sm-10">
                <textarea name="contact_message" class="form-control" rows="6" id="input2" placeholder="Hey Chaine FM!"></textarea>
              </div>
            </div>
            <div class="form-group">
              <input type="hidden" name="save" value="contact">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>       
        </div>
      </div>
    </div>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>
    <script src="js/hover.js"></script>
    <script src="js/ga.js"></script>    
  </body>
</html>