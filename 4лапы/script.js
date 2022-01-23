$(document).ready(function() {
                console.log( "ready!" );
                $(".comments h3:first").addClass("active");
                $(".comments p:not(:first)").hide();
                $(".comments h3").click(function () {
                    $(this).next("p").slideToggle("slow")
                    .siblings("p:visible").slideUp("slow");
                    $(this).toggleClass("active");
                    $(this).siblings("h3").removeClass("active");
                });

    
            }); 
			
			
			
$(document).ready(function() {
    $("#loginLink").click(function( event ){
           event.preventDefault();
           $(".overlay").fadeToggle("fast");
     });

    $(".overlayLink").click(function(event){
        event.preventDefault();
        var action = $(this).attr('data-action');

        $("#loginTarget").load("ajax/" + action);

        $(".overlay").fadeToggle("fast");
    });

    $(".close").click(function(){
        $(".overlay").fadeToggle("fast");
    });

    $(document).keyup(function(e) {
        if(e.keyCode == 27 && $(".overlay").css("display") != "none" ) { 
            event.preventDefault();
            $(".overlay").fadeToggle("fast");
        }
    });
});




var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

