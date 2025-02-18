const express = require('express');
const { resolve } = require('path');
require('dotenv').config()
const connectToDb = require('./db')



const app = express();
const port = 3010;

const db_url = process.env.MongoDb_URI

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, async() => {
  try{
    await connectToDb(db_url)
    console.log('Connected to database')
    console.log(`Example app listening at http://localhost:${port}`);
  }
  catch(err){
    console.log('Error in connecting Database')
  }
});
