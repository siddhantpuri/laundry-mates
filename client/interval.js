var intervalId = Meteor.setInterval( function () {
        var currentdate = new Date();
        var past_lounges = Lounges.find({lounge_date: {$lt: currentdate}, lounge_host_sent: "none"}, {sort: { lounge_date: -1 }});
    	past_lounges.forEach(function(lounge) {
            var host_id = lounge.lounge_host
            var h_data = {
            first_name : Meteor.users.findOne({_id: host_id}).profile.first_name,
            day: lounge.lounge_day,
            date: lounge.lounge_date_numbers,
            time: lounge.lounge_time,
            location: lounge.lounge_location
            }            
            var h_to = Meteor.users.findOne({_id: host_id}).emails[0].address;
            var h_subject = "You just hosted your TL Session, right? Reminder to send follow-up email to your Loungers.";
            var temp_name = 'loungeFollowupEmail';
            var file_name = 'lounge_follow_up.html';

            Meteor.call('sendEmail', h_to, h_subject, h_data,  temp_name, file_name);
            console.log('sent');
            Lounges.update({_id: lounge._id}, { $set: {lounge_host_sent: "sent"}});
        });

        var notif_dates = {first: 7, second: 4, third: 2, fourth: 1}

        var x;
        for (x in notif_dates) {
            var value = notif_dates[x];
            var upper_bound = new Date();
            upper_bound.setDate(upper_bound.getDate()+value);
            var lower_bound = new Date();
            lower_bound.setDate(lower_bound.getDate()+value-1);
            if (value == 7) {
                var soon_lounges = Lounges.find({lounge_date: {$gt: lower_bound, $lt: upper_bound}, lounge_reminders_sent: {$exists : false }}, {sort: { lounge_date: -1 }});
            } else {
                if (value == 4) {
                    var soon_lounges = Lounges.find({lounge_date: {$gt: lower_bound, $lt: upper_bound}, lounge_reminders_sent4: {$exists : false }}, {sort: { lounge_date: -1 }});
                } else {
                    if (value == 2){
                        var soon_lounges = Lounges.find({lounge_date: {$gt: lower_bound, $lt: upper_bound}, lounge_reminders_sent2: {$exists : false }}, {sort: { lounge_date: -1 }});
                    } else {
                        var soon_lounges = Lounges.find({lounge_date: {$gt: lower_bound, $lt: upper_bound}, lounge_reminders_sent1: {$exists : false }}, {sort: { lounge_date: -1 }});
                    }
                }
            }
            soon_lounges.forEach(function(lounge) {
                var participants = lounge.lounge_participants;
            
                for (i = 1; i < participants.length; i++) {
                    var user = Meteor.users.findOne({_id: participants[i]});
                    if (user) {
                        email = user.emails[0].address;
                    } else {
                        email = participants[i];
                    }
                    var h_data = {
                    num_days: ""+value,
                    day: lounge.lounge_day,
                    date: lounge.lounge_date_numbers,
                    time: lounge.lounge_time,
                    location: lounge.lounge_location,
                    address: lounge.lounge_address
                    }            
                    var h_to = email;
                    var h_subject = "[Reminder] You have an upcoming TL Session in less than "+ value +" days.";
                    var temp_name = 'loungeReminderEmail';
                    var file_name = '7_day_reminder.html';
                    Meteor.call('sendEmail', h_to, h_subject, h_data,  temp_name, file_name);
                    console.log('sent');
                }
               
                if (value == 7) {
                    Lounges.update({_id: lounge._id}, { $set: {lounge_reminders_sent: "sent"}});
                } else {
                    if (value == 4) {
                        Lounges.update({_id: lounge._id}, { $set: {lounge_reminders_sent4: "sent"}});
                    } else {
                        if (value == 2){
                            Lounges.update({_id: lounge._id}, { $set: {lounge_reminders_sent2: "sent"}});
                        } else {
                            Lounges.update({_id: lounge._id}, { $set: {lounge_reminders_sent1: "sent"}});
                        }
                    }
                }
            });

        }

        console.log('ran')
}, 1000 );
    

Meteor.setTimeout(function (){
        Meteor.clearInterval(intervalId);
    }, 2000);  