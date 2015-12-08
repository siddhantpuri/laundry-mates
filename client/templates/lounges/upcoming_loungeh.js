Template.upcomingLoungeH.events({
	"click .this-lounge-info": function(event) {
		$('.lounge-info').toggleClass('display-none');
		console.log('its working');
		$('.lounge-insert-log-url, .contact-host-div').addClass('display-none')
	}
});