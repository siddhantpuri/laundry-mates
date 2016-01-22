Template.create.events({
	"click .cancel-create-button": function(event) {
		$('.create-template').addClass('display-none');
		console.log('cancel is working')
	},

	"submit .create-form": function(event){

		function participantArray() {

			var participant_inputs = {e1:$('#participant1e').val(),
									e2:$('#participant2e').val(),
									e3:$('#participant3e').val(),
									e4:$('#participant4e').val(),
									e5:$('#participant5e').val() };
		
			var added_participants = [Meteor.userId()];
			var x;

			for (x in participant_inputs) {
				if (participant_inputs[x]) {
					if (Meteor.users.findOne({emails: { $elemMatch: { address: participant_inputs[x] } }})) {
						added_participants[added_participants.length] =  Meteor.users.findOne({emails: { $elemMatch: { address: participant_inputs[x] } }})._id;
					} else {
						added_participants[added_participants.length] = participant_inputs[x];
					}

				}
			}
			return added_participants;
    	};
/*
    	function combineDateAndTime(date, time) {
		    timeString = time.getHours() + ':' + time.getMinutes() + ':00';

		    var year = date.getFullYear();
		    var month = date.getMonth() + 1; // Jan is 0, dec is 11
		    var day = date.getDate();
		    var dateString = '' + year + '-' + month + '-' + day;
		    var combined = new Date(dateString + ' ' + timeString);

		    return combined;
		};

		var myDate = $('#date').val()
		var myTime = $('#time').val()

		console.log(combineDateAndTime(myDate, myTime))
*/
		var time = $('#time').val();
		var date = $('#date').val();
	    var full_date = new Date(date + ' ' + time);


		function convertTimeAMPM(time){
			//var time = "12:23";
			var time = time.split(':');
			var hours = time[0];
			var minutes = time[1];
			console.log(minutes)
			var timeValue = "" + ((hours < 10) ? hours.split("")[1] : ((hours >12) ? hours -12 :hours));
			    timeValue += ":" + minutes;
			    timeValue += (hours >= 12) ? " P.M." : " A.M.";
			return timeValue;
		}
		
		var weekday = new Array(7);
		weekday[0] =  "Sunday";
		weekday[1] = "Monday";
		weekday[2] = "Tuesday";
		weekday[3] = "Wednesday";
		weekday[4] = "Thursday";
		weekday[5] = "Friday";
		weekday[6] = "Saturday";

		var date_numbers = (full_date.getMonth() + 1) + "/" + full_date.getDate() + "/" + full_date.getFullYear()

		Lounges.insert({

		lounge_host: Meteor.userId(),
		lounge_chapter: $('#select-a-chapter').val().split(' ').join('_'),
		lounge_type: $('#type-of-lounge').val(),
		lounge_title: $('#title-of-lounge').val(),
		lounge_url: $('#url').val(),
		lounge_total_num_participants: parseInt($('#number-of-loungers').val()),
		lounge_date: full_date,
		lounge_day: weekday[full_date.getDay()],
		lounge_time: convertTimeAMPM(time),
		lounge_date_numbers: date_numbers,
		lounge_location: $('#location').val(),
		lounge_address: $('#address').val(),
		lounge_city: $('#city').val(),
		lounge_state: $('#state').val(),
		lounge_zipcode: $('#zipcode').val(),
		lounge_participants: participantArray(),
		lounge_num_participants: participantArray().length,
		lounge_log_link: "http://www.thoughtlounge.org/lounge-log",
		lounge_host_sent: "none",
		lounge_date_raw: date,
		lounge_time_raw: time
		});


		var data = {
	        day: weekday[full_date.getDay()],
	        date: date_numbers,
	        time: convertTimeAMPM(time),
	        location: $('#location').val(),
	        address: $('#address').val()
	    }
	    var to = Meteor.user().emails[0].address;
	    var subject = "Confirmation - You have created a Thought Lounge Session.";
	    var temp_name = 'createLoungeEmail';
	    var file_name = 'host_create_lounge.html';

	    Meteor.call('sendEmail', to, subject, data, temp_name, file_name);
	    console.log('sent')

		



		Router.go('/my-upcoming-lounges');

		return false;
	}
});



Template.create.helpers({
	isHostatChapter: function() {
      var chapter = this.name;
      var role = Meteor.user().profile.role[chapter];
      var sadmin_status = Meteor.user().profile.role.IsSuperAdmin;
      var indep = Meteor.user().profile.role.Independent_Hosts;
    return  (role == "host" || role == "admin" || sadmin_status || indep == "host" || indep == "admin") && chapter != "Independent_Hosts";
    
  }

});


