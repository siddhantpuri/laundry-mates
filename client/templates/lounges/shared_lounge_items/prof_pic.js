Template.host_photo.helpers({
	host_image_url: function() {
    
    var hostId = Lounges.findOne(this._id).lounge_host;
    return Files.findOne( {userId: hostId}, { sort: { "added": -1 } } ).url;
  }
});