<template>
  <div class="tabs is-boxed">
    <ul>
      <li v-for="(item, index) in items" :key="index" :class="{ 'is-active': isActive(item) }">
        <a>
          <span @click="handleOnTabClick(index)">{{ item.title }}</span>
          <span class="icon" @click="handleOnTabDelete($event, index)">
            <i class="fas fa-window-close"></i>
          </span>
        </a>
      </li>
      <li>
        <a @click="handleOnNewPost($event)"><i class="fas fa-plus"></i></a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'tabs',
    components: {},
    props: ['initItems', 'initSelected'],
    data: function () {
      return {
        selected: '',
        items: []
      }
    },
    watch: {
      initSelected: function () {
        this.selected = this.initSelected
      },
      initItems: function () {
        this.items = this.initItems
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
        e.preventDefault()
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
</style>
