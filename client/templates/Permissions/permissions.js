userId = Meteor.userId(); 

Template.permissions.helpers({  
  roleIs: function(role) {
  	var chapter = Meteor.user().profile.primary_chapter
    return Meteor.users.findOne(userId).profile.role[chapter] === role;
  }
});

Template.permissions.events({
	"change .primary-chapter": function(event){
		Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.primary_chapter': $('#primary-chapter').val().split(' ').join('_') }} );
		console.log(Meteor.user().profile.primary_chapter)

	return false;
	}
});