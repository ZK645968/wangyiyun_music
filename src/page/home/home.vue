<template>
  <div class="home">
    <div class="local-wrap">
      <ul class="local">
        <li><i class="icon-yinyue iconfont"></i><div>本地音乐</div></li>
        <li><div>最近播放</div></li>
        <li><div>下载管理</div></li>
        <li><div>我的电台</div></li>
        <li><div style="border:none">我的收藏</div></li>
      </ul>
    </div>
    <div class="create-list">
      <div class="crea-list-head">
        <div class="icon"> ^ </div>
        <div class="title">创建的歌单</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import'../../assets/css/font.styl'

  .home
    width 100%
    height 100%
    .local
      list-style none
      li
        line-height .8rem
        height .8rem
        div
          float right
          width 90%
          border-bottom 1px solid #dadcdd
        .iconfont
          padding-left 5px
          font-size .4rem
    .create-list
      width 100%
      // background-color black
      .crea-list-head
        height .7rem
        width 100%
        background-color #e7e9e9
        .icon
          width 30px
          height 100%
          padding 10px
          float left
        .title
          float left
          width 120px
          margin-top 6px
          font-size 15px
          height 15px 
</style>
