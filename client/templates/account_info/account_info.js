/* HOW TO GET VALUE OF THE FILE UPLOADED 
Template.accountInfo.events({
	"click .upload-file": function(event) {
		var x = $('.upload-file').val();
		console.log(x + "darn")	
	}
});
*/

userId = Meteor.userId(); 

Template.accountInfo.events({
	"submit .account-info-form": function(event){

		var email = trimInput($('#email').val());
		var first_name = trimInput($('#first_name').val());
		var last_name = trimInput($('#last_name').val());



		if(isNotEmpty(email) &&  
			isNotEmpty(first_name) && 
			isNotEmpty(last_name) && 
			isEmail(email)){

				Meteor.users.update( { _id: userId }, { $set: { 'profile.first_name': first_name }} );
				Meteor.users.update( { _id: userId }, { $set: { 'profile.last_name': last_name }} );
				Meteor.users.update( { _id: userId }, { $set: { 'profile.phone': $('#phone').val() }} );
				Meteor.users.update( { _id: userId }, { $set: { 'profile.primary_chapter': $('#primary-chapter').val() }} );
				Meteor.users.update( { _id: userId }, { $set: { 'profile.bio': $('#bio').val() }} );
				Meteor.users.update( { _id: userId }, { $set: { 'emails.0.address': email }} );
				console.log(Meteor.user())
		}

		if($('#new-password').val() &&
			$('#old-password').val()){

				var password = trimInput($('#new-password').val());
				var password2 = trimInput($('#confirm-new-password').val());
				var old_password = trimInput($('#old-password').val());

				if (areValidPasswords(password, password2)){

					Accounts.changePassword(old_password, password);
				}
			}


		location.reload();
		// Prevent Submit
		return false;
	},

	"change .myFileInput": function(event, template) {
     var files = event.target.files;
     for (var i = 0, ln = files.length; i < ln; i++) {
        Images.insert(files[i], function (err, fileObj) {
          if (err){
             // handle error
             console.log('there was an error')
          } else {
             // handle success depending what you need to do
            var userId = Meteor.userId();
            var imagesURL = {
              "profile.image": "/cfs/files/images/" + fileObj._id
            };
            console.log(imagesURL)
            Meteor.users.update(userId, {$set: imagesURL});
            console.log('is there error here?')
          }
        });
        console.log('here?')
     }
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

// Check Password Field
isValidPassword = function(password) {
    if (password.length < 6) {
        FlashMessages.sendError("Password must be at least 6 characters");
        return false;
    }
    return true;
};

// Match Password
areValidPasswords = function(password, confirm) {
    if (!isValidPassword(password)) {
        return false;
    }
    if (password !== confirm) {
        FlashMessages.sendError("Passwors do not match");
        return false;
    }
    return true;
};
