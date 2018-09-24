'use strict';

(function () {
    var modal = $('.booklet-online__modal');
    var buttons = $('.booklet-online__box_item_button');

    buttons.on('click', function () {
        modal.slideDown();
        $('.booklet-online__modal_slider').slick({
            arrows: true,
            dots: false,
            prevArrow: $('.booklet-online__modal_arrow-left'),
            nextArrow: $('.booklet-online__modal_arrow-right')
        });
    });
    modal.on('click', function (ev) {
        var target = $(ev.target);
        while (!target.hasClass('icon')) {
            if (target.hasClass('booklet-online__modal')) {
                modal.slideUp();
                break;
            }
            target = target.parent();
        }
    });
})();
$(function () {

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

    name_order.focus(function () {
        $(this).attr('placeholder', '22597 (00000023628)');
    });
    name_order.blur(function () {
        $(this).removeAttr('placeholder');
    });

    week_reg.focus(function () {
        $(this).attr('placeholder', '2016/43');
    });
    week_reg.blur(function () {
        $(this).removeAttr('placeholder');
    });

    week_acquisition.focus(function () {
        $(this).attr('placeholder', '2016/43');
    });
    week_acquisition.blur(function () {
        $(this).removeAttr('placeholder');
    });

    week_qualification.focus(function () {
        $(this).attr('placeholder', '2016/46');
    });
    week_qualification.blur(function () {
        $(this).removeAttr('placeholder');
    });

    consult.focus(function () {
        $(this).attr('placeholder', '(4567)');
    });
    consult.blur(function () {
        $(this).removeAttr('placeholder');
    });

    birdth.focus(function () {
        $(this).attr('placeholder', 'ДД.ММ.ГГГГ');
    });
    birdth.blur(function () {
        $(this).removeAttr('placeholder');
    });

    tel.focus(function () {
        $(this).attr('placeholder', '+7(929)456-56-56');
    });
    tel.blur(function () {
        $(this).removeAttr('placeholder');
    });

    mail.focus(function () {
        $(this).attr('placeholder', 'astahova@gmail.com');
    });
    mail.blur(function () {
        $(this).removeAttr('placeholder');
    });

    head.focus(function () {
        $(this).attr('placeholder', '(4567) Ирина Ковалевская');
    });
    head.blur(function () {
        $(this).removeAttr('placeholder');
    });

    invite.focus(function () {
        $(this).attr('placeholder', '(4567) Жанна Мелехова');
    });
    invite.blur(function () {
        $(this).removeAttr('placeholder');
    });

    $('.profile__info_form_input, .active__form_input').on('input', function () {
        var item = $(this);
        var value = item.val();
        if (value.length) {
            item.addClass('focus-input').css('border-bottom', '2px solid #1eb5da');
        } else item.removeClass('focus-input');
    }); //смещение label


    $('.profile__info_block-password').on('click', function () {
        $('.profile__info_password').slideToggle('slow');
        $(this).find('.icon__arrow_profile_down').toggleClass('icon__arrow_profile_up');
    });

    $('.profile__info_block-delete').on('click', function () {
        $('.profile__info_delete').slideToggle('slow').toggleClass('toggle');
        $(this).find('.icon__arrow_profile_down').toggleClass('icon__arrow_profile_up');
    }); //Всплывающие блоки


    var modal_apply = $('.profile__modal_apply');

    $('.profile__info_delete_button').on('click', function () {
        modal_apply.slideDown(100);
    });

    $('.profile__modal_apply_no, .profile__modal_apply_yes').on('click', function () {
        modal_apply.slideUp(100);
    }); //Модальное окно удаления аккаунта


    var callback = $('.profile__modal_callback');

    $('.profile__callback').on('click', function () {
        callback.slideDown(100);
        $('.profile__modal_questions').show();
    });

    $('.profile__modal_callback_close').on('click', function () {
        callback.slideUp(100);
        $('.profile__modal_comment-site, .profile__modal_comment-quality, .profile__modal_comment-studio').hide();
    }); //Модальное окно Обратной связи


    $('.profile__modal_site').on('click', function () {
        $('.profile__modal_questions').hide();
        $('.profile__modal_comment-site').show();
    });
    $('.profile__modal_quality').on('click', function () {
        $('.profile__modal_questions').hide();
        $('.profile__modal_comment-quality').show();
    });
    $('.profile__modal_studio').on('click', function () {
        $('.profile__modal_questions').hide();
        $('.profile__modal_comment-studio').show();
    }); // Блоки комментариев в модальном окне


    $('.profile__modal_button').click(function () {
        $('.profile__thanks').toggle();
        $('.profile__thanks_text').show();
        $('.profile__modal_callback_box').hide();
    }); //Модальное окно благодарности за отзыв

    $('.profile__thanks_block_close').click(function () {
        $('.profile__thanks_text').hide();
        $('.profile__thanks_text-next').show();
        $('.profile__thanks_block_close').off('click', '.profile__thanks_block_close');
        $(this).on('click', function () {
            $('.profile__modal_callback').hide();
        });
    });

    var maxHeight = 300;

    $('.profile__modal_input').on('input', function () {

        if (this.clientHeight > maxHeight) return;

        if (this.scrollHeight > this.clientHeight) {
            this.style.height = this.scrollHeight + 'px';
        }
        if (!this.value.length) {
            this.style.height = 58 + 'px';
        }
    }); //Изменение высоты инпута комментария


    // $('.addcons__modal').hide();
    $('.addcons__modal_items').hide();
    $('.addcons__modal_block:first').find('.addcons__modal_items').show();
    $('.addcons__modal_title').click(function () {
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
    }); //Модальное окно поиска в разделе добавить консультанта

    // $('.transfer__form').mCustomScrollbar({
    //    axis: 'y'
    // });

    $('.calendar__banner').click(function () {
        $(this).next().slideToggle();
        $(this).find('.icon__arrow_calendar').toggleClass('icon__arrow_calendar_down');
        if ($('.calendar__block').is(':hidden')) {
            $('.calendar__empty_block').toggle();
        } else {
            console.log('none');
        }
    }); //Аккордион Календарь + Блок-пустышка для футера


    $('.mirriage__file_hide').change(function () {
        var input_file = $('.profile__info_form_input[name=file]');
        var file_name = $(this).val().replace(/.*\\/, '');
        input_file.val(file_name);
        input_file.addClass('focus-input').css('border-bottom', '2px solid #1eb5da');
    }); // Поле выбора файла
});

$(function () {

    var tab_description_item = $('.goods__tabs_description');
    var tab_condition_item = $('.goods__tabs_condition');
    var tab_list_item = $('.goods__tabs_list');

    var tab_description_box = $('.goods__tabs_description_tab');
    var tab_condition_box = $('.goods__tabs_condition_tab');
    var tab_list_box = $('.goods__tabs_list_tab');

    tab_description_box.on('click', function () {
        tab_description_item.toggleClass('hidden');
        tab_condition_item.addClass('hidden');
        tab_list_item.addClass('hidden');
        $(this).find('.goods__tabs_arrow').toggleClass('hidden');
        tab_condition_box.find('.goods__tabs_arrow').addClass('hidden');
        tab_list_box.find('.goods__tabs_arrow').addClass('hidden');
    });

    tab_condition_box.on('click', function () {
        tab_condition_item.toggleClass('hidden');
        tab_description_item.addClass('hidden');
        tab_list_item.addClass('hidden');
        $(this).find('.goods__tabs_arrow').toggleClass('hidden');
        tab_description_box.find('.goods__tabs_arrow').addClass('hidden');
        tab_list_box.find('.goods__tabs_arrow').addClass('hidden');
    });

    tab_list_box.on('click', function () {
        tab_list_item.toggleClass('hidden');
        tab_condition_item.addClass('hidden');
        tab_description_item.addClass('hidden');
        $(this).find('.goods__tabs_arrow').toggleClass('hidden');
        tab_condition_box.find('.goods__tabs_arrow').addClass('hidden');
        tab_description_box.find('.goods__tabs_arrow').addClass('hidden');
    });
});
$(function () {

    // $('.login__form_links_password, .login__form_restoring,.login__modal_password').on('click',function(){
    //    $('.login__form_account').toggleClass('hidden');
    //    $('.login__form_password').toggleClass('hidden');
    //    if ($('.login__modal').is(':visible'){
    //        $('.login__modal').hide() ;
    //     }
    // });     //Блок восстановления пароля


    $('.login__modal_message_close').on('click', function () {
        $('.login__modal').hide();
    }); //Закрытие модального окна


    $('.login__modal_password').on('click', function () {
        $('.login__modal').hide();
        $('.login__form_account').hide();
        $('.login__form_password').toggleClass('hidden');
    }); //Переход к блоку восстановления пароля

    $('.login__form_links_password').on('click', function () {
        $('.login__form_account').hide();
        $('.login__form_password').toggleClass('hidden');
    });

    $('.login__form_restoring').on('click', function () {
        $('.login__form_account').show();
        $('.login__form_password').toggleClass('hidden');
    });

    $('.login__form_in').on('click', function () {
        $('.login__modal').show();
    });
});
(function () {
    var nav = $('.nav'),
        menu = $('.header__menu'),
        close = $('.nav__close'),
        menu_items = $('.nav__menu_item'),
        submenu = $('.nav__submenu'),
        submenu_items = $('.nav__submenu_item'),
        deepmenu = $('.nav__deepmenu'),
        menu_arrows = $('.icon__arrow_menu'),
        submenu_arrows = $('.icon__arrow_submenu');

    menu.on('click', function () {
        nav.removeClass('hidden');
    });
    close.on('click', function () {
        nav.addClass('hidden');
    });
    nav.on('click', function (ev) {
        var target = $(ev.target);
        while (!target.attr('data-item')) {
            target = target.parent();
            if (target.hasClass('nav')) {
                break;
            }
        }
        switch (target.attr('data-item')) {
            case 'menu':
                if (submenu.eq(target.attr('data-number')).hasClass('hidden')) {
                    submenu.eq(target.attr('data-number')).removeClass('hidden');
                    menu_items.eq(target.attr('data-number')).addClass('nav__menu_item_active');
                    menu_arrows.eq(target.attr('data-number')).addClass('icon__arrow_down');
                } else {
                    submenu.eq(target.attr('data-number')).addClass('hidden');
                    menu_items.eq(target.attr('data-number')).removeClass('nav__menu_item_active');
                    menu_arrows.eq(target.attr('data-number')).removeClass('icon__arrow_down');
                    if (!deepmenu.hasClass('hidden')) {
                        deepmen.addClass('hidden');
                        submenu_items.removeClass('nav__submenu_item_active');
                        submenu_arrows.removeClass('icon__arrow_down');
                    }
                }
                break;
            case 'submenu':
                deepmenu.eq(target.attr('data-number')).toggleClass('hidden');
                submenu_items.eq(target.attr('data-number')).toggleClass('nav__submenu_item_active');
                submenu_arrows.eq(target.attr('data-number')).toggleClass('icon__arrow_down');
                break;
            case 'deepmenu':
                break;
        }
    });

    function menuReady() {
        if ($(window).width() < 783) {
            $('.nav').addClass('hidden');
        } else {
            if ($('.nav').hasClass('hidden')) {
                $('.nav').removeClass('hidden');
            }
        }
    }

    $(document).ready(function () {
        menuReady();
    });

    $(window).resize(function () {
        menuReady();
    });
})();

