Template.uploader.events({
  'change input[type="file"]' ( event, template ) {
    Modules.client.uploadToAmazonS3( { event: event, template: template } );
    
    Meteor.setTimeout(function(){
        Meteor.subscribe('Files');
        var picture_count = Files.find({'userId': Meteor.userId()}).count();
        if (picture_count >=2) {
            var old_pic = Files.findOne({'userId': Meteor.userId()});
            Meteor.call('removePhotoData', old_pic._id);
  	        console.log('removal worked');
        }
    }, 10000);
    
  }
});