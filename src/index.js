import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.use('/users', routes.user);
app.use('/posts', routes.post);

connectDb().then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Backend app listening on port ${process.env.PORT}`),
  );
});
