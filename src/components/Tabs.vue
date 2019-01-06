<template>
  <div class="tabs is-boxed">
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{ 'is-active': isActive(item) }"
      >
        <a>
          <span @click="handleOnTabClick(index)">
            {{ item.title | shortTitle }}
          </span>
          <i
            class="icon delete"
            @click="handleOnTabDelete($event, index)"
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
export default {
  name: 'Tabs',
  components: {},
  filters: {
    shortTitle: function (value, length = 6, omission = '...') {
      if(value.length <= length) return value
      return value.substring(0, length) + omission
    }
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
      return item.title == this.selected.title
    },
    handleOnTabClick: function (index) {
      this.$emit('selectTab', index)
    },
    handleOnTabDelete: function (e, index) {
      e.stopPropagation()
      this.$emit('deleteTab', index)
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
