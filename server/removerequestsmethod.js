Meteor.startup(function() {

    return Meteor.methods({

      removeAllRequests: function() {

        return Requests.remove({});

      }

    });

  });