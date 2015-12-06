Template.permissions.helpers({  
  roleIs: function(role) {
    return Meteor.user().profile.role.UC_Berkeley === role;
  }
});