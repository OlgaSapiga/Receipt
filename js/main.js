$(function() {
    $(".smile").click(function () {
        var check = $(".smiles").find(".thisSmile").removeClass("thisSmile").attr("checked",false);
        $(this).toggleClass('thisSmile');
        $(this).attr("checked",true);
    });
    /*Check if session has some page to show stored */
    if(typeof(Storage)!=="undefined" && localStorage.getItem('pageToShow')) {
        var pageToShow = localStorage.getItem('pageToShow');
        var toHide = localStorage.getItem('hideElem');
        /*Hide all pages first */
        $(toHide).addClass('hide');
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
            localStorage.setItem('pageToShow', pageToShow);
        }
    });
    $('.not-match-truth').click(function(){
        console.log("Ціна не співпадає");
        /* Get the Page to Show */
        var pageToShow = $(this).data('page');
        /* Hide all pages first */
        $('.page').addClass('hide');
        /* Show the page whose link was clicked */
        $('.' + pageToShow).removeClass('hide');
        if(typeof(Storage)!=="undefined") {
            localStorage.setItem('pageToShow', pageToShow);
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
            localStorage.setItem('pageToShow', pageToShow);
        }
    });
    $('.ok').click(function(){
        /* Get the Page to Show */
        if(!($('.smile').hasClass("thisSmile"))){
            alert("Спочатку оберіть враження про майстра!");
            return;
        }
        var pageToShow = $(".thisSmile").data('page');
        if(pageToShow==="feedback"){
            console.log("happy");
        }
        if(pageToShow==="confirm"){
            console.log("surprised");
        }
        if(pageToShow==="wait-for-call"){
            console.log("sad");
        }
        /* Hide all pages first */
        $('.page').addClass('hide');
        /* Show the page whose link was clicked */
        $('.' + pageToShow).removeClass('hide');
        if(typeof(Storage)!=="undefined") {
            localStorage.setItem('pageToShow', pageToShow);
        }
    });
    $('.bonus').click(function(){
        /* Get the Page to Show */
        var pageToShow = $(this).data('page');
        /* Hide all pages first */
        var toHide = ".content";
        $('.content').addClass('hide');
        $('.page').addClass('hide');
        /* Show the page whose link was clicked */
        $('.' + pageToShow).removeClass('hide');
        if(typeof(Storage)!=="undefined") {
            localStorage.setItem('pageToShow', pageToShow);
            localStorage.setItem('hideElem',toHide);
        }
    });
    $('.getBonus').click(function(){
        var value=$.trim($(".input").val());
        if(!value.length>0){
            alert("Введіть лінк, щоб ми могли з вами зв'язатися");
            return;
        }
        else{
            console.log(value);
        }
        /* Get the Page to Show */
        var pageToShow = $(this).data('page');
        var toHide = localStorage.getItem('hideElem');
        $(toHide).removeClass('hide');
        /* Hide all pages first */
        $('.page').addClass('hide');
        /* Show the page whose link was clicked */
        $('.' + pageToShow).removeClass('hide');
        if(typeof(Storage)!=="undefined") {
            localStorage.setItem('pageToShow', pageToShow);
            localStorage.removeItem('hideElem');
        }
    });
});

