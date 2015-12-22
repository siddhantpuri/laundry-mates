Template.doatlList.helpers({
  doatl_lounges: function() {
    var currentdate = new Date();
    if (Meteor.user()) {
      var chapter = Meteor.user().profile.primary_chapter.split(' ').join('_');
    } else {
      var chapter = Session.get('selectedChapter');
    }
    
    return Lounges.find({lounge_chapter: chapter, lounge_date: {$gt: currentdate}}, {sort: { lounge_date: 1 }});
    
  },

  are_doatl_lounges: function() {
    var currentdate = new Date();
    if (Meteor.user()) {
      var chapter = Meteor.user().profile.primary_chapter.split(' ').join('_');
    } else {
      var chapter = Session.get('selectedChapter');
    }
    return Lounges.find({lounge_chapter: chapter, lounge_date: {$gt: currentdate}}, {sort: { lounge_date: 1 }}).fetch();
    
  },

  isHost: function() {
  	return Meteor.userId() == Lounges.findOne(this._id).lounge_host;
  }
});