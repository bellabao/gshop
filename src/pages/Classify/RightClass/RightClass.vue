<template>
    <div class="brand">
      <div class="brand_list" v-if="brand.brand">
        <div class="brand_item">
          <div class="brand_title" v-for="(brands,index) in brand.brand" :key="index" >
            <span class="brand_text">————{{brands.title}}————</span>
            <div class="brand_wrap" v-if="brands">
              <ul class="wrap_ul" >
                <li class="wrap_li" v-for="(grad,index) in brands.list" :key="index">
                  <a href="#">
                    <div class="list_img" >
                      <img class="list_one" :src="grad.logo">
                    </div>
                    <div class="list_icon" v-if="grad.recommend">
                      <img class="list_two" src="//static.epetbar.com/static_web/wap/src/images/background/jian.png">
                    </div>
                    <span class="list_logo" v-if="grad.tagongyi">TA公益</span>
                    <p class="list_te">{{grad.name}}</p>
                    <p class="list_xt">{{grad.address}}</p>
                  </a>
                </li>
              </ul>
              <div class="line"></div>
            </div>
          </div>

        </div>
      </div>
      <router-link to="/allMenu" class="brand_logo" tag="div" >全部</router-link>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    methods:{

    },
    computed:{
      ...mapState(['brand'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .brand
    margin-top 45px
    background #fff
   .brand_list
     height 690px
     width 100%
     padding-bottom 20px
     margin-bottom 20px
    .brand_item
      padding-top 20px
      height 40px
      font-size 12px
      text-align center
      color #999
    .brand_wrap
      padding 0 5px
      /*height 640px*/
      padding-bottom: 15px;
      background: #fff
     .wrap_ul
       list-style none
       width 100%
       overflow hidden
      .wrap_li
        width 33.33%
        padding 0 5px
        position relative
        margin-top 20px
        float left
        display inline-block
        box-sizing border-box
       .list_img
         border 1px solid #e2e2e2
         text-align center
         box-sizing border-box
         display inline-block
         height 50px
         padding 7px
        .list_one
          width 80px
          height 40px
       .list_icon
         position absolute
         top 0
         left 16px
        .list_two
          height 13px
          width 13px
       .list_logo
         font-size 8px
         padding 2px 1px
         top 0
         right 15px
         background #e44b46
         position absolute
         color #fff
         box-sizing border-box
        .list_te
          margin-top 5px
          height: 20px
          text-align center
          font-size 13px
        .list_xt
          font-size 12px
          color #999
          height 20px
          text-align center
     .line
       margin-top 55px
       height 10px
       width 100%
       background #f3f4f5
   .brand_logo
     width 40px
     height 40px
     right 6px
     bottom 65px
     position fixed
     z-index 10;
     background rgba(0,0,0,.4)
     line-height 40px
     border-radius 50%
     font-size 12px
     color #fff
     text-align center
  </style>
