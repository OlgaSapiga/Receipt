$(function() {
    $(".smile").click(function () {
        var check = $(".smiles").find(".thisSmile").removeClass("thisSmile").attr("checked",false);
        $(this).toggleClass('thisSmile');
        $(this).attr("checked",true);
    });
    /*Check if session has some page to show stored */
    if(typeof(Storage)!=="undefined" && sessionStorage.getItem('pageToShow')) {
        var pageToShow = sessionStorage.getItem('pageToShow');
        /*Hide all pages first */
        $('.page').addClass('hide');
        /* Show the page whose link was clicked */
        $('.' + pageToShow).removeClass('hide');
        /* Also set this page to session storage */
    }
    $('.not-match').click(function(){
        /* Get the Page to Show */
        var pageToShow = $(this).data('page');
        /* Hide all pages first */
        $('.page').addClass('hide');
        /* Show the page whose link was clicked */
        $('.' + pageToShow).removeClass('hide');
        if(typeof(Storage)!=="undefined") {
            sessionStorage.setItem('pageToShow', pageToShow);
        }
    });
    $('.not-match-truth').click(function(){
        /* Get the Page to Show */
        var pageToShow = $(this).data('page');
        /* Hide all pages first */
        $('.page').addClass('hide');
        /* Show the page whose link was clicked */
        $('.' + pageToShow).removeClass('hide');
        if(typeof(Storage)!=="undefined") {
            sessionStorage.setItem('pageToShow', pageToShow);
        }
    });
    $('.mistake').click(function(){
        /* Get the Page to Show */
        var pageToShow = $(this).data('page');
        /* Hide all pages first */
        $('.page').addClass('hide');
        /* Show the page whose link was clicked */
        $('.' + pageToShow).removeClass('hide');
        if(typeof(Storage)!=="undefined") {
            sessionStorage.setItem('pageToShow', pageToShow);
        }
    });
    $('.ok').click(function(){
        /* Get the Page to Show */
        if(!($('.smile').hasClass("thisSmile"))){
            return;
        }
        var pageToShow = $(".thisSmile").data('page');
        /* Hide all pages first */
        $('.page').addClass('hide');
        /* Show the page whose link was clicked */
        $('.' + pageToShow).removeClass('hide');
        if(typeof(Storage)!=="undefined") {
            sessionStorage.setItem('pageToShow', pageToShow);
        }
    });
    $('.bonus').click(function(){
        $(".tohide").addClass("hide");
        /* Get the Page to Show */
        var pageToShow = $(this).data('page');
        /* Hide all pages first */
        $('.page').addClass('hide');
        /* Show the page whose link was clicked */
        $('.' + pageToShow).removeClass('hide');
        if(typeof(Storage)!=="undefined") {
            sessionStorage.setItem('pageToShow', pageToShow);
        }
    });
});

