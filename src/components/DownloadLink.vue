<template>
  <i
    class="fas fa-file-download download"
    @click="handleOnDownload($event, item)"
  />
</template>
<script>
export default {
  name: 'DownloadLink',
  components: {},
  props: ['item'],
  methods: {
    handleOnDownload: function(e, item) {
      e.preventDefault()
      const blob = new Blob([item.markdownText], { 'type' : 'text/plain' })
      let link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = `${item.title}.md`
      link.click()
    }
  }
}
</script>
<style lang="scss">
  .download {
    &:hover {
      color: hsl(204, 86%, 53%);
    }
  }
</style>
