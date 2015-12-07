Template.permissions_admin.helpers({
  pending_host_requests: function() {
    return Requests.find({"type": 'host', "request_approved": "false"});
  },
  approved_host_requests: function() {
    return Requests.find({"type": 'host', "request_approved": "true"});
  },
  host_requests: function() {
  	console.log('helper called')
    return Requests.find();
  }
});