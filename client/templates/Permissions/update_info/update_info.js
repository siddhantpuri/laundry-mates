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
		var slack_handle = trimInput($('#slack_handle').val());


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


		    
	    chapter_admins = Meteor.users.find({'profile.role'[chapter]: 'admin'});
	    if (chapter_admins.fetch()){
	      data.forEach(function(admin) {
	        console.log(admin.profile.first_name)

	        var data = {
		        admin_first_name : admin.profile.first_name,
		        lounger_first_name : Meteor.user().profile.first_name,
		        lounger_last_name : Meteor.user().profile.last_name
		      }
		      var to = admin.emails[0].address;
		      var subject = "" + Meteor.user().profile.first_name+ " " + Meteor.user().profile.last_name + 
		      				" requested to become a Host at your Chapter. Accept/Reject him/her!!";
		      var temp_name = 'hostreqEmail';
		      var file_name = 'admin_notif_lounger_host_req.html';

		      Meteor.call('sendEmail', to, subject, data, temp_name, file_name);
		      console.log('sent')


	        }

		







		location.reload();
		
		return false;
	},

	"change .myFileInput": function(event, template) {
      FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
          if (err){
             // handle error
          } else {
             // handle success depending what you need to do
            var userId = Meteor.userId();
            var imagesURL = {
              "profile.image": "/cfs/files/images/" + fileObj._id
            };
            Meteor.users.update(userId, {$set: imagesURL});
          }
        });
     });
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