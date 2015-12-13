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

		var email = trimInput($('#email').val());
		var first_name = trimInput($('#first_name').val());
		var last_name = trimInput($('#last_name').val());
		var phone = trimInput($('#phone').val());


		if(isNotEmpty(email) &&  
			isNotEmpty(first_name) && 
			isNotEmpty(last_name) && 
			isEmail(email)){

				Meteor.users.update( { _id: userId }, { $set: { 'profile.first_name': first_name }} );
				Meteor.users.update( { _id: userId }, { $set: { 'profile.last_name': last_name }} );
				Meteor.users.update( { _id: userId }, { $set: { 'profile.phone': phone }} );
				Meteor.users.update( { _id: userId }, { $set: { 'profile.primary_chapter': $('#primary-chapter').val() }} );
				Meteor.users.update( { _id: userId }, { $set: { 'profile.bio': $('#bio').val() }} );
				Meteor.users.update( { _id: userId }, { $set: { 'emails.0.address': email }} );
		}
		
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



// Validation Rules

// Trim Helper
var trimInput = function(val){
	return val.replace(/^\s*|\s*$/g, "");
}

// Check For Empty Fields
isNotEmpty = function(value) {
    if (value && value !== ''){
        return true;
    }
    FlashMessages.sendError("Please fill in all fields");
    return false;
};

// Validate Email
isEmail = function(value) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(value)) {
        return true;
    }
    FlashMessages.sendError("Please use a valid email address");
    return false;
};