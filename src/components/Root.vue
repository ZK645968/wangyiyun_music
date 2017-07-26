<template>
  <div class="root_">
    <md-toolbar class="md-dense root">
      <!--左边的菜单   -->
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <!--中间的三个切换 -->
      <h2 class="md-title" style="flex:1">
        <i class="iconfont"
           :class="{
              'icon-yinyue': i === 0,
              'icon-wangyiyunyinlezizhi': i === 1,
              'icon-shejiao': i === 2,
              'active': i === cur
            }"
           @click="switchTab(i)"
           v-for="(n,i) in 3" :key="i"></i>
      </h2>
      <!--右边的搜索-->
      <md-button class="md-icon-button">
        <router-link to='/search'>
          <md-icon>search</md-icon>
        </router-link>
      </md-button>
    </md-toolbar>

    <transition :name="transitionName">
      <keep-alive>
        <router-view class="root-child-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import '../assets/css/font.styl'


export default {
 data () {
   return {
     cur: 1,
     transitionName:"",
   }
 },
 methods:{
   switchTab(index) {
      this.cur = index
      switch(index){
        case 0:this.$router.push({path: '/root/home'}); break;
        case 1:this.$router.push({path: '/root/index'}); break
        case 2:this.$router.push({path: '/root/contact'}); break
      }
   }
 }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
@import '../assets/css/base.styl'
  .root_
    z-index 100
    .md-dense
      background baseColor !important
    a
      color rgba(255,255,255,.85) !important
    .md-title
      display flex
      justify-content center
      .iconfont
        // color #e58983
        color rgba(255,255,255,.5)
        margin-right 0.5rem
        &.active
          color #fff
        &:nth-of-type(1) 
          font-size: .4rem
        &:nth-of-type(2) 
          font-size: .6rem
        &:nth-of-type(3) 
          font-size: .5rem
        
  .root-child-view
    transition: all .3s cubic-bezier(.55, 0, .1, 1) 
    overflow: auto
  .root-slide-left-enter, .root-slide-right-leave-active 
    opacity: 0
    -webkit-transform: translate(7.5rem, 0)
    transform: translate(7.5rem, 0)
    transition-delay: .3s
    -webkit-transition-delay: .3s
  .root-slide-left-leave-active, .root-slide-right-enter 
    opacity: 0
    -webkit-transform: translate(-7.5rem, 0)
    transform: translate(-7.5rem, 0)
    transition-delay: .3s
    -webkit-transition-delay: .3s
  
  .root-slide-enter-active 
    -webkit-transition: all .3s ease
    transition: all .3s ease
  
  .root-slide-leave-active 
    -webkit-transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  
</style>
