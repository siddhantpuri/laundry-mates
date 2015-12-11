Template.lounge_info_form.events({
	"submit .update-lounge": function(event){

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

		Lounges.update({_id: this._id}, { $set: {

		'lounge_chapter': $('#select-a-chapter').val(),
		'lounge_type': $('#type-of-lounge').val(),
		'lounge_title': $('#title-of-lounge').val(),
		'lounge_url': $('#url').val(),
		'lounge_total_num_participants': parseInt($('#number-of-loungers').val()),
		'lounge_date': full_date,
		'lounge_day': weekday[full_date.getDay()],
		'lounge_time': convertTimeAMPM(time),
		'lounge_date_numbers': date_numbers,
		'lounge_location': $('#location').val(),
		'lounge_address': $('#address').val(),
		'lounge_city': $('#city').val(),
		'lounge_state': $('#state').val(),
		'lounge_zipcode': $('#zipcode').val(),
		'lounge_participants': participantArray(),
		'lounge_num_participants': participantArray().length
		}} );
		console.log(participantArray())
		console.log(participantArray().length)
		console.log(parseInt($('#number-of-loungers').val()))
		console.log($('#location').val())
		console.log(convertTimeAMPM(time))
		console.log(date_numbers)
		

		return false;
	}
});



Template.lounge_info_form.helpers({
	participant1n: function() {
  	var participantId = Lounges.findOne(this._id).lounge_host
  	return Meteor.users.findOne({_id:participantId}).profile.first_name;
  }

});






