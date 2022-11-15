import 'dotenv/config';
import app from './src/app';
import minimist from 'minimist';
import cluster from 'cluster';

import './src/config/mongoose-config';

import {port} from './src/config/constants';


const argv = minimist(process.argv.slice(2));
console.log(port);

if(cluster.isPrimary && argv.clusterOn) {
  const numCPUs = require('os').cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  server.on('error', (error) => {
    console.error(`Server error: ${error}`);
  });
}
