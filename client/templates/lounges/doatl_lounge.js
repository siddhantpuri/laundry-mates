Template.doatlLounge.events({
	"click .do-this-tl-btn": function(event) {
    if (Meteor.user()){
      var host_id = this.lounge_host;
      var id = this._id;
      var ary = Lounges.findOne(this._id).lounge_participants;
      ary[ary.length] = Meteor.userId();
      Lounges.update({_id: this._id}, { $set: {
      'lounge_participants': ary,
      'lounge_num_participants': ary.length
      }});


      var data = {
        first_name : Meteor.user().profile.first_name,
        day: this.lounge_day,
        date: this.lounge_date_numbers,
        time: this.lounge_time,
        location: this.lounge_location,
        address: this.lounge_address
      }
      var to = Meteor.user().emails[0].address;
      var subject = "Confirmation - You have been signed up for a Thought Lounge Session.";
      var temp_name = 'signUPEmail';
      var file_name = 'tl_signed_up.html';

      Meteor.call('sendEmail', to, subject, data, temp_name, file_name);
      console.log('sent')

      
        var h_data = {
        lounger_first_name : Meteor.user().profile.first_name,
        lounger_last_name : Meteor.user().profile.last_name,
        lounger_email: Meteor.user().emails[0].address,
        lounger_phone: Meteor.user().profile.phone,
        day: this.lounge_day,
        date: this.lounge_date_numbers,
        time: this.lounge_time,
        location: this.lounge_location
      }            
        var h_to = Meteor.users.findOne({_id: host_id}).emails[0].address;
        var h_subject = "A New Lounger has joined Your Lounge. Here’s their info, welcome them!";
        var temp_name = 'newLoungerEmail';
        var file_name = 'new_lounger.html';

        Meteor.call('sendEmail', h_to, h_subject, h_data,  temp_name, file_name);
        console.log('sent');

    Router.go('/my-upcoming-lounges');
    } else {
      Session.set('Route', '/doatl');
      Router.go('/');
    }

    //add mail thing here to send confirmartion email to this users email about Lounge by this._id
    //Meteor.user().profile.first_name
    //Meteor.user().emails[0].address
    //Lounges.findOne(this._id).something

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
  },

  userIsParticipant: function() {
    return Lounges.find({_id : this._id, lounge_participants: Meteor.userId()}).fetch();
  },

  loggedIn: function() {
    return Meteor.user();
  }
});