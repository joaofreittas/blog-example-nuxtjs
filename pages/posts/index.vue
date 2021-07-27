<template>
  <div>
    <Menu />

    <section class="posts">

      <b-card 
        :title="post.title"
        :sub-title="post.title"
        class="post"
        v-for="post in posts"
        :key="post._id"  
      >
        <b-card-text>
          {{ post.text.substring(0, 80) }}
        </b-card-text>

        <NuxtLink :to="`/posts/${post._id}`">
          Ler Artigo
        </NuxtLink>
      </b-card>

    </section>

  </div>
</template>
<script>
export default {
  data(){
    return {
      posts: []
    }
  },
  mounted(){
    this.fetchPosts();
  },
  methods: {
    async fetchPosts(){
      const posts = await (await this.$api.getPosts()).json();
      console.log('posts :>> ', posts);
      this.posts = posts;
    }
  }
}
</script>
<style lang="css" scoped>
  .posts{
    margin: auto;
    max-width: 700px;
  }
  .post{
    margin:auto;
    margin-top:3%;
    width: 95%;
    border:2px solid #eee;
  }
  .post:hover {
    border-color: #17A2B8;
    cursor: pointer;
  }
</style>