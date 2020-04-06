<template>
  <div>
    <iframe
      id="sc-widget"
      width="100%"
      height="166"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      :src="
        embed_url
          ? embed_url
          : `https://w.soundcloud.com/player/?url=https://soundcloud.com/1001tracklists/san-holo-exclusive-mix&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`
      "
    >
    </iframe>
    <section class="flex items-center justify-center">
      <ul>
        <li><a class="track-link" href="">0:00</a> - Intro</li>
        <li><a class="track-link" href="">0:10</a> - Lorem ipsum</li>
        <li><a class="track-link" href="">1:03</a> - Lorem ipsum</li>
        <li><a class="track-link" href="">5:23</a> - Lorem ipsum</li>
        <li><a class="track-link" href="">30:47</a> - Lorem ipsum</li>
      </ul>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  asyncData() {
    return axios.get('http://localhost:8082/tracklist/1').then(response => {
      // Note that you can't access the `this` instance inside asyncData
      // this.products = response.data
      // https://w.soundcloud.com/player/?url=https://soundcloud.com/1001tracklists/san-holo-exclusive-mix&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true

      // eslint-disable-next-line camelcase
      const embed_url = response.data.embed_url;
      return { embed_url };
    });
  },
  data: () => ({
    embed_url: null
  }),
  computed: {},
  mounted() {
    // Load embedded player
    const self = this;
    // eslint-disable-next-line no-undef
    this.widget = SC.Widget(document.getElementById('sc-widget'));
    const trackLinks = document.querySelectorAll('.track-link');
    for (let i = 0; i < trackLinks.length; i++) {
      trackLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        // Note: there seems to be a weird unexpected behavior in that
        // the first click doesn't actually seek if the widget isn't
        // playing. I confirmed this in Soundcloud's API playground
        // so if we detect we are paused, we want to trigger a play first
        // before we seekTo otherwise it doesn't work at all
        self.widget.isPaused(function(e) {
          if (e) {
            self.widget.play();
            self.widget.seekTo(self.convertTimeToMs(this.innerHTML));
          }
        });
        self.widget.seekTo(self.convertTimeToMs(this.innerHTML));
        self.widget.setVolume(5);
      });
    }
  },
  methods: {
    convertTimeToMs(time) {
      const timeSplit = time.split(':');
      let hours = 0;
      let minutes = 0;
      let seconds = 0;
      let ms = 0;
      if (timeSplit.length > 2) {
        hours = parseInt(timeSplit[0]);
        minutes = parseInt(timeSplit[1]);
        seconds = parseInt(timeSplit[2]);
      } else {
        minutes = parseInt(timeSplit[0]);
        seconds = parseInt(timeSplit[1]);
      }
      ms = hours * 3600000 + minutes * 60000 + seconds * 1000;
      return ms;
    }
  }
};
</script>

<style lang="scss" scoped></style>
