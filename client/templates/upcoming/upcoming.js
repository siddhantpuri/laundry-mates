Template.upcoming.events({
	"click .create-button": function(event) {
		$('.create-template').toggleClass('display-none');
		console.log('its working')
	},

	"click .test": function(event) {
		Chapters.find().forEach(function (chapter) {
  			console.log("Name of chapter: " + chapter.name);
		});
	}


});

