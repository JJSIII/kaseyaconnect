$(document).ready(function () {


	// table tooltips
	//*************************************************************
	$('td a[title]').qtip({
		style: {
			classes: 'qtip-light qtip-rounded qtip-shadow'
		},
		position: {
			my: 'bottom left',  // Position my top left...
		    at: 'top right', // at the bottom right of...
			viewport: $(window)
		}
	});

	// hashed hrefs
	//*************************************************************
	$('a[href="#"').click(function() {
		return false;
	});


	// Tabs
	function activateTab($tab) {
		var $activeTab = $tab.closest('dl').find('a.active'),
			contentLocation = $tab.attr("href") + 'Tab';

		//Make Tab Active
		$activeTab.removeClass('active');
		$tab.addClass('active');

	// Show Tab Content
		$(contentLocation).closest('.tabs-content').children('li').hide();
		$(contentLocation).css('display', 'block');
	}

	$('dl.tabs').each(function () {
		// Get all tabs
		var tabs = $(this).children('dd').children('a');
		tabs.click(function (e) {
			activateTab($(this));
		});
	});

	if (window.location.hash) {
		activateTab($('a[href="' + window.location.hash + '"]'));
	}

});