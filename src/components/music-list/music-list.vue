<template>
  <div class="munu-list">
    <!--返回按钮-->
    <div class="back">
      <i class="icon-back" @click="back"></i>
    </div>

    <h1 class="title" v-html="title"></h1>

    <div class="bg-image" :style="bgStyle" ref="bgImage"></div>
  </div>
</template>

<script>
export default {
  props: {
    bgImage: {
      type: String,
      defalt: ''
    },
    title: {
      type: String,
      default: ''
    },
  },
  computed: {
    bgStyle() {
      return `background-image: url(${this.bgImage})`
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"

.must-list
  position fixed
  z-index 100
  top 0
  bottom 0
  right 0
  background $color-background
  .back
    position absolute
    top: 0
    left: 6px
    z-index: 50
    .icon-back
      display: block
      padding: 10px
      font-size: $font-size-large-x
      color: $color-theme
  .title
    position: absolute
    top: 0
    left: 10%
    z-index: 40
    width: 80%
    no-wrap()
    text-align: center
    line-height: 40px
    font-size: $font-size-large
    color: $color-text
  .bg-image
    position: relative
    width: 100%
    height: 0
    padding-top: 70%
    transform-origin: top
    background-size: cover

</style>

