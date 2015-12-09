Template.permissions_superadmin.helpers({
  pending_admin_requests: function() {
    return Requests.find({"type": 'admin', "request_approved": "false"});
  },
  approved_admin_requests: function() {
    return Requests.find({"type": 'admin', "request_approved": "true"});
  },
  are_pending_admin_requests: function() {
    return Requests.find({"type": 'admin', "request_approved": "false"}).fetch();
  },
  are_approved_admin_requests: function() {
    return Requests.find({"type": 'admin', "request_approved": "true"}).fetch();
  },
  pending_superadmin_requests: function() {
    return Requests.find({"type": 'superadmin', "request_approved": "false"});
  },
  approved_superadmin_requests: function() {
    return Requests.find({"type": 'superadmin', "request_approved": "true"});
  },
  are_pending_superadmin_requests: function() {
    return Requests.find({"type": 'superadmin', "request_approved": "false"}).fetch();
  },
  are_approved_superadmin_requests: function() {
    return Requests.find({"type": 'superadmin', "request_approved": "true"}).fetch();
  }
});