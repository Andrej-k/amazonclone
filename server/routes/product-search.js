const router = require('express').Router();

const algoliasearch = require('algoliasearch');
const client = algoliasearch('80WQFLRQ2G', '87f2b74597f052ac97fa0d320245ecff');
const index = client.initIndex('amazonov1');



router.get('/', (req, res, next) => {
  if (req.query.query) {
    index.search({
      query: req.query.query,
      page: req.query.page,
    }, (err, content) => {
      res.json({
        success: true,
        message: "Here is your search",
        status: 200,
        content: content,
        search_result: req.query.query
      });
    });
  }
});


module.exports = router;

