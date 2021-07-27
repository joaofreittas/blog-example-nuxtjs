
const api = {
  getPosts() {
    const posts = fetch('/api/posts');
    return posts;
  },

  getPost(id) {
    const post = fetch(`/api/posts/${id}`);
    return post;
  }
}


export default (context, inject) => {
  inject('api', api)
  context.$api = api
}