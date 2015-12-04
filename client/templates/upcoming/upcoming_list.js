Template.upcomingList.helpers({
  upcomings: function() {
    return Upcomings.find();
  }
});

/* If you want to subscribe not using the router, but router is nice cause you get waiting stuff
Template.upcomingList.onCreated( function() { 
	Meteor.subscribe('upcomings'); 
})
*/