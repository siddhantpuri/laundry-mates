Meteor.publish('posts', function() {
  return Posts.find();
});

// can someone answer me why we use lowercase 'lounges' in the argument
// but use upercase 'Lounges' when we return them? 
Meteor.publish('lounges', function() {
  return Lounges.find();
});
