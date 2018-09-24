(function () {
    let nav = $('.nav'),
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
        let target = $(ev.target);
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

    function menuReady()
    {
        if($( window ).width() < 783 )
        {
            $('.nav').addClass('hidden');
        }
        else
        {
            if($('.nav').hasClass('hidden'))
            {
                $('.nav').removeClass('hidden');
            }
        }
    }

    $( document ).ready(function(){
        menuReady();
    });

    $(window).resize(function(){
        menuReady();
    });
})();
