<template>
  <div class="tabs is-boxed">
    <ul>
      <li class="is-active">
        <a>
          <span>New Post</span>
          <span class="icon is-small"><i class="fas fa-window-close"></i></span>
        </a>
      </li>
      <li>
        <a>
          <span>2019/01/01 Hoge</span>
          <span class="icon is-small"><i class="fas fa-window-close"></i></span>
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
    methods: {
      handleOnNewPost: function (e) {
        e.preventDefault();
        this.$emit('newPost')
      }
    }
  }
</script>
<style lang="scss">
</style>
