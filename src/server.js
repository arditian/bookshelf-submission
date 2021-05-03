/* eslint-disable linebreak-style */
/* eslint-disable no-console */
// eslint-disable-next-line linebreak-style
/* eslint-disable import/no-unresolved */

const Hapi = require('@hapi/hapi');
const routes = require('./routes.js');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
