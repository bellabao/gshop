<template>
    <footer class="footer_guide border-1px">
      <a href="javascript:;" class="guide_item" @click="goTo('/msite')" :class="{on:isCurrent('/msite')}">
        <span class="item_icon">
          <i class="iconfont icon-home"></i>
        </span>
            <span>首页</span>
      </a>
      <a href="javascript:;" class="guide_item " @click="goTo('/classify')" :class="{on:isCurrent('/classify')}">
        <span class="item_icon">
          <i class="iconfont icon-fenlei"></i>
        </span>
        <span>分类</span>
      </a>
      <a href="javascript:;" class="guide_item " @click="goTo('/shopCarts')" :class="{on:isCurrent('/shopCarts')}">
        <span class="item_icon">
          <i class="iconfont icon-cart"></i>
        </span>
        <span>购物车</span>
      </a>
      <a href="javascript:;" class="guide_item " @click="goTo('/myEpet')" :class="{on:isCurrent('/myEpet')}">
        <span class="item_icon">
          <i class="iconfont icon-face"></i>
        </span>
        <span>我的</span>
      </a>
    </footer>
</template>
<script>
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      },
      isCurrent(path){
        return this.$route.path===path
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    display flex
    width 100%
    height 50px
    background #fff
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 25px

</style>
