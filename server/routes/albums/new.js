'use strict';

module.exports = {
  handler: function(request, reply) {
    reply.view('templates/albums/new');
  }
};
