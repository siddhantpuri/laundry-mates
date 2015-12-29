Template.login.events({
	"submit .form-signin": function(event){
		var email = event.target.email.value;
		var password = event.target.password.value;

		Meteor.loginWithPassword(email, password, function(err){
			if(err){
				event.target.email.value = email;
				event.target.password.value = password;
				FlashMessages.sendError(err.reason);
			} else {
				if (Session.get('Route') == '/doatl') {
					Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.primary_chapter': Session.get('selectedChapter') }} );
					Session.set('Route', '/my-upcoming-lounges');
					Router.go('/doatl');
				} else {
					var route = Session.get('Route')
					if (route) {
						Router.go(route)
					} else {
						Router.go('/my-upcoming-lounges');
					}
				}
			}
		});

		// Prevent Submit
		return false;
	}
});