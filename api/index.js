const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const preloader = require('./src/preloader');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {

    // preloader();
    console.log('Server listening at port 3001');

  });
});