//更新状态
import {RECEIVE_CLASSIFY,RECEIVE_ADVERTISEMENT,RECEIVE_BRAND,RECEIVE_ALLBRAND,RECEIVE_CAROUSEL} from './mutation-types'
export default {
  [RECEIVE_ADVERTISEMENT](state,{index}){
    state.index=index
  },
  [RECEIVE_CLASSIFY](state,{classify}){
    state.classify=classify
  },
  [RECEIVE_BRAND](state,{brand}){
    state.brand=brand
  },
  [RECEIVE_CAROUSEL](state,{carousel}){
    state.carousel=carousel
  },
  [RECEIVE_ALLBRAND](state,{allbrand}){
    state.allbrand=allbrand
  },
}
