Template.tlnav.events({
	"mouseenter .folder-wrapper-chapters": function(event){
		$('.folder-child-chapters').removeClass('display-none')
	}, 
	"mouseleave .folder-wrapper-chapters": function(event){
		$('.folder-child-chapters').addClass('display-none')
	},
});

Template.tlnav.events({
	"mouseenter .folder-wrapper-tl-now": function(event){
		$('.folder-child-tl-now').removeClass('display-none')
	}, 
	"mouseleave .folder-wrapper-tl-now": function(event){
		$('.folder-child-tl-now').addClass('display-none')
	},
});

Template.tlnav.events({
	"mouseenter .folder-wrapper-be-involved": function(event){
		$('.folder-child-be-involved').removeClass('display-none')
	}, 
	"mouseleave .folder-wrapper-be-involved": function(event){
		$('.folder-child-be-involved').addClass('display-none')
	},
});

Template.tlnav.events({
	"mouseenter .folder-wrapper-initiatives": function(event){
		$('.folder-child-initiatives').removeClass('display-none')
	}, 
	"mouseleave .folder-wrapper-initiatives": function(event){
		$('.folder-child-initiatives').addClass('display-none')
	},
});

Template.tlnav.events({
	"mouseenter .folder-wrapper-about": function(event){
		$('.folder-child-about').removeClass('display-none')
	}, 
	"mouseleave .folder-wrapper-about": function(event){
		$('.folder-child-about').addClass('display-none')
	},
});