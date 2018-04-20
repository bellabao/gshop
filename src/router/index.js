import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import  Classify from '../pages/Classify/Classify.vue'
import  ShopCarts from '../pages/ShopCarts/ShopCarts.vue'
import MyEpet from '../pages/MyEpet/MyEpet.vue'
import LeftClass from '../pages/Classify/LeftClass/LeftClass.vue'
import RightClass from '../pages/Classify/RightClass/RightClass.vue'
import AllMenu from '../pages/AllMenu/AllMenu.vue'
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
      children:[
        {
          path: '/',
          redirect: '/classify/leftClass'
        },
        {
          path: '/classify/leftClass',
          component: LeftClass
        },
        {
          path: '/classify/rightClass',
          component: RightClass
        },
      ]
    },
    {
      path: '/shopCarts',
      component: ShopCarts,
    },
    {
      path: '/myEpet',
      component: MyEpet,
    },
    {
      path: '/allMenu',
      component: AllMenu,
    },

  ]
})
