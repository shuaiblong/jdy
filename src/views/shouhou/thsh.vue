<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-10-20 17:37:42
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-20 18:13:10
 -->
<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="退还/售后" left-text left-arrow @click-left="onClickLft" />
    <div class="box">
      <p class="zhuan">
        <i class="iconfont icon-dianpu"></i>&nbsp;
        <span>专营店</span>&nbsp;&nbsp;
        <van-icon name="arrow" />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLft() {
      this.$router.go(-1);
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
.zhuan {
  display: flex;
  align-items: center;
  margin: 0;
}
.box {
  width: 710px;
  margin: 20px auto;
  box-sizing: border-box;
  padding: 30px;
  background: #ffffff;
  border-radius: 10px;
}
</style>