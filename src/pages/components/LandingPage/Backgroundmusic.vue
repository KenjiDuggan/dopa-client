<template>
  <div class="container">
    <button v-on:click="playSound()">
      Test
    </button>
  </div>
</template>

<script>
import {Howl, Howler} from 'howler';

export default {
  methods: {
    playSound(file_name) {
      var sound = new Howl({
        src: ['../public/audio/open-space.mp3']
      });
    sound.play();
    }
  },
}
</script>
