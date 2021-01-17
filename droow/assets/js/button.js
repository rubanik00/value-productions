$(document).ready(function (){
    $("#playBut").click(function (){
        console.log('click')
        $('html, body').animate({
            scrollTop: $("#sdfasfasdf").offset().top
        }, 1000);
    });
});