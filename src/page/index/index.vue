<template>
  <div class="index">
    <md-button-toggle md-single class="index">
      <md-button class="md-toggle"  @click.native="indexTab('recommend')">个性推荐</md-button>
      <md-button @click.native="indexTab('songlist')">歌单</md-button>
      <md-button @click.native="indexTab('radio')">主播电台</md-button>
      <md-button @click.native="indexTab('top')">排行榜</md-button>
    </md-button-toggle>
     <transition :name="transitionName">
      <keep-alive>
        <router-view class="index-child-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    data () { 
      return {
        transitionName: ''
      }
    },
    methods:{
      indexTab(tab) {
        this.$router.push({path: `/root/index/${tab}`})
      } 
    },
    watch:{

    }
  }
</script>

<style lang="stylus">
  .index-tab
    display flex
    li
      display flex
      align-items center
      justify-content center
      margin-top 0 !important
      height 2rem
      flex 1
      a:not(.md-button)
        width: 100%
        height: 100%
        display: flex
        justify-content: center
        align-items: center
        font-size: pr(14)
        color: #666
        border-bottom: 2px solid #fff
        &:hover 
          color #d33a31
          text-decoration: none
          border-bottom-color #d33a31
  .md-button-toggle.index 
    // position: fixed;
    // top: .96rem
    left:0;
    right:0;
    z-index:1000
  .md-theme-default.md-button-toggle 
    display: flex;
    .md-button 
      flex: 1;    
      border-bottom: 3px solid #fff;
      background-color: #fff;
    .md-toggle 
      color:#d33a31 !important
      background-color: #fff !important;
      border-bottom: 3px solid #d33a31;
    
  /* 上面是为了保证滑动的时候不出现抖动情况 */
  .index-child-view {
    position: absolute;
    left:0;
    top:85px
    /*height: 100%;*/
    width: 100%;
    transition: all .3s cubic-bezier(.55,0,.1,1);
    background-color: #fff;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  /* 当child-view的内容过多时会撑开child-view使得内部能够滚动 */
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(7.5rem, 0);
    transform: translate(7.5rem, 0);
    transition-delay: .3s;
    -webkit-transition-delay: .3s;
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-7.5rem, 0);
    transform: translate(-7.5rem, 0);
    transition-delay: .3s;
    -webkit-transition-delay: .3s;
  }
  .slide-enter-active {
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
  }
  .slide-leave-active {
    -webkit-transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
    
</style>
