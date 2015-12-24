/*var intervalId = Meteor.setInterval( function () {
        var currentdate = new Date()
        var past_lounges = Lounges.find({lounge_participants: Meteor.userId(), 
    					 lounge_date: {$lt: currentdate}, lounge_host_sent: "none"}, {sort: { lounge_date: -1 }});
    	past_lounges.forEach(function(lounge) {
            var host_id = lounge.lounge_host
            var h_text = "You just Hosted a TL Session on "+ lounge.lounge_day + " " + lounge.lounge_date_numbers
                     +" at "  + lounge.lounge_time + " at " + lounge.lounge_location + ', right? Right. (If not, 
                    make sure to go to your “Past Lounges” on thoughtlounge.org and cancel it.) \n \n 
                    Now all you have to do is: 
                    \n \u2022 Follow up with a personal email. Here\'s what to include. Here\'s a template email.
                    \n \u2022 Submit you Lounge Log. Here\'s how.
                    \n Connect potential Hosts from your Lounge with Chapter Leaders. Here’s how.

                    \n Boo ya. Hope your Lounge went awesome.
                    \n Lounge Bot (actually, this is Axel Cramer on 12/22/2015 at 8:28pm on a Tuesday night… teehee)'                             
            var h_to = Meteor.users.findOne({_id: host_id}).emails[0].address;
            var h_subject = "You just hosted your TL Session, right? Reminder to send follow-up email to your Loungers.";

            Meteor.call('sendEmail', h_to, h_subject, h_text);
            console.log('sent');
        });
        console.log('ran')
    }, 1000 );
    

Meteor.setTimeout(function (){
        Meteor.clearInterval(intervalId);
    }, 20000);
    
    */