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
  }
  res.status(400).json({ error: 'No Body!' })
})

module.exports = app



// async function handleCall(req, res, next) {

//   if(req.url !== '/posts') {
//     return next;
//   }
  
//   await mongo.connect();

//   if(req.method === 'GET') {
//     const posts = await mongo.db('blog')
//     .collection('posts')
//     .find({})
//     .toArray();

//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify(posts))
//     return;
//   }

//   if(req.method === 'POST') {
//     console.log('req :>> ', req);
//     if(req.body) {
//       const { body } = req;
//       const post = await mongo.db('blog')
//       .collection('posts')
//       .insertOne({
//         title: body.title, 
//         text: body.text,
//         readMinutes: body.readMinutes,
//         author: body.author,
//         dateCreate: new Date()
//       });
  
//       res.setHeader('Content-Type', 'application/json')
//       res.end(JSON.stringify(post))
//       return;
//     }
//     res.end(JSON.stringify({error: 'No body!'}))
//   }

// }

// export default function (req, res, next) {

//   handleCall(req, res, next).then(n => {
//     if(n) n();
//   })

// }