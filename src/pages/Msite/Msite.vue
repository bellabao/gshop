<template>
    <div class="container">
      <div class="header">
        <a href="#">
          <img class="header_img" src="./img/01.jpg" alt="下载App">
        </a>
      </div>
      <div class="content">
        <div class="content_header">
          <div class="content_header_left">
            <a href="#">
              <span>狗狗</span>
              <span>|</span>
              <span>重庆</span>
            </a>
            <i class="iepet"></i>
          </div>
          <div class="content_header_content">
            <input type="text" placeholder="请输入商品和品牌">
          </div>
          <div class="content_header_right">
            <a href="#">
              <img src="./img/msg.png" alt="#">
            </a>
          </div>
        </div>
        <div class="content_container" ref="epet">
          <div class="content_epet" >
            <ul class="epet_list">
            <li class="epet_li on">
              <a href="#">
                <span>首页</span>
                <i class="i_epet"></i>
              </a>
            </li>
            <li class="epet_li">
              <a href="#">
                <span>狗狗主食</span>
                <i class="i_epet"></i>
              </a>
            </li>
            <li class="epet_li">
              <a href="#">
                <span>零食</span>
                <i class="i_epet"></i>
              </a>
            </li>
            <li class="epet_li">
              <a href="#">
                <span>医疗保健</span>
                <i class="i_epet"></i>
              </a>
            </li>
            <li class="epet_li">
              <a href="#">
                <span>玩具</span>
                <i class="i_epet"></i>
              </a>
            </li>
            <li class="epet_li">
              <a href="#">
                <span>外出</span>
                <i></i>
              </a>
            </li>
            <li class="epet_li">
              <a href="#">
                <span>服饰城</span>
                <i></i>
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="./img/02.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/002.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/003.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/005.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/007.jpg" alt=""></div>
            <div class="swiper-slide"><img src="./img/008.jpg" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
    </div>
</template>
<script>
  import BScorll from 'better-scroll'
  import Swiper from 'swiper'
  export default {
    created(){
      this.$nextTick(()=>{
        new BScorll(this.$refs.epet, {scrollX:true})
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  html body
    height 100%
    width 100%
    overflow hidden
    .container
      box-sizing border-box
      width 100%
      position fixed
      z-index 100
      left 0
      top 0
      .header
        background-color #02a774
        width 100%
        height 55px
        .header_img
          display block
          width 100%
          height 100%
      .content
        bottom-border-1px(#e4e4e4)
        background #fff
        .content_header
          box-sizing border-box
          width 100%
          padding 10px
          height 35px
          display flex
          flex-direction row
          .content_header_left
            margin-top 10px
            width 22%
            span
              font-size 12px
              text-align center
            .iepet
              display inline-block
              width 0
              height 0
              vertical-align middle
              border-top 8px solid
              border-right 4px solid transparent
              border-left 4px solid transparent
              color gray
          .content_header_content
            width 60%
            flex 1
            margin-top 8px
            margin-left 2px
            input
              width 100%
              background #eee
              height 25px
              font-size 12px
              border-radius 8px
              background-image url("./img/search-icon.png")
              background-repeat no-repeat
              background-size 12px
              background-position-x 95%
              background-position-y 50%
          .content_header_right
            width 16%
            height 25px
            margin-top 10px
            img
              width 25px
              margin-left 10px
              vertical-align middle
        .content_container
          width 100%
          overflow hidden
          .content_epet
            width 522px
            height 36px
            padding-bottom 15px
            box-sizing border-box

            .epet_list
              display inline-block
              white-space nowrap
              margin 0
              padding 0px
              float left
              .epet_li
                list-style none
                float left
                width 74.5px
                height 36px
                text-align center
                align-items center
                line-height 36px
                span
                  display block
                  font-size 16px
</style>
