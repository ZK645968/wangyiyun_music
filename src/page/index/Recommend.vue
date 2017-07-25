<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in banners" :key="index">
        <img :src="item.pic" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="today-recommend">

      <div class="recommend-item  animated pulse">
        <div class="circle-b">
          <div class="circle-t">
            <i class="iconfont icon-501"></i>
          </div>
        </div>
        <div class="itemname">
          私人FM
        </div>
      </div>

      <div class="recommend-item  animated pulse">
        <div class="circle-b">
          <div class="circle-t">
            <i class="iconfont icon-rili"></i>
          </div>
        </div>
        <div class="itemname">
          每日歌曲推荐
        </div>
      </div>

      <div class="recommend-item  animated pulse">
        <div class="circle-b">
          <div class="circle-t">
            <i class="iconfont icon-paixing"></i>
          </div>
        </div>
        <div class="itemname">
          云音乐热歌榜
        </div>
      </div>

    </div>

    <div class="recommend-list">
      <list-title :title="'推荐歌单'"></list-title>
      <ul class="recl-list2">
        <li class="recom-list-item2" v-for="(item, index) in recommendList" :key="index" @click="toSongListDetail(item.id, item)">
          <div><img :src="item.picUrl" alt=""></div>
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>

    <div class="recommend-list">
      <list-title :title="'独家放送'"></list-title>
      <ul class="recl-list3">
        <li class="recom-list-item3" v-for="(item,index) in dujiaList" :key="index" @click="toSongListDetail(item.id, item)">
          <div> 
            <img  v-if="index < 2" :src="item.sPicUrl" alt="">
            <img v-else :src="item.picUrl" alt="">
          </div>
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
import ListTitle from "@/components/ListTitle"

export default {
  data () {
    return {
      swiperOption:{
        pagination:'.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        loop: true
      },
      banners:[], // 轮播图
      recommendList: [],
      dujiaList:[]
     
    }
  },
  created() {
    this.getBanner()
    this.getRecommendList()
    this.getDujia()
  },
  mounted() {
    this.$nextTick(() => {

    })
  },
  methods:{
    getBanner() {
      axios.get('/api/banner').then(res => {
        console.log('轮播信息====================', res.data)
        this.banners = res.data.banners;
      })
    },
    getRecommendList() {
      axios.get('/api/personalized').then(res => {
          console.log('推荐歌单信息==================', res.data.result)
          this.recommendList = res.data.result
        })
    },
    getDujia(){
      axios.get('/api/personalized/privatecontent').then( res => {
        console.log('独家内容=====================', res.data.result)
        this.dujiaList = res.data.result
      })
    },
    toSongListDetail(id, obj){
      this.$router.push({path: '/playlistdetail/' + id})
      this.$store.dispatch('curPlaylistDetail', obj)
    }
  },
  components:{
    ListTitle
  }
}
</script>

<style lang="stylus">
  .today-recommend
    display flex
    align-items center
    height 1.7rem
    border-bottom 1px solid #eee
    overflow hidden
    .recommend-item 
      display flex
      align-items center
      justify-content center
      flex-direction column
      flex 1
      .circle-b
        display flex
        justify-content center
        align-items center
        height .95rem
        width .95rem 
        border-radius 50%
        border 1px solid #d33a31
        .iconfont 
          font-size 0.5rem
          color #d33a31
      .itemname
        font-size .2rem  
        margin-top  8px 
  .recommend-list  
    .recl-list2  
      display flex
      flex-wrap wrap
      .recom-list-item2
        width 2.48rem
        margin-bottom .2rem
        margin-right 1px
        &:nth-child(3n)
          margin-right 0
        div
          height 2.48rem
          img
            height 100%
            width 100%
        p
          padding 5px
          font-size .25rem
          line-height 1.2
          overflow hidden
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: $n;
          -webkit-box-orient: vertical
  .recommend-list  
    .recl-list3
      display flex
      flex-wrap wrap
      .recom-list-item3
        width 3.73rem
        margin-bottom .2rem
        margin-right 1px
        &:nth-child(2n)
          margin-right 0
        &:nth-child(3n)
          width 100%
        div
          height 2.48rem
          img
            height 100%
            width 100%
        p
          padding 5px
          font-size .25rem
          line-height 1.2
          overflow hidden
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical
</style>
