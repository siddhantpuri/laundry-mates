userId = Meteor.userId();

Template.permissions_lounger.events({
	"click .request-btn": function(event) {
		$('.update-info').toggleClass('display-none');
		console.log('its working')
	}
});

Template.permissions_lounger.helpers({  
  statusIs: function(status) {
  	var chapter = Meteor.user().profile.primary_chapter
    return Meteor.users.findOne(userId).profile.request_status[chapter] === status;
  }
});