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
});



Requests.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (userId);
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return (userId);
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return (userId);
  },
  fetch: ['owner']
});

Meteor.users.allow({
 insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (userId);
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return (userId);
  }
});
