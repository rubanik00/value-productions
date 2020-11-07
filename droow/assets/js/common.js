//Ajax form

$("form.row") .submit(function(){
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "/mail.php",
        data: th.serialize()
    }).done(function(){
        alert("Thank You");
        setTimeout(function(){
            th.trigger("reset");
        },3000);
    });
    return false;
});

