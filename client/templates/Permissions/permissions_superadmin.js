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
  },

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
  },

  "submit .delete-chapter-form": function(event){
    var chapter_id = Chapters.findOne({name: $('#delete-chapter-select').val()})._id;

    Chapters.remove({_id: chapter_id});

  console.log(Chapters.find())

  Router.go('/my-permissions');

  return false;
  }
});