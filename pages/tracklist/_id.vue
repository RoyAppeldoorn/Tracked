<template>
  <div>
    <AudioWidget :song="song" />
  </div>
</template>

<script>
import AudioWidget from '@/components/tracklist/AudioWidget.vue'

export default {
  components: {
    AudioWidget
  },
  asyncData({ store }) {
    return store.dispatch('tracklists/getTracklist').then(song => {
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
