$(function(){
    var order_modal = $('.order__modal');
    order_modal.hide();
    $('.order__list_item_description span').click(function(){
        order_modal.show();
    });

    $('.order__modal_yes, .order__modal_no,.order__modal a').click(function(){
        order_modal.hide();
    });     //Модальное окно отмены заказа

    var activeModal = '.active__form_modal';
    $(activeModal).hide();
    $('.active__modal_input_title').click(function() {
        $(this).next().slideToggle(200);
        $(this).find('.icon__arrow_active').toggleClass('icon__arrow_active_down');

    });     //Открывающиеся инпуты в модальном окне фильтрации

    var activeFilter = $('.active__form_wrapper');
    var modalContainer = $('.active__orders_modal');
    modalContainer.hide();
    activeFilter.hide();
    $('.active__orders_filter').click(function () {
        modalContainer.slideDown(200);
        if(screen.width > 800){
            modalContainer.hide();
            activeFilter.slideToggle(200);
        }else{
            return false;
        }


    });     //Открытие модального окна фильтрации и фильтров desktop при разрешениях

    modalContainer.on('click','.active__modal_title_span',function (e) {
        e.stopPropagation(); //Отмена события в родительском элементе
        modalContainer.slideUp(200);
    });     //Закрытие модального окна фильтрации
});