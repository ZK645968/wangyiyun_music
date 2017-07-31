import * as types from './mutations-type'

export default {
  [types.CUR_PLAYLIST_INFO](state, obj){
    state.CUR_PLAYLIST_INFO = obj
  },
  [types.SET_USERID](state, id){
    state.userid = id;
  }
}