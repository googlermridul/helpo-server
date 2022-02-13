const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hwqvi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
   try {
      await client.connect();
      const database = client.db("helpo");
      const campaigns = database.collection("campaigns");
      
      console.log('database connected');
   }
   finally {
      // await client.close();
   }
}
run().catch(console.dir);



app.get('/', (req, res) => {
   res.send('Helpo Server!')
})

app.listen(port, () => console.log('listening at', port))