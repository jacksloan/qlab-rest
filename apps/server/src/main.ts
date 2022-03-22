import * as express from 'express';
import * as path from 'path';
import { Osc } from './app/osc';
import * as logger from 'morgan';
import { handleOscCommand } from './app/osc-handler';
import * as swaggerUi from 'swagger-ui-express';
import * as fs from 'fs';
import * as cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;
const osc = new Osc();
app.use(logger('tiny'));
app.use(cors());

// api
app.use('/api', express.json({ strict: false }));
app.use('/api(/*)?', handleOscCommand(osc));

// swagger
const swaggerPath = path.join(__dirname, '..', 'openapi.json');
const swaggerDocument = fs.readFileSync(swaggerPath);
app.use('/api-docs', express.static(path.join(__dirname, '..', 'api-docs')));
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(JSON.parse(swaggerDocument.toString())));

// single page app assets
app.use(express.static(path.join(__dirname, '..', 'app', 'build')));
app.use('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, '..', 'app', 'build', 'index.html'))
);

osc.open({
  onReady: () => {
    app
      .listen(port, () => console.log(`Listening at http://localhost:${port}`))
      .on('error', console.error);
  },
});
