
const api = {
  getPosts() {
    const posts = fetch('/api/posts');
    return posts;
  }
}


export default (context, inject) => {
  inject('api', api)
  context.$api = api
}