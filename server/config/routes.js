'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'get', path: '/', config: require('../routes/general/home')},
  {method: 'get', path: '/albums', config: require('../routes/albums/index')},
  {method: 'get', path: '/albums/new', config: require('../routes/albums/new')},
  {method: 'post', path: '/albums', config: require('../routes/albums/create')},
  {method: 'get', path: '/albums/{albumId}', config: require('../routes/albums/show')},
  {method: 'post', path: '/albums/{albumId}/delete', config: require('../routes/albums/destroy')},
  {method: 'get', path: '/albums/{albumId}/edit', config: require('../routes/albums/edit')},
  {method: 'post', path: '/albums/{albumId}', config: require('../routes/albums/update')}

];
