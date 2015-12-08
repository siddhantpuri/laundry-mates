Template.permissions_admin.helpers({
  pending_host_requests: function() {
    return Requests.find({"type": 'host', "request_approved": "false", "request_chapter": Meteor.user().profile.primary_chapter});
  },
  approved_host_requests: function() {
    return Requests.find({"type": 'host', "request_approved": "true", "request_chapter": Meteor.user().profile.primary_chapter});
  },
  host_requests: function() {
  	console.log('helper called')
    return Requests.find();
  }
});