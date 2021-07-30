import mongo from './mongo';
const bodyParser = require('body-parser')
const { ObjectId } = require('mongodb');
const app = require('express')()
app.use(bodyParser.json())

app.get('/posts', async (req, res) => {
  await mongo.connect();
  const posts = await mongo.db('blog')
    .collection('posts')
    .find({})
    .toArray();

  res.json(posts)
})

app.get('/posts/:id', async (req, res) => {
  await mongo.connect();

  if(req.params.id) {
    const post = await mongo.db('blog')
    .collection('posts')
    .find({"_id": ObjectId(req.params.id)})
    .toArray();

    res.json(post)
    return;
  }
})

app.post('/posts', async (req, res) => {
  await mongo.connect();
  if(req.body) {
    const { body } = req;
    const post = await mongo.db('blog')
    .collection('posts')
    .insertOne({
      title: body.title, 
      text: body.text,
      readMinutes: body.readMinutes,
      author: body.author,
      dateCreate: new Date()
    });

    res.json(post)
    return;
  }
  res.json({ error: 'No Body!' }).status(400)
  return;
})

module.exports = app