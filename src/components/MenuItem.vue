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
    <DownloadLink :item="item" />
  </a>
</template>
<script>
import { shortTitle } from '../filters'
import DownloadLink from './DownloadLink'

export default {
  name: 'MenuItem',
  components: { DownloadLink },
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
