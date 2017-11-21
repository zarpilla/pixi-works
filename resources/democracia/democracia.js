$(function() {
    
    $('#llibertat').empty();

    var str = 'LLIBERTAT PRESES POLÍTIQUES';
    var str = "T'ESTIMO MOOOLT AMORSITU";

    for (var i = 0, len = str.length; i < len; i++) {
        $('#llibertat').append('<span class="visible-false" id="lt-' + i + '">' + str[i] + '</span>');
    }
    $('#llibertat').append('<div id="nopararem" class="visible-false nopararem">#nopararem</div>');

    var audio = document.getElementById("audio");
    if (audio) {
        audio.play();
        console.log('audio');
    }
    

    var t = 0;
    var intervalID = setInterval(function(){        
        if (t >= 100) {
            clearInterval(intervalID);
            doEnd();            
        }
        for (var i = 0, len = str.length; i < len; i++) {            
            var p = Math.floor(Math.random() * 100); // 0-99
            var el = $('#lt-' + i);            
            if (p <= t) {
                el.removeClass('visible-false');
            }
            else if (!el.hasClass('visible-false')) {
                el.addClass('visible-false');
            }            
        }
        t = t + 5;
    }, 250);

    function doEnd() {
        $( "#body" ).animate({
            backgroundColor: '#ffffff'
          }, 2000, function() {
            // Animation complete.
            $('#nopararem').removeClass('visible-false');
            $('#llibertat').addClass('llibertat-border');
          });
    }    
});