Template.upcomingList.helpers({
  upcoming_lounges: function() {
  	var currentdate = new Date();
    return Lounges.find({lounge_participants: Meteor.userId(), 
    					           lounge_date: {$gt: currentdate}}, {sort: { lounge_date: 1 }});
    
  },

  are_upcoming_lounges: function() {
    var currentdate = new Date();
    return Lounges.find({lounge_participants: Meteor.userId(), 
                         lounge_date: {$gt: currentdate}}).fetch();
    
  },

  isHost: function() {
  	return Meteor.userId() == Lounges.findOne(this._id).lounge_host;
  }
});

/* If you want to subscribe not using the router, but router is nice cause you get waiting stuff
Template.upcomingList.onCreated( function() { 
	Meteor.subscribe('upcomings'); 
})
*/