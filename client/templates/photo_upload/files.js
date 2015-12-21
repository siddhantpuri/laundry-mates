Template.files.helpers({
  files() {
    var files = Files.findOne( {}, { sort: { "added": -1 } } );
    if ( files ) {
      return files;
    }
  },

  isImage( url ) {
    const formats = [ 'jpg', 'jpeg', 'png', 'gif' ];
    return _.find( formats, ( format ) => url.indexOf( format ) > -1 );
  },

  url() {
  	return Files.findOne( {userId: Meteor.userId()}, { sort: { "added": -1 } } ).url;
  }
});