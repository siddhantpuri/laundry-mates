Template.settings.helpers({
  isMyCheckboxChecked: function() {
    if (Meteor.user().profile.notifications.tl_monthly_letter) {
    	return 'checked';
    } else {
    	return '';
    }
  }
});


Template.settings.events({
	'click .monthly_newsletter': function(event, template) {
		if (Meteor.user().profile.notifications.tl_monthly_letter) {
	    	Meteor.users.update(Meteor.userId(), {$set: {"profile.notifications.tl_monthly_letter": false}});
	    	handleSubscriber({
			      email: Meteor.user().emails[0].address,
			      action: 'unsubscribe'
			});
	    } else {
	    	Meteor.users.update(Meteor.userId(), {$set: {"profile.notifications.tl_monthly_letter": true}});
	    	handleSubscriber({
			      email: Meteor.user().emails[0].address,
			      action: 'subscribe'
			});
	    }	  
	 }
});