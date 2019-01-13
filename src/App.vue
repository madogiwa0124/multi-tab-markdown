<template>
  <div
    id="app"
    class="columns"
  >
    <aside class="column is-2">
      <Menu
        :posts="posts"
        @selectItem="handleOnSelectItem"
        @deleteItem="handleOnDeleteItem"
      />
    </aside>
    <main class="main-content column">
      <Tabs
        :items="tabbedPosts"
        :init-selected="selectedPost"
        @newPost="handleOnNewPost"
        @selectTab="handleOnSelectTab"
        @deleteTab="handleOnDeleteTab"
      />
      <PostForm
        :init-post="selectedPost"
        @submit="handleOnSubmit"
      />
    </main>
  </div>
</template>
<script>
import moment from 'moment'
import store from './store'
import { TUTORIAL_MARKDOWN, DEMO_MARKDOWN } from './components/sampleMarkdown'

import Tabs from './components/Tabs'
import Menu from './components/Menu'
import PostForm from './components/PostForm'

window.addEventListener('beforeunload', function(e) {
  e.returnValue = 'このサイトを離れますか？'
}, false)

export default {
  name: 'App',
  components: { Tabs, Menu, PostForm },
  data: () => store.state,
  // MEMO: このへんの初期化のロジックってApp.vueのcreatedで書くのが正解？
  created: function () {
    const tutorialPost = { id: 1, title: 'MTMの使い方', markdownText: TUTORIAL_MARKDOWN }
    const demoPost = { id: 2, title: 'マークダウンDEMO', markdownText: DEMO_MARKDOWN }
    this.posts.push(tutorialPost, demoPost)
    this.selectedPost = tutorialPost
    this.tabbedPosts = [tutorialPost, demoPost]
  },
  methods: {
    // MEMO: App.vueにstoreに関する処理をまとめているため見通しは良くなっているが、処理が集まり過ぎている気がする。
    handleOnSubmit: function (post) {
      if(this.findPost(post.id) || this.findTabbedPost(post.id)) return this.updatePost(post)
      this.posts.push(post)
    },
    handleOnSelectItem: function (postId) {
      const post = this.findPost(postId)
      if(!this.isTabbed(post)) this.tabbedPosts.push(post)
      this.selectedPost = post
    },
    handleOnDeleteItem: function (postId) {
      const post = this.findPost(postId)
      if(window.confirm(`「${post.title}」を削除します。本当によろしいですか？`)) {
        this.deletePost(post)
      }
    },
    handleOnSelectTab: function (postId) {
      const index = this.tabbedPosts.indexOf(this.findTabbedPost(postId))
      this.selectedPost = this.tabbedPosts[index]
    },
    handleOnDeleteTab: function (postId) {
      const index = this.tabbedPosts.indexOf(this.findTabbedPost(postId))
      if (this.isSelected(this.tabbedPosts[index])) this.setNextTabbedPostToSelectedPost(index)
      this.tabbedPosts.splice(index, 1)
    },
    handleOnNewPost: function () {
      this.selectedPost = this.initPost()
      this.tabbedPosts.push(this.initPost())
      this.posts.push(this.initPost())
    },
    initPost: function () {
      const initTitle = `${moment().format('YYYYMMDDkkmmss')}_NewPost`
      return { id: this.calcPostId(), title: initTitle, markdownText: '' }
    },
    isTabbed: function (target) {
      return this.tabbedPosts.map(post => post.id).includes(target.id)
    },
    isSelected: function (target) {
      return this.selectedPost.id === target.id
    },
    calcPostId: function() {
      return this.posts.length + 1
    },
    findPost: function(id) {
      return this.posts.find(function(post) { return post.id === id })
    },
    findTabbedPost: function(id) {
      return this.tabbedPosts.find(function(post) { return post.id === id })
    },
    setNextTabbedPostToSelectedPost: function(tabbedPostIndex) {
      const nextTabbedPost = this.tabbedPosts[tabbedPostIndex - 1] || this.tabbedPosts[tabbedPostIndex + 1]
      this.selectedPost = nextTabbedPost
    },
    updatePost: function(post) {
      // MEMO: もうちょいいい感じに書きたい。
      const targetPostIndex = this.posts.indexOf(this.findPost(post.id))
      const targetTabbedPostIndex = this.tabbedPosts.indexOf(this.findTabbedPost(post.id))
      this.$set(this.posts, targetPostIndex, post)
      if(this.isTabbed(post))   this.$set(this.tabbedPosts, targetTabbedPostIndex, post)
      if(this.isSelected(post)) this.selectedPost = post
    },
    deletePost: function(post) {
      // MEMO: もうちょいいい感じに書きたい。
      const postIndex = this.posts.indexOf(this.findPost(post.id))
      const tabbedPostIndex = this.tabbedPosts.indexOf(this.findTabbedPost(post.id))
      if (this.isSelected(post)) this.setNextTabbedPostToSelectedPost(tabbedPostIndex)
      this.tabbedPosts.splice(tabbedPostIndex, 1)
      this.posts.splice(postIndex, 1)
    }
  }
}
</script>
<style lang="scss">
  $menu-item-hover-background-color: #fff;
  $tabs-link-active-color: hsl(171, 100%, 41%);
  @import "./assets/stylesheets/application.scss";

  html, body, #app, aside {
    height: 100%;
    margin: 0px;
    padding: 0px;
  }

  aside {
    &.column {
      padding: 0px;
    }
  }

  .main-content {
    padding: 1.5em;
  }
</style>
