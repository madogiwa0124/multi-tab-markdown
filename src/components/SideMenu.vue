<template>
  <div class="menu">
    <h1 class="title has-text-primary">
      <i class="fas fa-pen-nib"></i>
      MTM
    </h1>
    <MenuItem title="Posts" :items="posts" @selectItem="handleOnSelectItem" />
  </div>
</template>
<script>
  import MenuItem from './MenuItem'

  export default {
    name: 'sideMenu',
    components: { MenuItem },
    props: ['posts'],
    methods: {
      handleOnSelectItem: function (index) {
        this.$emit('selectItem', index)
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
