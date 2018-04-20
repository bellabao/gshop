//与后台交互
import ajax from './ajax'
/**
 获取E宠主页广告列表
 */
export const reqAdvertisement=()=>ajax('/api/index')
//获取E宠分类列表
export const reqClassify=()=>ajax('/api/classify')
//获取E宠品牌列表
export  const reqBrand=()=>ajax('/api/brand')
//获取E宠品牌全部列表
export const reqAllbrand=()=>ajax('/api/allbrand')
//获取轮播图广告和每日疯抢
export const reqCarousel=()=>ajax('/api/carousel')
//获取一次性验证码
export  const reqCaptcha=()=>ajax('/api/captcha')
//用户名密码登陆
export  const reqLoginPwd=({name,pwd})=>ajax('/api/login_pwd',{name,pwd},"POST")
//发送短信验证码
export const reqSendcode=(phone)=>ajax('/api/sendcode',{phone})
//手机号验证码登陆
export const reqLoginSms=({phone,code})=>ajax('/api/login_sms',{phone,code},'POST')
//根据会话获取用户信息
export const reqUserInfo=()=>ajax('/api/userinfo')
