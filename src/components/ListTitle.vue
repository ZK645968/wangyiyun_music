<template>
  <h3 class="list-title">{{title}}<i class="iconfont icon-jiantou"></i></h3>
</template>

<script>
  export default {
    props:['title']
  }
</script>

<style scoped lang="stylus" scoped rel="stylesheet/stylus">
@import '../assets/css/base.styl'
  .list-title
    margin .26rem 0
    border-left .06rem solid baseColor
    font-size .28rem
    text-indent .2rem
    .iconfont
      position relative
      top -1px
      height 100%
      font-size .24rem
</style>
