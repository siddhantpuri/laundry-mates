/* Logout NAV EVENTS
---------------------------------*/
Template.tlnav.events({
	"click .logout-btn": function(event){
		Meteor.logout(function(err){
			if(err){
				FlashMessages.sendError(err.reason);
			} else {
				window.location.replace("http://www.thoughtlounge.org");
			}
		});
	}
});

$(document).mouseup(function (e)
{
    var container = $(".dt-folder-child-login");
    var loginbut = $("#nav-login-button");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0
        && !loginbut.is(e.target)) // ... nor a descendant of the container
    {
        container.addClass('display-none');
        loginbut.removeClass('grey');
    }
});



/* MOBILE NAV EVENTS
---------------------------------*/
Template.tlnav.events({
	"click #icon-menu-img": function(event){
		$('.mobile-tl-nav').toggleClass('display-none');
		$('.mobile-icon-menu').toggleClass('big-margin-right')
	},
	"click .close-mob-nav": function(event){
		$('.mobile-tl-nav').toggleClass('display-none');
		$('.mobile-icon-menu').toggleClass('big-margin-right')
	},
	"click .mob-login-button": function(event){
		$('.mob-folder-child-login').toggleClass('display-none');
		$('.folder-child-tl-now, .folder-child-about, .folder-child-be-involved, .folder-child-initiatives, .folder-child-chapters').addClass('display-none');
	},
	"click .mob-folder-wrapper-chapters": function(event){
		$('.folder-child-chapters').toggleClass('display-none');
		$('.folder-child-tl-now, .folder-child-login, .folder-child-be-involved, .folder-child-initiatives, .folder-child-about').addClass('display-none');
	},
	"click .mob-folder-wrapper-tl-now": function(event){
		$('.folder-child-tl-now').toggleClass('display-none');
		$('.folder-child-chapters, .folder-child-login, .folder-child-be-involved, .folder-child-initiatives, .folder-child-about').addClass('display-none');
	},
	"click .mob-folder-wrapper-be-involved": function(event){
		$('.folder-child-be-involved').toggleClass('display-none');
		$('.folder-child-tl-now, .folder-child-login, .folder-child-chapters, .folder-child-initiatives, .folder-child-about').addClass('display-none');
	},
	"click .mob-folder-wrapper-initiatives": function(event){
		$('.folder-child-initiatives').toggleClass('display-none');
		$('.folder-child-tl-now, .folder-child-login, .folder-child-be-involved, .folder-child-chapters, .folder-child-about').addClass('display-none');
	},
	"click .mob-folder-wrapper-about": function(event){
		$('.folder-child-about').toggleClass('display-none');
		$('.folder-child-tl-now, .folder-child-login, .folder-child-be-involved, .folder-child-initiatives, .folder-child-chapters').addClass('display-none');
	}
});

/* DESKTOP NAV EVENTS
--------------------------*/
Template.tlnav.events({
	"click #nav-login-button": function(event){
		$('.folder-child-login').toggleClass('display-none');
		$('#nav-login-button').toggleClass('grey');
	}, 
});

Template.tlnav.events({
	"mouseenter .folder-wrapper-chapters": function(event){
		$('.folder-child-chapters').removeClass('display-none')
	}, 
	"mouseleave .folder-wrapper-chapters": function(event){
		$('.folder-child-chapters').addClass('display-none')
	}
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