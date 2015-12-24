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
  }
});





