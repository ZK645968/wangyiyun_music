import *  as types from './mutations-type'

export default{
  curPlaylistDetail({commit}, obj) {
    commit(types.CUR_PLAYLIST_INFO, obj)
  },
  // Login
  setUserId({commit}, id){
    commit(types.SET_USERID, id)
  },
  // playListDetail
  switchPlaying({commit}, status){
    commit(types.SWITCH_PLAYING, status)
  },
  curPlayMusic({commit}, arr) {
    commit(types.CUR_PLAY_MUSIC, arr)
  },
}