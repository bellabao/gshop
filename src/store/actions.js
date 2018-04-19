import {reqAdvertisement,reqClassify,reqBrand,reqCarousel} from '../api/ajax'
import {RECEIVE_ADVERTISEMENT,RECEIVE_CLASSIFY,RECEIVE_BRAND,RECEIVE_CAROUSEL} from './mutation-types'
export default {
  //获取E宠主页广告列表
   async getAdvertisement({commit}){
    const result=await reqAdvertisement();
    if (result.code===0){
      let index=result.data;
      commit(RECEIVE_ADVERTISEMENT,{index})
    }
  },
  //  获取E宠分类列表
  async getClassify({commit}){
    const result=await reqClassify();
    if (result.code===0){
      let classify=result.data;
      commit(RECEIVE_CLASSIFY,{classify})
    }
  },
//  获取E宠品牌列表
  async getBrand({commit}){
     const result=await reqBrand();
     if (result.code===0){
       let brand=result.data;
       commit(RECEIVE_BRAND,{brand})
     }
  },
//  获取轮播图广告和每日疯抢](#获取轮播图广告和每日疯抢)
  async getBrand({commit}){
    const result=await reqBrand();
    if (result.code===0){
      let brand=result.data;
      commit(RECEIVE_BRAND,{brand})
    }
  },
  async getCarousel({commit}){
     const result=await reqCarousel();
     if (result.code===0){
       let carousel=result.data;
       commit (RECEIVE_CAROUSEL,{carousel})
     }
      }

}
