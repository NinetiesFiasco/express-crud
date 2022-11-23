const MongoClient = require('mongodb').MongoClient

const URL = process.env.MONGO_URL || 'mongodb://localhost:27017'
const DATA_BASE = process.env.DATA_BASE || 'express-crud'
const COLLECTION_EXAMPLE = process.env.COLLECTION_EXAMPLE || 'example'

const collections = {
  example: null
}

const dataBaseConnect = function() {
  MongoClient.connect(URL, { useUnifiedTopology: true },
    function(err, client) {
      if(err){
        console.log("Some Error While Connecting to MongoDB Server" + err);
      }else{
        console.log("Connected Sucessfully to MongoDB Server using Node.js Driver for MongoDB");
        
        db = client.db(DATA_BASE);
        collections.example = db.collection(COLLECTION_EXAMPLE);
        
        console.log("Connected to MongoDB DB: " + DATA_BASE)
      }
    }
  )
}


module.exports = {
  dataBaseConnect, collections
}
