Template.upcomingLounge.events({
	"click .contact-host": function(event) {
    var id = this._id;
    $('#contact-host-div' + id).toggleClass('display-none');
		console.log('its working');
	},

  "click .cant-make-it": function(event) {
    var host_id = this.lounge_host;
    var id = this._id;
    var ary = Lounges.findOne(this._id).lounge_participants
    ary = _.without(ary, Meteor.userId());
    Lounges.update({_id: this._id}, { $set: {
    'lounge_participants': ary,
    'lounge_num_participants': ary.length
    }});
    console.log('its working');

      var text = "This email has been sent to notify you that you have un-rsvped for a thought lounge for "  + 
                  this.lounge_chapter + ", on " + this.lounge_date_numbers + " at " + this.lounge_time + ".";                              
      var to = Meteor.user().emails[0].address;
      var subject = "Thought Lounge Un-RSVP";

      Meteor.call('sendEmail', to, subject, text);
      console.log('sent');

            var h_text = "This email has been sent to notify you that"+ Meteor.user().profile.first_name + " "+ Meteor.user().profile.last_name
                   +" has un-rsvped for your thought lounge for "  + 
                  this.lounge_chapter + ", on " + this.lounge_date_numbers + " at " + this.lounge_time + ".";                              
            var h_to = Meteor.users.findOne({_id: host_id}).emails[0].address;
            var h_subject = "Thought Lounge Un-RSVP";

            Meteor.call('sendEmail', h_to, h_subject, h_text);
            console.log('sent');
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
  },
  is_special_type: function() {
    return this.lounge_type == "other";
  }
});

