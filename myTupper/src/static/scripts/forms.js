$(function(){

    var birdth = $('.profile__info_form_input[name="birdth"]');
    var tel = $('.profile__info_form_input[name="tel"]');
    var mail = $('.profile__info_form_input[name="mail"]');
    var head = $('.profile__info_form_input[name="head"]');
    var invite = $('.profile__info_form_input[name="invite"]');
    var consult = $('.profile__info_form_input[name="consult"]');
    var week_reg = $('.profile__info_form_input[name="week-reg"]');
    var name_order = $('.profile__info_form_input[name="number-order"]');
    var week_acquisition = $('.profile__info_form_input[name="week-acquisition"]');
    var week_qualification = $('.profile__info_form_input[name="week-qualification"]');

    name_order.focus( function(){
        $(this).attr('placeholder','22597 (00000023628)');
    });
    name_order.blur( function(){
        $(this).removeAttr('placeholder');
    });

    week_reg.focus( function(){
        $(this).attr('placeholder','2016/43');
    });
    week_reg.blur( function(){
        $(this).removeAttr('placeholder');
    });

    week_acquisition.focus( function(){
        $(this).attr('placeholder','2016/43');
    });
    week_acquisition.blur( function(){
        $(this).removeAttr('placeholder');
    });

    week_qualification.focus( function(){
        $(this).attr('placeholder','2016/46');
    });
    week_qualification.blur( function(){
        $(this).removeAttr('placeholder');
    });

    consult.focus( function(){
        $(this).attr('placeholder','(4567)');
    });
    consult.blur( function(){
        $(this).removeAttr('placeholder');
    });

    birdth.focus( function(){
       $(this).attr('placeholder','ДД.ММ.ГГГГ');
    });
    birdth.blur( function(){
        $(this).removeAttr('placeholder');
    });


    tel.focus( function(){
        $(this).attr('placeholder','+7(929)456-56-56');
    });
    tel.blur( function(){
        $(this).removeAttr('placeholder');
    });


    mail.focus( function(){
        $(this).attr('placeholder','astahova@gmail.com');
    });
    mail.blur( function(){
        $(this).removeAttr('placeholder');
    });


    head.focus( function(){
        $(this).attr('placeholder','(4567) Ирина Ковалевская');
    });
    head.blur( function(){
        $(this).removeAttr('placeholder');
    });


    invite.focus( function(){
        $(this).attr('placeholder','(4567) Жанна Мелехова');
    });
    invite.blur( function(){
        $(this).removeAttr('placeholder');
    });


    $('.profile__info_form_input, .active__form_input').on('input', function () {
        var item = $(this);
        var value = item.val();
        if(value.length){
            item.addClass('focus-input').css('border-bottom', '2px solid #1eb5da');
        }else
            item.removeClass('focus-input');
    });     //смещение label


    $('.profile__info_block-password').on('click',function(){
        $('.profile__info_password').slideToggle('slow');
        $(this).find('.icon__arrow_profile_down').toggleClass('icon__arrow_profile_up');
    });

    $('.profile__info_block-delete').on('click',function(){
        $('.profile__info_delete').slideToggle('slow').toggleClass('toggle');
        $(this).find('.icon__arrow_profile_down').toggleClass('icon__arrow_profile_up');
    });     //Всплывающие блоки


    var modal_apply = $('.profile__modal_apply');

    $('.profile__info_delete_button').on('click', function(){
        modal_apply.slideDown(100);
    });

    $('.profile__modal_apply_no, .profile__modal_apply_yes').on('click', function(){
        modal_apply.slideUp(100);
    });     //Модальное окно удаления аккаунта


    var callback = $('.profile__modal_callback');

    $('.profile__callback').on('click', function(){
        callback.slideDown(100);
        $('.profile__modal_questions').show();
    });

    $('.profile__modal_callback_close').on('click', function(){
       callback.slideUp(100);
       $('.profile__modal_comment-site, .profile__modal_comment-quality, .profile__modal_comment-studio').hide();
    });     //Модальное окно Обратной связи


    $('.profile__modal_site').on('click', function(){
        $('.profile__modal_questions').hide();
        $('.profile__modal_comment-site').show();
    });
    $('.profile__modal_quality').on('click', function(){
        $('.profile__modal_questions').hide();
        $('.profile__modal_comment-quality').show();
    });
    $('.profile__modal_studio').on('click', function(){
        $('.profile__modal_questions').hide();
        $('.profile__modal_comment-studio').show();
    });     // Блоки комментариев в модальном окне


    $('.profile__modal_button').click(function () {
        $('.profile__thanks').toggle();
        $('.profile__thanks_text').show();
        $('.profile__modal_callback_box').hide();
    });     //Модальное окно благодарности за отзыв

    $('.profile__thanks_block_close').click(function () {
       $('.profile__thanks_text').hide();
        $('.profile__thanks_text-next').show();
        $('.profile__thanks_block_close').off('click' , '.profile__thanks_block_close');
        $(this).on('click', function () {
            $('.profile__modal_callback').hide();

        });
    });


    var maxHeight = 300;

    $('.profile__modal_input').on('input', function(){

        if (this.clientHeight > maxHeight)
            return;

        if (this.scrollHeight > this.clientHeight){
            this.style.height = this.scrollHeight + 'px';
        }
        if(! this.value.length){
            this.style.height = 58 + 'px';
        }
    });     //Изменение высоты инпута комментария


    // $('.addcons__modal').hide();
    $('.addcons__modal_items').hide();
    $('.addcons__modal_block:first').find('.addcons__modal_items').show();
    $('.addcons__modal_title').click(function(){
       $(this).next('.addcons__modal_items').slideToggle(200);
    });

    $('.addcons__modal_close').click(function () {
       $('.addcons__modal').hide();
    });

    $('.addcons__form_input_search, .transfer__consult_search').click(function () {
       $('.addcons__modal').show();
    });

    $('.addcons__line, .transfer__form_line').click(function () {
       $(this).find('.icon__apply-green_change').toggle();
    });

    $('.addcons__lines_header_item').click(function () {
        if ($(this).find('.icon__arrow-up_addcons-up')) {
            $(this).find('.icon__arrow-up_addcons-up').toggleClass('icon__arrow-up_addcons-down');
        }
    });     //Модальное окно поиска в разделе добавить консультанта

    // $('.transfer__form').mCustomScrollbar({
    //    axis: 'y'
    // });

    $('.calendar__banner').click(function () {
        $(this).next().slideToggle();
        $(this).find('.icon__arrow_calendar').toggleClass('icon__arrow_calendar_down');
        if($('.calendar__block').is(':hidden')){
            $('.calendar__empty_block').toggle();
        }else{
            console.log('none');
        }
    });     //Аккордион Календарь + Блок-пустышка для футера




    $('.mirriage__file_hide').change(function(){
        var input_file = $('.profile__info_form_input[name=file]');
       var file_name = $(this).val().replace(/.*\\/, '');
       input_file.val(file_name);
       input_file.addClass('focus-input').css('border-bottom', '2px solid #1eb5da');
    });     // Поле выбора файла
});


