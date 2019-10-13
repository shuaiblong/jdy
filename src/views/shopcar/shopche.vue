<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-11 11:38:44
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-13 10:05:13
 -->
<template>
  <div>
      <van-nav-bar
      title="购物车"
      left-text
      right-text="管理"
      left-arrow
      @click-left="onClickLft"
      @click-right="onClickRight"
    />
    <div class="navcar">
      <div>
        <p class="ji">
          <!-- 商铺全选按钮 -->
          <input type="checkbox" name class="tui-checkbox" />
          <!-- 商铺名称 -->
          <span class="di">
            极地鹰自营
            <van-icon name="arrow" />
          </span>
        </p>
        <!-- 领取优惠券 -->
        <span class="ling">
          领劵
          <van-icon name="arrow" />
        </span>
      </div>

      <van-swipe-cell>
        <div class="shopintr">
          <div class="btnimg">
            <!-- 商品选择按钮 -->
            <input type="checkbox" name class="tui-checkbox" />
            <!-- 商品图片 -->
            <img
              src="//img10.360buyimg.com/n1/jfs/t1/43364/36/13104/227599/5d64d176E92010aef/5a5c3bfe9d6ccc9e.jpg"
              class="nai"
            />
          </div>
          <div class="naileft">
            <!-- 商品标题 -->
            <p class="naititle">120粒VE+120粒vc 康恩贝天然维生素软胶囊外部用12囊外部用部粒外部用12囊外...</p>
            <!-- 商品个数 -->
            <span class="number">
              <van-stepper v-model="value" input-width="35px" button-size="26px" />
            </span>
            <!-- 商品价格 -->
            <p class="naipic">
              <span>￥</span>
              <!-- 商品价格 -->
              <span class="picbig">{{pic*value}}</span>
              <span>.80</span>
              <!-- 消除的价格 -->
              <s class="xie">￥505</s>
            </p>
          </div>
        </div>

        <template slot="right">
          <van-button square color="#999999" text="相似" />
          <van-button square color="#ffa128" text="收藏" />
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <div class="shopintr">
          <div class="btnimg">
            <!-- 商品选择按钮 -->
            <input type="checkbox" name class="tui-checkbox" />
            <!-- 商品图片 -->
            <img
              src="//img10.360buyimg.com/n1/jfs/t1/43364/36/13104/227599/5d64d176E92010aef/5a5c3bfe9d6ccc9e.jpg"
              class="nai"
            />
          </div>
          <div class="naileft">
            <!-- 商品标题 -->
            <p class="naititle">120粒VE+120粒vc 康恩贝天然维生素软胶囊外部用12囊外部用部粒外部用12囊外...</p>
            <!-- 商品个数 -->
            <span class="number">
              <van-stepper v-model="value2" input-width="35px" button-size="26px" />
            </span>
            <!-- 商品价格 -->
            <p class="naipic">
              <span>￥</span>
              <!-- 商品价格 -->
              <span class="picbig">{{pic*value2}}</span>
              <span>.80</span>
              <!-- 消除的价格 -->
              <s class="xie">￥505</s>
            </p>
          </div>
        </div>

        <template slot="right">
          <van-button square color="#999999" text="相似" />
          <van-button square color="#ffa128" text="收藏" />
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <div class="shopintr">
          <div class="btnimg">
            <!-- 商品选择按钮 -->
            <input type="checkbox" name class="tui-checkbox" />
            <!-- 商品图片 -->
            <img
              src="//img10.360buyimg.com/n1/jfs/t1/43364/36/13104/227599/5d64d176E92010aef/5a5c3bfe9d6ccc9e.jpg"
              class="nai"
            />
          </div>
          <div class="naileft">
            <!-- 商品标题 -->
            <p class="naititle">120粒VE+120粒vc 康恩贝天然维生素软胶囊外部用12囊外部用部粒外部用12囊外...</p>
            <!-- 商品个数 -->
            <span class="number">
              <van-stepper v-model="value3" input-width="35px" button-size="26px" />
            </span>
            <!-- 商品价格 -->
            <p class="naipic">
              <span>￥</span>
              <!-- 商品价格 -->
              <span class="picbig">{{pic*value3}}</span>
              <span>.80</span>
              <!-- 消除的价格 -->
              <s class="xie">￥505</s>
            </p>
          </div>
        </div>

        <template slot="right">
          <van-button square color="#999999" text="相似" />
          <van-button square color="#ffa128" text="收藏" />
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </div>
    <div class="navcar">
      <div>
        <p class="ji">
          <!-- 商铺全选按钮 -->
          <input type="checkbox" name class="tui-checkbox" />
          <!-- 商铺名称 -->
          <span class="di">
            书海图专营
            <van-icon name="arrow" />
          </span>
        </p>
        <!-- 领取优惠券 -->
        <span class="ling">
          领劵
          <van-icon name="arrow" />
        </span>
      </div>

      <van-swipe-cell>
        <div class="shopintr">
          <div class="btnimg">
            <!-- 商品选择按钮 -->
            <input type="checkbox" name class="tui-checkbox" />
            <!-- 商品图片 -->
            <img
              src="//img10.360buyimg.com/n1/jfs/t1/43364/36/13104/227599/5d64d176E92010aef/5a5c3bfe9d6ccc9e.jpg"
              class="nai"
            />
          </div>
          <div class="naileft">
            <!-- 商品标题 -->
            <p class="naititle">120粒VE+120粒vc 康恩贝天然维生素软胶囊外部用12囊外部用部粒外部用12囊外...</p>
            <!-- 商品个数 -->
            <span class="number">
              <van-stepper v-model="value" input-width="35px" button-size="26px" />
            </span>
            <!-- 商品价格 -->
            <p class="naipic">
              <span>￥</span>
              <!-- 商品价格 -->
              <span class="picbig">{{pic*value}}</span>
              <span>.80</span>
              <!-- 消除的价格 -->
              <s class="xie">￥505</s>
            </p>
          </div>
        </div>

        <template slot="right">
          <van-button square color="#999999" text="相似" />
          <van-button square color="#ffa128" text="收藏" />
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <div class="shopintr">
          <div class="btnimg">
            <!-- 商品选择按钮 -->
            <input type="checkbox" name class="tui-checkbox" />
            <!-- 商品图片 -->
            <img
              src="//img10.360buyimg.com/n1/jfs/t1/43364/36/13104/227599/5d64d176E92010aef/5a5c3bfe9d6ccc9e.jpg"
              class="nai"
            />
          </div>
          <div class="naileft">
            <!-- 商品标题 -->
            <p class="naititle">120粒VE+120粒vc 康恩贝天然维生素软胶囊外部用12囊外部用部粒外部用12囊外...</p>
            <!-- 商品个数 -->
            <span class="number">
              <van-stepper v-model="value2" input-width="35px" button-size="26px" />
            </span>
            <!-- 商品价格 -->
            <p class="naipic">
              <span>￥</span>
              <!-- 商品价格 -->
              <span class="picbig">{{pic*value2}}</span>
              <span>.80</span>
              <!-- 消除的价格 -->
              <s class="xie">￥505</s>
            </p>
          </div>
        </div>

        <template slot="right">
          <van-button square color="#999999" text="相似" />
          <van-button square color="#ffa128" text="收藏" />
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <div class="shopintr">
          <div class="btnimg">
            <!-- 商品选择按钮 -->
            <input type="checkbox" name class="tui-checkbox" />
            <!-- 商品图片 -->
            <img
              src="//img10.360buyimg.com/n1/jfs/t1/43364/36/13104/227599/5d64d176E92010aef/5a5c3bfe9d6ccc9e.jpg"
              class="nai"
            />
          </div>
          <div class="naileft">
            <!-- 商品标题 -->
            <p class="naititle">120粒VE+120粒vc 康恩贝天然维生素软胶囊外部用12囊外部用部粒外部用12囊外...</p>
            <!-- 商品个数 -->
            <span class="number">
              <van-stepper v-model="value3" input-width="35px" button-size="26px" />
            </span>
            <!-- 商品价格 -->
            <p class="naipic">
              <span>￥</span>
              <!-- 商品价格 -->
              <span class="picbig">{{pic*value3}}</span>
              <span>.80</span>
              <!-- 消除的价格 -->
              <s class="xie">￥505</s>
            </p>
          </div>
        </div>

        <template slot="right">
          <van-button square color="#999999" text="相似" />
          <van-button square color="#ffa128" text="收藏" />
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </div>
    <navfoot></navfoot>
  </div>
