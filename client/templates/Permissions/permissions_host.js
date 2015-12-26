userId = Meteor.userId();

Template.permissions_host.events({
	"click .request-btn": function(event) {
		var prof = Meteor.user().profile;

		var chapter = prof.primary_chapter;
		var updated_request_status = Meteor.users.findOne(userId).profile.request_status;
		updated_request_status[chapter] = "processing";
		Meteor.users.update( { _id: userId }, { $set: { 'profile.request_status': updated_request_status}});


		Requests.insert({
		type: 'admin',
		request_userId: userId,
    	request_chapter: chapter,
    	request_first_name: prof.first_name,
    	request_last_name: prof.last_name,
    	request_email: Meteor.user().emails[0].address,
    	request_picture: 'somefile',
    	request_phone: prof.phone,
    	request_bio: prof.bio,
    	request_approved: "false"
		});



  		var superadmin = Meteor.users.findOne({'profile.role.IsSuperAdmin': "true"});

  		var data = {
  			superadmin_first_name: superadmin.profile.first_name
	        host_first_name : prof.first_name,
	        host_last_name: prof.last_name,
	        chapter: chapter
	      }
	      var to = superadmin.emails[0].address;
	      var subject = "" + prof.first_name + " " + prof.last_name + " requested to become an Admin at "+ chapter + ". Accept/Reject him/her!!";
	      var temp_name = 'adminRequestEmail';
	      var file_name = 'admin_request.html';

	      Meteor.call('sendEmail', to, subject, data, temp_name, file_name);
	      console.log('sent')



		location.reload();
	}
});

Template.permissions_host.helpers({  
  statusIs: function(status) {
  	var chapter = Meteor.user().profile.primary_chapter
    return Meteor.users.findOne(userId).profile.request_status[chapter] === status;
  }
});