Meteor.methods({
  'removePhotoData': function (selectedPhoto){
    check( selectedPhoto, String );
    
    var AWS = Meteor.npmRequire('aws-sdk');
    
    // Current User
    var currentUserId = Meteor.userId();

    // Get the URL of the photo they are trying to remove.
    var currentPhoto = Files.findOne( { '_id': selectedPhoto, 'userId': currentUserId }, { fields: { 'url': 1 } } );

    // Our photo bucket, e.g. 'mybucket'
    var bucket = "thought-lounge-photos-bucket";

    // URL string: e.g. https://mybucket.s3.amazonaws.com/images/myimage.jpg is saved in DB,
    // I only want: 'images/myimage.jpg'
    var currentPhotoURL = currentPhoto.url.replace('https://' + bucket + '.s3-us-west-1.amazonaws.com/', '');


    AWS.config.update({
      accessKeyId: Meteor.settings.AWSAccessKeyId,
      secretAccessKey: Meteor.settings.AWSSecretAccessKey,
    });

    var s3 = new AWS.S3();
    var params = {
      Bucket: bucket, // "thought-lounge-photos-bucket"
      Key: currentPhotoURL // 'images/myimage.jpg'
    };

    var deleteObject = Meteor.wrapAsync(
      s3.deleteObject(params, function (error, data) {
        if (error) {
          console.log(error);
        }
        else {
          console.log(data);
        }
      })
    );
    // Remove the entry in the database. (Want to only trigger this if there is no error from Amazon).
    Files.remove({_id: selectedPhoto, userId: currentUserId});
  }
});