</template>
<script>
import navfoot from "../../components/foot";
export default {
  data() {
    return {
      value: 1,
      value2: 1,
      value3: 1,
      pic: 200
    };
  },
  methods:{
      shou(){
      this.$router.push("/");
    },
    onClickLft() {
      this.$router.go("-1");
    },
    onClickRight() {
      this.$toast("管理");
    }
  },
  components:{
      navfoot
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
.tui-checkbox:checked {
  background: #ff6d15;
}
.tui-checkbox {
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  /* border: 0; */
  outline: none;
  border: solid 1px rgb(153, 153, 153);
  -webkit-border-radius: 50%;
  border-radius: 50%;
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  vertical-align: top;
  cursor: default;
  -webkit-appearance: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-transition: background-color ease 0.1s;
  transition: background-color ease 0.1s;
}
.tui-checkbox:checked::after {
  content: "";
  top: 8px;
  left: 8px;
  position: absolute;
  background: transparent;
  border: #fff solid 2px;
  border-top: none;
  border-right: none;
  height: 6px;
  width: 10px;
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.navcar {
  text-align: left;
  width: 90%;
  margin: 20px auto 0;
  color: #333333;
  padding: 30px 0;
  background: #ffffff;
}
.ji {
  font-size: 26px;
  display: inline-flex;
  align-items: center;
  margin: 0;
}
.ling {
  font-size: 26px;
  float: right;
  display: inline-flex;
  align-items: center;
  color: #ff1c1c;
}
.di {
  display: inline-flex;
  align-items: center;
  margin-left: 20px;
}
.shopintr {
  display: flex;
  margin-top: 40px;
  padding-bottom: 30px;
  border-bottom: 3px solid #f9f9f9;
}
.nai {
  width: 160px;
  height: 160px;
  margin: 0 20px;
}
.btnimg {
  display: inline-flex;
  align-items: center;
}
.naititle {
  font-size: 24px;
  margin: 0;
  color: #6e6e6e;
}
.naileft {
  position: relative;
}
.number {
  position: absolute;
  bottom: 0;
  right: 0;
}
.naipic {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 24px;
  color: #ff1c1c;
  margin: 0;
}
.picbig {
  font-size: 32px;
}
.xie {
  color: #a2a2a2;
}
.van-button {
  height: 160px;
}
</style>