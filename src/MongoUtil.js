var MongoClient = require("mongodb").MongoClient;
var DataSource = function () {
  var dbName = "flair";
  var db = null;
  var instance = 0;
  async function DbConnect() {
    try {
      let _db = await MongoClient.connect(process.env.DB_URL);
      return _db.db(dbName);
    } catch (error) {
      console.log("Error while Db Connection: ", error);
    }
  }
  async function Get() {
    try {
      instance++; // this is just to count how many times our singleton is called.
      console.log(`DbConnection called ${instance} times`);
      if (db != null) {
        console.log(`db connection is already alive`);
        return db;
      } else {
        console.log(`getting new db connection`);
        db = await DbConnect();
        return db;
      }
    } catch (error) {
      console.log("Error while getting Db Connection: ", error);
    }
  }
  return {
    Get: Get,
  };
};

module.exports = DataSource();
