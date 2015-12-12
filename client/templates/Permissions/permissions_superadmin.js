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

Template.permissions_superadmin.events({
  "submit .new-chapter-form": function(event){
    
    Chapters.insert({
    name: $('#chapter_name').val().split(' ').join('_'),
    spaced_name: $('#chapter_name').val()
  });

  console.log(Chapters.find())

  Router.go('/my-permissions');

  return false;
  }
});