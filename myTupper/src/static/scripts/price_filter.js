$(function () {
    $('.products__settings_result_sorting ul').on('click', function () {
        $(this).toggleClass('sorting-open');
    });         // раскрывающийся список " Сортировка: "

    var modalBasket = $('.products__modal_wrapper');
    modalBasket.hide();
    $('.products__main_catalog_item_add-basket').on('click', function () {
        modalBasket.show();
    });
    $('.products__modal_close').on('click', function () {
        modalBasket.hide();
    });         // Модальное окно добавления товара в корзину


    $('.goods__description_button').on('click', function () {
        modalBasket.show();
    });
    $('.products__modal_close').on('click', function () {
        modalBasket.hide();
    });         // Модальное окно добавления товара в корзину.GOODS


    $('.products__settings_filter').on('click','.products__settings_filter_box_txt,.products__settings_filter_box_icon', function(){
        $('.products__settings_modal').slideDown(200, 'linear');
    });
    $('.products__settings_modal_close').on('click', function(){
        $('.products__settings_modal').slideUp(200, 'linear');
    });     // Модальное окно при нажатии на блок фильтрации


    $('.products__settings_modal_sorting').on('click',function(){
        $('.products__settings_modal_sorting ul').toggleClass('hidden').slideDown(200, 'linear');
        $('.icon__arrow_products_modal-right').toggleClass('icon__arrow_down');
    });         // раскрывающийся список сортировки в модальном окне фильтра


    $('.icon__view-table_products').on('click',function () {
        if($(this).hasClass('active_products')){
            // break;
        }else {
            $('.icon__view-square_products').addClass('inactive_products');
            $(this).addClass('active_products');
            $('.products__main_catalog, .results__main_catalog').addClass('table');
        }

    });         //Выбор вида раскладки продукции "Табличная"


    $('.icon__view-square_products').on('click',function () {
        $(this).removeClass('inactive_products');
        $('.icon__view-table_products').removeClass('active_products');
        $('.products__main_catalog, .results__main_catalog').removeClass('table');
    });         //Выбор вида раскладки продукции "Строчная"








});