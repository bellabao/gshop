<template>
    <div class="msite">
      <div class="msicontainer">
        <div class="msiheader">
          <a href="#">
            <img class="header_img" src="./img/01.jpg" alt="下载App">
          </a>
        </div>
        <div class="msicontent">
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
          <div class="content_container">
            <div class="content_epet" >
              <ul class="epet_list">
                <li class="epet_li on" v-for="(menu,index) in index.menus" :key="index">
                  <a href="#">
                    <span>{{menu.menu_name}}</span>
                    <i class="i_epet"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="bodyEpet">
        <div class="swiper_epet">
          <div class="swiper-container">
            <div class="swiper-wrapper" v-if="carousel.data">
              <div class="swiper-slide" v-for="(carousel,index) in carousel.data[1].value">
                <a href="#">
                  <img :src="carousel.image" alt="">
                </a>
              </div>

            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="msite_nav border-1px" v-if="index.datas">
          <a href="javascript:" class="link_to_food" v-for="(menu,index) in index.datas[1].menus" :key="index">
            <div class="epet_container">
              <img :src="menu.image">
            </div>
          </a>

        </div>
        <div class="msite_xinren" v-if="carousel.data">
          <a href="#">
            <img :src="carousel.data[2438].value[0].image" alt="新人专享">
          </a>
        </div>
        <div class="epet_content">
          <div class="epet_top"  v-if="carousel.data">
            <div class="epet_top_img">
              <img :src="carousel.data['3'].surprise_icon.image" alt="每日更新">
            </div>
            <div class="epet_top_content">{{carousel.data['3'].title}} </div>
            <div class="epet_top_images">
              <img :src="carousel.data['3'].right_image.image" alt="更多">
            </div>
          </div>
          <div class="epet_bottom">
           <div class="abs" v-if="carousel.data">
             <div class="epet_bottom_img" v-for="(carousel,index) in carousel.data[3].goods" :key="index" >
               <img :src="carousel.image.image" alt="">
               <span class="abx">￥{{carousel.sale_price}}</span>
               <span class="abd">{{carousel.little_price}}</span>
             </div>

           </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="page">
          <div class="page_header">
            <div class="page_header_left">
              <a href="#">
                <img src="./img/init_25.jpg" alt="">
              </a>
            </div>
            <div class="page_header_right">
              <div class="page_right_top">
                <a href="#">
                  <img src="./img/init_26.jpg" alt="">
                </a>
              </div>
              <div class="page_right_bottom">
                <a href="#">
                  <img src="./img/init_9.jpg" alt="">
                </a>
              </div>
            </div>
          </div>
          <div class="page_abc">
            <a href="#">
              <img src="https://img2.epetbar.com/nowater/2018-04/13/10/593316771f91fb38ddef79deb3d6f624.jpg" alt="">
            </a>
          </div>
          <div class="page_abd" v-if="index.datas">
            <div class="page_abe">
              <a href="#" class="page_abe_left">
                <img src="https://img2.epetbar.com/nowater/2017-12/20/15/38688d8d92c7da7aae64eda8b8bb3a94.jpg" alt="">
              </a>
              <a href="#" class="page_abe_right">
                <img src="./img/pic/1.png" alt="">
              </a>
            </div>
            <video-item  :videoData="index.datas['10'].value[0]"/>
            <div class="line"></div>
          </div>
          <div class="page_acd" v-if="carousel.data">
            <div class="page_acd_left" >
              <a href="#" class="acd_left_top">
                <img :src="carousel.data[3110].content_images[0][0].image" alt="">
              </a>
              <a href="#" class="acd_left_bottom">
                <img :src="carousel.data[3110].content_images[0][1].image" alt="">
              </a>
            </div>
            <div class="page_acd_right">
              <a href="#" class="acd_right_top">
                <img :src="carousel.data[3110].content_images[1][0].image" alt="">
              </a>
              <a href="#" class="acd_right_bottom">
                <img :src="carousel.data[3110].content_images[1][1].image" alt="">
              </a>
            </div>
            <div class="line"></div>
          </div>
          <div class="acc">
          <div class="page_acc">
            <div class="page_abe">
              <a href="#" class="page_abe_left">
                <img src="./img/pic/init_5.jpg" alt="">
              </a>
              <a href="#" class="page_abe_right">
                <img src="./img/pic/1.png" alt="">
              </a>
            </div>
            <div class="page_acc">
              <div class="page_acc_more">
                <a href="#">
                  <img src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg" alt="">
                </a>
              </div>
              <div class="line"></div>
            </div>
            <div class="page_acc">
              <div class="page_acc_more">
                <a href="#">
                  <img src="https://img2.epetbar.com/nowater/2018-04/08/17/f8ca8574f04ec0fa7edc2ebe9e081404.jpg" alt="">
                </a>
              </div>
              <div class="line"></div>
            </div>
            <div class="page_acc">
              <div class="page_acc_more">
                <a href="#">
                  <img src="https://img2.epetbar.com/nowater/2018-04/04/10/6afbf23c23988b13756a03aa85e14577.jpg" alt="">
                </a>
              </div>
              <div class="line"></div>
            </div>
            <div class="page_acc">
              <div class="page_acc_more">
                <a href="#">
                  <img src="https://img1.epetbar.com/2018-04/04/16/0821d81fa76b716cec690472fb3c94de.jpg" alt="">
                </a>
              </div>
              <div class="line"></div>
            </div>
            <div class="page_acc">
              <div class="page_acc_more">
                <a href="#">
                  <img src="https://img2.epetbar.com/nowater/2018-04/13/15/f9bd292d72d19d5ab540f0335168ce0b.jpg" alt="">
                </a>
              </div>
              <div class="line"></div>
            </div>
            <div class="page_acc">
              <div class="page_acc_more">
                <a href="#">
                  <img src="https://img2.epetbar.com/nowater/2018-04/13/15/18781128d24ec0afa5973beaae0bb618.jpg" alt="">
                </a>
              </div>
              <div class="line"></div>
            </div>
            <div class="page_acc">
              <div class="page_acc_more">
                <a href="#">
                  <img src="https://img2.epetbar.com/nowater/2018-04/13/18/36eb67688bfa43de21c492e2c7444d62.jpg" alt="">
                </a>
              </div>
              <div class="line"></div>
            </div>
            <div class="page_acc">
              <div class="page_acc_more">
                <a href="#">
                  <img src="https://img2.epetbar.com/nowater/2018-04/13/15/2782fd86b32ec0db28965ced109979d0.jpg" alt="">
                </a>
              </div>
              <div class="line"></div>
            </div>
            <div class="page_acc">
              <div class="page_acc_more">
                <a href="#">
                  <img src="https://img2.epetbar.com/nowater/2018-04/16/09/30bdc75a0824ee390efc9cdc8f90b216.jpg" alt="">
                </a>
              </div>
              <div class="line"></div>
            </div>
            <div class="page_acc">
              <div class="page_acc_more">
                <a href="#">
                  <img src="https://img2.epetbar.com/nowater/2018-04/13/16/be5ad03526252479a417ab91e860d07c.jpg" alt="">
                </a>
              </div>
              <div class="line"></div>
            </div>
            <div class="page_acc">
              <div class="page_acc_more">
                <a href="#">
                  <img src="https://img1.epetbar.com/2018-04/04/17/b465836299d67bbf23a2730c41c698c3.jpg" alt="">
                </a>
              </div>
              <div class="line"></div>
            </div>
            <div class="page_acc">
              <div class="page_acc_more">
                <a href="#">
                  <img src="https://img1.epetbar.com/2018-04/04/16/9af23a74ab5ebd79ee2ae5833332d3d1.jpg" alt="">
                </a>
              </div>
              <div class="line"></div>
            </div>
            <div class="page_acc">
              <div class="page_acc_more">
                <a href="#">
                  <img src="https://img2.epetbar.com/nowater/2018-03/21/09/60a17aedde5661ebf6bc998868de6b85.jpg" alt="">
                </a>
              </div>
              <div class="line"></div>
            </div>
            <div class="page_acc">
              <div class="page_acc_more">
                <a href="#">
                  <img src="https://img2.epetbar.com/nowater/2018-04/13/16/8a558b0630282484176db22be8c66546.jpg" alt="">
                </a>
              </div>
              <div class="line"></div>
            </div>
            <div class="page_acc_swiper">
              <div class="page_abe">
                <a href="#" class="page_abe_left">
                  <img src="./img/pic/init_27.jpg" alt="">
                </a>
                <a href="#" class="page_abe_right">
                  <img src="./img/pic/1.png" alt="">
                </a>
              </div>
              <div class="swiper_epet">
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide"><a href="#"><img src="https://img2.epetbar.com/nowater/2018-04/13/10/3cb5704493b322cc0eae6ab49642e911.jpg" alt=""></a></div>
                    <div class="swiper-slide"><a href="#"><img src="https://img2.epetbar.com/nowater/2018-04/13/10/048b847bece3d1549ed46e1f21a9beec.jpg" alt=""></a></div>
                    <div class="swiper-slide"><a href="#"><img src="https://img2.epetbar.com/nowater/2018-04/13/10/4f2787312a3d212bc65c062627eaa429.jpg" alt=""></a></div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>
            <div class="page_acc_three">
              <div class="page_abd" v-if="index.datas">
                <div class="page_abe">
                  <a href="#" class="page_abe_left">
                    <img src="./img/pic/init_15.jpg" alt="">
                  </a>
                  <a href="#" class="page_abe_right">
                    <img src="./img/pic/1.png" alt="">
                  </a>
                </div>
                <VideoItem :videoData="index.datas['47'].value[0]"/>
                <div class="line"></div>
              </div>
              <div class="page_abd" v-if="index.datas">
                <div class="page_abe">
                  <a href="#" class="page_abe_left">
                    <img src="./img/pic/init_11.jpg" alt="">
                  </a>
                  <a href="#" class="page_abe_right">
                    <img src="./img/pic/1.png" alt="">
                  </a>
                </div>
                <VideoItem :videoData="index.datas['50'].value[0]"/>
              </div>

            </div>
          </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom_text">
          <div class="footer_img" v-if="index.datas">
            <a>
              <img :src="index.datas[52].content_images[0][0].image">
            </a>
          </div>
          <div class="footer_content">
            <div class="footer_top">
              <span class="f1">触屏版</span>
              <span>手机客户端</span>
              <span>关于我们</span>
              <span>联系我们</span>
            </div>
            <div class="footer_bottom">
              @ wap.epet.com 版权：重庆易宠科技有限公司
            </div>
          </div>
        </div>
      </div>

    </div>

