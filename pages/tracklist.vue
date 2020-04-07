<template>
  <div class="container mx-auto bg-white h-screen">
    <audio-widget v-if="isSoundcloudLoaded" />
  </div>
</template>

<script>
import AudioWidget from '@/components/tracklist/AudioWidget.vue';

export default {
  components: {
    AudioWidget
  },
  data() {
    return {
      isSoundcloudLoaded: false
    };
  },
  head() {
    return {
      title: 'Payment Page - My awesome project', // Other meta information
      script: [
        {
          hid: 'soundcloud',
          src: 'https://w.soundcloud.com/player/api.js',
          // Changed after script load
          callback: () => {
            this.isSoundcloudLoaded = true;
            console.log('hoi');
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
