
const api = {
  getPosts() {
    const posts = fetch('/api/posts');
    return posts;
  },

  getPost(id) {
    const post = fetch(`/api/posts/${id}`);
    return post;
  },

  addPost(post) {
    const postSaved = fetch(`/api/posts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });
    return postSaved;
  }
}


export default (context, inject) => {
  inject('api', api)
  context.$api = api
}