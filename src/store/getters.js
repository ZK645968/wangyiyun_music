export default {
  curId(state){
    return state.curPlayMusic.detail?state.curPlayMusic.detail.id: null
  }
}
// 得到id