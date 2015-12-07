Template.permissionItem.events({

	"click .approve-btn": function(event) {
	    var request_userId = Requests.findOne(this._id).request_userId;
		Requests.update(this._id, {$set: {request_approved: "true"}});
		Meteor.users.update(request_userId, {$set: {"profile.role.UC_Berkeley": "host"}});
		console.log("approve-button-clicked")
	},

	"click .unapprove-btn": function(event) {
		var request_userId = Requests.findOne(this._id).request_userId;
		Requests.update(this._id, {$set: {request_approved: "false"}});
		Meteor.users.update(request_userId, {$set: {"profile.role.UC_Berkeley": "lounger"}});
		console.log('unapprove-button-clicked')
	},

	"click .delete-btn": function(event) {
		Requests.remove({_id: this._id});
		console.log('Request deleted')
	}

});

