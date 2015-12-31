Template.settingsItem.helpers({
  isMyCheckboxChecked2: function() {
  	var chapter_monthly = Meteor.user().profile.notifications.chapter_monthly_letters;
  	var chapter = Meteor.user().profile.primary_chapter;
    if (chapter_monthly.indexOf(chapter) > -1) {
    	return 'checked';
    } else {
    	return '';
    }
  },
  isMyCheckboxChecked1: function() {
  	var chapter_weekly = Meteor.user().profile.notifications.chapter_weekly_letters;
  	var chapter = Meteor.user().profile.primary_chapter;
    if (chapter_weekly.indexOf(chapter) > -1) {
    	return 'checked';
    } else {
    	return '';
    }
  }
});


Template.settingsItem.events({
	'click .chapter-weekly-lounges': function(event, template) {
		var chapter_weekly = Meteor.user().profile.notifications.chapter_weekly_letters;
  		var chapter = Meteor.user().profile.primary_chapter;
  		var index = chapter_weekly.indexOf(chapter);
		if (index > -1) {
			chapter_weekly.splice( index, 1 );
	    } else {
			chapter_weekly.push(chapter);	
	    }
      console.log(chapter_weekly)
	    Meteor.users.update(Meteor.userId(), {$set: {"profile.notifications.chapter_weekly_letters": chapter_weekly}});	  
	 },

	 'click .chapter-updates': function(event, template) {
		var chapter_monthly = Meteor.user().profile.notifications.chapter_monthly_letters;
  		var chapter = Meteor.user().profile.primary_chapter;
  		var index = chapter_monthly.indexOf(chapter);
		if (index > -1) {
			chapter_monthly.splice( index, 1 );
	    } else {
	    	chapter_monthly.push(chapter);	
	    }
      console.log(chapter_monthly)
	    Meteor.users.update(Meteor.userId(), {$set: {"profile.notifications.chapter_weekly_letters": chapter_monthly}});	  
	 },

   "change .select-a-chapter": function(event){
    Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.primary_chapter': $('#select-a-chapter').val().split(' ').join('_') }} );
    console.log(Meteor.user().profile.primary_chapter)

    return false;
  }
});