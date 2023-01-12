$ ("#contactMe").click(function(){
    alert("slow");
});


$ ("#toggle").click(function(){
    if ($("#dropDown").hasClass("skill-idle")){
        $("#dropDown").removeClass("skill-idle");
    } else {
        $("#dropDown").addClass("skill-idle");
    }

    $(".transition").animate({
        opacity:"0.5",
    });

});