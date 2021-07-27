<template>
  <div>
    <Menu />

    <section class="posts">

      ola
    </section>

  </div>
</template>
<script>
export default {
  data(){
    return {
      post: []
    }
  },
  mounted(){
    this.fetchPostById(this.$route.params.id);
    console.log('this.$route :>> ', this.$route.params.id);
  },
  methods: {
    async fetchPostById(idPost) {
      const posts = await (await this.$api.getPost(idPost)).json();
      console.log('posts :>> ', posts);
      // const post = JSON.parse(await );
      // console.log('post :>> ', post);
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