$(function(){
    $("#openinfo").click(function(){
        $("#info").toggle();
    });
    $("li").dblclick(function(){ 
        $(this).toggleClass( "selected" ); 
    });
    $("#bgcolor").change(function(){
        $("body").css("background-color",$(this).val());
    });
     $("#tecolor").change(function(){
        $("body").css("color",$(this).val());
    });
     $("#rubrik").focusout(function(){
        $("h1").text($(this).val());
    });
    $("#flugknapp").click(function(){
        var x = Math.floor(Math.random()*800);
        var y = Math.floor(Math.random()*500);
        $("#fluga").css({left:x,top:y});
    });
});

