Template.upcoming.events({
	"click .cancel-create-button": function(event) {
		$('.create-template').addClass('display-none');
		console.log('cancel is working')
	}
});