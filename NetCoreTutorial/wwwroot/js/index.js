$(document).ready(function () {


    var theForm = $("#theForm");

    theForm.hide();

    var button = $(".MyButton");


    button.on("click", function () {
        console.log("Buying item");
    });

    var productInfo = $(".productProps li");

    productInfo.on("click", function () {
        console.log("click on " + $(this).text());
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popupForm");

    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(1000);
    });



});
