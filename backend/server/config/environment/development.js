'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    //uri: 'mongodb://localhost/gestionweb2endpoint-dev'
    uri: 'mongodb://gestion:g3st10n@ds055495.mlab.com:55495/gestionweb2'
  },

  // Seed database on startup
  seedDB: true

};
