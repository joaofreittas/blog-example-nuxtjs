<template>
  <div>
    <Menu />
    <Loading v-if="loading"/>
    <div class="warn" v-if="posts.length === 0 && !loading">
      <b>Nada há nenhum post :(</b> 
    </div>
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
            <div> 
              por {{ post.author }}, postado em {{post.dateCreate}}
            </div>
            leitura de {{post.readMinutes}} minutos
          </span>
          <span class="observation"></span>
          <b-card-text
            class="mt-3 text"
          >
            <div
              v-html="post.text.substring(0, 150)" 
            />
          </b-card-text>
        </b-card>
      </NuxtLink>
      </section>

    </section>

  </div>
</template>
<script>
import marked from 'marked';
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
        const postsFormatted = posts.map(post => ({
          ...post,
          text: marked(post.text),
          dateCreate: Util.formatDate(post.dateCreate)
        }))
        this.posts = postsFormatted;

      }catch(error) {
        console.log('Erro ao listar Posts', error);
      }finally {
        this.loading = false;
      }

    }
  },
}
</script>
<style lang="css" scoped>
  .warn{
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translateX(-50%) translateY(-50%);
  }
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