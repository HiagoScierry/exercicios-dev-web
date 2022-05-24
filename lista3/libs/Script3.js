$(document).ready(function() {
    
    let cont = $("img[alt]").length;
    for (let i = 0; i < cont; i++){
        console.log($("img[alt]:eq(" + i + ")").attr("alt"));
    }

    $("#myList>li[class='current']").removeClass('current').next().addClass("current");

    $("#specials>h2").text("Promoções").siblings("form").find("option[value='friday']").text("Dimitri");

    
    $("#slideshow>li:first").addClass("current").siblings().addClass("disabled");
});