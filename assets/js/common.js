$(document).ready(function(){
    $("#lnb").load("../html/include/lnb.html");//LNB INCLUDE
    $(".quick-menu").load("../html/include/quick_menu.html");//LNB INCLUDE
    $("footer").load("../html/include/footer.html");//푸터 INCLUDE

    /* select custom */
    function selectCustom(){
        $(document).on('click', '.select-tit', function(e){
            e.preventDefault();
            if($(this).hasClass('on') == true){
                $(this).removeClass('on');
                $(this).siblings('.select-list').slideUp();
            }else{
                $(this).addClass('on');
                $(this).siblings('.select-list').slideDown();
            }
        });
    
        $(document).on('click', '.select-custom-list li', function(e){
            e.preventDefault();
            var value = $(this).html();
            $(this).parents('.select-custom-list').siblings('.select-tit').html(value);
            $(this).parents('.select-custom-list').slideUp().siblings('.select-tit').removeClass('on');
        });

    }selectCustom();

    $('#wrap:not(.main)').parent('#wrapper').css('background', 'none');

    /* popup */
    $('.popup .closed-btn').on('click', function(){
        $('.popup').removeClass('on');
    });
});