<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-29 18:44:52
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-12 15:52:14
 -->
<template>
  <div  class="xm">
    <van-row>
      <!-- 秒杀模块 -->
      <van-col span="12" class="xmleft" @click="add">
        <div>
          <p class="title">
            <van-count-down class="djs" :time="time" />
          </p>
          <van-row>
            <van-col span="12">
              <div class="xq">
                <img class="xqimg" src="http://dummyimage.com/116x116" alt />
                <p class="xqtitle">￥206</p>
              </div>
            </van-col>
            <van-col span="12">
              <div class="xq">
                <img class="xqimg" src="http://dummyimage.com/116x116" alt />
                <p class="xqtitle">￥171</p>
              </div>
            </van-col>
          </van-row>
        </div>
      </van-col>
      <!-- 服装模块 -->
      <van-col span="12" class="xmleft">
        <p class="xmlp">
          <span class="titleb">服饰鞋帽</span>
          <span class="titles">人间不值得</span>
        </p>
        <img class="titleimg" src="http://dummyimage.com/116x116" alt />
          <img class="titleimg" src="http://dummyimage.com/116x116" alt />
      </van-col>
    </van-row>
    <van-row class="shop">
        <van-col span="6">
          <p class="titlef">服饰鞋帽</p>
          <p class="titlex">人间不值得</p>
          <img class="titlei" src="http://dummyimage.com/116x116" alt="">
        </van-col>
        <van-col span="6">
          <p class="titlef">服饰鞋帽</p>
          <p class="titlex">人间不值得</p>
          <img class="titlei" src="http://dummyimage.com/116x116" alt="">
        </van-col>
        <van-col span="6">
          <p class="titlef">服饰鞋帽</p>
          <p class="titlex">人间不值得</p>
          <img class="titlei" src="http://dummyimage.com/116x116" alt="">
        </van-col>
        <van-col span="6">
          <p class="titlef">服饰鞋帽</p>
          <p class="titlex">人间不值得</p>
          <img class="titlei" src="http://dummyimage.com/116x116" alt="">
        </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    };
  },
  methods:{
    add(){
    this.$router.push("/renjian")
    }
  }
};
</script>
<style scoped>
.xm {
  background-color: #ffffff;
  margin: 10px;
  border-radius: 15px;
  padding: 10px 15px;
}

.djs{
    color: #fe3f3f;
    font-size: 24px;
    margin-left: 121px;
    line-height: 40px;
}
.title {
  width: 121px;
  height: 32px;
  background: url(../../assets/index/xsms.png) no-repeat;
  background-size: 100%;
  margin: 0;
  margin-left: 15px;
}
.xqimg {
    width: 100%;
    margin: 20px 0 10px 0;
}
.xq {
  width: 116px;
  margin: 0 auto;
}
.xqtitle {
  font-size: 16px;
  border-radius: 18px;
  border: 1px solid rgb(254,63,63);
  color: rgb(254,63,63);
  margin: 0;
}
.titleb {
  font-size: 30px;
  color: #333333;
  margin-right: 47px;
}
.titles {
  font-size: 20px;
  color: #19ffd1;
}
.titleimg {
    width: 150px;
    margin: 10px;
}
.titlei{
  width: 150px;
}
.titlef{
  margin: 0;
  text-align: left;
  margin-left: 18px;
  font-size: 30px;
}
.titlex{
  color: rgb(255, 25, 198);
  font-size: 20px;
  text-align: left;
  margin:0 0 5px 18px;
  font-size: 20px;
}
.shop{
  margin-top: 10px;
}
.xmlp{
  margin: 0;
}
</style>