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
            <img class="gradient-img" src="" alt="">
            <!--播放的次数-->
            <div class="play-views" v-if="playlist.playCount">
              <i class="iconfont icon-erjiline">{{playlist.playCount}}</i>
            </div>
          </div>
        <!--歌单的标题-->
          <div class="songlist-title">

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
      playlist:{}, //歌单列表
      playListPanel:[], //播放列表中每首歌的名字，id，和作曲家
      loading:true
    }
  },
  computed:{

  },
  created(){
    this.getSonglist()
  },
  mounted(){

  },
  methods:{
    getSonglist() {
      axios.get(`/api/playlist/detail?id=${this.$route.params.id}`).then((res) => {
        console.log(res.data.playlist)
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
        return axios.get(`/api/song/detail?id=${id}`)
      }
      function getLyric(){
        return axios.get(`/api/lyric?id=${id}`)
      }
      axios.all()
    }
  },
  filters:{
    filters
  }
}
</script>

<style>
  
</style>
