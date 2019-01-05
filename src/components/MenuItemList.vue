<template>
  <div class="menu-item">
    <p class="menu-label">{{title}}</p>
    <ul class="menu-list">
      <li v-for="(item, index) in items" :key="index">
        <MenuItem @selectItem="handleOnSelectItem" @deleteItem="handleOnDeleteItem" :item="item" :index="index" />
      </li>
    </ul>
  </div>
</template>
<script>
  import MenuItem from './MenuItem'

  export default {
    name: 'menuItemList',
    components: { MenuItem },
    props: ['title', 'items'],
    methods: {
      // MEMO: SideMenu側でもemitを送っている。要素をまたいだemitとか出来ない？
      handleOnSelectItem: function(index) {
        this.$emit('selectItem', index)
      },
      handleOnDeleteItem: function(index) {
        this.$emit('deleteItem', index)
      }
    },
  }
</script>
<style lang="scss">
</style>
