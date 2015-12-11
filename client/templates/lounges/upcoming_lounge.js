Template.upcomingLounge.events({
	"click .contact-host": function(event) {
		$('.contact-host-div').toggleClass('display-none');
		console.log('its working');
	}
});

Template.upcomingLounge.helpers({
  host_name: function() {
  	var hostId = Lounges.findOne(this._id).lounge_host
  	return Meteor.users.findOne({_id:hostId}).profile.first_name;
  },
  host_phone: function() {
  	var hostId = Lounges.findOne(this._id).lounge_host
  	return Meteor.users.findOne({_id:hostId}).profile.phone;
  },
  host_email: function() {
  	var hostId = Lounges.findOne(this._id).lounge_host
  	return Meteor.users.findOne({_id:hostId}).emails[0].address;
  }
});