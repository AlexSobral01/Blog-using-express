const express = require('express');
const router = express.Router();

router.get('/articles',(req, res) => {
  res.send('articles')
});

router.get('/admin/articles/new')

module.exports = router;