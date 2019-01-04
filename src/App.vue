<template>
  <div id="app" class="columns">
    <aside class="column is-2">
      <SideMenu
        :posts="posts"
        @selectItem="handleOnSelectItem"
        @deleteItem="handleOnDeleteItem"
      />
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
  import { TUTORIAL_MARKDOWN, DEMO_MARKDOWN } from './components/sampleMarkdown'

  import Tabs from './components/Tabs';
  import SideMenu from './components/SideMenu';
  import PostForm from './components/PostForm';

  window.addEventListener('beforeunload', function(e) {
    e.returnValue = 'このサイトを離れますか？'
  }, false);

  export default {
    name: 'app',
    components: { Tabs, SideMenu, PostForm },
    data: () => store.state,
    // MEMO: このへんの初期化のロジックってApp.vueのcreatedで書くのが正解？
    created: function () {
      const tutorialPost = { title: 'MTMの使い方', markdownText: TUTORIAL_MARKDOWN }
      const demoPost = { title: 'マークダウンDEMO', markdownText: DEMO_MARKDOWN }
      this.posts.push(tutorialPost, demoPost)
      this.selectedPost = tutorialPost
      this.tabbedPosts = [tutorialPost, demoPost]
    },
    methods: {
      // MEMO: App.vueにstoreに関する処理をまとめているため見通しは良くなっているが、処理が集まり過ぎている気がする。
      handleOnSubmit: function (post) {
        this.posts.push(post)
      },
      handleOnSelectItem: function (index) {
        const post = this.posts[index]
        if(!this.isTabbed(post)) this.tabbedPosts.push(post)
        this.selectedPost = post
      },
      handleOnDeleteItem: function (index) {
        // TODO: ここはタブも合わせて削除するようにする。
        if(this.isTabbed(this.posts[index])) return alert('タブを閉じてから削除してください。')
        this.posts.splice(index, 1)
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
  // TODO: App.vueでのbulmaのimportを他のコンポーネントが読み込まれる前に行いたい。
  @import "bulma";

  html, body, #app {
    height: 100%;
  }

  .main-content {
    padding: 1.5em;
  }
</style>
