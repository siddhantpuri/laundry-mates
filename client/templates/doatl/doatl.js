
Template.doatl.events({
	"change .doatl-select": function(event){
		Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.primary_chapter': $('#primary-chapter').val() }} );
		Session.set('selectedChapter', $('#primary-chapter').val());
		console.log(Meteor.user().profile.primary_chapter)

	return false;
	},

	"change .doatl-select-logged-out": function(event){
		Session.set('selectedChapter', $('#primary-chapter').val());
		var chapter = Session.get('selectedChapter');
		console.log(chapter)

	return false;
	}
});

Template.doatl.helpers({
	loggedIn: function() {
		return Meteor.user();
	},

	selectedChapter: function () {
		if (Session.get('selectedChapter')) {
			console.log(Session.get('selectedChapter') + 'session')
			return Session.get('selectedChapter');
		} else {
			if (Meteor.user()) {
				var chapter = Meteor.user().profile.primary_chapter;
			} else {
				var chapter = "Select a Chapter";
			}
				Session.set('selectedChapter', chapter);
				console.log(chapter)
				return chapter;
			
		}
	},

	spacedChapter: function () {
		var chapter = Session.get('selectedChapter');

		if (chapter) {
			return chapter.split('_').join(' ');
		} else {
			var str = "Select a Chapter";
			return str;
		}
	},

	notSelectedChapter: function () {
		var option_chapter = this.name;
		if (Session.get('selectedChapter')) {
			return Session.get('selectedChapter') != option_chapter;
		} else {
			var chapter = Meteor.user().profile.primary_chapter;
			return chapter != option_chapter
		}
	}
});