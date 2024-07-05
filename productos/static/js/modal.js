$(document).ready(function(){
    $(".img-item").click(function(){
        var modalId = $(this).data("id");
        $("#" + modalId).css("display", "block");
    });

    $(".close").click(function(){
        var modalId = $(this).data("id");
        $("#" + modalId).css("display", "none");
    });

    window.onclick = function(event) {
        if ($(event.target).hasClass("modal")) {
            $(event.target).css("display", "none");
        }
    }
});