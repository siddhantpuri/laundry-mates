Template.upcomingLounge.events({
	"click .contact-host": function(event) {
    var id = this._id;
    $('#contact-host-div' + id).toggleClass('display-none');
		console.log('its working');
	},

  "click .cant-make-it": function(event) {
    var host_id = this.lounge_host;
    var host = Meteor.users.findOne(host_id);
    var lounger = Meteor.user();
    var id = this._id;
    var ary = Lounges.findOne(this._id).lounge_participants
    ary = _.without(ary, Meteor.userId());
    Lounges.update({_id: this._id}, { $set: {
    'lounge_participants': ary,
    'lounge_num_participants': ary.length
    }});
    console.log('its working');

      var data = {
        first_name: lounger.profile.first_name,
        day: this.lounge_day,
        date: this.lounge_date_numbers,
        time: this.lounge_time,
        location: this.lounge_location,
        address: this.lounge_address
      }
      var to = lounger.emails[0].address;
      var subject = "Notification - You have been Un-RSVP’d for your Thought Lounge Session.";
      var temp_name = 'loungerUNRSVPEmail';
      var file_name = 'lounger_unrsvp.html';

      Meteor.call('sendEmail', to, subject, data, temp_name, file_name);
      console.log('sent')


      var data = {
        first_name: host.profile.first_name,
        day: this.lounge_day,
        date: this.lounge_date_numbers,
        time: this.lounge_time,
        location: this.lounge_location,
        lounger_first_name: lounger.profile.first_name,
        lounger_last_name: lounger.profile.last_name,
        lounger_email: lounger.emails[0].address,
        lounger_phone: lounger.profile.phone,
        lounger_url: Files.findOne( {userId: Meteor.userId()}, { sort: { "added": -1 } } ).url

      }
      var to = host.emails[0].address;
      var subject = "Notification - One of the Loungers for your TLS has Un-RSVP’d.";
      var temp_name = 'hostUNRSVPEmail';
      var file_name = 'host_unrsvp.html';

      Meteor.call('sendEmail', to, subject, data, temp_name, file_name);
      console.log('sent')
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

