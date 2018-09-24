$(function(){

    // $('.login__form_links_password, .login__form_restoring,.login__modal_password').on('click',function(){
    //    $('.login__form_account').toggleClass('hidden');
    //    $('.login__form_password').toggleClass('hidden');
    //    if ($('.login__modal').is(':visible'){
    //        $('.login__modal').hide() ;
    //     }
    // });     //Блок восстановления пароля


    $('.login__modal_message_close').on('click',function(){
        $('.login__modal').hide();
    });     //Закрытие модального окна


     $('.login__modal_password').on('click',function(){
         $('.login__modal').hide();
         $('.login__form_account').hide();
         $('.login__form_password').toggleClass('hidden');
     });    //Переход к блоку восстановления пароля

    $('.login__form_links_password').on('click',function(){
        $('.login__form_account').hide();
        $('.login__form_password').toggleClass('hidden');
    });

    $('.login__form_restoring').on('click',function(){
        $('.login__form_account').show();
        $('.login__form_password').toggleClass('hidden');
    });


    $('.login__form_in').on('click',function(){
        $('.login__modal').show();
    });
});