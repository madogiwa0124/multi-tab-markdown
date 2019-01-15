<template>
  <div class="menu has-background-light">
    <h1 class="title has-text-primary">
      <i class="fas fa-pen-nib" />
      MTM
    </h1>
    <MenuItemList
      title="Posts"
      :items="posts"
      @selectItem="handleOnSelectItem"
      @deleteItem="handleOnDeleteItem"
    />
  </div>
</template>
<script>
import MenuItemList from './MenuItemList'

export default {
  name: 'Menu',
  components: { MenuItemList },
  props: ['posts'],
  methods: {
    handleOnSelectItem: function (postId) {
      this.$emit('selectItem', postId)
    },
    handleOnDeleteItem: function (postId) {
      this.$emit('deleteItem', postId)
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
