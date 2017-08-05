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
  showCurLyric({commit}, lyric) {
    commit(types.SHOW_CUR_LYRIC, lyric)
  },
  showPlayList({commit}, status) {
    commit(types.SHOW_PLAY_LIST, status)
  },
  playList({commit}, arr) {
    commit(types.PLAY_LIST, arr)
  },
  commentId({commit}, id) {
    commit(types.COMMENT_ID, id)
  },
  curMusicIndex({commit}, index) {
    commit(types.CUR_MUSIC_INDEX, index)
  }
}