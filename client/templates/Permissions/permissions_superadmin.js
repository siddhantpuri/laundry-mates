Template.permissions_superadmin.helpers({
  pending_admin_requests: function() {
    return Requests.find({"type": 'admin', "request_approved": "false", "request_chapter": Meteor.user().profile.primary_chapter});
  },
  approved_admin_requests: function() {
    return Requests.find({"type": 'admin', "request_approved": "true", "request_chapter": Meteor.user().profile.primary_chapter});
  },
  are_pending_admin_requests: function() {
    return Requests.find({"type": 'admin', "request_approved": "false", "request_chapter": Meteor.user().profile.primary_chapter}).fetch();
  },
  are_approved_admin_requests: function() {
    return Requests.find({"type": 'admin', "request_approved": "true", "request_chapter": Meteor.user().profile.primary_chapter}).fetch();
  },
  pending_superadmin_requests: function() {
    return Requests.find({"type": 'superadmin', "request_approved": "false", "request_chapter": Meteor.user().profile.primary_chapter});
  },
  approved_superadmin_requests: function() {
    return Requests.find({"type": 'superadmin', "request_approved": "true", "request_chapter": Meteor.user().profile.primary_chapter});
  },
  are_pending_superadmin_requests: function() {
    return Requests.find({"type": 'superadmin', "request_approved": "false", "request_chapter": Meteor.user().profile.primary_chapter}).fetch();
  },
  are_approved_superadmin_requests: function() {
    return Requests.find({"type": 'superadmin', "request_approved": "true", "request_chapter": Meteor.user().profile.primary_chapter}).fetch();
  }
});