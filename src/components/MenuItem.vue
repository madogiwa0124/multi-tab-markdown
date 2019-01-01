<template>
  <div class="menu-item">
    <p class="menu-label">
      {{title}}
    </p>
    <ul class="menu-list">
      <li v-for="(item, index) in items" :key="index">
        <a @click="handleOnClick($event, index)">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'menuItem',
    components: {},
    props: ['title', 'items'],
    methods: {
      handleOnClick: function(e, index) {
        e.preventDefault();
        this.$emit('selectItem', index)
      }
    }
  }
</script>
<style lang="scss">
</style>
