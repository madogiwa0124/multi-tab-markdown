<template>
  <a @click="handleOnClick($event, index)" class="menu-item">
    <i @click="handleOnDelete($event, index)" class="delete icon is-small"></i>
    {{item.title | shortTitle}}
  </a>
</template>
<script>
  export default {
    name: 'menuItem',
    components: {},
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
    },
    // TODO: Tabs.vueにも同様のfillterがあるので共通化したい。
    filters: {
      shortTitle: function (value, length = 11, omission = '...') {
        if(value.length <= length) return value
        return value.substring(0, length) + omission;
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
