import express, { Request, Response } from 'express';
import { logger } from './logger';

const app = express();

app.use('/starter/', express.static('static'));

app.get('/', (_req: Request, res: Response) => {
  res.send({
    message: 'Hello World!',
  });
});

app.listen(3000, () => {
  logger.info('Server is running on port 3000');
});
