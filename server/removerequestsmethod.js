Meteor.startup(function() {

    return Meteor.methods({

      removeAllRequests: function() {

        return Requests.remove({});

      },
      
      removeAllLounges: function() {

        return Lounges.remove({});

      }

    });

  });
  
