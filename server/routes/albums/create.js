'use strict';

module.exports = {
  handler: function(request, reply) {
    console.log(request.payload);
    reply();
  }
};
