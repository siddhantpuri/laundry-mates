Template.pastLoungeH.events({
	"click .this-lounge-info": function(event) {
    	var id = this._id;
		$('#lounge-info' + id).toggleClass('display-none');
    	//$('#' + id).hide();
		console.log('its working');
		$('.lounge-insert-log-url, .contact-host-div').addClass('display-none');
	},
	"click .log-your-lounge": function(event) {
		var id = this._id;
		$('#lounge-insert-log-url' + id).toggleClass('display-none');
		console.log('its working');
		$('.lounge-info, .contact-host-div').addClass('display-none');
	},
	"submit .lounge-log-url-form": function(event) {
		var id = this._id;
		Lounges.update({_id: id}, { $set: {
		'lounge_log_link': $('#lounge-log-url' + id).val()
		}});
		console.log($('#lounge-log-url' + id).val())
		$('#lounge-insert-log-url' + id).addClass('display-none');
		return false;
	}
});

empty_bubble = "http://i63.tinypic.com/f1kuv7.jpg";
full_bubble = "http://i65.tinypic.com/2rqhkp3.jpg";

Template.pastLoungeH.helpers({
  host_name: function() {
  	var hostId = Lounges.findOne(this._id).lounge_host;
  	return Meteor.users.findOne({_id:hostId}).profile.first_name;
  },
  host_phone: function() {
  	var hostId = Lounges.findOne(this._id).lounge_host;
  	return Meteor.users.findOne({_id:hostId}).profile.phone;
  },
  host_email: function() {
  	var hostId = Lounges.findOne(this._id).lounge_host;
  	return Meteor.users.findOne({_id:hostId}).emails[0].address;
  }
});