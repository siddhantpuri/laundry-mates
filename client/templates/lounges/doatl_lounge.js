Template.doatlLounge.events({
	"click .do-this-tl-btn": function(event) {
    var id = this._id;
    var ary = Lounges.findOne(this._id).lounge_participants;
    ary[ary.length] = Meteor.userId();
    Lounges.update({_id: this._id}, { $set: {
    'lounge_participants': ary,
    'lounge_num_participants': ary.length
    }});
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
    return Lounges.find({_id : this._id, lounge_participants: Meteor.userId()});
  }
});