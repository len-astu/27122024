const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://lenchoajema:Bm7KqGu7GntJ3pVt@cluster0.teaih.mongodb.net/ecommerce";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");

    // Perform basic operations (optional)
    const database = client.db("ecommerce");
    const collection = database.collection("product");
    // ... your database operations here ...
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
