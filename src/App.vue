<template>
  <div id="app" class="columns">
    <aside class="column is-2">
      <SideMenu :posts="posts" @selectItem="handleOnSelectItem" />
    </aside>
    <main class="main-content column">
      <Tabs
        @newPost="handleOnNewPost"
        @selectTab="handleOnSelectTab"
        @deleteTab="handleOnDeleteTab"
        :initItems="tabbedPosts"
        :initSelected="selectedPost"
      />
      <PostForm :initPost="selectedPost" @submit="handleOnSubmit" />
    </main>
  </div>
</template>
<script>
  import moment from 'moment';
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
        const post = this.posts[index]
        if(!this.isTabbed(post)) this.tabbedPosts.push(post)
        this.selectedPost = post
      },
      handleOnSelectTab: function (index) {
        this.selectedPost = this.tabbedPosts[index]
      },
      handleOnDeleteTab: function (index) {
        const NextTabbedPost = this.tabbedPosts[index - 1] || this.tabbedPosts[index + 1]
        if (this.selectedPost == this.tabbedPosts[index]) this.selectedPost = NextTabbedPost
        this.tabbedPosts.splice(index, 1)
      },
      handleOnNewPost: function () {
        this.selectedPost = this.initPost()
        this.tabbedPosts.push(this.initPost())
        this.posts.push(this.initPost())
      },
      initPost: function () {
        const initTitle = `${moment().format('YYYYMMDDkkmmss')}_NewPost`
        return { title: initTitle, markdownText: '' }
      },
      isTabbed: function (post) {
        return this.tabbedPosts.includes(post)
      }
    }
  }
</script>
<style lang="scss">
  $menu-item-hover-background-color: #fff;
  $tabs-link-active-color: hsl(171, 100%, 41%);
  @import "bulma";

  html, body, #app {
    height: 100%;
  }

  .main-content {
    padding: 1.5em;
  }
</style>
