$(function(){
    var content = $('.order__tabs_content');
    var active = 'order__tabs_active';
    var dactive = 'order__dactive';

   content.hide();
   $('.order__tabs_content:first').show();
   $('.order__tabs_arrow').hide();
   $('.order__tabs_arrow:first').show();
   $('.order__tabs_info').find('.order__tabs_arrow:first').show();
   $('ul.order__tabs li').click(function(){
       content.hide();
       var activeTab = $(this).attr('rel');
       $('#' + activeTab).slideDown();
       $('ul.order__tabs li').removeClass(active).find('.order__tabs_arrow').hide();
       $(this).addClass(active).find('.order__tabs_arrow').show();
       $('.order__tabs_accordion').removeClass(dactive);
       $('.order__tabs_accordion[rel^="' + activeTab + '"]').addClass(dactive);
   });
   $('.order__tabs_accordion').click(function(){
       content.hide();
       var dactiveTab = $(this).attr('rel');
       $('#' + dactiveTab).slideDown();
       $('.order__tabs_accordion').removeClass(dactive).find('.order__tabs_arrow').hide();
       $(this).addClass(dactive).find('.order__tabs_arrow').show();
       $('ul.order__tabs li').removeClass(active);
       $('.order__tabs li[rel^="' + dactiveTab + '"]').addClass(active);
   });


   $('.rules__blocks_tab').click(function () {
      $(this).next('.rules__blocks_content').slideToggle();
      $(this).find('.rules__blocks_tab_arrow').toggle();
   });      //Аккордеон в правилах

    $('.rules__ul_tab').click(function () {
        var tab_attribute = $(this).attr('data-tab');
        $('.rules__blocks_content').hide();
        $('.rules__blocks_content[data-tab="' + tab_attribute+ '"]').show();
        $('.rules__arrow').hide();
        $(this).find('.rules__arrow').show();
    });     //Табы в правилах


    $('#confirm-checkbox').click(function() {
        $('.icon__apply-green_confirm').toggle();
    });     //checkbox принятие


    $('.delivery__content_title-mob').click(function () {
       $(this).siblings('.delivery__content_hidden').slideToggle();
       $(this).find('.icon__arrow_delivery_down').toggleClass('icon__arrow_delivery');
    });     //Аккордеон на Доставке и оплате


    $('.pformula__hidden_h3').click(function () {
        $(this).next('.pformula__hidden_block').slideToggle();
        $(this).find('.icon__arrow_pformula_down').toggleClass('icon__arrow_pformula_right');
    });     //Аккордеон программы Формула


    $('.pdirector__hidden').click(function () {
       $(this).next('.pdirector__hidden-blocks').slideToggle();
       $(this).find('.icon__arrow_pformula_down').toggleClass('icon__arrow_pformula_right');
    });     //Аккордеон программы директор


    $('.pcareer__manager-mob').click(function () {
       $(this).next('.pcareer__manager_hidden').slideToggle();
       $(this).find('.icon__arrow_pformula_down').toggleClass('icon__arrow_pformula_right');
    });     //Аккордеон Карьерных возможностей

    $('.pavangard__h2_mob').click(function () {
       $(this).next('.pavangard__hidden').slideToggle();
       $(this).find('.icon__arrow_pformula_down').toggleClass('icon__arrow_pformula_right');
    });     //Аккордеон Авангард

    $('.plive__text_mobile').click(function () {
        $(this).next('.plive__hidden').slideToggle();
        $(this).find('.icon__arrow_pformula_down').toggleClass('icon__arrow_pformula_right');
    });     //Аккордеон Авангард

    $('.pshunk__mobile_h2').click(function () {
        $(this).next('.pshunk__hidden').slideToggle();
        $(this).find('.icon__arrow_pformula_down').toggleClass('icon__arrow_pformula_right');
    });     //Аккордеон ШУНК
});