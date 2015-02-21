'use strict';

var Album = require('../../models/album');


module.exports = {
  handler: function(request, reply) {
    Album.findOne({_id:request.params.albumId}, function(err, album) {
      console.log(album.photos[0])
      reply.view('templates/albums/show', {path: '/albums', album:album});
    });
  }
};
