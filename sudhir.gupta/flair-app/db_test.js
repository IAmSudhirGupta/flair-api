
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://flair:fla1r@flair-app.p7ull.mongodb.net/flair?retryWrites=true&w=majority"
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("flair").collection("devices");
	console.log("collection", collection); 
 // perform actions on the collection object
  client.close();
});

