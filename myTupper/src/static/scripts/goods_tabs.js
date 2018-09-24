$(function () {

    var tab_description_item = $('.goods__tabs_description');
    var tab_condition_item =  $('.goods__tabs_condition');
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