<template>
  <div class="menu has-background-light">
    <h1 class="title has-text-primary">
      <i class="fas fa-pen-nib"></i>
      MTM
    </h1>
    <MenuItem
      title="Posts"
      :items="posts"
      @selectItem="handleOnSelectItem"
      @deleteItem="handleOnDeleteItem"
    />
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
      },
      handleOnDeleteItem: function (index) {
        this.$emit('deleteItem', index)
      }
    }
  }
</script>
<style lang="scss">
  div {
    &.menu {
      height: 100%;
      padding: 12px;

      .title {
        font-size: 48px;
      }
    }
  }
</style>
