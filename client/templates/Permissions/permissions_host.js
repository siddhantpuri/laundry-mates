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


		var text = "This email has been sent to notify you that "+ prof.first_name + " "+ prof.last_name + 
					"has requested to become an admin for "+ chapter+".";                              
		var to = Meteor.users.findOne({'profile.role.IsSuperAdmin': "true"}).emails[0].address;
		var subject = "Thought Lounge Admin Request";

		Meteor.call('sendEmail', to, subject, text);
  		console.log('sent');






		location.reload();
	}
});

Template.permissions_host.helpers({  
  statusIs: function(status) {
  	var chapter = Meteor.user().profile.primary_chapter
    return Meteor.users.findOne(userId).profile.request_status[chapter] === status;
  }
});