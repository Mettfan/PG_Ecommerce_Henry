const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const preloader = require('./src/preloader')

conn.sync({ force: true }).then(() => {

  server.listen(3001, () => {

    preloader();
    console.log('Server listening at port 3001');
  });
});