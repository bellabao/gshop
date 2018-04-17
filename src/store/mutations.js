//更新状态
import {RECEIVE_CLASSIFY,RECEIVE_ADVERTISEMENT,RECEIVE_BRAND} from './mutation-types'
export default {
  [RECEIVE_ADVERTISEMENT](state,{index}){
    state.index=index
  },
  [RECEIVE_CLASSIFY](state,{classify}){
    state.classify=classify
  },
  [RECEIVE_BRAND](state,{brand}){

  }
}
