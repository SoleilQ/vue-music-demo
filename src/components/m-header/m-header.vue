<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">SoleiQ音乐</h1>
  </div>
</template>

<script>
export default {
  name: 'MHeader'
}
</script>

<style lang="stylus" scoped >
@import "~common/stylus/variable.styl"
@import "~common/stylus/mixin.styl"
.m-header
  position relative
  height: 44px
  text-align: center
  color: $color-theme
  font-size: 0
  .icon
    display: inline-block
    vertical-align: middle
    margin-top: 6px
    width: 30px
    height: 32px
    margin-right: 9px
    bg-image('logo')
    background-size: 30px 32px
  .text
    display: inline-block
    vertical-align: top
    line-height: 44px
    font-size: $font-size-large
</style>
