<template>
  <div class="menu">
    <h1 class="title has-text-primary">
      <i class="fas fa-pen-nib"></i>
      MTM
    </h1>
    <MenuItem title="Posts" :items="postItems()"/>
  </div>
</template>
<script>
  import MenuItem from './MenuItem'

  export default {
    name: 'sideMenu',
    components: { MenuItem },
    methods: {
      postItems: () => {
        return [
          { title: '20190101 Hoge', link: '/' },
          { title: '20190101 Fuga', link: '/' }
        ]
      }
    }
  }
</script>
<style lang="scss">
  div {
    &.menu {
      padding: 1.5em;
    }
  }
</style>
