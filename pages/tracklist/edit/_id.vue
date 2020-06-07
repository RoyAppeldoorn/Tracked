<template>
  <div>
    <AudioWidget :song="song" />
    blabla
  </div>
</template>

<script>
import AudioWidget from '@/components/tracklist/AudioWidget.vue'

export default {
  components: {
    AudioWidget
  },
  asyncData({ route, store }) {
    return store.dispatch('tracklists/getTracklist', route.params.id).then(song => {
      return { song }
    })
  },
  created() {
    // eslint-disable-next-line no-console
    console.log(this.song)
  }
}
</script>

<style lang="scss" scoped></style>
