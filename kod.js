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
});

