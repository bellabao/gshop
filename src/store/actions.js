import {reqAdvertisement,reqClassify,reqBrand,reqCarousel,reqAllbrand,reqUserInfo} from '../api/ajax'
import {RECEIVE_ADVERTISEMENT,RECEIVE_CLASSIFY,RECEIVE_BRAND,RECEIVE_ALLBRAND,RECEIVE_CAROUSEL,RECEIVE_USER_INFO} from './mutation-types'
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
      },
  async getAllbrand({commit}){
     const result=await reqAllbrand();
     if (result.code ===0){
       let allbrand=result.data;
       commit(RECEIVE_ALLBRAND,{allbrand})
     }
  },
  //
  recordUserInfo({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  async getUserInfo({commit}){
    const result=await reqUserInfo();
    if (result.code ===0){
      let userInfo=result.data;
      commit(RECEIVE_ALLBRAND,{userInfo:result.data})
    }
  }

}
