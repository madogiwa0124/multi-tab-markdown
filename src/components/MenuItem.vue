<template>
  <div class="menu-item">
    <p class="menu-label">
      {{title}}
    </p>
    <ul class="menu-list">
      <li v-for="(item, index) in items" :key="index">
        <a @click="handleOnClick($event, index)">{{item.title | shortTitle}}</a>
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
    },
    filters: {
      shortTitle: function (value, length = 8, omission = '...') {
        if(value.length <= length) return value
        return value.substring(0, length) + omission;
      }
    }
  }
</script>
<style lang="scss">
</style>
