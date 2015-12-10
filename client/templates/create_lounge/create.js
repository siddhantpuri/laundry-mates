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

		Lounges.insert({

		lounge_host: Meteor.userId(),
		lounge_chapter: $('#select-a-chapter').val(),
		lounge_type: $('#type-of-lounge').val(),
		lounge_title: $('#title-of-lounge').val(),
		lounge_url: $('#url').val(),
		lounge_total_num_participants: $('#number-of-loungers').val(),
		lounge_date: $('#date').val(),
		lounge_day: $('#date').val(),
		lounge_time: $('#time').val(),
		lounge_date_numbers: $('#date').val(),
		lounge_location: $('#location').val(),
		lounge_address: $('#address').val(),
		lounge_city: $('#city').val(),
		lounge_state: $('#state').val(),
		lounge_zipcode: $('#zipcode').val(),
		lounge_participants: participantArray(),
		lounge_num_participants: participantArray().length
		});

		
		Router.go('/my-upcoming-lounges');

		return false;
	}
});