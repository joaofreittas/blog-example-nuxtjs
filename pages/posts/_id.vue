<template>
  <div>
    <Menu />
    <Loading v-if="loading"/>
    <section v-else class="posts">
      <div class="text">
        <h4><b>{{ post.title }}</b></h4>
        <div class="info">Leitura de {{ post.readMinutes }} minutos</div>
        <div class="info">por {{ post.author }}, postado em {{ post.dateCreate }} </div><br>
        {{ post.text }}
      </div>
    </section>

  </div>
</template>
<script>
import Util from '../../src/util';
export default {
  data(){
    return {
      post: {},
      loading: false,
    }
  },
  mounted(){
    this.fetchPostById(this.$route.params.id);
  },
  methods: {
    async fetchPostById(idPost) {
      this.loading = true;
      try{
        const posts = await (await this.$api.getPost(idPost)).json();
        this.post = posts[0];
        this.post.dateCreate = Util.formatDate(this.post.dateCreate);
      }catch(error){
        console.log('Erro ao abrir Post', error);
      }finally{
        this.loading = false;
      }
    }
  }
}
</script>
<style lang="css" scoped>
  .text{
    color:#444;
    font-size: 15px;
  }
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