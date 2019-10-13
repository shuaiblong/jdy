<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-12 09:12:51
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-13 09:25:39
 -->
<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-12 09:12:51
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-12 10:33:32
 -->
<template>
  <div class="dingdan">
    <van-nav-bar
      title="我的订单"
      left-text
      left-arrow
      @click-left="onClickLft"
    />
    <ul class="navtab">
      <li @click="cur=0">
        <span :class="cur==0?'change':''">全部</span>
      </li>
      <li @click="cur=1">
        <span :class="cur==1?'change':''">待付款</span>
      </li>
      <li @click="cur=2">
        <span :class="cur==2?'change':''">待发货</span>
      </li>
      <li @click="cur=3">
        <span :class="cur==3?'change':''">待收货</span>
      </li>
      <li @click="cur=4">
        <span :class="cur==4?'change':''">待评价</span>
      </li>
    </ul>
    <div class="tab-content">
      <!-- 全部 -->
      <div v-show="cur==0">
        <div class="state">
            <!-- 店铺导航栏 -->
          <div class="stanav">
            <span class="zhuan">
                <!-- 类型店铺 icon图固定不用动-->
              <i class="iconfont icon-dianpu"></i> 
               专营店
              <van-icon name="arrow" />
            </span>
            <!-- 商品状态(代付款发货类) -->
            <span class="huo">已发货</span>
          </div>
          <ul class="xqshop">

            <li>
                <!-- 商品图片v-for循环 -->
              <img
                src="//img12.360buyimg.com/n1/jfs/t30052/127/1612053323/198563/aba0f961/5ce647f6Ndace9815.jpg"
                class="veimg"
              />
            </li>
            
            <li class="xqtitle">
                <!-- 商品介绍v-for循环 -->
                <p class="xqtitlep">
                    120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V
                </p>
                <!-- 商品名字数量 -->
                <p class="xqguige">酒红色,L x1</p>
            </li>
            <li class="xqpic">
                <!-- 商品价格 -->
                <p class="xqpir">￥113.80</p>
                <!-- 商品个数 -->
                <p class="xqnum">x1</p>
            </li>
          </ul>
          <p class="total">
              <!-- 需要多少商品 -->
              <span class="totnum">共1件商品 </span>
              <!-- 合计多少钱 -->
              <span class="totpic"> 合计：￥113.8</span>
          </p>
          <p class="btn">
              <button>再次购买</button>
              <button>查看物流</button>
              <button class="xuan">确认收货</button>
          </p>
        </div>
      </div>
      <!-- 待付款 -->
      <div v-show="cur==1">
          <div class="state" v-for="(item,i) in list" :key="i">
            <!-- 店铺导航栏 -->
          <div class="stanav">
            <span class="zhuan">
                <!-- 类型店铺 icon图固定不用动-->
              <i class="iconfont icon-dianpu"></i> 
               {{item.dianpu}}
              <van-icon name="arrow" />
            </span>
            <!-- 商品状态(代付款发货类) -->
            <span class="huo">{{item.zhuangtai}}</span>
          </div>
          <ul class="xqshop">

            <li>
                <!-- 商品图片v-for循环 -->
              <img
                :src="item.img"
                class="veimg"
              />
            </li>
            
            <li class="xqtitle">
                <!-- 商品介绍v-for循环 -->
                <p class="xqtitlep">
                    {{item.title}}
                </p>
                <!-- 商品名字数量 -->
                <p class="xqguige"><span>
                {{item.color}}</span> x{{item.number}}</p>
            </li>
            <li class="xqpic">
                <!-- 商品价格 -->
                <p class="xqpir">￥{{item.pic}}</p>
                <!-- 商品个数 -->
                <p class="xqnum">x{{item.number}}</p>
            </li>
          </ul>
          <p class="total">
              <!-- 需要多少商品 -->
              <span class="totnum">共{{item.number}}件商品 </span>
              <!-- 合计多少钱 -->
              <span class="totpic"> 合计：￥{{item.pic*item.number}}</span>
          </p>
          <p class="btn">
              <button>{{item.zai}}</button>
              <button>{{item.cha}}</button>
              <button class="xuan">{{item.que}}</button>
          </p>
        </div>
      </div>
      <!-- 待发货 -->
      <div v-show="cur==2">内容三</div>
      <!-- 待收货 -->
      <div v-show="cur==3">内容四</div>
      <!-- 待评价 -->
      <div v-show="cur==4">内容5</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cur: 0,
      list:[
          {
          dianpu: "专营店",
          zhuangtai: "待付款",
          img: "//img12.360buyimg.com/n1/jfs/t30052/127/1612053323/198563/aba0f961/5ce647f6Ndace9815.jpg",
          title: "120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V",
          pic: "110.38",
          number: "2",
          color:"酒红色",
          zai:"再次购买",
          cha:"查看物流",
          que:"待付款"
        },
        {
          dianpu: "新的",
          zhuangtai: "待付款",
          img: "//img12.360buyimg.com/n1/jfs/t30052/127/1612053323/198563/aba0f961/5ce647f6Ndace9815.jpg",
          title: "120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V",
          pic: "110.38",
          number: "2",
          color:"酒红色",
          zai:"再次购买",
          cha:"查看物流",
          que:"待付款"
        },
        {
          dianpu: "专营店",
          zhuangtai: "待付款",
          img: "//img12.360buyimg.com/n1/jfs/t30052/127/1612053323/198563/aba0f961/5ce647f6Ndace9815.jpg",
          title: "120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V",
          pic: "110.38",
          number: "2",
          color:"酒红色",
          zai:"再次购买",
          cha:"查看物流",
          que:"待付款"
        },
        {
          dianpu: "专营店",
          zhuangtai: "待付款",
          img: "//img12.360buyimg.com/n1/jfs/t30052/127/1612053323/198563/aba0f961/5ce647f6Ndace9815.jpg",
          title: "120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V120粒VE+120粒vc康恩贝天生素E软胶囊外部用120粒V",
          pic: "110.38",
          number: "2",
          color:"酒红色",
          zai:"再次购买",
          cha:"查看物流",
          que:"待付款"
        }
      ]
    };
  },
  methods:{
    onClickLft(){
      this.$router.go(-1)
    }
  }
};
</script>
<style scoped>
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
.dingdan {
  text-align: left;
  background: #f5f5f5;
  height: 100vh;
}
.navtab{
  background: #ffffff;
  border-top: 2px solid rgb(245,245,245);
}
.navtab li {
  float: left;
  width: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.navtab li span {
  display: inline-flex;
  align-items: center;
  font-size: 26px;
  height: 85px;
}
.navtab li span:visited {
  color: #ff6d15;
}
.navtab::after {
  content: "";
  display: block;
  clear: both;
}
.change {
  color: #ff6d15;
  border-bottom: 4px solid #ff6d15;
}
.icon-dianpu {
  font-size: 26px;
}
.zhuan {
  font-size: 26px;
  float: left;
  display: inline-flex;
  align-items: center;
}
.huo {
  color: #ff6d15;
  font-size: 26px;
  float: right;
}
.state {
  padding: 30px;
  background: #ffffff;
  margin: 20px;
  border-radius: 10px;
}
.veimg {
  width: 158px;
  height: 158px;
  margin-right: 30px;
}
.stanav::after {
  content: "";
  display: block;
  clear: both;
}
.xqshop li{
    float: left;
}
.xqshop::after{
    content: "";
    display: block;
    clear: both;
}
.xqtitle{
    width: 306px;
    
}
.xqtitlep{
    font-size: 24px;
    margin: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /*设置省略号在容器第四行文本后*/
    -webkit-line-clamp: 2; 
    overflow: hidden;
}
.xqguige{
    margin-top: 10px;
    font-size: 22px;
    color: rgb(153, 153, 153);
}
.xqpic{
    float: right !important;
    text-align: right;
}
.xqpir{
    margin: 0;
    font-size: 24px;
}
.xqnum{
    margin-top: 10px;
    font-size: 22px;
    color: rgb(153, 153, 153);
}
.xqshop{
    margin-top: 16px;
}
.total{
    text-align: right;
}
.totnum{
    font-size: 24px;
}
.totpic{
    font-size: 24px;
}
.btn{
    font-size: 24px;
    text-align: right;
}
.btn button{
    border: 1px solid #666666;
    background: #ffffff;
    border-radius: 50px;
    padding: 5px 20px;
    margin: 0 10px;
}
.xuan{
    color: #ff6d15;
    border: 1px solid #ff6d15 !important;
}
</style>