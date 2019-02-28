$(document).ready(function() {

    // side nav container height
    var sideNav = $('.side-nav-container');
    var sideHeight = String(Number(window.innerHeight) - 60) + "px";
    sideNav.css('height', sideHeight);

    // body section height
    var body = $('.body-section');
    var mainHeight = String(Number(window.innerHeight) - 185) + "px";
    body.css('min-height', mainHeight);

    // collapse menu
    $(".collapsible-trigger").click(function(){
        $(this).next().slideToggle();
    });

    // toggle side nav
    // if(Number(window.innerWidth) > 768) {
        $(".toggle-btn a").click(function() {
            sideNav.toggleClass("hide-nav");
            $(".main-container").toggleClass("remove-margin");
            // $(".collapsible-target").slideUp();
        });
    // }

    // if(Number(window.innerWidth) <= 768) {
        // $(".toggle-btn a").click(function() {
        //     sideNav.toggleClass("hide-nav");
            // $(".collapsible-target").slideUp();
        // });
    // }

    $(window).resize(function() { 
        // side nav container height
        var sideNav = $('.side-nav-container');
        var sideHeight = String(Number(window.innerHeight) - 60) + "px";
        sideNav.css('height', sideHeight);

        // body section height
        var body = $('.body-section');
        var mainHeight = String(Number(window.innerHeight) - 185) + "px";
        body.css('min-height', mainHeight);
    });
});