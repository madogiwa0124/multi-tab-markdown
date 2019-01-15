<template>
  <div class="tabs is-boxed">
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
        :class="{ 'is-active': isActive(item) }"
      >
        <a>
          <span @click="handleOnTabClick(item.id)">
            {{ item.title | shortTitle(9) }}
          </span>
          <i
            class="icon delete"
            @click="handleOnTabDelete($event, item.id)"
          />
        </a>
      </li>
      <li>
        <a @click="handleOnNewPost($event)">
          <i class="fas fa-plus" />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { shortTitle } from '../filters'

export default {
  name: 'Tabs',
  components: {},
  filters: {
    shortTitle: shortTitle
  },
  props: ['items', 'initSelected'],
  data: function () {
    return {
      selected: this.initSelected
    }
  },
  watch: {
    initSelected: function () {
      this.selected = this.initSelected
    }
  },
  methods: {
    isActive: function (item) {
      return item.id == this.selected.id
    },
    handleOnTabClick: function (postId) {
      this.$emit('selectTab', postId)
    },
    handleOnTabDelete: function (e, postId) {
      e.stopPropagation()
      this.$emit('deleteTab', postId)
    },
    handleOnNewPost: function (e) {
      e.preventDefault()
      this.$emit('newPost')
    }
  }
}
</script>
<style lang="scss">
  .tabs {
    .delete {
      &:hover {
        background-color: hsl(348, 100%, 61%);
      }
    }
  }
</style>
