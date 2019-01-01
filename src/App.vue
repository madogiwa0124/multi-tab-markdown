<template>
  <div id="app" class="columns">
    <aside class="column is-2">
      <SideMenu />
    </aside>
    <main class="main-content column">
      <Tabs />
      <PostForm />
    </main>
  </div>
</template>
<script>
  import Tabs from './components/Tabs';
  import SideMenu from './components/SideMenu';
  import PostForm from './components/PostForm';

  export default {
    name: 'app',
    components: { Tabs, SideMenu, PostForm }
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
