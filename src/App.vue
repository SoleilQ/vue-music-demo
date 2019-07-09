<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!--使用keep-alive进行缓存-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!--播放器不属于任何路由-->
    <player></player>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header.vue'
import Tab from 'components/tab/tab.vue'
import Player from 'components/player/player.vue'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab,
    Player
  }
}
</script>
