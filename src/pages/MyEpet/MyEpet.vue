<template>
  <div class="myEpet">
    <div class="epet_wrap">
      <header class="loginHeader">
        <div class="allwrap">
          <a href="#" class="tab_left" slot="back" @click="$router.back()">
            <i class="iconfont icon-back"></i>
          </a>
          <a href="#" class="tab_right" slot="menus" @click="$router.push('/register')">
           <span>注册</span>
          </a>
        </div>
        <div class="login_white">
          <div class="login_f"></div>
        </div>
        <div class="login_content">
          <ul class="login_style">
            <li class="login_li " :class="{li_sty:loginWay}">
              <a href="#" class="login_a"  @click="switchLoginWay(true)">普通登陆</a>
              <i></i>
            </li>
            <li class="login_li" :class="{li_sty:!loginWay}">
              <a href="#" class="login_a"  @click="switchLoginWay(false)">手机动态获取</a>
              <i></i>
            </li>
          </ul>
        </div>
      </header>
    </div>
    <div class="epet_content">
      <div class="epet_form" v-if="loginWay">
        <div class="username">
          <span class="icon">
            <i class="iconfont icon-yonghu"></i>
          </span>
          <input type="text" class="write" placeholder="手机号/用户名/邮箱" :class="{li_sty:loginWay}" @click="switchLoginWay(true)">
        </div>
        <div class="pwd">
          <span class="icon">
            <i class="iconfont icon-suo"></i>
          </span>
          <input type="text" class="write" placeholder="输入密码" :class="{li_sty:!loginWay}" @click="switchLoginWay(false)">
        </div>
      </div>
      <div class="epet_form" v-if="!loginWay">
        <div class="username">
          <span class="icon">
            <i class="iconfont icon-yonghu"></i>
          </span>
          <input type="text" class="write" placeholder="手机号/用户名/邮箱">
        </div>
        <div class="pwd">
          <span class="icon">
            <i class="iconfont icon-suo"></i>
          </span>
          <input type="text" class="write" placeholder="请输入图片内容" v-model="imageContent">
          <div class="captcha">
            <img class="captchaimg" src="http://localhost:3000/captcha" alt="captcha" @click="changeCaptcha">
          </div>
        </div>
        <div class="rpwd">
          <span class="icon">
              <i class="iconfont icon-icon-"></i>
            </span>
          <input type="password" class="write" placeholder="动态密码"  v-model="captcha">
          <div class="rcaptcha" @click="getCode" v-if="!computeTime">获取动态密码</div>
          <div class="verification" v-if="computeTime">还剩{{computeTime}}s</div>
        </div>
      </div>
    </div>
    <div class="epet_lose"><a href="#">忘记密码？</a></div>
    <div class="epet_login" @click="login">登录</div>
    <div class="work">
      <b>合作网站加载</b>
    </div>
    <div class="web">
      <div class="pay">
        <img src="http://static.epetbar.com/mpet/images/login/login_ico4.png" alt="">
      </div>
      <div class="Tencent">
        <img src="http://static.epetbar.com/mpet/images/login/login_ico2.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import AlertTip from '../../components/AlertTip/AlertTip.vue'
