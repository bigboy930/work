const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const shortid = require('shortid');

router.get('/', (req, res, next) =>  {
  const list = db.get('post').value();
  res.send(list);
});

router.post('/write', (req, res, next) => {
  const post = req.body.params;
  db.get('post').push({
    id: shortid.generate(),
    ...post
  }).write();
  res.send(post);
});

router.post('/edit', (req, res, next) => {
  const post = req.body.params;
  db.get('post').find({id:post.pageId}).assign(post).write();
  res.send(post);
});

router.post('/delete/:pageId', (req, res, next) => {
  const post = req.body.params;
  db.get('post').remove({id:post.pageId}).write();
  res.send();
});

router.get('/:pageId', (req, res, next) =>  {
  const pageId = req.params.pageId;
  const post = db.get('post').find({id:pageId}).value();
  res.send(post);
});

module.exports = router;
