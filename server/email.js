/*

Email.send({
from: "thoughtloungetester@mailinator.com",
to: "thoughtloungeuser@mailinator.com",
subject: "Notification",
text: "Notification Msg"
replyto:"info@mailinator.com"
})

*/
writeAllSteps: function () {
  var spreadsheetName = 'Thought Lounge Monthly Newsletter Signups'; // must match exactly the name you gave your Google spreadsheet
  var serviceEmail = 'meteor@tl-email-notifications.iam.gserviceaccount.com';
  var obj = {};
  obj[1] = {}
  var colPropNames = {};
  var col = 1;
  _.each(Steps.simpleSchema().schema(), function (def, key) {
    obj[1][col] = key;
    colPropNames[key] = col;
    col++;
  });

  var row = 2;
  Steps.find().forEach(function (step) {
    obj[row] = {};
    _.each(step, function (val, prop) {
      var pCol = colPropNames[prop];
      if (!pCol)
        return;
      obj[row][pCol] = val.toString();
    });
    row++;
  });

  Meteor.call("spreadsheet/update", spreadsheetName, "1", obj, {email: serviceEmail});
}