</template>
<script>
  import BScorll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  import VideoItem from '../../components/VideoItem/VideoItem.vue'
  export default {
    computed:{
      ...mapState(['index','carousel'])
    },
    created(){
      this.$nextTick(()=>{
        new BScorll('.content_container', {scrollX:true})
      })
    },
    watch: {
      carousel () {
        this.$nextTick(() => {
          new BScorll('.epet_bottom', {scrollX:true}),
          new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
              disableOnInteraction: false,
            },

            pagination: { // 指定分页器容器
              el: '.swiper-pagination',
            }
          })
        })
      }
    },
    components:{
      VideoItem
    }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
    .msicontainer
      box-sizing border-box
      width 100%
      position fixed
      z-index 100
      left 0
      top 0
      .msiheader
        background-color #02a774
        width 100%
        height 55px
        .header_img
          display block
          width 100%
          height 100%
      .msicontent
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
            width 30%
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
              position absolute
              left 75px
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
    .bodyEpet
      width 100%
      margin-top 125px
     .swiper-epet
        width 100%
        height 100%
       .swiper-container
          width 100%
          height 100%
         .swiper-wrapper
            height 100%
            width 100%
           .swiper-slide
              width 100%
              height 100%
             a
                display block
                width 100%
                height 100%
             img
                width 100%
                height 100%

      .msite_nav
        bottom-border-1px(#e4e4e4)
        width 100%
        height 100%
        .epet_container
          display inline-block
          float left
         img
           height 90px
           width 75px
           display inline-block

      .msite_xinren
        width 100%
        img
          width 100%
          height 120px
      .epet_content
        width 100%
        height 100%
        .epet_top
          width 100%
          height 40px
          float left
          position relative
          /*vertical-align middle*/
          .epet_top_img
            position absolute
            margin-right 5px
            width 20%
            height 100%
            top 10px
            display inline-block
            vertical-align middle
            img
              height 20px
          .epet_top_content
            width 60%
            display inline-block
            position absolute
            right -10px
            top 10px
            vertical-align 50%
          .epet_top_images
            position absolute
            width 20%
            right 10px
            top 0px
            display inline-block
            float right
            img
              height 40px
        .epet_bottom
          width 100%
          height 100%
         .abs
            width 400px
            height 100%
            display: flex
            flex-direction row
          .epet_bottom_img
            width 100%
            height 84.5px
            position relative
            display flex
            flex-direction column
           img
             width 100%
             height 100%
             position absolute
             top 0
             left 0
            .abx
              color red
              text-align center
              margin-top 95px
              font-size 16px
              font-weight bold
            .abd
              text-align center
              margin-top 5px
              font-size 14px

        .line
          margin-top 55px
          height 10px
          width 100%
          background #f3f4f5
     .page
       width 100%
       height 100%
      .page_header
        width 100%
        height 250px
        display: flex
        flex-direction row
       .page_header_left
         width 50%
         height 100%
       .page_header_right
         width 50%
         height 100%
      .page_abc
        width 100%
        height 160px
        margin-bottom 10px
      .page_abd
        width 100%
        height 100%
       .page_abe
         width 100%
         height 87px
         display inline-block
         position relative
        .page_abe_left
          position absolute
          height 77px
          width 50%
        .page_abe_right
          position absolute
          right 10px
          top 5px
          width 20%
          height 55px
       .line
        height 10px
        width 100%
        background #f3f4f5
      .page_acd
        width 100%
        height 200px
       .page_acd_left
         width 50%
         height 200px
         display inline-block
        .acd_left_top
          height 50%
        .acd_left_bottom
          height 50%
       .page_acd_right
         width 50%
         height 100%
         float right
        .acd_right_top
          height 50%
        .acd_right_bottom
          height 50%
    .acc
      height 3450px
      .page_acc
        width 100%
        height 170px
       .page_acc_more
         width 100%
         height 160px
    .bottom
      width 100%
      height 86px
     .footer_img
       width: 100%
       height: 30.5px
      .footer_img a img
        width: 100%
        height: 100%
       .footer_content
         margin-bottom 45px
         width: 100%
         height: 86px
        .footer_top
          width: 100%
          height: 30px
          margin-top 30px
          padding-right:10px
          text-align center
        .footer_top .f1
          color: red
        .footer_bottom
          width: 355px
          height: 44px
          text-align:center
          margin:0 10px 0 10px
          padding-bottom:25px
          font-size:12px
</style>
