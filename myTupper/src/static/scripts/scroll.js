$(function(){
    var shunk_scroll = $('.shunk__progress_scroll')
   var childsScroll = shunk_scroll.children().length;

    if(childsScroll > 3 && $(window).width() > 782 ){
        shunk_scroll.css('overflow-y','scroll');
    }else{
        shunk_scroll.css('overflow-y','hidden');
    }

   $(window).resize(function(){
       var widthToScroll = $(window).width();

       if(childsScroll > 3 && widthToScroll > 782 ){
           shunk_scroll.css('overflow-y','scroll');
       }else{
           shunk_scroll.css('overflow-y','hidden');
       }
   });

    $('.shunk__progress_block-wrapper').click(function(){
        shunk_scroll.slideToggle(200);
        $('.icon__arrow_shunk_up').toggleClass('icon__arrow_shunk_down');
    });


});