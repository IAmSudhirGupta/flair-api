var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var DataSource = require("../MongoUtil");

router.get("/", async function (req, res) {
  try {
    let db = await DataSource.Get();
    if (!db)
      res.status(500).send({
        status: "error",
        message: "Something went wrong, please try again...",
      });

    let posts = await db.collection("post").find().toArray();
    res.status(200).send({ status: "success", data: posts });
  } catch (error) {
    console.log("Error while retrieving ...", error);
    res.status(500).send({
        status: "error",
        message: "Error while retrieving post, please try again...",
      });
  }
});

module.exports = router;
