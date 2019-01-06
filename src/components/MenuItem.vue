<template>
  <a
    class="menu-item"
    @click="handleOnClick($event, index)"
  >
    <i
      class="delete icon is-small"
      @click="handleOnDelete($event, index)"
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
  props: ['item', 'index'],
  methods: {
    // MEMO: SideMenu側でもemitを送っている。要素をまたいだemitとか出来ない？
    handleOnClick: function(e, index) {
      e.preventDefault()
      this.$emit('selectItem', index)
    },
    handleOnDelete: function(e, index) {
      e.stopPropagation()
      this.$emit('deleteItem', index)
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
