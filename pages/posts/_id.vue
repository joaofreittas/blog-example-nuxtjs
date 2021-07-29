<template>
  <div>
    <Menu />

    <section class="posts">
      <div class="text">
        <h3>{{ post.title }}</h3>
        <div class="info">Leitura de {{ post.readMinutes }} minutos</div>
        <div class="info">por {{ post.author }}, postado em {{ post.dateCreate }} </div><br>
        {{ post.text }}
      </div>
    </section>

  </div>
</template>
<script>
export default {
  data(){
    return {
      post: {}
    }
  },
  mounted(){
    this.fetchPostById(this.$route.params.id);
    console.log('this.$route :>> ', this.$route.params.id);
  },
  methods: {
    async fetchPostById(idPost) {
      const posts = await (await this.$api.getPost(idPost)).json();
      this.post = posts[0];
      console.log('this.post :>> ', this.post);
    }
  }
}
</script>
<style lang="css" scoped>
  .posts{
    margin: auto;
    max-width: 600px;
  }
  .text{
    padding-top:3%;
    padding:15px;
  }
  .info{
    color:#aaa;
    font-size: 12px;
  }
</style>