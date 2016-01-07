Template.permissionItem.helpers({
	isApproved: function() {
		return Requests.findOne(this._id).request_approved == "true"
	}
});


Template.permissionItem.events({

	"click .approve-btn": function(event) {
		var request_userId = Requests.findOne(this._id).request_userId;
		var chapter = Requests.findOne(this._id).request_chapter;
		var new_role = Requests.findOne(this._id).type;

		if (new_role == "superadmin") {
			Meteor.users.update(request_userId, {$set: {"profile.role.IsSuperAdmin": "true"}});
		} else {
		
			var updated_profile = Meteor.users.findOne(request_userId).profile.role;

			updated_profile[chapter] = new_role;
			Meteor.users.update(request_userId, {$set: {"profile.role": updated_profile}});
			
		}
		Requests.update(this._id, {$set: {request_approved: "true"}});
		
		
		var updated_request_status = Meteor.users.findOne(request_userId).profile.request_status;
		updated_request_status[chapter] = "none_sent";
		Meteor.users.update(request_userId, { $set: { 'profile.request_status': updated_request_status}} );

			var spaced_chapter = chapter.split('_').join(' ');
			var req_type = this.type;
			if (req_type == 'host') {
				var position = 'a Host';
			} else {
				if (req_type == 'admin') {
					var position = 'an Admin';
				} else {
					var position = 'a SuperAdmin! Lucky you! You can now do manage everything for chapters around the nation, including';
				}
			}

			var data = {
				first_name: Meteor.users.findOne(request_userId).profile.first_name,
				position: position,
				chapter: spaced_chapter
			}
		    var to = Meteor.users.findOne(request_userId).emails[0].address;
		    var subject = "You’ve been accepted as "+ position +" at " + spaced_chapter +"!";
		    var temp_name = 'hostaccEmail';
		    var file_name = 'host_req_acc.html';

		    Meteor.call('sendEmail', to, subject, data, temp_name, file_name);
		    console.log('sent')
	},

	"click .unapprove-btn": function(event) {
		var request_userId = Requests.findOne(this._id).request_userId;
		var chapter = Requests.findOne(this._id).request_chapter;
		var new_role = Requests.findOne(this._id).type;


		if (new_role == "superadmin") {
			Meteor.users.update(request_userId, {$set: {"profile.role.IsSuperAdmin": ""}});
		} else {
			var updated_profile = Meteor.users.findOne(request_userId).profile.role;
			if (new_role == "admin") {
				updated_profile[chapter] = "host";
			} else {
				updated_profile[chapter] = "lounger";
			}
		
		Meteor.users.update(request_userId, {$set: {"profile.role": updated_profile}});
		
		}
		Requests.update(this._id, {$set: {request_approved: "false"}});
		
		var updated_request_status = Meteor.users.findOne(request_userId).profile.request_status;
		updated_request_status[chapter] = "unapproved";
		Meteor.users.update(request_userId, { $set: { 'profile.request_status': updated_request_status}} );
	},

	"click .delete-btn": function(event) {
		console.log(this)
	    var request_userId = Requests.findOne(this._id).request_userId;
	    var chapter = Requests.findOne(this._id).request_chapter;
	    var updated_request_status = Meteor.users.findOne(request_userId).profile.request_status;
		updated_request_status[chapter] = "denied";
		Meteor.users.update(request_userId, { $set: { 'profile.request_status': updated_request_status}} );
	
		Requests.remove({_id: this._id});
		console.log('Request deleted')
	}

});






