<template>
  <div>
    <Menu />
    <Loading v-if="loading"/>
    <section v-else class="posts">
      <section
        v-for="post in posts"
        :key="post._id"
        class="post"  
      >
      <NuxtLink :to="`/posts/${post._id}`" class="link-card">
        <b-card 
        >
          <h5><b>{{ post.title }}</b></h5>
          <span class="observation">
            leitura de {{post.readMinutes}} minutos, postado em {{post.dateCreate}}
            <div> 
              por {{ post.author }}
            </div>
          </span>
          <span class="observation"></span>
          <b-card-text
            class="mt-3 text"
          >
            {{ post.text.substring(0, 150) }}...
          </b-card-text>
        </b-card>
      </NuxtLink>
      </section>

    </section>

  </div>
</template>
<script>
import Util from '../../src/util';
export default {
  data(){
    return {
      posts: [],
      loading: false,
    }
  },
  mounted(){
    this.fetchPosts();
  },
  methods: {
    async fetchPosts(){
      this.loading = true;
      try{
        const posts = await (await this.$api.getPosts()).json();
        this.posts = posts;
        this.posts.map(post => ({
          ...post,
          dateCreate: Util.formatDate(post.dateCreate)
        }))

      }catch(error) {
        console.log('Erro ocorreu! ', error);
      }finally {
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
  .observation{
    font-size: 13px;
    color:#aaa;
  }
  .link-card{
    color:#444;
    text-decoration: none;
  }
  .link-card:hover{
    color:#444;
    text-decoration: none;
  }
  .posts{
    margin: auto;
    max-width: 700px;
  }
  .post{
    margin:auto;
    margin-top:3%;
    width: 95%;
    border:2px solid #eee;
    border-radius: 5px;
  }
  .post:hover {
    cursor: pointer;
    border-color: #ccc;
    text-decoration: none;
  }
</style>