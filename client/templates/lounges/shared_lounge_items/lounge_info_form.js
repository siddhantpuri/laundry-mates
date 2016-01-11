Template.lounge_info_form.events({
	"submit .update-lounge": function(event){
		var id = this._id;

		function participantArray(lounge) {

			var participant_inputs = {e1:$('#participant1e' + id).val(),
									e2:$('#participant2e' + id).val(),
									e3:$('#participant3e' + id).val(),
									e4:$('#participant4e' + id).val(),
									e5:$('#participant5e' + id).val() };
		
			var added_participants = lounge.lounge_participants;
			console.log(lounge)
			console.log(added_participants)
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

		var time = $('#time' + id).val();
		var date = $('#date' + id).val();
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

		'lounge_chapter': $('#select-a-chapter' + id).val(),
		'lounge_type': $('#type-of-lounge' + id).val(),
		'lounge_title': $('#title-of-lounge' + id).val(),
		'lounge_url': $('#url' + id).val(),
		'lounge_total_num_participants': parseInt($('#number-of-loungers' + id).val()),
		'lounge_date': full_date,
		'lounge_day': weekday[full_date.getDay()],
		'lounge_time': convertTimeAMPM(time),
		'lounge_date_numbers': date_numbers,
		'lounge_location': $('#location' + id).val(),
		'lounge_address': $('#address' + id).val(),
		'lounge_city': $('#city' + id).val(),
		'lounge_state': $('#state' + id).val(),
		'lounge_zipcode': $('#zipcode' + id).val(),
		'lounge_participants': participantArray(this),
		'lounge_num_participants': participantArray(this).length,
		'lounge_log_link': "http://www.thoughtlounge.org/the-lounge-log",
		'lounge_host_sent': "none",
		'lounge_date_raw': date,
		'lounge_time_raw': time
		}} );
		console.log(participantArray(this))
		console.log(participantArray(this).length)
		console.log(parseInt($('#number-of-loungers' + id).val()))
		console.log($('#location' + id).val())
		console.log(convertTimeAMPM(time))
		console.log(date_numbers)

		location.reload();
		return false;
	},

	"click .delete-btn-1": function(event){
		var new_participant_array = this.lounge_participants;
		new_participant_array = _.without(new_participant_array, this.lounge_participants[1]);
		Lounges.update({_id: this._id}, { $set: {
		'lounge_participants': new_participant_array,
		'lounge_num_participants': new_participant_array.length
		}} );
	},

	"click .delete-btn-2": function(event){
		var new_participant_array = this.lounge_participants;
		new_participant_array = _.without(new_participant_array, this.lounge_participants[2]);
		Lounges.update({_id: this._id}, { $set: {
		'lounge_participants': new_participant_array,
		'lounge_num_participants': new_participant_array.length
		}} );
	},

	"click .delete-btn-3": function(event){
		var new_participant_array = this.lounge_participants;
		new_participant_array = _.without(new_participant_array, this.lounge_participants[3]);
		Lounges.update({_id: this._id}, { $set: {
		'lounge_participants': new_participant_array,
		'lounge_num_participants': new_participant_array.length
		}} );
	},

	"click .delete-btn-4": function(event){
		var new_participant_array = this.lounge_participants;
		new_participant_array = _.without(new_participant_array, this.lounge_participants[4]);
		Lounges.update({_id: this._id}, { $set: {
		'lounge_participants': new_participant_array,
		'lounge_num_participants': new_participant_array.length
		}} );
	},

	"click .delete-btn-5": function(event){
		var new_participant_array = this.lounge_participants;
		new_participant_array = _.without(new_participant_array, this.lounge_participants[5]);
		Lounges.update({_id: this._id}, { $set: {
		'lounge_participants': new_participant_array,
		'lounge_num_participants': new_participant_array.length
		}} );
	},

	"click .cancel-lounge-button": function(event){
		var participants = this.lounge_participants;
		var lounge = this;
		var x = window.confirm("Are you sure you want to delete this lounge?");
		if (x) {
            for (i = 1; i < participants.length; i++) {
                var user = Meteor.users.findOne({_id: participants[i]});
                if (user) {
                    email = user.emails[0].address;
                } else {
                    email = participants[i];
                }
                var h_data = {
                day: lounge.lounge_day,
                date: lounge.lounge_date_numbers,
                time: lounge.lounge_time,
                location: lounge.lounge_location,
                address: lounge.lounge_address
                }            
                var h_to = email;
                var h_subject = "A Thought Lounge you signed up for has been canceled :(";
                var temp_name = 'loungeCanceledEmail';
                var file_name = 'host_cancel_lounge.html';
                Meteor.call('sendEmail', h_to, h_subject, h_data,  temp_name, file_name);
                console.log('sent');
            }
			Lounges.remove({_id: this._id});
		}
	}
});



Template.lounge_info_form.helpers({
	participant_info: function(num) {

		var participantId = this.lounge_participants[num];

		if (Meteor.users.findOne({_id:participantId})) {
		  	var first_name = Meteor.users.findOne({_id:participantId}).profile.first_name;
		  	var last_name = Meteor.users.findOne({_id:participantId}).profile.last_name;
		  	var email = Meteor.users.findOne({_id:participantId}).emails[0].address;
		  	var phone = Meteor.users.findOne({_id:participantId}).profile.phone;
		  	return "" + first_name + " " + last_name + "________" + email + "  " + phone;
		} else {
			return participantId
		}
  	},

  	isParticipant: function(num) {
  		return this.lounge_participants[num];
  	}

});






