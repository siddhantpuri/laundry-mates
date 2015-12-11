Template.doatlLounge.events({
	"click .doatl-lounge-host": function(event) {
		$('.contact-host-div').toggleClass('display-none');
		console.log('its working');
	}
});

Template.doatlLounge.helpers({
  host_name: function() {
  	var hostId = Lounges.findOne(this._id).lounge_host
  	return Meteor.users.findOne({_id:hostId}).profile.first_name;
  },

  spots_left: function() {
  	var total = Lounges.findOne(this._id).lounge_total_num_participants;
  	var taken = Lounges.findOne(this._id).lounge_num_participants;

  	return total - taken
  },

  takenGt: function(num) {
  	var taken = Lounges.findOne(this._id).lounge_num_participants;
  	return taken > num
  }
});