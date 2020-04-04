<template>
  <div>
    <audio-widget v-if="isSoundcloudLoaded" />
  </div>
</template>

<script>
import AudioWidget from '@/components/tracklist/AudioWidget.vue'

export default {
  components: {
    AudioWidget
  },
  data() {
    return {
      isSoundcloudLoaded: false
    }
  },
  head() {
    return {
      title: 'Payment Page - My awesome project', // Other meta information
      script: [
        {
          hid: 'soundcloud',
          src: 'http://connect.soundcloud.com/sdk.js',
          defer: true,
          // Changed after script load
          callback: () => {
            this.isSoundcloudLoaded = true
            console.log('hoi')
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
