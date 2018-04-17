import {reqAdvertisement,reqClassify,reqBrand} from '../api/ajax'
import {RECEIVE_ADVERTISEMENT,RECEIVE_CLASSIFY,RECEIVE_BRAND} from './mutation-types'
export default {
  //获取E宠主页广告列表
   async getAdvertisement({commit,state}){
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
  getBrand({commit}){
     const result=reqBrand();
     if (result.code===0){
       let brand=result.data;
       commit(RECEIVE_BRAND,{brand})
     }
  }


}
