<template>
  <div id="app">
    <router-view></router-view>
    <player></player>
    <audio-nav></audio-nav>
    <play-list></play-list>
    <cover></cover>
    <comment></comment>
  </div>
</template>

<script>
import AudioNav from './components/AudioNav'
import Player from './components/Player'
import Cover from './components/Cover'
import PlayList from './components/PlayList'
import Comment from './components/Comment'
export default {
  name: 'app',
  data(){
    return {

    }
  },
  components:{
     AudioNav,
     Player,
     PlayList,
     Cover,
     Comment
  }
}
</script>

<style>
#app {
 
}
</style>
