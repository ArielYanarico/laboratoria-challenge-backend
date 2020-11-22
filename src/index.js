import express from 'express';
import cors from 'cors';
import 'dotenv/config';
 
const app = express();
 
app.use(cors());
 
app.get('/hello', (req, res) => {
  res.send('Hello World!!!');
});
 
app.listen(process.env.PORT, () =>
  console.log(`Backend app listening on port ${process.env.PORT}`),
);
