Meteor.methods({
    sendEmail: function (userId, email) {
        if (this.userId == userId) {
            Email.send(email);
        }
    }
});