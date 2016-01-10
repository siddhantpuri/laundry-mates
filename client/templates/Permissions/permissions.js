userId = Meteor.userId(); 

Template.permissions.helpers({  
  roleIs: function(role) {
  	var chapter = Meteor.user().profile.primary_chapter
    return Meteor.user().profile.role[chapter] === role;
  },

  notSelectedChapter: function () {
		var option_chapter = this.name;
		var chapter = Meteor.user().profile.primary_chapter;
		return chapter != option_chapter;
	}
});

Template.permissions.events({
	"change .primary-chapter": function(event){
		Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.primary_chapter': $('#primary-chapter').val().split(' ').join('_') }} );
		console.log(Meteor.user().profile.primary_chapter)

	return false;
	}
});