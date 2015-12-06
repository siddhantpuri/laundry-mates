Template.registerHelper('profPic', function() {
    return Meteor.user().profile.prof_pic;
});

Template.registerHelper('firstName', function() {
    return Meteor.user().profile.first_name;
});

Template.registerHelper('lastName', function() {
    return Meteor.user().profile.last_name;
});

Template.registerHelper('email', function() {
    return Meteor.user().emails[0].address;
});

Template.registerHelper('phone', function() {
    return Meteor.user().profile.phone;
});

Template.registerHelper('primaryChapter', function() {
    return Meteor.user().profile.primary_chapter;
});

Template.registerHelper('bio', function() {
    return Meteor.user().profile.bio;
});

Template.registerHelper('role', function() {
    return Meteor.user().profile.role;
});