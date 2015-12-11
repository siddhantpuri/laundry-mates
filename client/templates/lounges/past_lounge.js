Template.pastLounge.events({
	"click .this-lounge-info": function(event) {
		$('.lounge-info').toggleClass('display-none');
		console.log('its working');
		$('.lounge-insert-log-url, .contact-host-div').addClass('display-none')
	},
	"click .log-your-lounge": function(event) {
		$('.lounge-insert-log-url').toggleClass('display-none');
		console.log('its working');
		$('.lounge-info, .contact-host-div').addClass('display-none')
	},
	"click .contact-host": function(event) {
		$('.contact-host-div').toggleClass('display-none');
		console.log('its working');
		$('.lounge-insert-log-url, .lounge-info').addClass('display-none')
	}
});

Template.pastLounge.helpers({
  host_name: function() {
  	var hostId = Lounges.findOne(this._id).lounge_host
  	return Meteor.users.findOne({_id:hostId}).profile.first_name;
  }
});