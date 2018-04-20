<template>
    <div class="wrap">
      <header class="header">
        <div class="header_left " >
          <router-link class="header_i" to="/classify/leftClass" :class="{fc:$route.path ==='/classify/leftClass'}">分类</router-link>
        </div>
        <div class="header_right">
          <a href="#">
            <router-link class="header_i" to="/classify/rightClass" :class="{fc:$route.path==='/classify/rightClass'}">品牌</router-link>
          </a>
        </div>
        <div class="header_img">
          <a href="#">
            <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" alt="">
          </a>
        </div>
      </header>
      <router-view></router-view>
    </div>
</template>
<script>

  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .wrap
    height 100%
    width 100%
   .header
     width 100%
     height 40px
     position fixed
     z-index 100
     box-sizing border-box
     left 0
     top 0
     background #fff
     padding 0 15px
     border-bottom 1px solid #cbcbcb
     display flex
     flex-direction row
    .header_left
      width 50%
      height 40px
      line-height 40px
      text-align right
      padding-right 5%
    .header_right
      width 50%
      height 40px
      line-height 40px
      text-align left
      padding-left 5%
     .header_i
       display inline-block
       padding 0 3%
       height 40px
       width 22%
       text-align center
     .fc
        border-bottom 1px solid red
    .header_img
      width 14px
      height 14px
     .header_img img
       width 14px
       height 14px
       position absolute
       top 13px
       right 15px



</style>
