const express = require('express');
const app = express();

const cors = require("cors");

app.use(cors())

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('recipes');
    const recipesCollection = db.collection('recipes');
    const recipesRouter = createRouter(recipesCollection);


    app.post('/api/recipes', (req, res) => {
      const newData = req.body;

      if (newData.hasOwnProperty("title")) {
        recipesCollection
          .insertOne(newData)
          .then((result) => {
            res.json(result.ops[0]);
          })
          .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          });
      } else {
        res.status(400);  
        res.send("404");
      }
    });

    app.use('/api/recipes', recipesRouter);
  })
  .catch(console.error);

app.listen(9000, function() {
  console.log(`Recipes server running on port ${this.address().port}`);
});
