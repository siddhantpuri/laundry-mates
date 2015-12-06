Template.permissions_lounger.events({
	"click .request-btn": function(event) {
		$('.update-info').toggleClass('display-none');
		console.log('its working')
	}
});