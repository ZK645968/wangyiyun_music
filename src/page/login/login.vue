<template>
  <div class="login">
    <div class="logo">
      <img src="../../assets/images/logo.jpg" alt="">
    </div>
    <div class="login-wrap">
      <div class="shuruwrap">
        <input type="text" id="" v-model="user" placeholder="请输入手机号">
        <input type="password" v-model="pass" placeholder="请输入密码">
        <div class="btn-wrap">
          <button class="login_btn btn" @click="login()">登录</button>
          <button class="reg_btn btn">注册</button>
        </div>
      </div>
    </div>
    <div class="bg">
      <img src="../../assets/images/login_bg.png" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import store from '../../store/index'
export default {
  data(){
    return{
      user:'',
      pass:''
    }
  },
  methods:{
    login(){
      // console.log(this.user)
      // console.log(this.pass)
      axios.get(`/api/login/cellphone?phone=${this.user}&password=${this.pass}`).then((res) => {
        console.log(res.data)
        if(res.data.code != 200){
          console.log("用户名或密码错误")
          // 264491262
        }else{
          console.log("登录成功")
          this.$store.dispatch('setUserId',res.data.account.id)
          this.$router.push({name:'shouye'})
        }
      }).catch((err) => {
        console.log(err)
      })

      // this.$router.push({name:'shouye'})
    }
  }
}
</script>

<style lang="stylus">
  .login
    width 100%
    height 100%
    .logo
      padding-top 1.8rem
      width 100%
      img 
        width 120px
        margin 0 auto
        display block
    .login-wrap
      width 100%
      height 5rem
      // margin-left auto
      // margin-right auto
      // margin-top calc((100%-5rem) / 2)
      position absolute
      top 45%
      margin-top -2.5rem
      // background #6cf
      .shuruwrap
        width 80%
        height 4rem
        // background #6fc
        position absolute
        top 50%
        margin-top -2rem
        margin-left 10%
        padding-top 30px
        input
          outline none
          font-size 16px
          line-height 16px
          padding-left 15px
          display block
          margin 0 auto
          width 95%
          height 40px
          border 1px solid red
          border-radius 20px
          &:nth-child(2)
            margin-top 15px
        .btn-wrap
          width 95%
          height 50px
          // background blue
          margin 0 auto
          margin-top 20px
          .btn
            width 48%
            height 75%
            border-radius 18px
            outline none
            background #fff
            border none
            font-size 16px
            line-height 16px
          .login_btn
            background red  
            color #fff
          .reg_btn
            float right
            border 1px solid #c1c1c1
    .bg
      position fixed
      bottom 0
      left 0
      width 100%
      font-size 0
      img
        width 100%
        height 100%
</style>
