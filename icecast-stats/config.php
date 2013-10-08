<?php

//error_reporting(0);
define(SERVER, 'http://stream-tx4.radioparadise.com');//your icecast server address, without the ending "/"
define(MOUNT, '/mp3-192'); //your radio's mount point, with the leading "/"
define(LAST_FM_API, '27518fb1a24916516b622348a8712141'); //your last.fm API key, get from http://www.last.fm/api/account
define(DEFAULT_ALBUM_ART, '/img/default.jpg');//the default album art image, will be used if failed to get from last.fm's API
define(GET_TRACK_INFO, true); //get information of the current song from last.fm
define(GET_ALBUM_INFO, true); //get extra information of the album from last.fm, if enabled, may increase script execute time
define(GET_ARTIST_INFO, true); //get extra information of the artist from last.fm, if enabled, may increase script execute time
define(GET_TRACK_BUY_LINK, false); //get buy links on Amazon, iTune and 7digital
define(GET_LYRICS, false); //get lyrics of the current song using chartlyrics.com's API
define(CACHE_ALBUM_ART, false);//cache album art images to local server
define(RECORD_HISTORY, false);//record play history of your radio
