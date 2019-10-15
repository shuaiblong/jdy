<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-30 16:53:37
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-15 18:23:56
 -->
<template>
  <!-- 商品列表 -->
  <div class="tabshop">
    <van-tabs v-model="active" class="tablist">
      <van-tab title="精选">
        <van-row>
          <van-col span="12" v-for="(item,i) in xbannerlist" :key="i">
            <div class="jxl">
              <img class="jxlimg" :src="item.img" alt />
              <p class="jxlp1" v-text="item.title1"></p>
              <div class="jxldiv">
                <span class="jxspan2" v-text="item.price"></span>
                <span class="jxspan3">.80</span>
                <span class="jxspan4" v-text="item.miaosha"></span>
              </div>
            </div>
          </van-col>
        </van-row>
      </van-tab>
      <van-tab title="时尚"></van-tab>
      <van-tab title="生活"></van-tab>
      <van-tab title="母婴"></van-tab>
      <van-tab title="电器"></van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      xbannerlist: []
    };
  },
  created() {
    this.axios.get("../../../public/data/lianxi.json").then(res => {
      console.log(res.data.jingxuan[0].xinxi);
      this.xbannerlist = res.data.jingxuan[0].xinxi;
    });
  }
};
</script>
<style scoped>
.tablist {
  margin-bottom: 100px;
  z-index: 0;
  overflow: hidden;
}

.jxl .jxlimg {
  width: 350px;
  height: 340px;
  margin: 10px auto 0;
}
.jxl .jxlp1 {
  color: #333333;
  font-size: 26px;
  margin: 0;
  margin-left: 30px;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /*设置省略号在容器第四行文本后*/
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.jxl .jxldiv {
  color: #ff1c1c;
  margin-top: 3px;
  text-align: left;
  margin-left: 30px;
}
.jxldiv .jxspan2 {
  font-size: 30px;
  font-weight: 600;
}
.jxldiv .jxspan4 {
  font-size: 20px;
  margin-left: 5px;
  padding: 0 3px;
  border: 1px solid #ff1c1c;
  border-radius: 3px;
}
.jxldiv .jxspan3 {
  font-size: 20px;
}
</style>