(function () {
	let modal = $('.booklet-online__modal');
	let buttons = $('.booklet-online__box_item_button');

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
		let target = $(ev.target);
		while (!target.hasClass('icon')) {
			if (target.hasClass('booklet-online__modal')) {
				modal.slideUp();
				break;
			}
			target = target.parent();
		}
	});
})();