<template>
  <div class="recommend">
    <scroll class="recommend-content" ref="scroll">
      <div>
        <div class="slider-wrapper" v-if="recommends.length != 0">
          <slider>
            <!--放在插槽中的内容-->
            <div v-for="(item, index) in recommends" :key="index">
              <!--遍历轮播图的数据-->
              <a :href="item.linkUrl">
                <img :src="item.picUrl" alt="" @load="loadImg" class="needsclick">
              </a>
              <!--遍历轮播图的数据结束-->
            </div>
            <!--放在插槽中的内容结束-->
          </slider>
          <!--使用slider组件结束-->
        </div>

        <!--推荐列表-->
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="(item, index) in discList" :key="index" class="item" @click="selectItem(item)">
              <div class="icon">
                <!--<img :src="item.imgurl" alt="" width="60" height="60">-->
                <img v-lazy="item.imgurl" alt="" width="60" height="60">
              </div>
              <div class="text">
                <!--<h2 class="name">{{item.creator.name}}</h2>-->
                <!--<p class="desc">{{item.dissname}}</p>-->

                <!--todo v-html的作用-->
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import {getRecommend, getDiscList} from 'api/recommend.js'
import {ERR_OK} from 'api/config.js'
import Scroll from 'base/scroll/scroll.vue'
import Slider from 'base/slider/slider.vue'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      recommends: [],
      // 推荐歌单list
      discList: []
    }
  },
  components: {
    Slider,
    Scroll
  },
  created () {
    this._getRecommend()

    setTimeout(() => {
      this._getDiscList()
    }, 2000)
  },
  methods: {
    // 获取数据
    _getRecommend () {
      console.log(1)
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },

    _getDiscList () {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list
        }
      })
    },

    // 当图片加载的时候进行调用
    loadImg () {
      if (!this.checkloaded) {
        this.checkloaded = true
        this.$refs.scroll.refresh()
      }
    },

    // 点击歌单的时候调用
    selectItem (item) {
      this.$router.push({
        path: `/recommend/${item.dissid}`
      })
      this.setDisc(item)
    },

    ...mapMutations({
      setDisc: 'SET_DISC'
    })
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"

.recommend
  position: fixed
  width: 100%
  top: 88px
  bottom: 0
  .recommend-content
    height: 100%
    overflow: hidden
    .slider-wrapper
      position: relative
      width: 100%
      overflow: hidden
    .recommend-list
      .list-title
        height: 65px
        line-height: 65px
        text-align: center
        font-size: $font-size-medium
        color: $color-theme
      .item
        display: flex
        box-sizing: border-box
        align-items: center
        padding: 0 20px 20px 20px
        .icon
          flex: 0 0 60px
          width: 60px
          padding-right: 20px
        .text
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          font-size: $font-size-medium
          .name
            margin-bottom: 10px
            color: $color-text
          .desc
            color: $color-text-d
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
