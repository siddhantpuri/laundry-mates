Template.upcomingLounge.events({
	"click .contact-host": function(event) {
    var id = this._id;
    $('#contact-host-div' + id).toggleClass('display-none');
		console.log('its working');
	},

  "click .cant-make-it": function(event) {
    var id = this._id;
    var ary = Lounges.findOne(this._id).lounge_participants
    ary = _.without(ary, Meteor.userId());
    Lounges.update({_id: this._id}, { $set: {
    'lounge_participants': ary,
    'lounge_num_participants': ary.length
    }});
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

