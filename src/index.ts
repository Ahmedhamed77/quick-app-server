import {connectDB} from './connection/connect';
const express = require('express');
const dotenv = require('dotenv');
const tasks = require('./routes/tasks');

dotenv.config();

const app = express();
const port = process.env.PORT;
const connectionKey = process.env.DB_KEY;

app.use(express.json());

app.use('/api/v1/tasks', tasks);

const startServer = async () => {
  try {
    await connectDB(connectionKey || '');

    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  } catch (err) {
    console.log(err);
    console.log('error connecting the DB....');
  }
};

startServer();
