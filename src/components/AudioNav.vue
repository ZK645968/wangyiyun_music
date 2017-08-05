<template>
  <div class="audio-nav" v-if="JSON.stringify(curPlayMusic) !== '{}'">
    <div class="music-wrap" @click="showPlayer">
      <div class="music-img">
        <img :src="curPlayMusic.detail.al.picUrl" alt="">
      </div>
      <div class="music-icon">
        <p class="music-name" v-if="curPlayMusic">{{curPlayMusic.detail.name}}</p>
        <p class="music-lyric">{{curLyric}}</p>
      </div>
    </div>
    <div class="music-btn">
      <div class="nav-btn-play">
        <i class="iconfont icon-ttpodicon" v-if="!playing" @click="play"></i>
        <i class="iconfont icon-zanting" v-else @click="pause"></i>
      </div>
      <div class="nav-btn-list">
        <i class="iconfont icon-liebiao" @click="showPlayList"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState([
      'curPlayMusic', 'playing', 'curLyric'
    ])
  },
  mounted() {

  },
  methods: {
    play() {
        document.getElementById('music').play()
        this.$store.dispatch('switchPlaying', true)
    },
    pause() {
      document.getElementById('music').pause()
      this.$store.dispatch('switchPlaying', false)
    },
    showPlayer() {
      this.$store.state.showPlayer = true
    },
    showPlayList() {
      this.$store.dispatch('showPlayList', true)
    }
  },
  watch: {
    url(val, old) {
      if (val == nul) {
        alert("播放失败,该歌曲收费")
      }
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../assets/css/base.styl'
  .audio-nav
    display flex
    justify-content space-between
    align-items center
    position fixed
    left 0
    bottom 0
    right 0
    height .9rem
    box-shadow 0 -2px 8px #ccc
    padding .12rem
    background-color #fff
    z-index 500
    .music-wrap
      display flex
      flex 1
      .music-img
        width .66rem
        img
          wh(100%)
      .music-icon
        display flex
        flex-direction column
        justify-content center
        margin-left .2rem
        p
          font-size .24rem
          &:first-of-type
            font-size .24rem
          &:nth-of-type(2)
            margin-top .1rem
            font-size .2rem
            color #666
            height .2rem
    .music-btn
      height 25px
      display flex
      align-items center
      .nav-btn-play
        width 25px
        display: flex
        justify-content: center
        align-items: center    
        wh(100%)    
        border: 1px solid #666
        border-radius: 50%
        i
          font-size .24rem
      .nav-btn-list
        margin-left .3rem
        i
          font-size .36rem
</style>
