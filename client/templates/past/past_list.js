Template.pastList.helpers({
  past_lounges: function() {
  	var currentdate = new Date();
    return Lounges.find({lounge_participants: Meteor.userId(), 
    					 lounge_date: {$lt: currentdate}});
    
  },

  are_past_lounges: function() {
  	var currentdate = new Date();
    return Lounges.find({lounge_participants: Meteor.userId(), 
    					 lounge_date: {$lt: currentdate}}).fetch();
    
  },

  isHost: function() {
  	return Meteor.userId() == Lounges.findOne(this._id).lounge_host;
  }
});