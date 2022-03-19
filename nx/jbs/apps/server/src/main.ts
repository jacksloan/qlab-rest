/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to qlab-proxy!' });
});

app.use(express.static(path.join(__dirname, '..', 'app', 'build')));
app.use('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, '..', 'app', 'build', 'index.html'))
);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
