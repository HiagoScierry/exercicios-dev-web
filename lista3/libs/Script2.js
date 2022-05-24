$(document).ready(function(){

    $(window).load(function(){
        $("#toc").hide();
    }); 
    
    $("#btContents").click(function(){
        $("#toc").show();
    });

    $("#btHideContents").click(function(){
        $("#toc").hide();
    })

    $("#btShowHideContents").click(function(){
        $("#toc").show();
        $("#toc").hide();
    });

    $(".external").css("border", "3px solid red");
        
    $(".header").css("background-color", "yellow").show(1500);
 
    $(".editsection").hide(1500);


    $("#btEditMode").click(function(){
        $(".editsection").show();
    });


    $("#toc").hide();
    $("#btShowHideContents").click(function(){
        $("#toc").show(2000);
        $("#toc").hide(2000);
        $(".tocnumber").css("background-color", "grey");
    });


    $("fieldset input").after("*");


    $("div[class='editsection'] a").after("<span>>>>></span>");

    $("div[class='editsection'] a").after("<span>>>>></span>").mouseover(function(){
        $("div[class='editsection'] a").css("font-style","italic");
    });

    
    $("p a").on("click", function(){
        alert($(this).attr("title"));
    });

});