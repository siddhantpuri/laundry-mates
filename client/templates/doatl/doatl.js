
Template.doatl.events({
	"change .doatl-select": function(event){
		Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.primary_chapter': $('#primary-chapter').val() }} );
		console.log(Meteor.user().profile.primary_chapter)

	return false;
	},

	"change .doatl-select-logged-out": function(event){
		Session.set('selectedChapter', $('#primary-chapter').val());
		var chapter = Session.get('selectedChapter');
		console.log(chapter)

	return false;
	}
});

Template.doatl.helpers({
	loggedIn: function() {
		return Meteor.user();
	}
});