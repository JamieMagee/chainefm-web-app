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

    <title>Chaine FM</title>

    <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.0.1/css/font-awesome.min.css">
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

  <body style="margin-top:0px; background-color:#f6f6f6">

    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <?php  
            if (isset($_GET['s'])) echo "<div class=\"alert alert-success\">".$_GET['s']."</div>";  
            elseif (isset($_GET['e'])) echo "<div class=\"alert alert-danger\">".$_GET['e']."</div>";  
          ?>
          <form class="form-horizontal" role="form" method="POST" action="contact-form-submission2.php">
            <div class="form-group">
              <label for="input1" class="control-label">Name</label>
              <div>
                <input name="contact_name" type="text" class="form-control" id="input1" placeholder="Name">
              </div>
            </div>
            <div class="form-group">
              <label for="input2" class="control-label">Message</label>
              <div>
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
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
    <script src="js/contact.js"></script>
    <script src="js/hover.js"></script>
    <script src="js/ga.js"></script>    
  </body>
</html>