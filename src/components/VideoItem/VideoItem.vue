<template>
    <div>
      <div class="page_img">
        <a v-if="videoData.cover">
          <img :src="videoData.cover.image" alt="">
          <span class="icon"></span>
        </a>
      </div>
      <div class="page_abd_text">
        <span class="span_text">{{videoData.title}}</span>
        <div class="page_abd_bottom">
          <span>5548</span>
          <span>|</span>
          <span>03:29</span>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    props:{
      videoData:Object
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .page_img
    width 100%
    height 210px
  .page_abd_text
    margin 10px 0
    text-align center
    display flex
    flex-direction column
   .span_text
     margin-bottom 5px
     text-align center
     font-size 14px
   .page_abd_bottom
     font-size 12px
     text-align center
     margin-right 5px
</style>
