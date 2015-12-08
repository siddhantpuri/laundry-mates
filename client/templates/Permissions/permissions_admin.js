Template.permissions_admin.helpers({
  pending_host_requests: function() {
    return Requests.find({"type": 'host', "request_approved": "false", "request_chapter": Meteor.user().profile.primary_chapter});
  },
  approved_host_requests: function() {
    return Requests.find({"type": 'host', "request_approved": "true", "request_chapter": Meteor.user().profile.primary_chapter});
  },
  are_pending_host_requests: function() {
    return Requests.find({"type": 'host', "request_approved": "false", "request_chapter": Meteor.user().profile.primary_chapter}).fetch();
  },
  are_approved_host_requests: function() {
    return Requests.find({"type": 'host', "request_approved": "true", "request_chapter": Meteor.user().profile.primary_chapter}).fetch();
  },
  statusIs: function(status) {
  	var chapter = Meteor.user().profile.primary_chapter
    return Meteor.users.findOne(userId).profile.request_status[chapter] === status;
  }
});

Template.permissions_admin.events({
	"click .request-btn": function(event) {
		var prof = Meteor.user().profile;

		var chapter = prof.primary_chapter;
		var updated_request_status = Meteor.users.findOne(userId).profile.request_status;
		updated_request_status[chapter] = "processing";
		Meteor.users.update( { _id: userId }, { $set: { 'profile.request_status': updated_request_status}});


		Requests.insert({
		type: 'superadmin',
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

		location.reload();
	}
});