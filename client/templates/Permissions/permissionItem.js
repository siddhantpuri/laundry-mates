Template.permissionItem.events({

	"click .approve-btn": function(event) {
		var request_userId = Requests.findOne(this._id).request_userId;
		var chapter = Requests.findOne(this._id).request_chapter;
		var new_role = Requests.findOne(this._id).type;
		
		var updated_profile = Meteor.users.findOne(request_userId).profile.role;
		updated_profile[chapter] = new_role;
		Requests.update(this._id, {$set: {request_approved: "true"}});
		Meteor.users.update(request_userId, {$set: {"profile.role": updated_profile}});
		console.log(Meteor.users.findOne(request_userId).profile.role)
		
		
		var updated_request_status = Meteor.users.findOne(request_userId).profile.request_status;
		updated_request_status[chapter] = "none_sent";
		Meteor.users.update(request_userId, { $set: { 'profile.request_status': updated_request_status}} );
	},

	"click .unapprove-btn": function(event) {
		var request_userId = Requests.findOne(this._id).request_userId;
		var chapter = Requests.findOne(this._id).request_chapter;
		var new_role = Requests.findOne(this._id).type;

		var updated_profile = Meteor.users.findOne(request_userId).profile.role;
		if (new_role == "superadmin") {
			updated_profile[chapter] = "admin";
		} else {
			if (new_role == "admin") {
				updated_profile[chapter] = "host";
			} else {
				updated_profile[chapter] = "lounger";
			}
		}

		Requests.update(this._id, {$set: {request_approved: "false"}});
		Meteor.users.update(request_userId, {$set: {"profile.role": updated_profile}});
		console.log(Meteor.users.findOne(request_userId).profile.role)
		
		
		var updated_request_status = Meteor.users.findOne(request_userId).profile.request_status;
		updated_request_status[chapter] = "unapproved";
		Meteor.users.update(request_userId, { $set: { 'profile.request_status': updated_request_status}} );
	},

	"click .delete-btn": function(event) {
	    var request_userId = Requests.findOne(this._id).request_userId;
	    var chapter = Requests.findOne(this._id).request_chapter;
	    var updated_request_status = Meteor.users.findOne(request_userId).profile.request_status;
		updated_request_status[chapter] = "denied";
		Meteor.users.update(request_userId, { $set: { 'profile.request_status': updated_request_status}} );
	
		Requests.remove({_id: this._id});
		console.log('Request deleted')
	}

});

