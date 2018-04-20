<template>
  <div class="bottom">
    <div class="bottom_list">
      <div class="bottom_div">
        <div>
          <ul v-if="classify.categorys" >
            <li class="list_fac" v-for="(category,index) in classify.categorys" :key="index"  :class="{on:countIndex===index}" @click="isCount(index)">{{category.name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom_content">
      <div class="bottom_content_footer">
        <div class="bottom_content_container" v-if="classify.categorys">
          <div class="bottom_hot" v-for="(king,index) in currentData" :key="index">
            <a href="#" class="classify">{{king.title}}</a>
            <div class="hot_content">
              <ul class="hot_content_list" >
                <li class="hot_content_list_li " v-for="(current,index) in king.list" :key="index">
                  <a href="#">
                    <div class="hot_fc">
                      <img class="hot_img" :src="current.photo?current.photo:current.logo" alt="">
                      <p class="hot_text">{{current.name}}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
         countIndex:0
      }
    },
    methods:{
      isCount(index){
          this.countIndex=index
      },

    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.bottom_list',{scrollY:true,click:true})
      })
    },

    computed:{
      ...mapState(['classify']),
      currentData(){
        let {countIndex}=this;
        return this.classify.categorys[countIndex].cate_list
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .bottom
    margin-top 40px
   .bottom_list
     position fixed
     top 40px
     left 0
     bottom 0
     border-right 5px solid #f3f4f5
     height 627px
    .bottom_div
      height 700px
      padding-bottom 45px
    ul
      list-style none
     .list_fac
       width 70px
       height 50px
       font-size 13px
       line-height 50px
       text-align center
       overflow hidden
       white-space nowrap
       border-bottom 1px solid #f3f4f5
       text-overflow ellipsis
       &.on
         background #f3f4f5
         color #ed4044
   .bottom_content
     margin-left 75px
     border-top 5px solid #f3f4f5
     width 300px
     height 310px
    .bottom_content_container
      width 100%
      background #fff
     .bottom_hot
       border-top 1px solid #f3f4f5
       padding 5px 5px 20px
       height 309px
      .classify
        font-size 12px
        display block
        margin-top 10px
        padding-left 5px
        height 12px
      .hot_content
        width 100%
       .hot_content_list
         list-style none
         width 100%
        .hot_content_list_li
          width 33.3%
          margin-top 10px
          float left
         .hot_img
           width 100%
         .hot_text
           font-size 14px
           color #333
           text-align center
           text-overflow ellipsis
           overflow hidden
           white-space nowrap
           height 20px
</style>
