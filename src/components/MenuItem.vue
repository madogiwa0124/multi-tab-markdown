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
import { shortTitle } from '../filters'

export default {
  name: 'MenuItem',
  components: {},
  filters: {
    shortTitle: shortTitle
  },
  props: ['item'],
  methods: {
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
