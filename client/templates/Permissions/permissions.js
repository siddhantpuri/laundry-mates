Template.permissions.helpers({  
  roleIs: function(role) {
    return Meteor.user().profile.role.UC_Berkeley === role;
  }
});

userId = Meteor.userId(); 

Template.permissions.events({
	"submit .change-chapter-form": function(event){
		Meteor.users.update( { _id: userId }, { $set: { 'profile.primary_chapter': $('#primary-chapter').val() }} );
	}
});