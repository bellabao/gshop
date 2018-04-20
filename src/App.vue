<template>
  <div id="app">

    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    mounted(){
      this.$store.dispatch('getAdvertisement');
      this.$store.dispatch('getClassify');
      this.$store.dispatch('getBrand');
      this.$store.dispatch('getCarousel');
      this.$store.dispatch('getAllbrand')
    },
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
