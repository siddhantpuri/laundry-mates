Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('upcomings', function() {
  return Upcomings.find();
});