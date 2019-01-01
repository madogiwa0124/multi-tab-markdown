<template>
  <div id="app" class="columns">
    <aside class="column is-2">
      <SideMenu :posts="posts" @selectItem="handleOnSelectItem" />
    </aside>
    <main class="main-content column">
      <Tabs @newPost="handleOnNewPost" />
      <PostForm :initPost="selectedPost" @submit="handleOnSubmit" />
    </main>
  </div>
</template>
<script>
  import store from './store';
  import Tabs from './components/Tabs';
  import SideMenu from './components/SideMenu';
  import PostForm from './components/PostForm';

  export default {
    name: 'app',
    components: { Tabs, SideMenu, PostForm },
    data: () => store.state,
    methods: {
      handleOnSubmit: function (post) {
        this.posts.push(post)
      },
      handleOnSelectItem: function (index) {
        this.selectedPost = this.posts[index]
      },
      handleOnNewPost: function () {
        this.selectedPost = ''
      }
    }
  }
</script>
<style lang="scss">
  @import "bulma";

  html, body, #app {
    height: 100%;
  }

  .main-content {
    padding: 1.5em;
  }
</style>
