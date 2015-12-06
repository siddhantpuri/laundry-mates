/*
Meteor.methods(
	changeEmail: function(newEmail) {
		Accounts.removeEmail(this.userId, this.use
		Accounts.addEmail(this.userId, newEmail, false);

	}
)


Meteor.users.update({_id:Meteor.user()._id}, 
			{$set:{'emails[0].address':email}}); 
	};
*/

Meteor.methods({
	changeEmail: function(newEmail) {
		console.log('test')
		Accounts.removeEmail(this.userId, Meteor.users.find(this.userId, emails[0]))
		Accounts.addEmail(this.userId, newEmail, false);

	}
})

