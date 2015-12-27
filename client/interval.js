var intervalId = Meteor.setInterval( function () {
        var currentdate = new Date()
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
        console.log('ran')
    }, 1000 );
    

Meteor.setTimeout(function (){
        Meteor.clearInterval(intervalId);
    }, 5000);
    
    