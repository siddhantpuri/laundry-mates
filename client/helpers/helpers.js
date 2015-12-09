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
    return Meteor.user().profile.primary_chapter.split('_').join(' ');
});

Template.registerHelper('bio', function() {
    return Meteor.user().profile.bio;
});

Template.registerHelper('role', function() {
    return Meteor.user().profile.role;
});

Template.registerHelper('request_status', function() {
    var chapter = Meteor.user().profile.primary_chapter.split('_').join(' ');
    return Meteor.user().profile.request_status[chapter];
});

Template.registerHelper('IsSuperAdmin', function() {
    return Meteor.user().profile.role.IsSuperAdmin;
});

Template.registerHelper('allChapters', function() {
    return Chapters.find();
});
