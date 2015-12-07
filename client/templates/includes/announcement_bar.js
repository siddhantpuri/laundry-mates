Template.announcementBar.events({
	"click .announcement-bar-x": function(event) {
		$('.announcement-bar').addClass('display-none');
		console.log('its working');
	}
});