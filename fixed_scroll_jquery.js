$(document).ready(function{
	$(window).scroll(function{
		var fixedScroll = 90;
		if ($(window).fixedScroll() >= fixedScroll){
			$('tc-header').css({
				position : 'fixed',
				top : 0
			})
		}
		if ($(window).fixedScrol() < fixedScroll){
			$('tc-header').removeAttr('style');
		}
	})
})