$(function () {
    var order_modal = $('.order__modal');
    order_modal.hide();
    $('.order__list_item_description span').click(function () {
        order_modal.show();
    });

    $('.order__modal_yes, .order__modal_no,.order__modal a').click(function () {
        order_modal.hide();
    }); //Модальное окно отмены заказа

    var activeModal = '.active__form_modal';
    $(activeModal).hide();
    $('.active__modal_input_title').click(function () {
        $(this).next().slideToggle(200);
        $(this).find('.icon__arrow_active').toggleClass('icon__arrow_active_down');
    }); //Открывающиеся инпуты в модальном окне фильтрации

    var activeFilter = $('.active__form_wrapper');
    var modalContainer = $('.active__orders_modal');
    modalContainer.hide();
    activeFilter.hide();
    $('.active__orders_filter').click(function () {
        modalContainer.slideDown(200);
        if (screen.width > 800) {
            modalContainer.hide();
            activeFilter.slideToggle(200);
        } else {
            return false;
        }
    }); //Открытие модального окна фильтрации и фильтров desktop при разрешениях

    modalContainer.on('click', '.active__modal_title_span', function (e) {
        e.stopPropagation(); //Отмена события в родительском элементе
        modalContainer.slideUp(200);
    }); //Закрытие модального окна фильтрации
});
$(function () {
    var content = $('.order__tabs_content');
    var active = 'order__tabs_active';
    var dactive = 'order__dactive';

    content.hide();
    $('.order__tabs_content:first').show();
    $('.order__tabs_arrow').hide();
    $('.order__tabs_arrow:first').show();
    $('.order__tabs_info').find('.order__tabs_arrow:first').show();
    $('ul.order__tabs li').click(function () {
        content.hide();
        var activeTab = $(this).attr('rel');
        $('#' + activeTab).slideDown();
        $('ul.order__tabs li').removeClass(active).find('.order__tabs_arrow').hide();
        $(this).addClass(active).find('.order__tabs_arrow').show();
        $('.order__tabs_accordion').removeClass(dactive);
        $('.order__tabs_accordion[rel^="' + activeTab + '"]').addClass(dactive);
    });
    $('.order__tabs_accordion').click(function () {
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
    }); //Аккордеон в правилах

    $('.rules__ul_tab').click(function () {
        var tab_attribute = $(this).attr('data-tab');
        $('.rules__blocks_content').hide();
        $('.rules__blocks_content[data-tab="' + tab_attribute + '"]').show();
        $('.rules__arrow').hide();
        $(this).find('.rules__arrow').show();
    }); //Табы в правилах


    $('#confirm-checkbox').click(function () {
        $('.icon__apply-green_confirm').toggle();
    }); //checkbox принятие


    $('.delivery__content_title-mob').click(function () {
        $(this).siblings('.delivery__content_hidden').slideToggle();
        $(this).find('.icon__arrow_delivery_down').toggleClass('icon__arrow_delivery');
    }); //Аккордеон на Доставке и оплате


    $('.pformula__hidden_h3').click(function () {
        $(this).next('.pformula__hidden_block').slideToggle();
        $(this).find('.icon__arrow_pformula_down').toggleClass('icon__arrow_pformula_right');
    }); //Аккордеон программы Формула


    $('.pdirector__hidden').click(function () {
        $(this).next('.pdirector__hidden-blocks').slideToggle();
        $(this).find('.icon__arrow_pformula_down').toggleClass('icon__arrow_pformula_right');
    }); //Аккордеон программы директор


    $('.pcareer__manager-mob').click(function () {
        $(this).next('.pcareer__manager_hidden').slideToggle();
        $(this).find('.icon__arrow_pformula_down').toggleClass('icon__arrow_pformula_right');
    }); //Аккордеон Карьерных возможностей

    $('.pavangard__h2_mob').click(function () {
        $(this).next('.pavangard__hidden').slideToggle();
        $(this).find('.icon__arrow_pformula_down').toggleClass('icon__arrow_pformula_right');
    }); //Аккордеон Авангард

    $('.plive__text_mobile').click(function () {
        $(this).next('.plive__hidden').slideToggle();
        $(this).find('.icon__arrow_pformula_down').toggleClass('icon__arrow_pformula_right');
    }); //Аккордеон Авангард

    $('.pshunk__mobile_h2').click(function () {
        $(this).next('.pshunk__hidden').slideToggle();
        $(this).find('.icon__arrow_pformula_down').toggleClass('icon__arrow_pformula_right');
    }); //Аккордеон ШУНК
});
$(function () {
    $('.products__settings_result_sorting ul').on('click', function () {
        $(this).toggleClass('sorting-open');
    }); // раскрывающийся список " Сортировка: "

    var modalBasket = $('.products__modal_wrapper');
    modalBasket.hide();
    $('.products__main_catalog_item_add-basket').on('click', function () {
        modalBasket.show();
    });
    $('.products__modal_close').on('click', function () {
        modalBasket.hide();
    }); // Модальное окно добавления товара в корзину


    $('.goods__description_button').on('click', function () {
        modalBasket.show();
    });
    $('.products__modal_close').on('click', function () {
        modalBasket.hide();
    }); // Модальное окно добавления товара в корзину.GOODS


    $('.products__settings_filter').on('click', '.products__settings_filter_box_txt,.products__settings_filter_box_icon', function () {
        $('.products__settings_modal').slideDown(200, 'linear');
    });
    $('.products__settings_modal_close').on('click', function () {
        $('.products__settings_modal').slideUp(200, 'linear');
    }); // Модальное окно при нажатии на блок фильтрации


    $('.products__settings_modal_sorting').on('click', function () {
        $('.products__settings_modal_sorting ul').toggleClass('hidden').slideDown(200, 'linear');
        $('.icon__arrow_products_modal-right').toggleClass('icon__arrow_down');
    }); // раскрывающийся список сортировки в модальном окне фильтра


    $('.icon__view-table_products').on('click', function () {
        if ($(this).hasClass('active_products')) {
            // break;
        } else {
            $('.icon__view-square_products').addClass('inactive_products');
            $(this).addClass('active_products');
            $('.products__main_catalog, .results__main_catalog').addClass('table');
        }
    }); //Выбор вида раскладки продукции "Табличная"


    $('.icon__view-square_products').on('click', function () {
        $(this).removeClass('inactive_products');
        $('.icon__view-table_products').removeClass('active_products');
        $('.products__main_catalog, .results__main_catalog').removeClass('table');
    }); //Выбор вида раскладки продукции "Строчная"

});
$(function () {
    var shunk_scroll = $('.shunk__progress_scroll');
    var childsScroll = shunk_scroll.children().length;

    if (childsScroll > 3 && $(window).width() > 782) {
        shunk_scroll.css('overflow-y', 'scroll');
    } else {
        shunk_scroll.css('overflow-y', 'hidden');
    }

    $(window).resize(function () {
        var widthToScroll = $(window).width();

        if (childsScroll > 3 && widthToScroll > 782) {
            shunk_scroll.css('overflow-y', 'scroll');
        } else {
            shunk_scroll.css('overflow-y', 'hidden');
        }
    });

    $('.shunk__progress_block-wrapper').click(function () {
        shunk_scroll.slideToggle(200);
        $('.icon__arrow_shunk_up').toggleClass('icon__arrow_shunk_down');
    });
});
(function () {
    $('.big-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
    $('.index__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('.icon__index_left'),
        nextArrow: $('.icon__index_right'),
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 950,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 650,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    // $('.icon__index_right').on('click', function () {
    //     index_slider.slick('slickNext');
    // });
    // $('.icon__index_left').on('click', function () {
    //     index_slider.slick('slickPrev');
    // });
    var goods_slider = $('.goods__slider');
    var goods_nav = $('.goods__slider-nav');

    goods_slider.slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        // initialSlide: 1,
        prevArrow: $('.icon__goods_slider_left'),
        nextArrow: $('.icon__goods_slider_right'),
        asNavFor: goods_nav
    });
    goods_nav.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: goods_slider,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        centerPadding: '50px',
        infinite: false,
        responsive: [{
            breakpoint: 800,
            settings: {
                centerMode: true,
                focusOnSelect: true,
                slidesToShow: 3,
                centerPadding: '50px',
                vertical: true
            }
        }]

    });

    $('.goods__views').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.icon__goods_left'),
        nextArrow: $('.icon__goods_right'),
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        }]
    });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tsZXQtb25saW5lLW1vZGFsLmpzIiwiZm9ybXMuanMiLCJnb29kc190YWJzLmpzIiwibG9naW4uanMiLCJuYXYuanMiLCJvcmRlcl9tb2RhbC5qcyIsIm9yZGVyX3RhYnMuanMiLCJwcmljZV9maWx0ZXIuanMiLCJzY3JvbGwuanMiLCJzbGlkZXJzLmpzIl0sIm5hbWVzIjpbIm1vZGFsIiwiJCIsImJ1dHRvbnMiLCJvbiIsInNsaWRlRG93biIsInNsaWNrIiwiYXJyb3dzIiwiZG90cyIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImV2IiwidGFyZ2V0IiwiaGFzQ2xhc3MiLCJzbGlkZVVwIiwicGFyZW50IiwiYmlyZHRoIiwidGVsIiwibWFpbCIsImhlYWQiLCJpbnZpdGUiLCJjb25zdWx0Iiwid2Vla19yZWciLCJuYW1lX29yZGVyIiwid2Vla19hY3F1aXNpdGlvbiIsIndlZWtfcXVhbGlmaWNhdGlvbiIsImZvY3VzIiwiYXR0ciIsImJsdXIiLCJyZW1vdmVBdHRyIiwiaXRlbSIsInZhbHVlIiwidmFsIiwibGVuZ3RoIiwiYWRkQ2xhc3MiLCJjc3MiLCJyZW1vdmVDbGFzcyIsInNsaWRlVG9nZ2xlIiwiZmluZCIsInRvZ2dsZUNsYXNzIiwibW9kYWxfYXBwbHkiLCJjYWxsYmFjayIsInNob3ciLCJoaWRlIiwiY2xpY2siLCJ0b2dnbGUiLCJvZmYiLCJtYXhIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJzdHlsZSIsImhlaWdodCIsIm5leHQiLCJpcyIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2UiLCJpbnB1dF9maWxlIiwiZmlsZV9uYW1lIiwicmVwbGFjZSIsInRhYl9kZXNjcmlwdGlvbl9pdGVtIiwidGFiX2NvbmRpdGlvbl9pdGVtIiwidGFiX2xpc3RfaXRlbSIsInRhYl9kZXNjcmlwdGlvbl9ib3giLCJ0YWJfY29uZGl0aW9uX2JveCIsInRhYl9saXN0X2JveCIsIm5hdiIsIm1lbnUiLCJjbG9zZSIsIm1lbnVfaXRlbXMiLCJzdWJtZW51Iiwic3VibWVudV9pdGVtcyIsImRlZXBtZW51IiwibWVudV9hcnJvd3MiLCJzdWJtZW51X2Fycm93cyIsImVxIiwiZGVlcG1lbiIsIm1lbnVSZWFkeSIsIndpbmRvdyIsIndpZHRoIiwiZG9jdW1lbnQiLCJyZWFkeSIsInJlc2l6ZSIsIm9yZGVyX21vZGFsIiwiYWN0aXZlTW9kYWwiLCJhY3RpdmVGaWx0ZXIiLCJtb2RhbENvbnRhaW5lciIsInNjcmVlbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJjb250ZW50IiwiYWN0aXZlIiwiZGFjdGl2ZSIsImFjdGl2ZVRhYiIsImRhY3RpdmVUYWIiLCJ0YWJfYXR0cmlidXRlIiwic2libGluZ3MiLCJtb2RhbEJhc2tldCIsInNodW5rX3Njcm9sbCIsImNoaWxkc1Njcm9sbCIsImNoaWxkcmVuIiwid2lkdGhUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImdvb2RzX3NsaWRlciIsImdvb2RzX25hdiIsImluZmluaXRlIiwiYXNOYXZGb3IiLCJmb2N1c09uU2VsZWN0IiwiY2VudGVyUGFkZGluZyIsImNlbnRlck1vZGUiLCJ2ZXJ0aWNhbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFBLFlBQUE7QUFDQSxRQUFBQSxRQUFBQyxFQUFBLHdCQUFBLENBQUE7QUFDQSxRQUFBQyxVQUFBRCxFQUFBLGtDQUFBLENBQUE7O0FBRUFDLFlBQUFDLEVBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQTtBQUNBSCxjQUFBSSxTQUFBO0FBQ0FILFVBQUEsK0JBQUEsRUFBQUksS0FBQSxDQUFBO0FBQ0FDLG9CQUFBLElBREE7QUFFQUMsa0JBQUEsS0FGQTtBQUdBQyx1QkFBQVAsRUFBQSxtQ0FBQSxDQUhBO0FBSUFRLHVCQUFBUixFQUFBLG9DQUFBO0FBSkEsU0FBQTtBQU1BLEtBUkE7QUFTQUQsVUFBQUcsRUFBQSxDQUFBLE9B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TSxrQkFBQSxLQUxBO0FBTUE7QUFDQXRHLG1CQUFBUCxFQUFBLDBCQUFBLENBUEE7QUFRQVEsbUJBQUFSLEVBQUEsMkJBQUEsQ0FSQTtBQVNBOEcsa0JBQUFGO0FBVEEsS0FBQTtBQVdBQSxjQUFBeEcsS0FBQSxDQUFBO0FBQ0FrRyxzQkFBQSxDQURBO0FBRUFDLHdCQUFBLENBRkE7QUFHQU8sa0JBQUFILFlBSEE7QUFJQXJHLGNBQUEsS0FKQTtBQUtBRCxnQkFBQSxLQUxBO0FBTUEwRyx1QkFBQSxJQU5BO0FBT0FDLHVCQUFBLE1BUEE7QUFRQUgsa0JBQUEsS0FSQTtBQVNBTCxvQkFBQSxDQUNBO0FBQ0FDLHdCQUFBLEdBREE7QUFFQUMsc0JBQUE7QUFDQU8sNEJBQUEsSUFEQTtBQUVBRiwrQkFBQSxJQUZBO0FBR0FULDhCQUFBLENBSEE7QUFJQVUsK0JBQUEsTUFKQTtBQUtBRSwwQkFBQTtBQUxBO0FBRkEsU0FEQTs7QUFUQSxLQUFBOztBQXdCQWxILE1BQUEsZUFBQSxFQUFBSSxLQUFBLENBQUE7QUFDQUMsZ0JBQUEsSUFEQTtBQUVBQyxjQUFBLEtBRkE7QUFHQWdHLHNCQUFBLENBSEE7QUFJQUMsd0JBQUEsQ0FKQTtBQUtBaEcsbUJBQUFQLEVBQUEsbUJBQUEsQ0FMQTtBQU1BUSxtQkFBQVIsRUFBQSxvQkFBQSxDQU5BO0FBT0F3RyxvQkFBQSxDQUNBO0FBQ0FDLHdCQUFBLEdBREE7QUFFQUMsc0JBQUE7QUFDQUosOEJBQUE7QUFEQTtBQUZBLFNBREE7QUFQQSxLQUFBO0FBaUJBLENBaEdBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcblx0bGV0IG1vZGFsID0gJCgnLmJvb2tsZXQtb25saW5lX19tb2RhbCcpO1xyXG5cdGxldCBidXR0b25zID0gJCgnLmJvb2tsZXQtb25saW5lX19ib3hfaXRlbV9idXR0b24nKTtcclxuXHJcblx0YnV0dG9ucy5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRtb2RhbC5zbGlkZURvd24oKTtcclxuXHRcdCQoJy5ib29rbGV0LW9ubGluZV9fbW9kYWxfc2xpZGVyJykuc2xpY2soe1xyXG5cdFx0XHRhcnJvd3M6IHRydWUsXHJcblx0XHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0XHRwcmV2QXJyb3c6ICQoJy5ib29rbGV0LW9ubGluZV9fbW9kYWxfYXJyb3ctbGVmdCcpLFxyXG5cdFx0XHRuZXh0QXJyb3c6ICQoJy5ib29rbGV0LW9ubGluZV9fbW9kYWxfYXJyb3ctcmlnaHQnKVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblx0bW9kYWwub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2KSB7XHJcblx0XHRsZXQgdGFyZ2V0ID0gJChldi50YXJnZXQpO1xyXG5cdFx0d2hpbGUgKCF0YXJnZXQuaGFzQ2xhc3MoJ2ljb24nKSkge1xyXG5cdFx0XHRpZiAodGFyZ2V0Lmhhc0NsYXNzKCdib29rbGV0LW9ubGluZV9fbW9kYWwnKSkge1xyXG5cdFx0XHRcdG1vZGFsLnNsaWRlVXAoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucGFyZW50KCk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn0pKCk7IiwiJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBiaXJkdGggPSAkKCcucHJvZmlsZV9faW5mb19mb3JtX2lucHV0W25hbWU9XCJiaXJkdGhcIl0nKTtcclxuICAgIHZhciB0ZWwgPSAkKCcucHJvZmlsZV9faW5mb19mb3JtX2lucHV0W25hbWU9XCJ0ZWxcIl0nKTtcclxuICAgIHZhciBtYWlsID0gJCgnLnByb2ZpbGVfX2luZm9fZm9ybV9pbnB1dFtuYW1lPVwibWFpbFwiXScpO1xyXG4gICAgdmFyIGhlYWQgPSAkKCcucHJvZmlsZV9faW5mb19mb3JtX2lucHV0W25hbWU9XCJoZWFkXCJdJyk7XHJcbiAgICB2YXIgaW52aXRlID0gJCgnLnByb2ZpbGVfX2luZm9fZm9ybV9pbnB1dFtuYW1lPVwiaW52aXRlXCJdJyk7XHJcbiAgICB2YXIgY29uc3VsdCA9ICQoJy5wcm9maWxlX19pbmZvX2Zvcm1faW5wdXRbbmFtZT1cImNvbnN1bHRcIl0nKTtcclxuICAgIHZhciB3ZWVrX3JlZyA9ICQoJy5wcm9maWxlX19pbmZvX2Zvcm1faW5wdXRbbmFtZT1cIndlZWstcmVnXCJdJyk7XHJcbiAgICB2YXIgbmFtZV9vcmRlciA9ICQoJy5wcm9maWxlX19pbmZvX2Zvcm1faW5wdXRbbmFtZT1cIm51bWJlci1vcmRlclwiXScpO1xyXG4gICAgdmFyIHdlZWtfYWNxdWlzaXRpb24gPSAkKCcucHJvZmlsZV9faW5mb19mb3JtX2lucHV0W25hbWU9XCJ3ZWVrLWFjcXVpc2l0aW9uXCJdJyk7XHJcbiAgICB2YXIgd2Vla19xdWFsaWZpY2F0aW9uID0gJCgnLnByb2ZpbGVfX2luZm9fZm9ybV9pbnB1dFtuYW1lPVwid2Vlay1xdWFsaWZpY2F0aW9uXCJdJyk7XHJcblxyXG4gICAgbmFtZV9vcmRlci5mb2N1cyggZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJywnMjI1OTcgKDAwMDAwMDIzNjI4KScpO1xyXG4gICAgfSk7XHJcbiAgICBuYW1lX29yZGVyLmJsdXIoIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2Vla19yZWcuZm9jdXMoIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicsJzIwMTYvNDMnKTtcclxuICAgIH0pO1xyXG4gICAgd2Vla19yZWcuYmx1ciggZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3ZWVrX2FjcXVpc2l0aW9uLmZvY3VzKCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykuYXR0cigncGxhY2Vob2xkZXInLCcyMDE2LzQzJyk7XHJcbiAgICB9KTtcclxuICAgIHdlZWtfYWNxdWlzaXRpb24uYmx1ciggZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3ZWVrX3F1YWxpZmljYXRpb24uZm9jdXMoIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicsJzIwMTYvNDYnKTtcclxuICAgIH0pO1xyXG4gICAgd2Vla19xdWFsaWZpY2F0aW9uLmJsdXIoIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3VsdC5mb2N1cyggZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJywnKDQ1NjcpJyk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN1bHQuYmx1ciggZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUF0dHIoJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBiaXJkdGguZm9jdXMoIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJywn0JTQlC7QnNCcLtCT0JPQk9CTJyk7XHJcbiAgICB9KTtcclxuICAgIGJpcmR0aC5ibHVyKCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQXR0cigncGxhY2Vob2xkZXInKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB0ZWwuZm9jdXMoIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicsJys3KDkyOSk0NTYtNTYtNTYnKTtcclxuICAgIH0pO1xyXG4gICAgdGVsLmJsdXIoIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIG1haWwuZm9jdXMoIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicsJ2FzdGFob3ZhQGdtYWlsLmNvbScpO1xyXG4gICAgfSk7XHJcbiAgICBtYWlsLmJsdXIoIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGhlYWQuZm9jdXMoIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicsJyg0NTY3KSDQmNGA0LjQvdCwINCa0L7QstCw0LvQtdCy0YHQutCw0Y8nKTtcclxuICAgIH0pO1xyXG4gICAgaGVhZC5ibHVyKCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQXR0cigncGxhY2Vob2xkZXInKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpbnZpdGUuZm9jdXMoIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicsJyg0NTY3KSDQltCw0L3QvdCwINCc0LXQu9C10YXQvtCy0LAnKTtcclxuICAgIH0pO1xyXG4gICAgaW52aXRlLmJsdXIoIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdwbGFjZWhvbGRlcicpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5wcm9maWxlX19pbmZvX2Zvcm1faW5wdXQsIC5hY3RpdmVfX2Zvcm1faW5wdXQnKS5vbignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW0udmFsKCk7XHJcbiAgICAgICAgaWYodmFsdWUubGVuZ3RoKXtcclxuICAgICAgICAgICAgaXRlbS5hZGRDbGFzcygnZm9jdXMtaW5wdXQnKS5jc3MoJ2JvcmRlci1ib3R0b20nLCAnMnB4IHNvbGlkICMxZWI1ZGEnKTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICBpdGVtLnJlbW92ZUNsYXNzKCdmb2N1cy1pbnB1dCcpO1xyXG4gICAgfSk7ICAgICAvL9GB0LzQtdGJ0LXQvdC40LUgbGFiZWxcclxuXHJcblxyXG4gICAgJCgnLnByb2ZpbGVfX2luZm9fYmxvY2stcGFzc3dvcmQnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnByb2ZpbGVfX2luZm9fcGFzc3dvcmQnKS5zbGlkZVRvZ2dsZSgnc2xvdycpO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLmljb25fX2Fycm93X3Byb2ZpbGVfZG93bicpLnRvZ2dsZUNsYXNzKCdpY29uX19hcnJvd19wcm9maWxlX3VwJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucHJvZmlsZV9faW5mb19ibG9jay1kZWxldGUnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnByb2ZpbGVfX2luZm9fZGVsZXRlJykuc2xpZGVUb2dnbGUoJ3Nsb3cnKS50b2dnbGVDbGFzcygndG9nZ2xlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuaWNvbl9fYXJyb3dfcHJvZmlsZV9kb3duJykudG9nZ2xlQ2xhc3MoJ2ljb25fX2Fycm93X3Byb2ZpbGVfdXAnKTtcclxuICAgIH0pOyAgICAgLy/QktGB0L/Qu9GL0LLQsNGO0YnQuNC1INCx0LvQvtC60LhcclxuXHJcblxyXG4gICAgdmFyIG1vZGFsX2FwcGx5ID0gJCgnLnByb2ZpbGVfX21vZGFsX2FwcGx5Jyk7XHJcblxyXG4gICAgJCgnLnByb2ZpbGVfX2luZm9fZGVsZXRlX2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbW9kYWxfYXBwbHkuc2xpZGVEb3duKDEwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucHJvZmlsZV9fbW9kYWxfYXBwbHlfbm8sIC5wcm9maWxlX19tb2RhbF9hcHBseV95ZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIG1vZGFsX2FwcGx5LnNsaWRlVXAoMTAwKTtcclxuICAgIH0pOyAgICAgLy/QnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0YPQtNCw0LvQtdC90LjRjyDQsNC60LrQsNGD0L3RgtCwXHJcblxyXG5cclxuICAgIHZhciBjYWxsYmFjayA9ICQoJy5wcm9maWxlX19tb2RhbF9jYWxsYmFjaycpO1xyXG5cclxuICAgICQoJy5wcm9maWxlX19jYWxsYmFjaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2FsbGJhY2suc2xpZGVEb3duKDEwMCk7XHJcbiAgICAgICAgJCgnLnByb2ZpbGVfX21vZGFsX3F1ZXN0aW9ucycpLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5wcm9maWxlX19tb2RhbF9jYWxsYmFja19jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICBjYWxsYmFjay5zbGlkZVVwKDEwMCk7XHJcbiAgICAgICAkKCcucHJvZmlsZV9fbW9kYWxfY29tbWVudC1zaXRlLCAucHJvZmlsZV9fbW9kYWxfY29tbWVudC1xdWFsaXR5LCAucHJvZmlsZV9fbW9kYWxfY29tbWVudC1zdHVkaW8nKS5oaWRlKCk7XHJcbiAgICB9KTsgICAgIC8v0JzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INCe0LHRgNCw0YLQvdC+0Lkg0YHQstGP0LfQuFxyXG5cclxuXHJcbiAgICAkKCcucHJvZmlsZV9fbW9kYWxfc2l0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnByb2ZpbGVfX21vZGFsX3F1ZXN0aW9ucycpLmhpZGUoKTtcclxuICAgICAgICAkKCcucHJvZmlsZV9fbW9kYWxfY29tbWVudC1zaXRlJykuc2hvdygpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcucHJvZmlsZV9fbW9kYWxfcXVhbGl0eScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnByb2ZpbGVfX21vZGFsX3F1ZXN0aW9ucycpLmhpZGUoKTtcclxuICAgICAgICAkKCcucHJvZmlsZV9fbW9kYWxfY29tbWVudC1xdWFsaXR5Jykuc2hvdygpO1xyXG4gICAgfSk7XHJcbiAgICAkKCcucHJvZmlsZV9fbW9kYWxfc3R1ZGlvJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcucHJvZmlsZV9fbW9kYWxfcXVlc3Rpb25zJykuaGlkZSgpO1xyXG4gICAgICAgICQoJy5wcm9maWxlX19tb2RhbF9jb21tZW50LXN0dWRpbycpLnNob3coKTtcclxuICAgIH0pOyAgICAgLy8g0JHQu9C+0LrQuCDQutC+0LzQvNC10L3RgtCw0YDQuNC10LIg0LIg0LzQvtC00LDQu9GM0L3QvtC8INC+0LrQvdC1XHJcblxyXG5cclxuICAgICQoJy5wcm9maWxlX19tb2RhbF9idXR0b24nKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLnByb2ZpbGVfX3RoYW5rcycpLnRvZ2dsZSgpO1xyXG4gICAgICAgICQoJy5wcm9maWxlX190aGFua3NfdGV4dCcpLnNob3coKTtcclxuICAgICAgICAkKCcucHJvZmlsZV9fbW9kYWxfY2FsbGJhY2tfYm94JykuaGlkZSgpO1xyXG4gICAgfSk7ICAgICAvL9Cc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDQsdC70LDQs9C+0LTQsNGA0L3QvtGB0YLQuCDQt9CwINC+0YLQt9GL0LJcclxuXHJcbiAgICAkKCcucHJvZmlsZV9fdGhhbmtzX2Jsb2NrX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgJCgnLnByb2ZpbGVfX3RoYW5rc190ZXh0JykuaGlkZSgpO1xyXG4gICAgICAgICQoJy5wcm9maWxlX190aGFua3NfdGV4dC1uZXh0Jykuc2hvdygpO1xyXG4gICAgICAgICQoJy5wcm9maWxlX190aGFua3NfYmxvY2tfY2xvc2UnKS5vZmYoJ2NsaWNrJyAsICcucHJvZmlsZV9fdGhhbmtzX2Jsb2NrX2Nsb3NlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5wcm9maWxlX19tb2RhbF9jYWxsYmFjaycpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIG1heEhlaWdodCA9IDMwMDtcclxuXHJcbiAgICAkKCcucHJvZmlsZV9fbW9kYWxfaW5wdXQnKS5vbignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jbGllbnRIZWlnaHQgPiBtYXhIZWlnaHQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsSGVpZ2h0ID4gdGhpcy5jbGllbnRIZWlnaHQpe1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IHRoaXMuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoISB0aGlzLnZhbHVlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gNTggKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH0pOyAgICAgLy/QmNC30LzQtdC90LXQvdC40LUg0LLRi9GB0L7RgtGLINC40L3Qv9GD0YLQsCDQutC+0LzQvNC10L3RgtCw0YDQuNGPXHJcblxyXG5cclxuICAgIC8vICQoJy5hZGRjb25zX19tb2RhbCcpLmhpZGUoKTtcclxuICAgICQoJy5hZGRjb25zX19tb2RhbF9pdGVtcycpLmhpZGUoKTtcclxuICAgICQoJy5hZGRjb25zX19tb2RhbF9ibG9jazpmaXJzdCcpLmZpbmQoJy5hZGRjb25zX19tb2RhbF9pdGVtcycpLnNob3coKTtcclxuICAgICQoJy5hZGRjb25zX19tb2RhbF90aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAkKHRoaXMpLm5leHQoJy5hZGRjb25zX19tb2RhbF9pdGVtcycpLnNsaWRlVG9nZ2xlKDIwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYWRkY29uc19fbW9kYWxfY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAkKCcuYWRkY29uc19fbW9kYWwnKS5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYWRkY29uc19fZm9ybV9pbnB1dF9zZWFyY2gsIC50cmFuc2Zlcl9fY29uc3VsdF9zZWFyY2gnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAkKCcuYWRkY29uc19fbW9kYWwnKS5zaG93KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYWRkY29uc19fbGluZSwgLnRyYW5zZmVyX19mb3JtX2xpbmUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAkKHRoaXMpLmZpbmQoJy5pY29uX19hcHBseS1ncmVlbl9jaGFuZ2UnKS50b2dnbGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5hZGRjb25zX19saW5lc19oZWFkZXJfaXRlbScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCcuaWNvbl9fYXJyb3ctdXBfYWRkY29ucy11cCcpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLmljb25fX2Fycm93LXVwX2FkZGNvbnMtdXAnKS50b2dnbGVDbGFzcygnaWNvbl9fYXJyb3ctdXBfYWRkY29ucy1kb3duJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7ICAgICAvL9Cc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDQv9C+0LjRgdC60LAg0LIg0YDQsNC30LTQtdC70LUg0LTQvtCx0LDQstC40YLRjCDQutC+0L3RgdGD0LvRjNGC0LDQvdGC0LBcclxuXHJcbiAgICAvLyAkKCcudHJhbnNmZXJfX2Zvcm0nKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgIC8vICAgIGF4aXM6ICd5J1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgJCgnLmNhbGVuZGFyX19iYW5uZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5pY29uX19hcnJvd19jYWxlbmRhcicpLnRvZ2dsZUNsYXNzKCdpY29uX19hcnJvd19jYWxlbmRhcl9kb3duJyk7XHJcbiAgICAgICAgaWYoJCgnLmNhbGVuZGFyX19ibG9jaycpLmlzKCc6aGlkZGVuJykpe1xyXG4gICAgICAgICAgICAkKCcuY2FsZW5kYXJfX2VtcHR5X2Jsb2NrJykudG9nZ2xlKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7ICAgICAvL9CQ0LrQutC+0YDQtNC40L7QvSDQmtCw0LvQtdC90LTQsNGA0YwgKyDQkdC70L7Qui3Qv9GD0YHRgtGL0YjQutCwINC00LvRjyDRhNGD0YLQtdGA0LBcclxuXHJcblxyXG5cclxuXHJcbiAgICAkKCcubWlycmlhZ2VfX2ZpbGVfaGlkZScpLmNoYW5nZShmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBpbnB1dF9maWxlID0gJCgnLnByb2ZpbGVfX2luZm9fZm9ybV9pbnB1dFtuYW1lPWZpbGVdJyk7XHJcbiAgICAgICB2YXIgZmlsZV9uYW1lID0gJCh0aGlzKS52YWwoKS5yZXBsYWNlKC8uKlxcXFwvLCAnJyk7XHJcbiAgICAgICBpbnB1dF9maWxlLnZhbChmaWxlX25hbWUpO1xyXG4gICAgICAgaW5wdXRfZmlsZS5hZGRDbGFzcygnZm9jdXMtaW5wdXQnKS5jc3MoJ2JvcmRlci1ib3R0b20nLCAnMnB4IHNvbGlkICMxZWI1ZGEnKTtcclxuICAgIH0pOyAgICAgLy8g0J/QvtC70LUg0LLRi9Cx0L7RgNCwINGE0LDQudC70LBcclxufSk7XHJcblxyXG5cclxuIiwiJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHRhYl9kZXNjcmlwdGlvbl9pdGVtID0gJCgnLmdvb2RzX190YWJzX2Rlc2NyaXB0aW9uJyk7XHJcbiAgICB2YXIgdGFiX2NvbmRpdGlvbl9pdGVtID0gICQoJy5nb29kc19fdGFic19jb25kaXRpb24nKTtcclxuICAgIHZhciB0YWJfbGlzdF9pdGVtID0gJCgnLmdvb2RzX190YWJzX2xpc3QnKTtcclxuXHJcbiAgICB2YXIgdGFiX2Rlc2NyaXB0aW9uX2JveCA9ICQoJy5nb29kc19fdGFic19kZXNjcmlwdGlvbl90YWInKTtcclxuICAgIHZhciB0YWJfY29uZGl0aW9uX2JveCA9ICQoJy5nb29kc19fdGFic19jb25kaXRpb25fdGFiJyk7XHJcbiAgICB2YXIgdGFiX2xpc3RfYm94ID0gJCgnLmdvb2RzX190YWJzX2xpc3RfdGFiJyk7XHJcblxyXG4gICAgdGFiX2Rlc2NyaXB0aW9uX2JveC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGFiX2Rlc2NyaXB0aW9uX2l0ZW0udG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIHRhYl9jb25kaXRpb25faXRlbS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgdGFiX2xpc3RfaXRlbS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuZ29vZHNfX3RhYnNfYXJyb3cnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgdGFiX2NvbmRpdGlvbl9ib3guZmluZCgnLmdvb2RzX190YWJzX2Fycm93JykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIHRhYl9saXN0X2JveC5maW5kKCcuZ29vZHNfX3RhYnNfYXJyb3cnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0YWJfY29uZGl0aW9uX2JveC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGFiX2NvbmRpdGlvbl9pdGVtLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICB0YWJfZGVzY3JpcHRpb25faXRlbS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgdGFiX2xpc3RfaXRlbS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuZ29vZHNfX3RhYnNfYXJyb3cnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgdGFiX2Rlc2NyaXB0aW9uX2JveC5maW5kKCcuZ29vZHNfX3RhYnNfYXJyb3cnKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgdGFiX2xpc3RfYm94LmZpbmQoJy5nb29kc19fdGFic19hcnJvdycpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRhYl9saXN0X2JveC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGFiX2xpc3RfaXRlbS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgdGFiX2NvbmRpdGlvbl9pdGVtLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICB0YWJfZGVzY3JpcHRpb25faXRlbS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuZ29vZHNfX3RhYnNfYXJyb3cnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgdGFiX2NvbmRpdGlvbl9ib3guZmluZCgnLmdvb2RzX190YWJzX2Fycm93JykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIHRhYl9kZXNjcmlwdGlvbl9ib3guZmluZCgnLmdvb2RzX190YWJzX2Fycm93JykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgfSk7XHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvLyAkKCcubG9naW5fX2Zvcm1fbGlua3NfcGFzc3dvcmQsIC5sb2dpbl9fZm9ybV9yZXN0b3JpbmcsLmxvZ2luX19tb2RhbF9wYXNzd29yZCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgIC8vICAgICQoJy5sb2dpbl9fZm9ybV9hY2NvdW50JykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgLy8gICAgJCgnLmxvZ2luX19mb3JtX3Bhc3N3b3JkJykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgLy8gICAgaWYgKCQoJy5sb2dpbl9fbW9kYWwnKS5pcygnOnZpc2libGUnKXtcclxuICAgIC8vICAgICAgICAkKCcubG9naW5fX21vZGFsJykuaGlkZSgpIDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTsgICAgIC8v0JHQu9C+0Log0LLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjRjyDQv9Cw0YDQvtC70Y9cclxuXHJcblxyXG4gICAgJCgnLmxvZ2luX19tb2RhbF9tZXNzYWdlX2Nsb3NlJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5sb2dpbl9fbW9kYWwnKS5oaWRlKCk7XHJcbiAgICB9KTsgICAgIC8v0JfQsNC60YDRi9GC0LjQtSDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsFxyXG5cclxuXHJcbiAgICAgJCgnLmxvZ2luX19tb2RhbF9wYXNzd29yZCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAgJCgnLmxvZ2luX19tb2RhbCcpLmhpZGUoKTtcclxuICAgICAgICAgJCgnLmxvZ2luX19mb3JtX2FjY291bnQnKS5oaWRlKCk7XHJcbiAgICAgICAgICQoJy5sb2dpbl9fZm9ybV9wYXNzd29yZCcpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICB9KTsgICAgLy/Qn9C10YDQtdGF0L7QtCDQuiDQsdC70L7QutGDINCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC40Y8g0L/QsNGA0L7Qu9GPXHJcblxyXG4gICAgJCgnLmxvZ2luX19mb3JtX2xpbmtzX3Bhc3N3b3JkJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5sb2dpbl9fZm9ybV9hY2NvdW50JykuaGlkZSgpO1xyXG4gICAgICAgICQoJy5sb2dpbl9fZm9ybV9wYXNzd29yZCcpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5sb2dpbl9fZm9ybV9yZXN0b3JpbmcnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmxvZ2luX19mb3JtX2FjY291bnQnKS5zaG93KCk7XHJcbiAgICAgICAgJCgnLmxvZ2luX19mb3JtX3Bhc3N3b3JkJykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5sb2dpbl9fZm9ybV9pbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcubG9naW5fX21vZGFsJykuc2hvdygpO1xyXG4gICAgfSk7XHJcbn0pOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbmF2ID0gJCgnLm5hdicpLFxyXG4gICAgICAgIG1lbnUgPSAkKCcuaGVhZGVyX19tZW51JyksXHJcbiAgICAgICAgY2xvc2UgPSAkKCcubmF2X19jbG9zZScpLFxyXG4gICAgICAgIG1lbnVfaXRlbXMgPSAkKCcubmF2X19tZW51X2l0ZW0nKSxcclxuICAgICAgICBzdWJtZW51ID0gJCgnLm5hdl9fc3VibWVudScpLFxyXG4gICAgICAgIHN1Ym1lbnVfaXRlbXMgPSAkKCcubmF2X19zdWJtZW51X2l0ZW0nKSxcclxuICAgICAgICBkZWVwbWVudSA9ICQoJy5uYXZfX2RlZXBtZW51JyksXHJcbiAgICAgICAgbWVudV9hcnJvd3MgPSAkKCcuaWNvbl9fYXJyb3dfbWVudScpLFxyXG4gICAgICAgIHN1Ym1lbnVfYXJyb3dzID0gJCgnLmljb25fX2Fycm93X3N1Ym1lbnUnKTtcclxuXHJcbiAgICBtZW51Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBuYXYucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgfSk7XHJcbiAgICBjbG9zZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbmF2LmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG4gICAgbmF2Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSAkKGV2LnRhcmdldCk7XHJcbiAgICAgICAgd2hpbGUgKCF0YXJnZXQuYXR0cignZGF0YS1pdGVtJykpIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudCgpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc0NsYXNzKCduYXYnKSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoICh0YXJnZXQuYXR0cignZGF0YS1pdGVtJykpIHtcclxuICAgICAgICAgICAgY2FzZSAnbWVudSc6XHJcbiAgICAgICAgICAgICAgICBpZiAoc3VibWVudS5lcSh0YXJnZXQuYXR0cignZGF0YS1udW1iZXInKSkuaGFzQ2xhc3MoJ2hpZGRlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWVudS5lcSh0YXJnZXQuYXR0cignZGF0YS1udW1iZXInKSkucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVfaXRlbXMuZXEodGFyZ2V0LmF0dHIoJ2RhdGEtbnVtYmVyJykpLmFkZENsYXNzKCduYXZfX21lbnVfaXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBtZW51X2Fycm93cy5lcSh0YXJnZXQuYXR0cignZGF0YS1udW1iZXInKSkuYWRkQ2xhc3MoJ2ljb25fX2Fycm93X2Rvd24nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWVudS5lcSh0YXJnZXQuYXR0cignZGF0YS1udW1iZXInKSkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnVfaXRlbXMuZXEodGFyZ2V0LmF0dHIoJ2RhdGEtbnVtYmVyJykpLnJlbW92ZUNsYXNzKCduYXZfX21lbnVfaXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBtZW51X2Fycm93cy5lcSh0YXJnZXQuYXR0cignZGF0YS1udW1iZXInKSkucmVtb3ZlQ2xhc3MoJ2ljb25fX2Fycm93X2Rvd24nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlZXBtZW51Lmhhc0NsYXNzKCdoaWRkZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWVwbWVuLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWVudV9pdGVtcy5yZW1vdmVDbGFzcygnbmF2X19zdWJtZW51X2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnVfYXJyb3dzLnJlbW92ZUNsYXNzKCdpY29uX19hcnJvd19kb3duJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N1Ym1lbnUnOlxyXG4gICAgICAgICAgICAgICAgZGVlcG1lbnUuZXEodGFyZ2V0LmF0dHIoJ2RhdGEtbnVtYmVyJykpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIHN1Ym1lbnVfaXRlbXMuZXEodGFyZ2V0LmF0dHIoJ2RhdGEtbnVtYmVyJykpLnRvZ2dsZUNsYXNzKCduYXZfX3N1Ym1lbnVfaXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHN1Ym1lbnVfYXJyb3dzLmVxKHRhcmdldC5hdHRyKCdkYXRhLW51bWJlcicpKS50b2dnbGVDbGFzcygnaWNvbl9fYXJyb3dfZG93bicpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RlZXBtZW51JzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1lbnVSZWFkeSgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoJCggd2luZG93ICkud2lkdGgoKSA8IDc4MyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkKCcubmF2JykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZigkKCcubmF2JykuaGFzQ2xhc3MoJ2hpZGRlbicpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKCcubmF2JykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICBtZW51UmVhZHkoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgICBtZW51UmVhZHkoKTtcclxuICAgIH0pO1xyXG59KSgpO1xyXG4iLCIkKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgb3JkZXJfbW9kYWwgPSAkKCcub3JkZXJfX21vZGFsJyk7XHJcbiAgICBvcmRlcl9tb2RhbC5oaWRlKCk7XHJcbiAgICAkKCcub3JkZXJfX2xpc3RfaXRlbV9kZXNjcmlwdGlvbiBzcGFuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBvcmRlcl9tb2RhbC5zaG93KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcub3JkZXJfX21vZGFsX3llcywgLm9yZGVyX19tb2RhbF9ubywub3JkZXJfX21vZGFsIGEnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIG9yZGVyX21vZGFsLmhpZGUoKTtcclxuICAgIH0pOyAgICAgLy/QnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0L7RgtC80LXQvdGLINC30LDQutCw0LfQsFxyXG5cclxuICAgIHZhciBhY3RpdmVNb2RhbCA9ICcuYWN0aXZlX19mb3JtX21vZGFsJztcclxuICAgICQoYWN0aXZlTW9kYWwpLmhpZGUoKTtcclxuICAgICQoJy5hY3RpdmVfX21vZGFsX2lucHV0X3RpdGxlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVUb2dnbGUoMjAwKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5pY29uX19hcnJvd19hY3RpdmUnKS50b2dnbGVDbGFzcygnaWNvbl9fYXJyb3dfYWN0aXZlX2Rvd24nKTtcclxuXHJcbiAgICB9KTsgICAgIC8v0J7RgtC60YDRi9Cy0LDRjtGJ0LjQtdGB0Y8g0LjQvdC/0YPRgtGLINCyINC80L7QtNCw0LvRjNC90L7QvCDQvtC60L3QtSDRhNC40LvRjNGC0YDQsNGG0LjQuFxyXG5cclxuICAgIHZhciBhY3RpdmVGaWx0ZXIgPSAkKCcuYWN0aXZlX19mb3JtX3dyYXBwZXInKTtcclxuICAgIHZhciBtb2RhbENvbnRhaW5lciA9ICQoJy5hY3RpdmVfX29yZGVyc19tb2RhbCcpO1xyXG4gICAgbW9kYWxDb250YWluZXIuaGlkZSgpO1xyXG4gICAgYWN0aXZlRmlsdGVyLmhpZGUoKTtcclxuICAgICQoJy5hY3RpdmVfX29yZGVyc19maWx0ZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbW9kYWxDb250YWluZXIuc2xpZGVEb3duKDIwMCk7XHJcbiAgICAgICAgaWYoc2NyZWVuLndpZHRoID4gODAwKXtcclxuICAgICAgICAgICAgbW9kYWxDb250YWluZXIuaGlkZSgpO1xyXG4gICAgICAgICAgICBhY3RpdmVGaWx0ZXIuc2xpZGVUb2dnbGUoMjAwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSk7ICAgICAvL9Ce0YLQutGA0YvRgtC40LUg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LAg0YTQuNC70YzRgtGA0LDRhtC40Lgg0Lgg0YTQuNC70YzRgtGA0L7QsiBkZXNrdG9wINC/0YDQuCDRgNCw0LfRgNC10YjQtdC90LjRj9GFXHJcblxyXG4gICAgbW9kYWxDb250YWluZXIub24oJ2NsaWNrJywnLmFjdGl2ZV9fbW9kYWxfdGl0bGVfc3BhbicsZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAvL9Ce0YLQvNC10L3QsCDRgdC+0LHRi9GC0LjRjyDQsiDRgNC+0LTQuNGC0LXQu9GM0YHQutC+0Lwg0Y3Qu9C10LzQtdC90YLQtVxyXG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnNsaWRlVXAoMjAwKTtcclxuICAgIH0pOyAgICAgLy/Ql9Cw0LrRgNGL0YLQuNC1INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwINGE0LjQu9GM0YLRgNCw0YbQuNC4XHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuICAgIHZhciBjb250ZW50ID0gJCgnLm9yZGVyX190YWJzX2NvbnRlbnQnKTtcclxuICAgIHZhciBhY3RpdmUgPSAnb3JkZXJfX3RhYnNfYWN0aXZlJztcclxuICAgIHZhciBkYWN0aXZlID0gJ29yZGVyX19kYWN0aXZlJztcclxuXHJcbiAgIGNvbnRlbnQuaGlkZSgpO1xyXG4gICAkKCcub3JkZXJfX3RhYnNfY29udGVudDpmaXJzdCcpLnNob3coKTtcclxuICAgJCgnLm9yZGVyX190YWJzX2Fycm93JykuaGlkZSgpO1xyXG4gICAkKCcub3JkZXJfX3RhYnNfYXJyb3c6Zmlyc3QnKS5zaG93KCk7XHJcbiAgICQoJy5vcmRlcl9fdGFic19pbmZvJykuZmluZCgnLm9yZGVyX190YWJzX2Fycm93OmZpcnN0Jykuc2hvdygpO1xyXG4gICAkKCd1bC5vcmRlcl9fdGFicyBsaScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICBjb250ZW50LmhpZGUoKTtcclxuICAgICAgIHZhciBhY3RpdmVUYWIgPSAkKHRoaXMpLmF0dHIoJ3JlbCcpO1xyXG4gICAgICAgJCgnIycgKyBhY3RpdmVUYWIpLnNsaWRlRG93bigpO1xyXG4gICAgICAgJCgndWwub3JkZXJfX3RhYnMgbGknKS5yZW1vdmVDbGFzcyhhY3RpdmUpLmZpbmQoJy5vcmRlcl9fdGFic19hcnJvdycpLmhpZGUoKTtcclxuICAgICAgICQodGhpcykuYWRkQ2xhc3MoYWN0aXZlKS5maW5kKCcub3JkZXJfX3RhYnNfYXJyb3cnKS5zaG93KCk7XHJcbiAgICAgICAkKCcub3JkZXJfX3RhYnNfYWNjb3JkaW9uJykucmVtb3ZlQ2xhc3MoZGFjdGl2ZSk7XHJcbiAgICAgICAkKCcub3JkZXJfX3RhYnNfYWNjb3JkaW9uW3JlbF49XCInICsgYWN0aXZlVGFiICsgJ1wiXScpLmFkZENsYXNzKGRhY3RpdmUpO1xyXG4gICB9KTtcclxuICAgJCgnLm9yZGVyX190YWJzX2FjY29yZGlvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICBjb250ZW50LmhpZGUoKTtcclxuICAgICAgIHZhciBkYWN0aXZlVGFiID0gJCh0aGlzKS5hdHRyKCdyZWwnKTtcclxuICAgICAgICQoJyMnICsgZGFjdGl2ZVRhYikuc2xpZGVEb3duKCk7XHJcbiAgICAgICAkKCcub3JkZXJfX3RhYnNfYWNjb3JkaW9uJykucmVtb3ZlQ2xhc3MoZGFjdGl2ZSkuZmluZCgnLm9yZGVyX190YWJzX2Fycm93JykuaGlkZSgpO1xyXG4gICAgICAgJCh0aGlzKS5hZGRDbGFzcyhkYWN0aXZlKS5maW5kKCcub3JkZXJfX3RhYnNfYXJyb3cnKS5zaG93KCk7XHJcbiAgICAgICAkKCd1bC5vcmRlcl9fdGFicyBsaScpLnJlbW92ZUNsYXNzKGFjdGl2ZSk7XHJcbiAgICAgICAkKCcub3JkZXJfX3RhYnMgbGlbcmVsXj1cIicgKyBkYWN0aXZlVGFiICsgJ1wiXScpLmFkZENsYXNzKGFjdGl2ZSk7XHJcbiAgIH0pO1xyXG5cclxuXHJcbiAgICQoJy5ydWxlc19fYmxvY2tzX3RhYicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCh0aGlzKS5uZXh0KCcucnVsZXNfX2Jsb2Nrc19jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgJCh0aGlzKS5maW5kKCcucnVsZXNfX2Jsb2Nrc190YWJfYXJyb3cnKS50b2dnbGUoKTtcclxuICAgfSk7ICAgICAgLy/QkNC60LrQvtGA0LTQtdC+0L0g0LIg0L/RgNCw0LLQuNC70LDRhVxyXG5cclxuICAgICQoJy5ydWxlc19fdWxfdGFiJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0YWJfYXR0cmlidXRlID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRhYicpO1xyXG4gICAgICAgICQoJy5ydWxlc19fYmxvY2tzX2NvbnRlbnQnKS5oaWRlKCk7XHJcbiAgICAgICAgJCgnLnJ1bGVzX19ibG9ja3NfY29udGVudFtkYXRhLXRhYj1cIicgKyB0YWJfYXR0cmlidXRlKyAnXCJdJykuc2hvdygpO1xyXG4gICAgICAgICQoJy5ydWxlc19fYXJyb3cnKS5oaWRlKCk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcucnVsZXNfX2Fycm93Jykuc2hvdygpO1xyXG4gICAgfSk7ICAgICAvL9Ci0LDQsdGLINCyINC/0YDQsNCy0LjQu9Cw0YVcclxuXHJcblxyXG4gICAgJCgnI2NvbmZpcm0tY2hlY2tib3gnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuaWNvbl9fYXBwbHktZ3JlZW5fY29uZmlybScpLnRvZ2dsZSgpO1xyXG4gICAgfSk7ICAgICAvL2NoZWNrYm94INC/0YDQuNC90Y/RgtC40LVcclxuXHJcblxyXG4gICAgJCgnLmRlbGl2ZXJ5X19jb250ZW50X3RpdGxlLW1vYicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICQodGhpcykuc2libGluZ3MoJy5kZWxpdmVyeV9fY29udGVudF9oaWRkZW4nKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgJCh0aGlzKS5maW5kKCcuaWNvbl9fYXJyb3dfZGVsaXZlcnlfZG93bicpLnRvZ2dsZUNsYXNzKCdpY29uX19hcnJvd19kZWxpdmVyeScpO1xyXG4gICAgfSk7ICAgICAvL9CQ0LrQutC+0YDQtNC10L7QvSDQvdCwINCU0L7RgdGC0LDQstC60LUg0Lgg0L7Qv9C70LDRgtC1XHJcblxyXG5cclxuICAgICQoJy5wZm9ybXVsYV9faGlkZGVuX2gzJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykubmV4dCgnLnBmb3JtdWxhX19oaWRkZW5fYmxvY2snKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLmljb25fX2Fycm93X3Bmb3JtdWxhX2Rvd24nKS50b2dnbGVDbGFzcygnaWNvbl9fYXJyb3dfcGZvcm11bGFfcmlnaHQnKTtcclxuICAgIH0pOyAgICAgLy/QkNC60LrQvtGA0LTQtdC+0L0g0L/RgNC+0LPRgNCw0LzQvNGLINCk0L7RgNC80YPQu9CwXHJcblxyXG5cclxuICAgICQoJy5wZGlyZWN0b3JfX2hpZGRlbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICQodGhpcykubmV4dCgnLnBkaXJlY3Rvcl9faGlkZGVuLWJsb2NrcycpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAkKHRoaXMpLmZpbmQoJy5pY29uX19hcnJvd19wZm9ybXVsYV9kb3duJykudG9nZ2xlQ2xhc3MoJ2ljb25fX2Fycm93X3Bmb3JtdWxhX3JpZ2h0Jyk7XHJcbiAgICB9KTsgICAgIC8v0JDQutC60L7RgNC00LXQvtC9INC/0YDQvtCz0YDQsNC80LzRiyDQtNC40YDQtdC60YLQvtGAXHJcblxyXG5cclxuICAgICQoJy5wY2FyZWVyX19tYW5hZ2VyLW1vYicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICQodGhpcykubmV4dCgnLnBjYXJlZXJfX21hbmFnZXJfaGlkZGVuJykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICQodGhpcykuZmluZCgnLmljb25fX2Fycm93X3Bmb3JtdWxhX2Rvd24nKS50b2dnbGVDbGFzcygnaWNvbl9fYXJyb3dfcGZvcm11bGFfcmlnaHQnKTtcclxuICAgIH0pOyAgICAgLy/QkNC60LrQvtGA0LTQtdC+0L0g0JrQsNGA0YzQtdGA0L3Ri9GFINCy0L7Qt9C80L7QttC90L7RgdGC0LXQuVxyXG5cclxuICAgICQoJy5wYXZhbmdhcmRfX2gyX21vYicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICQodGhpcykubmV4dCgnLnBhdmFuZ2FyZF9faGlkZGVuJykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICQodGhpcykuZmluZCgnLmljb25fX2Fycm93X3Bmb3JtdWxhX2Rvd24nKS50b2dnbGVDbGFzcygnaWNvbl9fYXJyb3dfcGZvcm11bGFfcmlnaHQnKTtcclxuICAgIH0pOyAgICAgLy/QkNC60LrQvtGA0LTQtdC+0L0g0JDQstCw0L3Qs9Cw0YDQtFxyXG5cclxuICAgICQoJy5wbGl2ZV9fdGV4dF9tb2JpbGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5uZXh0KCcucGxpdmVfX2hpZGRlbicpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuaWNvbl9fYXJyb3dfcGZvcm11bGFfZG93bicpLnRvZ2dsZUNsYXNzKCdpY29uX19hcnJvd19wZm9ybXVsYV9yaWdodCcpO1xyXG4gICAgfSk7ICAgICAvL9CQ0LrQutC+0YDQtNC10L7QvSDQkNCy0LDQvdCz0LDRgNC0XHJcblxyXG4gICAgJCgnLnBzaHVua19fbW9iaWxlX2gyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykubmV4dCgnLnBzaHVua19faGlkZGVuJykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5pY29uX19hcnJvd19wZm9ybXVsYV9kb3duJykudG9nZ2xlQ2xhc3MoJ2ljb25fX2Fycm93X3Bmb3JtdWxhX3JpZ2h0Jyk7XHJcbiAgICB9KTsgICAgIC8v0JDQutC60L7RgNC00LXQvtC9INCo0KPQndCaXHJcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLnByb2R1Y3RzX19zZXR0aW5nc19yZXN1bHRfc29ydGluZyB1bCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdzb3J0aW5nLW9wZW4nKTtcclxuICAgIH0pOyAgICAgICAgIC8vINGA0LDRgdC60YDRi9Cy0LDRjtGJ0LjQudGB0Y8g0YHQv9C40YHQvtC6IFwiINCh0L7RgNGC0LjRgNC+0LLQutCwOiBcIlxyXG5cclxuICAgIHZhciBtb2RhbEJhc2tldCA9ICQoJy5wcm9kdWN0c19fbW9kYWxfd3JhcHBlcicpO1xyXG4gICAgbW9kYWxCYXNrZXQuaGlkZSgpO1xyXG4gICAgJCgnLnByb2R1Y3RzX19tYWluX2NhdGFsb2dfaXRlbV9hZGQtYmFza2V0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1vZGFsQmFza2V0LnNob3coKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnByb2R1Y3RzX19tb2RhbF9jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtb2RhbEJhc2tldC5oaWRlKCk7XHJcbiAgICB9KTsgICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0LTQvtCx0LDQstC70LXQvdC40Y8g0YLQvtCy0LDRgNCwINCyINC60L7RgNC30LjQvdGDXHJcblxyXG5cclxuICAgICQoJy5nb29kc19fZGVzY3JpcHRpb25fYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1vZGFsQmFza2V0LnNob3coKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnByb2R1Y3RzX19tb2RhbF9jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtb2RhbEJhc2tldC5oaWRlKCk7XHJcbiAgICB9KTsgICAgICAgICAvLyDQnNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0LTQvtCx0LDQstC70LXQvdC40Y8g0YLQvtCy0LDRgNCwINCyINC60L7RgNC30LjQvdGDLkdPT0RTXHJcblxyXG5cclxuICAgICQoJy5wcm9kdWN0c19fc2V0dGluZ3NfZmlsdGVyJykub24oJ2NsaWNrJywnLnByb2R1Y3RzX19zZXR0aW5nc19maWx0ZXJfYm94X3R4dCwucHJvZHVjdHNfX3NldHRpbmdzX2ZpbHRlcl9ib3hfaWNvbicsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnByb2R1Y3RzX19zZXR0aW5nc19tb2RhbCcpLnNsaWRlRG93bigyMDAsICdsaW5lYXInKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnByb2R1Y3RzX19zZXR0aW5nc19tb2RhbF9jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnByb2R1Y3RzX19zZXR0aW5nc19tb2RhbCcpLnNsaWRlVXAoMjAwLCAnbGluZWFyJyk7XHJcbiAgICB9KTsgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCDQsdC70L7QuiDRhNC40LvRjNGC0YDQsNGG0LjQuFxyXG5cclxuXHJcbiAgICAkKCcucHJvZHVjdHNfX3NldHRpbmdzX21vZGFsX3NvcnRpbmcnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLnByb2R1Y3RzX19zZXR0aW5nc19tb2RhbF9zb3J0aW5nIHVsJykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpLnNsaWRlRG93bigyMDAsICdsaW5lYXInKTtcclxuICAgICAgICAkKCcuaWNvbl9fYXJyb3dfcHJvZHVjdHNfbW9kYWwtcmlnaHQnKS50b2dnbGVDbGFzcygnaWNvbl9fYXJyb3dfZG93bicpO1xyXG4gICAgfSk7ICAgICAgICAgLy8g0YDQsNGB0LrRgNGL0LLQsNGO0YnQuNC50YHRjyDRgdC/0LjRgdC+0Log0YHQvtGA0YLQuNGA0L7QstC60Lgg0LIg0LzQvtC00LDQu9GM0L3QvtC8INC+0LrQvdC1INGE0LjQu9GM0YLRgNCwXHJcblxyXG5cclxuICAgICQoJy5pY29uX192aWV3LXRhYmxlX3Byb2R1Y3RzJykub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlX3Byb2R1Y3RzJykpe1xyXG4gICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5pY29uX192aWV3LXNxdWFyZV9wcm9kdWN0cycpLmFkZENsYXNzKCdpbmFjdGl2ZV9wcm9kdWN0cycpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmVfcHJvZHVjdHMnKTtcclxuICAgICAgICAgICAgJCgnLnByb2R1Y3RzX19tYWluX2NhdGFsb2csIC5yZXN1bHRzX19tYWluX2NhdGFsb2cnKS5hZGRDbGFzcygndGFibGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7ICAgICAgICAgLy/QktGL0LHQvtGAINCy0LjQtNCwINGA0LDRgdC60LvQsNC00LrQuCDQv9GA0L7QtNGD0LrRhtC40LggXCLQotCw0LHQu9C40YfQvdCw0Y9cIlxyXG5cclxuXHJcbiAgICAkKCcuaWNvbl9fdmlldy1zcXVhcmVfcHJvZHVjdHMnKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpbmFjdGl2ZV9wcm9kdWN0cycpO1xyXG4gICAgICAgICQoJy5pY29uX192aWV3LXRhYmxlX3Byb2R1Y3RzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZV9wcm9kdWN0cycpO1xyXG4gICAgICAgICQoJy5wcm9kdWN0c19fbWFpbl9jYXRhbG9nLCAucmVzdWx0c19fbWFpbl9jYXRhbG9nJykucmVtb3ZlQ2xhc3MoJ3RhYmxlJyk7XHJcbiAgICB9KTsgICAgICAgICAvL9CS0YvQsdC+0YAg0LLQuNC00LAg0YDQsNGB0LrQu9Cw0LTQutC4INC/0YDQvtC00YPQutGG0LjQuCBcItCh0YLRgNC+0YfQvdCw0Y9cIlxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0pOyIsIiQoZnVuY3Rpb24oKXtcclxuICAgIHZhciBzaHVua19zY3JvbGwgPSAkKCcuc2h1bmtfX3Byb2dyZXNzX3Njcm9sbCcpXHJcbiAgIHZhciBjaGlsZHNTY3JvbGwgPSBzaHVua19zY3JvbGwuY2hpbGRyZW4oKS5sZW5ndGg7XHJcblxyXG4gICAgaWYoY2hpbGRzU2Nyb2xsID4gMyAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDc4MiApe1xyXG4gICAgICAgIHNodW5rX3Njcm9sbC5jc3MoJ292ZXJmbG93LXknLCdzY3JvbGwnKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHNodW5rX3Njcm9sbC5jc3MoJ292ZXJmbG93LXknLCdoaWRkZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICAgIHZhciB3aWR0aFRvU2Nyb2xsID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcblxyXG4gICAgICAgaWYoY2hpbGRzU2Nyb2xsID4gMyAmJiB3aWR0aFRvU2Nyb2xsID4gNzgyICl7XHJcbiAgICAgICAgICAgc2h1bmtfc2Nyb2xsLmNzcygnb3ZlcmZsb3cteScsJ3Njcm9sbCcpO1xyXG4gICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgc2h1bmtfc2Nyb2xsLmNzcygnb3ZlcmZsb3cteScsJ2hpZGRlbicpO1xyXG4gICAgICAgfVxyXG4gICB9KTtcclxuXHJcbiAgICAkKCcuc2h1bmtfX3Byb2dyZXNzX2Jsb2NrLXdyYXBwZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIHNodW5rX3Njcm9sbC5zbGlkZVRvZ2dsZSgyMDApO1xyXG4gICAgICAgICQoJy5pY29uX19hcnJvd19zaHVua191cCcpLnRvZ2dsZUNsYXNzKCdpY29uX19hcnJvd19zaHVua19kb3duJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG59KTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmJpZy1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDBcclxuICAgIH0pO1xyXG4gICAgJCgnLmluZGV4X19zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICBwcmV2QXJyb3c6ICQoJy5pY29uX19pbmRleF9sZWZ0JyksXHJcbiAgICAgICAgbmV4dEFycm93OiAkKCcuaWNvbl9faW5kZXhfcmlnaHQnKSxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyODAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5NTAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA2NTAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICAvLyAkKCcuaWNvbl9faW5kZXhfcmlnaHQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgaW5kZXhfc2xpZGVyLnNsaWNrKCdzbGlja05leHQnKTtcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gJCgnLmljb25fX2luZGV4X2xlZnQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgaW5kZXhfc2xpZGVyLnNsaWNrKCdzbGlja1ByZXYnKTtcclxuICAgIC8vIH0pO1xyXG4gICAgdmFyIGdvb2RzX3NsaWRlciA9ICQoJy5nb29kc19fc2xpZGVyJyk7XHJcbiAgICB2YXIgZ29vZHNfbmF2ID0gJCgnLmdvb2RzX19zbGlkZXItbmF2Jyk7XHJcblxyXG4gICAgZ29vZHNfc2xpZGVyLnNsaWNrKHtcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAvLyBpbml0aWFsU2xpZGU6IDEsXHJcbiAgICAgICAgcHJldkFycm93OiAkKCcuaWNvbl9fZ29vZHNfc2xpZGVyX2xlZnQnKSxcclxuICAgICAgICBuZXh0QXJyb3c6ICQoJy5pY29uX19nb29kc19zbGlkZXJfcmlnaHQnKSxcclxuICAgICAgICBhc05hdkZvcjogZ29vZHNfbmF2XHJcbiAgICB9KTtcclxuICAgIGdvb2RzX25hdi5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFzTmF2Rm9yOiBnb29kc19zbGlkZXIsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA4MDAsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmdvb2RzX192aWV3cycpLnNsaWNrKHtcclxuICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIHByZXZBcnJvdzogJCgnLmljb25fX2dvb2RzX2xlZnQnKSxcclxuICAgICAgICBuZXh0QXJyb3c6ICQoJy5pY29uX19nb29kc19yaWdodCcpLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogODAwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxufSkoKTsiXX0=
