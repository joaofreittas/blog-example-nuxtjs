<template>
  <div>
    <Menu />
    <div class="form">
      <b-alert 
        :show="showError" 
        variant="danger"
      >
        {{ errorMessage }}
      </b-alert>
      <b-form-input
        v-model="title"
        placeholder="Título"
        required
      />
      <b-form-input
        class="mt-2"
        v-model="author"
        placeholder="Autor"
        required
      />
      <b-form-input
        class="mt-2"
        type="number"
        v-model="readMinutes"
        placeholder="Tempo de Leitura"
        required
      />
      <textarea 
        class="editor mt-2 p-2"
        :value="text"
        @input="update"
      />
      <div
        class="markDown mt-2 mb-2 p-2"
        v-show="showMark"
        v-html="compiledMarkdown" 
      />

      <b-button @click="showPreview">
        Show Preview
      </b-button>
      <b-button @click="savePost">
        Salvar
      </b-button>
    </div>
  </div>
</template>
<script>
import marked from 'marked';
import _ from 'lodash';

export default {
  data(){
    return {
      showMark: false,
      text: "# hello",
      title: '',
      author: '',
      readMinutes: null,
      showError: false,
      errorMessage: 'Preencha todos os campos!',
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.text);
    }
  },
  methods: {
    showPreview(){
      this.showMark = !this.showMark;
    },
    update: _.debounce( function (e){
      this.text = e.target.value;
    }, 300),
    async savePost(){
      this.showError = false;
      try{
        if(!title || !author || !readMinutes || !text) {
          console.log('Preencha todos os campos!');
          this.configError(true, 'Preencha todos os campos!');
          return;
        }
        const { title, author, readMinutes, text } = this;
        await this.$api.addPost({
          title, author, readMinutes, text
        })
      }catch(error) {
        this.configError(true, 'Algo de errado ocorreu!');
        console.log('Erro ao incluir Post', error);
      }
    },
    configError(showError, message) {
      this.errorMessage = message;
      this.showError = showError;
    }
  }
}
</script>
<style lang="css" scoped>
.form{
  margin:0 auto;
  max-width: 600px;
  padding: 20px;
}

.editor{
  width: 100%;
  border:1px solid #cccccc;
  border-radius: 5px;
}

.markDown{
  border:1px solid #cccccc;
  border-radius: 5px;
}
</style>