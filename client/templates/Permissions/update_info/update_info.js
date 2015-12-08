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
		Meteor.users.update( { _id: userId }, { $set: { 'profile.first_name': $('#first_name').val() }} );
		Meteor.users.update( { _id: userId }, { $set: { 'profile.last_name': $('#last_name').val() }} );
		Meteor.users.update( { _id: userId }, { $set: { 'profile.phone': $('#phone').val() }} );
		Meteor.users.update( { _id: userId }, { $set: { 'profile.primary_chapter': $('#primary-chapter').val() }} );
		Meteor.users.update( { _id: userId }, { $set: { 'profile.bio': $('#bio').val() }} );
		
		var chapter = $('#primary-chapter').val().split(' ').join('_');
		var updated_request_status = Meteor.users.findOne(userId).profile.request_status;
		updated_request_status[chapter] = "processing";
		Meteor.users.update( { _id: userId }, { $set: { 'profile.request_status': updated_request_status}} );

		Requests.insert({
		type: 'host',
		request_userId: userId,
    	request_chapter: chapter,
    	request_first_name: $('#first_name').val(),
    	request_last_name: $('#last_name').val(),
    	request_email: $('#email').val(),
    	request_picture: 'somefile',
    	request_phone: $('#phone').val(),
    	request_bio: $('#bio').val(),
    	request_approved: "false"
		});
		
		location.reload();
		
		return false;
	}
});