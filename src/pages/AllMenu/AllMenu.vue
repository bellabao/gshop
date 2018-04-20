<template>
    <div class="allmenus">
      <div class="allwrap">
        <a href="#" class="tab_left">
          <i class="iconfont icon-back" @click="goBack()"></i>
        </a>
        <span class="tab_icon">全部品牌</span>
        <a href="#" class="tab_right">
          <i class="iconfont icon-msnui-cate"></i>
        </a>
      </div>
      <div>
        <div class="nus_footer"  >
          <div class="menus_tab"  ref="menusAll" >
            <div class="menus_left"  v-for="(brands,index) in allbrand.brand" :key="index">
              <div class="menus_left_content">
                <h2 class="content_h">{{brands.order}}</h2>
              </div>
              <div class="cba" v-for="(brand,index) in brands.list" :key="index">
                <a href="#" class="fbc">
                  <div class="menus_wrapper">
                    <div class="menus_f1">
                      <img class="menus_img" :src="brand.logo" alt="">
                    </div>
                    <div class="menus_add">
                      <p>{{brand.name}}</p>
                      <p>{{brand.address}}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
          <div class="menus_right">
            <div class="f_wrapper">
              <div class="f_cell">
                <span class="f_spa" v-for="(brands,index) in allbrand.brand" :key="index" :class="{fg:index===contIndex}" @click="goCrent(index)">{{brands.order}}</span>
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
        scrollY:0,
        tops:[]
      }
    },
    computed:{
      ...mapState(['allbrand']),
      contIndex(){
        let {scrollY,tops}=this
     //   console.log(this.scrollY,111,this.tops)
        return tops.findIndex((top,index)=>{return (scrollY>=top) && (scrollY<tops[index+1])})
      }
    },
    methods:{
      goBack(){
        this.$router.push('/classify/rightClass')
      },
      goCrent(index){
        let y=-this.tops[index];
        this.leftscroll.scrollTo(0,y,300)
      },
      heighttop(){
        let tops=[];
        let top=0;
        tops.push(top);
        let list=this.$refs.menusAll.getElementsByClassName('menus_left')
        Array.prototype.slice.call(list).forEach(item=>{
          top+=item.clientHeight;
          tops.push(top)

        });
        this.tops=tops
      },
    },
    mounted(){
      setTimeout(()=>{
        this.heighttop();

        this.$nextTick(()=>{
          this.leftscroll=new BScroll('.nus_footer',{
            click:true,
            probeType:2
          });
          this.leftscroll.on('scroll',(pos)=>{
            console.log(this.scrollY,'scroll')
            this.scrollY=Math.abs(pos.y)

          })
          this.leftscroll.on('scrollEnd',(pos)=>{
            this.scrollY=Math.abs(pos.y)
            console.log(this.scrollY,'end')
          })
        })
      },50)
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .allmenus
    width 100%
    height 100%
   .allwrap
     height 50px
     line-height 50px
     position relative
     padding 0 10px
     border-bottom 1px solid #f3f3f3
     background #fff
     z-index 50
    .tab_left
      position absolute
      left 10px
      top 0
     .iconfont
       height 18px
       width 11px
    .tab_icon
      width 90%
      text-overflow ellipsis
      white-space nowrap
      overflow hidden
      display block
      margin 0 auto
      line-height 50px
      font-size 18px
      text-align center
      color #333
    .tab_right
      position absolute
      right 15px
      top 0
   .nus_footer
     width 100%
     height 600px
    .menus_tab
      width 100%
     .menus_left
       width 100%
      .menus_left_content
        background #f3f4f5
       .content_h
         font-size 12px
         font-weight 400
         text-indent 15px
         line-height 25px
         vertical-align middle
         box-sizing border-box
         text-align left
       .cba
         width 100%
         height 70px
        .fbc
          text-decoration none
         .menus_wrapper
           padding 10px
           border-bottom 1px solid #f3f4f5
           margin-right 20px
           width 355px
           box-sizing border-box
           display inline-block
          .menus_f1
            width 30%
            max-width 150px
            height 50px
            border 1px solid #f3f4f5
            padding 5px 5px
            display inline-block
           .menus_img
             max-width 90%
             height 40px
          .menus_add
            margin 5px 0 5px 20px
            display inline-block
           p
            margin-bottom 5px
     .menus_right
       top 0
       bottom 0
       right 4px
       width 10px
       z-index 1
       position fixed
       text-align center
      .f_wrapper
        height 100%
        display table
        text-align center
       .f_cell
        display table-cell
        vertical-align middle
        height 100%
       .f_spa
         display block
         height 12px
         margin-top 2px
         font-weight 700px
         font-size 12px
       .fg
         color #fe3e3e
         font-weight 700
</style>
