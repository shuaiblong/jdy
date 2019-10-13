<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-13 09:19:50
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-13 14:25:59
 -->
<template>
  <div class="ddxq">
      <!-- 头部导航栏 -->
    <van-nav-bar title="订单详情" left-text left-arrow @click-left="onClickLft">
      <van-icon class="yuan" slot="right" />
      <van-icon class="dian" slot="right" />
      <van-icon class="dian" slot="right" />
      <van-icon class="dian" slot="right" />
    </van-nav-bar>
    <!-- 背景图 -->
    <div class="fkbg">
        <p class="lpay">
            <!-- 付款状态 -->
          <i class="iconfont icon-daifukuan"></i>
          <span class="pay">等待买家付款</span>
        </p>
        <p class="time">
          请在 
          <van-count-down :time="time" format="mm分ss秒" />内完成支付，超时订单自动取消。
        </p>
        <!-- 地址版 -->
        <div class="dizhi">
            <!-- 名字 手机号 -->
            <p class="xinxi">
                <i class="iconfont icon-dingwei"></i>
                <span class="name">大风</span>
                <span class="phone">123 1325 1451</span>
            </p>
            <p class="address">
                广东省深圳市龙华新区民治街道南源新村99栋（一家便利店）广东省深圳市龙华新区民治街道南源新村99栋 （一家便利店）
            </p>
        </div>   
    </div>
    <ceshi class="ce"></ceshi>
    <div class="shou">
        <p>
            <span class="title">商品总价：</span>
            <span class="pic">￥227.60</span>
        </p>
        <p>
            <span class="title">商品优惠券：</span>
            <span class="jian">-￥50.00</span>
        </p>
        <p>
            <span class="title">运费:</span>
            <span class="pic">￥10.00</span>
        </p>
        <p>
            <span>实付款：</span>
            <span>￥187.60</span>
        </p>
    </div>
  </div>
</template>
<script>
import ceshi from '../ceshi/ceshi'
export default {
  data() {
    return {
      time: 30 * 60 * 1000
    };
  },
  methods: {
    onClickLft() {
      this.$router.go(-1);
    }
  },
  components:{
      ceshi
  }
};
</script>
<style scoped>
.ddxq {
    height: 100vh;
  overflow: hidden;
  background: #f5f5f5;
}
.van-nav-bar__text {
  font-size: 26px;
  color: rgb(51, 51, 51);
}
.van-icon-arrow-left:before {
  color: rgb(51, 51, 51);
  font-weight: 600;
}
.van-nav-bar__title {
  font-size: 32px;
  font-weight: 600;
}
.dian {
  width: 10px;
  height: 10px;
  background: #000;
  border-radius: 50%;
  margin: 0 5px;
}
.yuan {
  width: 17px;
  height: 17px;
  background: rgb(255, 101, 25);
  border-radius: 50%;
  margin: -45px -65px 0px 0px;
}
.lpay{
    margin-left: 30px;
}
.fkbg {
  box-sizing: border-box;
  width: 750px;
  height: 215px;
  background-image: url(../../assets/mai.png);
  text-align: left;
  position: relative;
  padding-top: 30px;
}
.icon-daifukuan {
  font-size: 36px;
  color: white;
}
.pay {
  margin-left: 20px;
  font-size: 36px;
  color: white;
}
.time {
  margin-left: 75px;
  font-size: 24px;
  color: white;
  display: flex;
}
.van-count-down {
  color: white;
}
.dizhi{
    box-sizing: border-box;
    padding-bottom: 20px;
    position: absolute;
    background: #ffffff;
    width: 710px;
    padding-right: 20px;
    margin-left: 20px;
    border-radius: 8px;
    height: 180px;
}
.icon-dingwei{
    font-size: 24px;
}
.xinxi{
    margin-left: 25px;
}
.name{
    font-size: 24px;
    margin-left: 25px;
}
.phone{
    margin-left: 20px;
}
.address{
    box-sizing: border-box;
    padding-left: 75px;
    font-size: 20px;
    color:#999999;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /*设置省略号在容器第四行文本后*/-webkit-line-clamp: 2; 
    overflow: hidden;
}
.ce{
    margin-top: 175px;
}
.shou{
   width: 710px;
   margin: 0 auto;
   background: #ffffff;
   border-radius: 5px;
   padding: 30px;
   box-sizing: border-box;
}
.shou::after{
    content: "";
    display: block;
    clear: both;
}
.shou .title{
    font-size: 24px;
    color: #b0b0b0;
}
.shou .pic{
    font-size: 24px;
    color: #b0b0b0;
}
.shou p{
    display: flex;
    justify-content: space-between;
}
</style>