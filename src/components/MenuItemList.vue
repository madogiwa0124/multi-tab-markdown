<template>
  <div class="menu-item">
    <p class="menu-label">
      {{ title }}
    </p>
    <ul class="menu-list">
      <li
        v-for="item in items"
        :key="item.id"
      >
        <MenuItem
          :item="item"
          @selectItem="handleOnSelectItem"
          @deleteItem="handleOnDeleteItem"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import MenuItem from './MenuItem'

export default {
  name: 'MenuItemList',
  components: { MenuItem },
  props: ['title', 'items'],
  methods: {
    // MEMO: SideMenu側でもemitを送っている。要素をまたいだemitとか出来ない？
    handleOnSelectItem: function(postId) {
      this.$emit('selectItem', postId)
    },
    handleOnDeleteItem: function(postId) {
      this.$emit('deleteItem', postId)
    }
  },
}
</script>
<style lang="scss">
</style>
