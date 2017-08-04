<template>
  <div class="PlayListDetail" id="playlist_detail" ref="playlistdetail">
    <div> 
      <!--顶部返回栏-->
      <md-toolbar class="md-dense songlist">
        <md-button class="md-icon-button">
          <md-icon @click.native="back">arrow_back</md-icon>
        </md-button>
        <h2 class="md-title" style="flex: 1">歌单</h2>
        <md-button class="md-icon-button"></md-button>
      </md-toolbar>
      

      <div class="songlist-bg-wrap gradient-wrap">
        <div class="songlist-info">
          <!--歌单的封面信息(图片，播放次)-->
          <div class="songlist-img">
            <img class="gradient-img" :src="playlist.coverImgUrl" alt="">
            <!--播放的次数-->
            <div class="play-views" v-if="playlist.playCount">
              <i class="iconfont icon-erjiline">{{playlist.playCount}}</i>
            </div>
          </div>
          <!--歌单的标题-->
          <div class="songlist-title">
            <h3>{{curPlaylistDetail.name || playlist.name}}</h3>
            <div class="songlist-avatar">
              <div class="songlist-avatar-img">
                <img :src="playlist.creator.avatarUrl" alt="" v-if="JSON.stringify(playlist) !== '{}'">
                <img src="../assets/images/playlist-avatar.png" v-else alt="">  
              </div>
              <span v-if="JSON.stringify(playlist) !== {}">{{playlist.creator.nickname}}</span>
              <i class="iconfont icon-jiantou"></i>
            </div>
          </div>
        </div>
        <!--歌单的操作-->
        <div class="songlist-operating">
          <div class="songlist-op-item">
            <i class="iconfont icon-wenjianjia"></i>
            <span>{{playlist.subscribedCount || '收藏'}}</span>
          </div>
          <div class="songlist-op-item">
            <i class="iconfont icon-pinglun"></i>
            <span>{{playlist.commentCount || '评论'}}</span>
          </div>
          <div class="songlist-op-item">
            <i class="iconfont icon-icglobaltitlebar48iconfontshare"></i>
            <span>{{playlist.shareCount || '分享'}}</span>
          </div>
          <div class="songlist-op-item">
            <i class="iconfont icon-download"></i>
            <span>下载</span>
          </div>
        </div>
        <div class="songlist-bg" ref="songlist_bg" :style="`backgroundImage: url(${this.playlist.coverImgUrl});`"></div>
      </div>

      <div class="song-list">
        <div class="play-bar">
          播放全部  
        </div>
        <div class="song-item" v-for="(item,index) in playlist.tracks" :key="index">
          <div class="song-index">{{index + 1}}</div>
          <div class="song-info" @click="playMusic(item,id)">
            <p class="song-name">{{item.name}}
              <span class="song-desc" v-show="item.alia[0]">{{item.alia[0]}}</span>
            </p>
            <p class="song-singer">
              <span v-for="(itemname,index) in item.ar" :key="index">{{itemname.name}}</span>
            </p>
          </div>
          <div class="song-option">
            <i class="iconfont icon-more1170511easyiconnet"></i>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Grade from 'grade-js'
import {mapState} from "vuex"
import  filters from '../assets/js/filters'
export default {
  data () {
    return {
      playlist:{creator:''}, //歌单列表
      playListPanel:[], //播放列表中每首歌的名字，id，和作曲家
      loading:true,
    }
  },
  computed:{
    ...mapState([
      'curPlaylistDetail'
    ])
  },
  created(){
    this.getSonglist()
  },
  mounted(){

  },
  methods:{
    getSonglist() {
      axios.get(`/api/playlist/detail?id=${this.$route.params.id}`).then((res) => {
        // console.log(res.data.playlist)
        this.loading = false
        this.playlist = res.data.playlist
        let songobj
        this.playlist.tracks.forEach((val) => {
          // 一首歌曲的id和歌曲名
          /*
           "ar": [{
            "id": 9944,
            "name": "薛凯琪",
            "tns": [],
            "alias": []
          }}
          */
          songobj = {
            id: val.id,
            name: val.name,
            artist: val.ar
          },
          this.playListPanel.push(songobj)
        })
      }).catch((err) => {
        console.log(err)
      })
    },
    back() {
      this.$router.go(-1)
    },
    // 点击某一个歌曲时，播放该歌曲
    playMusic(id){
      this.$store.state.showPlayer = true //显示播放歌曲的底边栏
      function getUrl(){
        return axios.get(`/api/music/url?id=${id}`)
      }
      function getDetail(){
        return axios.get(`/api/song/detail?ids=${id}`)
      }
      function getLyric(){
        return axios.get(`/api/lyric?id=${id}`)
      }
      axios.all([getUrl(),getDetail(),getLyric()]).then(
        axios.spread((res1,res2,res3) => {
          const arr = [res1,res2,res3]
          this.$store.dispatch('curPlayMusic', arr)
          this.$store.dispatch('switchPlaying', true)
          this.$store.dispatch('playList',this.playListPanel)
        })
      )
    }
  },
  filters:{
    filters
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../assets/css/base.styl'
.PlayListDetail
  // background baseColor
  .md-toolbar.songlist
    position fixed
    left 0 
    top 0 
    right 0
    background-color rgba(255,255,255,.03)
    z-index 1
    h2
      font-size .28rem
  .songlist-bg-wrap
    position relative
    height 4.4rem
    background rgba(64,46,32,.3)
    padding 1rem .4rem .2rem
    color #fff
    overflow hidden
    .songlist-info
      display flex 
      .songlist-img
        position relative
        wh(2.32rem)
        img
          wh(100%)
        .play-views
          display flex
          align-items center
          position absolute
          right .1rem
          top .1rem
          font-size .2rem
          i
            margin-right .06rem
            font-size .2rem
      .songlist-title
        flex 1
        margin-left .4rem
        padding-top .2rem
        h3
          line-height 1.4
          font-size .28rem
        .songlist-avatar
          display flex
          align-items center
          margin-top .5rem
          .songlist-avatar-img
            overflow hidden
            border-radius 50%
            ava(.5rem)
          span      
            margin-left .2rem
            font-size .24rem
          .iconfont
            font-size .2rem    
    .songlist-operating
      display flex
      align-items center
      margin-top .1rem
      height 1rem
      .songlist-op-item
        dfcc()
        flex-direction column
        flex 1
        i
          font-size .32rem
        span 
          margin-top .06rem
          font-size .24rem
    .songlist-bg
      width 100%
      position absolute
      left 0
      top 0
      height 100%
      z-index -1
      background-size 100% 100%
      background-repeat no-repeat
      filter: blur(10px)
  .song-list
    width 100%
    .play-bar
      display flex
      height .92rem
      padding 0 .3rem
      align-items center
      border-bottom 1px solid #e6e6e6
    .song-item
      width 100%
      display flex
      height 1rem
      border-bottom 1px solid #e6e6e6
      .song-index
        dfcc()
        width .9rem
      .song-info
        display flex
        flex-direction column
        justify-content center
        flex 1
        overflow hidden
        .song-name
          line-height: 1.2
          font-size .28rem
          .song-desc
            color #e6e6e6
            font-size .24rem
        .song-singer
          line-height: 1.2
      .song-option
        display flex
        justify-content center
        align-items center
        width .9rem
        color #e6e6e6
</style>