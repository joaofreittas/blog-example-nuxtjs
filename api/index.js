import mongo from './mongo';

async function handleCall(req, res, next) {

  if(req.url !== '/posts') {
    return next;
  }
  
  await mongo.connect();

  if(req.method === 'GET') {
    const posts = await mongo.db('blog')
    .collection('posts')
    .find({})
    .toArray();

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(posts))
    return;
  }

  if(req.method === 'POST') {
    const post = await mongo.db('blog')
    .collection('posts')
    .insertOne({
      title:'My first Title', 
      text:' My Text'
    });

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(post))
    return;
  }

}

export default function (req, res, next) {

  handleCall(req, res, next).then(n => {
    if(n) n();
  })

}