Meteor.publish('posts', function() {
  return Posts.find();
});

// can someone answer me why we use lowercase 'lounges' in the argument
// but use upercase 'Lounges' when we return them? 
Meteor.publish('lounges', function() {
  return Lounges.find();
});

Meteor.publish('requests', function() {
  return Requests.find();
});

Meteor.publish('chapters', function() {
  return Chapters.find();
});
/*
Meteor.publish('emails', function() {
  return Emails.find();
});
*/

Meteor.publish("userData", function () {
    return Meteor.users.find({_id: this.userId},
        {fields: {role:1}});
});


Meteor.publish("allUsers", function(){
    return Meteor.users.find();
});