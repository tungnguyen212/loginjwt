const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.listen(4000, () => {
  console.log('Server Start on 4000');
});
mongoose
  .connect('mongodb://127.0.0.1:27017/jwt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connection successfull');
  })
  .catch((err) => {
    console.log(err.message);
  });
app.use(
  cors({
    orgin: ['http://localhost:3000'],
    method: ['GET', 'POST'],
    credentials: true,
  })
);
app.use(express.json());
