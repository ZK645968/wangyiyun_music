import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const state = {
  userid:'',
  curPlaylistDetail:{}, //当前播放列表的详细信息
  curPlayMusic: {},     //当前播放的音乐
  playing: false,       //是否在播放
  showPlayer: false,    //是否显示播放界面
  curLyric: '',         //歌词
  showPlayerList: [],   //显示播放列表
  playList: [],         //播放列表
  showCover: false,     //是否显示覆盖层
  commentId :null,      //
  showComment: null,
  curMusicIndex: 0
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

