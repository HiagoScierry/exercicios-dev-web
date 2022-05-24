$(document).ready(function(){

    $(".module"); //A
    
    $("#myListItem"); //B 

    $("form[label]"); //C

    $("img[alt]").length; //D

    $("tbody tr:odd"); //E

    $('h2:contains("B")' + 'h2:contains("e")').length; // F

    $("#myList>li:not(.current)"); //G

    $("img:last-child" + "h3:last-child"); //H

    //Letra A do exercicio 2
    $("#myList>li:last").click(function addList(){
        let cont=8;
        for(i=0; i<5; i++){
            $("#myList").append("<li>List item "+cont+"</li>");
            cont+=1;
        }

    });

    //Letra B do exercicio 2
    $("#btn2").click(function removeList(){
        $("#myList li:odd").remove();
    });


    $("#btn3").click(function addModule(){
        let divisao = document.createElement("div");
        let imagem = $("img:first").clone();
        document.appendChild(imagem);
        $(".main").append(divisao);
    });


});
