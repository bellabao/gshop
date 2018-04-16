import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import  Classify from '../pages/Classify/Classify.vue'
import  ShopCarts from '../pages/ShopCarts/ShopCarts.vue'
import MyEpet from '../pages/MyEpet/MyEpet.vue'
import FooterGuide from '../components/FooterGuide/FooterGuide.vue'
Vue.use(VueRouter);
export default new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
    },
    {
      path: '/classify',
      component: Classify,
    },
    {
      path: '/shopCarts',
      component: ShopCarts,
    },
    {
      path: '/myEpet',
      component: MyEpet,
    },

  ]
})