import {reqCaptcha,reqLoginPwd,reqLoginSms} from '../../api/ajax/index'
  export default {
    data(){
      return{
        loginWay:true,
        name:'',
        pwd:'',
        imageContent:'',
        computeTime:0,
        phone:'',
        captcha:'',
        alertText: '',
        alertShow:false
      }
    },
    computed:{
      rightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      async getCode(){
        if (this.rightPhone){
          this.computeTime=30;
          let intervalId=setInterval(()=>{
            this.computeTime--;
            if (this.computeTime===0){
              clearInterval(intervalId)
            }
          },1000)
        }
      },
      closeTip () {
        this.alertShow = false
      },
      changeCaptcha(event){
        event.target.src = 'http://localhost:3000/captcha?time=' + new Date()
      },
      switchLoginWay(isShow){
          this.loginWay=isShow
      },
      async login(){
        let result
        if (this.loginWay){
          let {name,pwd}=this;
          if (!name){
            this.alertShow=true
            this.alertText='请输入用户名'
            return
          }else if (!pwd){
            this.alertShow=true
            this.alertText='请输入密码'
            return
          }
          result = await nameLogin({name, pwd})
        }else {
          let {rightPhone,phone,captcha}=this
          if (!rightPhone){
            this.alertShow = true
            this.alertText = '请输入正确的手机号'
            return
          }else if (!captcha){
            this.alertShow = true
            this.alertText = '请输入正确的验证码'
            return
          }
          result=await reqLoginSms(phone, {code:captcha})
        }
        if (result.code ===0){
          let userInfo=result.data;
          this.$store.dispatch('recordUserInfo',userInfo)
          // 回退
          this.$router.back()
        }else {
          this.alertShow = true

          this.alertText = result.msg
        }
      }
    },
    components:{
      AlertTip
    },
    mounted(){
      this.$store.dispatch('getUserInfo')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .myEpet
    width 100%
   .epet_wrap
     background-image url('./img/bgimg.png')
     width 100%
     background-size 100% 100%
    .loginHeader
      position relative
     .allwrap
       height 50px
       line-height 50px
       position relative
       padding 0 10px
      .tab_left
        position absolute
        left 10px
        top 0
        color #fff
       .iconfont
         height 18px
         width 11px
      .tab_right
        position absolute
        right 15px
        top 0
        color #fff
        font-size 14px
     .login_white
       padding-top 10px
       padding-bottom 20px
       width 100%
       height 50px
     .login_content
        background-color rgba(255,255,255,0.3)
        height 44px
      .login_style
        width 100%
        list-style none
       .login_li
         float left
         width 50%
         text-align center
         height 44px
         line-height 44px
         position relative
        .login_a
          font-size 15px
          color #fff
          display block
          line-height 44px
          text-align center
        .li_sty i
          width 0
          height 0
          border-left 10px solid transparent
          border-right 10px solid transparent
          border-bottom 10px solid #fff;
          position absolute
          bottom 0
          left 0
          right 0
          margin auto
   .epet_content
     background #fff
     width 100%
    .epet_form
      box-sizing border-box
      width 100%
      padding 0 20px 10px 20px
     .username
       width 100%
       border-bottom #e2e2e2 solid 1px
       padding 12px 0
       box-sizing border-box
       text-align left
       overflow hidden
     .pwd
        width 100%
        border-bottom #e2e2e2 solid 1px
        padding 12px 0
        box-sizing border-box
        text-align left
        overflow hidden
      .icon
        .iconfont
          font-size 20px
          display inline
          padding-right 10px
      .write
        font-size 15px
        border none
        color #666
        outline none
        font-family "Microsoft Yahei",tahoma,arial
      .captcha
        float right
        display inline-block
        width 85px
        height 30px
       img
         width 100%
         height 100%
      .rcaptcha
        float right
        color: #ff4259;
        border: 1px solid #eb4c33;
        border-radius: 3px;
        width 100px
        height:29px;
        text-align: center;
        font-size 12px
        line-height 29px

      .verification
        float right
        color #ccc
        font-size 14px
        background transparent

.epet_lose
     width 100%
     padding 0 30px
     box-sizing border-box
     text-align right
     line-height 40px
     font-size 14px
     color #898989
   .epet_login
     margin 0 30px
     border-radius 5px
     background #2ec975
     font-size 15px
     text-align center
     color #fff
     line-height 40px
   .work
     margin-top 120px
     color #d7d7d7
     text-align center
     font-size 16px
   .web
     overflow hidden
     margin-top 20px
    .pay
      float left
      width 33.3%
      padding 0 13px
      box-sizing border-box
     img
       width 60%
    .Tencent
      float left
      width 33.3%
      padding 0 13px
      box-sizing border-box
     img
       width 60%
</style>
