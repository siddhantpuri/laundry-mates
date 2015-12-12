Template.pastLounge.events({
	"click .contact-host": function(event) {
		var id = this._id;
		$('#contact-host-div' + id).toggleClass('display-none');
		console.log('its working');
		$('.lounge-insert-log-url, .lounge-info').addClass('display-none')
	}
});

Template.pastLounge.helpers({
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