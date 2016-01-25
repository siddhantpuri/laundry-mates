Meteor.methods({
  sendEmail: function (to, subject, data, temp_name, file_name) {
    check([to, subject, data, temp_name, file_name], [Match.Any]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    SSR.compileTemplate( temp_name, Assets.getText( file_name ));
    //actual email sending method
    Email.send({
      to: to,
      from: 'noreplythoughtlounge@gmail.com',
      subject: subject,
      html: SSR.render( temp_name, data )
    });
  },

  updateLounge: function (lounge_id, field) {
    check([lounge_id, field], [Match.Any]);
      if (field == "host") {
        Lounges.update({_id: lounge_id}, { $set: {lounge_host_sent: "sent"}});
      } else if (field == 7){
        Lounges.update({_id: lounge_id}, { $set: {lounge_reminders_sent: "sent"}});
      } else if (field == 4){
        Lounges.update({_id: lounge_id}, { $set: {lounge_reminders_sent4: "sent"}});
      } else if (field == 2){
        Lounges.update({_id: lounge_id}, { $set: {lounge_reminders_sent2: "sent"}});
      } else {
        Lounges.update({_id: lounge_id}, { $set: {lounge_reminders_sent1: "sent"}});
      }
  }
});





