$("#inicio").click(function(event) {
    $(".inicio").removeClass("sumir");
    $(".sobre").addClass("sumir");
    $(".contato").addClass("sumir");
    event.preventDefault();
})
$("#sobre").click(function(event) {
    $(".inicio").addClass("sumir");
    $(".sobre").removeClass("sumir");
    $(".contato").addClass("sumir");
    event.preventDefault();
})
$("#contato").click(function(event) {
    $(".inicio").addClass("sumir");
    $(".sobre").addClass("sumir");
    $(".contato").removeClass("sumir");
    event.preventDefault();
})