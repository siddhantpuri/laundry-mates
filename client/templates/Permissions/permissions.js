userId = Meteor.userId(); 

Template.permissions.helpers({  
  roleIs: function(role) {
  	var chapter = Meteor.user().profile.primary_chapter
    return Meteor.users.findOne(userId).profile.role[chapter] === role;
  }
});

Template.permissions.events({
	"submit .change-chapter-form": function(event){
		Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.primary_chapter': $('#primary-chapter').val() }} );
		console.log($('#primary-chapter').val())
		console.log(Meteor.user().profile.primary_chapter)

	return false;
	}
});