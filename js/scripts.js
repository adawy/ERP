
$(document).ready(function () {
    $('.datepicker').datepicker();
    $('.colors button').on('click', function() {
        $('link[href*="theme"]').attr('href',$(this).attr("data-value"));
    });
    function calculator(){
        var sum = "";
        var len;
        //var arr= [];
        var operators = ["+", "-", "*", "/"];
        var inputVal = document.getElementById("screen");
        $(".buttons .digit").on('click', function() {
          var num = $(this).attr('value');
          sum += num;
          //arr.push(num);
          $("#screen").html(sum);
        len = inputVal.innerHTML.split("");
        console.log(len);
          //console.log(arr);
    
        });
        $(".buttons .operator").on('click', function(e) {
          e.preventDefault();
          var ops = $(this).attr('value');
          sum += ops;
          //arr.push(num);
          $("#screen").html(sum);
           len = inputVal.innerHTML;
          if(/(?=(\D{2}))/g.test(sum)) {
            sum = len.substring(0, len.length - 1);
            $("#screen").html(sum);
          }
          //len = inputVal.innerHTML.split("");
            //console.log(len);
            
          //console.log(arr);
    
        });
    
        $(".calculator").on('click', function() {
            $('.calc-card').toggleClass('move-calc');
        });
        $("#equal").on('click', function() {
          var total =  eval(sum);
          //$("#screen").attr('value', total);
          $("#screen").html(total % 1 != 0 ? total.toFixed(2) : total);
        });
    
        $("#clear").on('click', function() {
           sum = "";
           arr = [];
            $("#screen").html(0);
        });
    
        };
              calculator();
    // over-lay
    $('.over-lay').fadeOut();
    //dorpdown-aside
    $('.dorpdown-list').click(function () {
        $(this).siblings(".dropdown-aside").fadeToggle();
        $(this).children( "i.fa-angle-down" ).toggleClass('rot-180');
        $(this).toggleClass('active');
    });
    $('.close-aside').click(function () {
        $('aside').toggleClass('width-0');
        $('.content').toggleClass('m-0');
        $('aside svg').toggleClass('svg-icon');
        $('aside .card .card-header span').fadeToggle();
        $('.bottom-info .user-acc span').fadeToggle();
        $('aside .company-logo img').css('width','79%');
        $('.over-lay').fadeToggle();
    });
    $('.over-lay').click(function () {
        $('aside').toggleClass('width-0');
        $('.content').toggleClass('m-0');
        $('aside .card .card-header span').fadeToggle();
        $('aside svg').toggleClass('svg-icon');
        $('.bottom-info .user-acc span').fadeToggle();
        $('aside .company-logo img').css('width','100%');
        $(this).fadeToggle();
    });
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
    }).change();
});
 // full screen
    /* Get into full screen */
    function GoInFullscreen(element) {
        if (element.requestFullscreen)
            element.requestFullscreen();
        else if (element.mozRequestFullScreen)
            element.mozRequestFullScreen();
        else if (element.webkitRequestFullscreen)
            element.webkitRequestFullscreen();
        else if (element.msRequestFullscreen)
            element.msRequestFullscreen();
    }

    /* Get out of full screen */
    function GoOutFullscreen() {
        if (document.exitFullscreen)
            document.exitFullscreen();
        else if (document.mozCancelFullScreen)
            document.mozCancelFullScreen();
        else if (document.webkitExitFullscreen)
            document.webkitExitFullscreen();
        else if (document.msExitFullscreen)
            document.msExitFullscreen();
    }

    /* Is currently in full screen or not */
    function IsFullScreenCurrently() {
        var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;

        // If no element is in full-screen
        if (full_screen_element === null)
            return false;
        else
            return true;
    }

    $("#go-button").on('click', function () {
        if (IsFullScreenCurrently())
            GoOutFullscreen();
        else
            GoInFullscreen($("body").get(0));
    });

    // $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function () {
    //     if (IsFullScreenCurrently()) {
    //         $("#go-button").text('Disable Full Screen');
    //     } else {
    //         $("#go-button").text('Enable Full Screen');
    //     }
    // });
     // end  full screen