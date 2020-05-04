<template>
  <div>
    <AudioWidget :song="song" />
  </div>
</template>

<script>
import axios from 'axios'
import AudioWidget from '@/components/tracklist/AudioWidget.vue'

export default {
  components: {
    AudioWidget
  },
  asyncData() {
    return axios
      .get('http://localhost:8082/tracklist/4028812371c0c39f0171c0d423fd0000')
      .then(res => {
        return { song: res.data }
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  },
  created() {
    // eslint-disable-next-line no-console
    console.log(this.song)
  }
}
</script>

<style lang="scss" scoped></style>
