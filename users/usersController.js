const express = require('express');
const router = express.Router();
const user = require('./user');

router.get('/admin/users', (req, res) => {
  res.send('users');
})

router.get('/admin/users/create', (req, res) => {
  res.render('admin/users/create');
})

router.post('/users/create', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  res.json({email, password});
})

module.exports = router;