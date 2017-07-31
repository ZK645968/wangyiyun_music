import *  as types from './mutations-type'

export default{
  curPlaylistDetail({commit}, obj) {
    commit(types.CUR_PLAYLIST_INFO, obj)
  },
  curPlayMusic({commit}, arr) {
    commit(types.CUR_PLAY_MUSIC, arr)
  },
  setUserId({commit}, id){
    commit(types.SET_USERID, id)
  }
}