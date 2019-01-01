<template>
  <form id="post-form" @submit="handleOnSubmit">
    <input type="text" id="post-title"  v-model="title" placeholder="Title">
    <div id="editor">
      <textarea v-model="markdownText">input</textarea>
      <div class="save-button">
        <button type="submit" class="button is-primary">Save</button>
      </div>
    </div>
    <div id="preview">
      <div v-html="compiledMarkdown"></div>
    </div>
  </form>
</template>
<script>
  import marked from 'marked';
  import hljs from 'highlightjs';

  export default {
    name: 'postForm',
    props: ['initPost'],
    components: {},
    created: function () {
      marked.setOptions({
        langPrefix: '',
        highlight: function(code, lang) {
          return hljs.highlightAuto(code, [lang]).value
        }
      });
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.markdownText)
      }
    },
    data: function () {
      return {
        title: '',
        markdownText: ''
      }
    },
    watch: {
      initPost: function () {
        if(this.initPost) {
          this.title = this.initPost.title
          this.markdownText = this.initPost.markdownText
        } else {
          this.title = ''
          this.markdownText = ''
        }
      }
    },
    methods: {
      handleOnSubmit: function (e) {
        e.preventDefault()
        if(this.title.length === 0) { return alert('タイトルは必ず入力してください。') }
        const post = { title: this.title, markdownText: this.markdownText }
        this.$emit('submit', post)
      }
    }
  }
</script>
<style src='../assets/stylesheets/markdown.css'></style>
<style src='highlightjs/styles/github-gist.css'></style>
<style lang="scss">
  .save-button {
    margin-top: 10px;
    text-align: right;
  }

  #post-title {
    border: none;
    padding:10px;
    font-size:20px;
    margin:0 0 10px;
    width: 100%;
    outline: none;
  }

  #post-form {
    margin: 0;
    height: 90%;
    width: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  #post-form textarea {
    width: 100%;
    height: 95%;
    border: none;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 10px;
    display: block;
  }

  #post-form #preview {
    padding: 20px;
    height: 95%;
    width: 50%;
    padding: 20px;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
  }

  #post-form #editor {
    padding: 10px;
    width: 50%;
    display: inline-block;
    height: 95%;
    border-right: 1px solid #ccc;
  }
</style>
