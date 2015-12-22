Meteor.methods({
  sendEmail: function (to, subject, text) {
    check([to, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    //actual email sending method
    Email.send({
      to: to,
      from: 'noreplythoughtlounge@gmail.com',
      subject: subject,
      text: text
    });
  }
});