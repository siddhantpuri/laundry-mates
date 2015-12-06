/* HOW TO GET VALUE OF THE FILE UPLOADED 
Template.accountInfo.events({
	"click .upload-file": function(event) {
		var x = $('.upload-file').val();
		console.log(x + "darn")	
	}
});
*/

userId = Meteor.userId(); 

Template.updateInfo.events({
	"submit .account-info-form": function(event){
		//Meteor.users.update( { _id: userId }, { $set: { 'profile.first_name': $('#first_name').val() }} );
		//Meteor.users.update( { _id: userId }, { $set: { 'profile.last_name': $('#last_name').val() }} );
		//Meteor.users.update( { _id: userId }, { $set: { 'profile.phone': $('#phone').val() }} );
		//Meteor.users.update( { _id: userId }, { $set: { 'profile.primary_chapter': $('#primary-chapter').val() }} );
		//Meteor.users.update( { _id: userId }, { $set: { 'profile.bio': $('#bio').val() }} );

		$('.sent').toggleClass('display-none');
		

	}
});