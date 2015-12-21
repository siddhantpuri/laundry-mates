Template.upcomingLoungeH.events({
	"click .this-lounge-info": function(event) {
    var id = this._id;
		$('#' + id).toggleClass('display-none');
    //$('#' + id).hide();
		console.log('its working');
		$('.lounge-insert-log-url, .contact-host-div').addClass('display-none');
	}
});

empty_bubble = "http://i63.tinypic.com/f1kuv7.jpg";
full_bubble = "http://i65.tinypic.com/2rqhkp3.jpg";

Template.upcomingLoungeH.helpers({
  host_name: function() {
  	var hostId = Lounges.findOne(this._id).lounge_host;
  	return Meteor.users.findOne({_id:hostId}).profile.first_name;
  },

  host_image_url: function() {
    
    var hostId = Lounges.findOne(this._id).lounge_host;
    return Files.findOne( {userId: hostId}, { sort: { "added": -1 } } ).url;
  }
});

/*
Template.upcomingLoungeH.onRendered(function(){
	var total = Lounges.findOne(this._id).lounge_total_num_participants;
  	var taken = Lounges.findOne(this._id).lounge_num_participants;
  	var left = total-taken
  	if (taken > 0){
  		$("#bubble1").attr("src",full_bubble);
  	}
  	if (taken > 1){
  		$("#bubble2").attr("src",full_bubble);
  	}
  	if (taken > 2){
  		$("#bubble3").attr("src",full_bubble);
  	}
  	if (taken > 3){
  		$("#bubble4").attr("src",full_bubble);
  	}
  	if (taken > 4){
  		$("#bubble5").attr("src",full_bubble);
  	}
  	if (taken > 5){
  		$("#bubble6").attr("src",full_bubble);
  	}
});
*/



