$(function(){
$("#schysstnav").click(function() {  
    $("section").hide();
      $("#schysst").show(); 
    $("#p1").hide();
    });
    
$("#sakerhetnav").click(function() { 
    $("section").hide();
      $("#sakerhet").show(); 
   $("#p1").hide();
    });
    
$("#standardnav").click(function() {  
    $("section").hide();
      $("#standard").show(); 
   $("#p1").hide();
    });
$("#hus").click(function() {  
    $("section").hide();
    $("#schysst").show(); 
    $("#sakerhet").show();
    $("#standard").show();
    
    });
    
    
    
    
    
    
    
});
