'use strict';

var Album = require('../../models/album');

module.exports = {
  handler: function(request, reply) {
    Album.find({}).sort({date:1}).exec(function(err, albums) {
      reply.view('templates/albums/index', {path: '/albums', albums:albums});
    });
  }
};
