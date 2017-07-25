const filters  =  {
  playCount(value) {
    if(value < 10000) {
      return value
    } else {
      value = value + ''
      return value.slice(0, value.length - 4 )
    }
  }
}

export default filters