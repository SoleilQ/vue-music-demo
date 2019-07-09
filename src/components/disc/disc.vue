<template>
  <transition name="slide">
    <music-list :title="title" :bgImage="bgImage" ></music-list>
  </transition>
</template>

<script>
import MusicList from 'components/music-list/music-list'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      songs: []
    }
  },
  components: {
    MusicList
  },
  computed: {
    ...mapGetters([
      'disc'
    ]),
    title () {
        return this.disc.dissname
    },
    bgImage () {
      return this.disc.imgurl
    }
  }
}
</script>

<style lang="stylus" scoped>
.slide-enter-active, .slider-leave-active
  transition all 0.5s
.slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>

