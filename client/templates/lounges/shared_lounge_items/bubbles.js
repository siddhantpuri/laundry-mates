Template.bubbles.helpers({
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