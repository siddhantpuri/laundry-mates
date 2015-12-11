Template.doatl.events({
	"change .doatl-select": function(event){
		Meteor.users.update( { _id: userId }, { $set: { 'profile.primary_chapter': $('#primary-chapter').val() }} );
		console.log(Meteor.user().profile.primary_chapter)

	return false;
	}
});