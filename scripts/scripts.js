$(document).ready(function() {

    $(".collapsible-trigger").click(function(){
        $(this).next().slideToggle();
    });

    $(window).resize(function() { 
        let nav = document.getElementsByClassName("sidebar-section")[0];
        nav.style.height = String(Number(window.innerHeight) - 70) + "px";

        let main = document.getElementsByClassName("main-body-section")[0];
        main.style.minHeight = String(Number(window.innerHeight) - 114) + "px";
    });

    if(Number(window.innerWidth) > 768) {
        $(".toggle-btn a").click(function() {
            $(".sidebar-section").toggleClass("hide-nav");
            $(".main-section").toggleClass("remove-margin");
            // $(".nav-child-wrapper").slideUp();
        });
    }

    if(Number(window.innerWidth) <= 768) {
        $(".toggle-btn a").click(function() {
            $(".sidebar-section").toggleClass("show-nav");
            // $(".nav-child-wrapper").slideUp();
        });
    }

    let nav = document.getElementsByClassName("sidebar-section")[0];
    nav.style.height = String(Number(window.innerHeight) - 70) + "px";

    let main = document.getElementsByClassName("main-body-section")[0];
    main.style.minHeight = String(Number(window.innerHeight) - 114) + "px";

});