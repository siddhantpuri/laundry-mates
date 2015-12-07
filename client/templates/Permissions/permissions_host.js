Template.permissions_host.events({
	"click .request-btn": function(event) {
		var prof = Meteor.user().profile
		Requests.insert({
		type: 'admin',
    	chapter: prof.primary_chapter,
    	first_name: prof.primary_chapter,
    	last_name: prof.primary_chapter,
    	email: Meteor.user().email,
    	picture: 'somefile',
    	phone: prof.phone,
    	bio: prof.bio,
    	approved: false
		});

		$('.sent').toggleClass('display-none');
		$('.request-btn').toggleClass('display-none');
	}
});