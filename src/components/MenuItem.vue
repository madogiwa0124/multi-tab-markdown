<template>
  <a
    class="menu-item"
    @click="handleOnClick($event, item.id)"
  >
    <i
      class="delete icon is-small"
      @click="handleOnDelete($event, item.id)"
    />
    {{ item.title | shortTitle }}
  </a>
</template>
<script>
export default {
  name: 'MenuItem',
  components: {},
  // TODO: Tabs.vueにも同様のfillterがあるので共通化したい。
  filters: {
    shortTitle: function (value, length = 11, omission = '...') {
      if(value.length <= length) return value
      return value.substring(0, length) + omission
    }
  },
  props: ['item'],
  methods: {
    // MEMO: SideMenu側でもemitを送っている。要素をまたいだemitとか出来ない？
    handleOnClick: function(e, postId) {
      e.preventDefault()
      this.$emit('selectItem', postId)
    },
    handleOnDelete: function(e, postId) {
      e.stopPropagation()
      this.$emit('deleteItem', postId)
    }
  }
}
</script>
<style lang="scss">
  .menu-item {
    font-size: 14px;

    .delete {
      &:hover {
        background-color: hsl(348, 100%, 61%);
      }
    }
  }
</style>
