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
  name: 'SideMenu',
  components: { MenuItemList },
  // TODO: ここをstate.postsの中身の変更も検出してタイトルの変更を反映できるようにしたい
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
