<template>
  <div class="radio">
    <h1>radio</h1>
    <ul>
      <li v-for="item in lists" :key="item.a">
        {{item.b}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lists:[
        {a:'111', b:'222'},
        {a:'333',b:'444'}
      ]
    }
  }
}
</script>

<style lang="stylus">
</style>
