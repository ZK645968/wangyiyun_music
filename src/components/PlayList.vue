<template>
  <div class="play-list" :class="{showlist:showPlayList}">
    <div class="play-list-title">
      播放列表（{{playList.length}}）{{curMusicIndex}}
    </div>
    <div class="play-list-content">
      <ul>
        <li class="play-list-item" v-for="(item,index) in playList" :key="index">
          <div
            class="song-name"
            :class="{current: item.id === curId}"
            @click="playMusicFromList(item.id)">
            <i class="iconfont icon-iconfonthuodonggonggao"></i>{{item.name}} -
            <span v-for="(value,index) in item.artist" :key="index">{{value.name}}
              <span v-if="index !== item.artist.length - 1"> / </span>
            </span>
          </div>
          <div class="song-del"><i class="iconfont icon-shanchu"></i></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState,mapGetters } from 'vuex'
import url from '../assets/js/api'
export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState([
      'showPlayList', 'playList','curPlayMusic','curMusicIndex'
    ]),
    ...mapGetters([
      'curId'
    ]),
    curMusicIndexComputed() {
      if (this.playList.length > 0) {
        return this.playList.findIndex((ele) => {
          return ele.id === this.curId
        })
      } else {
        return 0
      }
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.$store.dispatch('curMusicIndex', this.curMusicIndexComputed)
    })
  },
  methods:{
    hideCover(){
      this.$store.dispatch('showPlayList', false)
    },
    playMusicFromList(id){
      function getUrl(){
        return axios.get(`api/music/url?id=${id}`)
      }
      function getDetail(){
        return axios.get(`api/song/detail?ids=${id}`)
      }
      function getLyric(){
        axios.get(`api/lyric?id=${id}`)
      }
      axios.all([getUrl(), getDetail(), getLyric()])
      .then(axios.spread((res1, res2, res3) => {
        const arr = [res1, res2, res3]
        this.$store.dispatch('curPlayMusic', arr)
        this.$store.dispatch('switchPlaying', true)
      }))
    }
  },
  watch:{
    curMusicIndex(val, old){
      this.playMusicFromList(this.playList[val].id)
      // console.log(this.playList[val].id)
    }
  }
}
</script>

<style lang="stylus" scoped  rel="stylesheet/stylus">
@import '../assets/css/base.styl'

  .play-list 
    position fixed
    left 0
    bottom 0
    right 0
    height 7.88rem
    background-color #fff
    z-index 1003
    transform translate(0,100%)
    &.showlist
      transition all .3s
      transform translate(0,0)
    .play-list-title
      display: flex
      justify-content: space-between
      align-items: center
      padding: 0 .2rem
      height: 1.6rem
      font-size: .28rem
      border-bottom: 1px solid #e0e0e0
    .play-list-content
      height 7.08rem
      overflow-y auto
      ul
        width 100%
        .play-list-item 
          display: flex
          justify-content: space-between
          align-items: center
          height: .84rem
          padding: 0 .2rem
          border-bottom: 1px solid #e0e0e0
          .song-name
            flex 1
            font-size .28rem
            line-height 1.5
            margin-right .2rem
            .iconfont
              display none
              &.current
                color baseColor
                .iconfont
                  display inline
                  margin-top 2px
                  margin-right 5px
                  font-size .28rem
                  span
                    color baseColor
              span
                color baseColor        
                font-size .2rem
          .song-del.iconfont
            font-size .36rem

</style>
