<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-30 16:53:37
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-12 15:45:16
 -->
<template>
    <!-- 商品列表 -->
    <div class="tabshop">
        <van-tabs v-model="active"  class="tablist">
        <van-tab title="精选">
            <van-row>
            <van-col span="12">
                <div class="jxl">
                    <img class="jxlimg" src="../../assets/index/g.png" alt="">
                    <p class="jxlp1">连帽卫衣男</p>
                    <div class="jxldiv">
                        <span class="jxspan1">￥</span>
                        <span class="jxspan2">105</span>
                        <span class="jxspan3">.80</span>
                        <span class="jxspan4">秒杀</span>
                    </div>
                </div>
            </van-col>
            <van-col span="12">
                <div class="jxl">
                    <img class="jxlimg" src="../../assets/index/g.png" alt="">
                    <p class="jxlp1">连帽卫衣男</p>
                    <div class="jxldiv">
                        <span class="jxspan1">￥</span>
                        <span class="jxspan2">105</span>
                        <span class="jxspan3">.80</span>
                        <span class="jxspan4">秒杀</span>
                    </div>
                </div>
            </van-col>
            <van-col span="12">
                <div class="jxl">
                    <img class="jxlimg" src="../../assets/index/g.png" alt="">
                    <p class="jxlp1">连帽卫衣男</p>
                    <div class="jxldiv">
                        <span class="jxspan1">￥</span>
                        <span class="jxspan2">105</span>
                        <span class="jxspan3">.80</span>
                        <span class="jxspan4">秒杀</span>
                    </div>
                </div>
            </van-col>
            <van-col span="12">
                <div class="jxl">
                    <img class="jxlimg" src="../../assets/index/g.png" alt="">
                    <p class="jxlp1">连帽卫衣男</p>
                    <div class="jxldiv">
                        <span class="jxspan1">￥</span>
                        <span class="jxspan2">105</span>
                        <span class="jxspan3">.80</span>
                        <span class="jxspan4">秒杀</span>
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
      active: 0
    };
  }
}
</script>
<style scoped>
.tablist{
    margin-bottom: 100px;
    z-index:0;
    overflow: hidden;
}

.jxl .jxlimg{
    width: 350px;
    height: 340px;
    margin: 10px auto 0;
}
.jxl .jxlp1{
    color: #333333;
    font-size: 26px;
    margin: 0;
    margin-left: 30px;
    text-align: left;
}
.jxl .jxldiv{
    color: #ff1c1c;
    margin-top: 3px;
    text-align: left;
    margin-left: 30px;
}
.jxldiv .jxspan2{
    font-size: 30px;
    font-weight: 600;
}
.jxldiv .jxspan4{
    font-size: 20px;
    margin-left: 5px;
    padding: 0 3px;
    border: 1px solid #ff1c1c;
    border-radius: 3px;
}
.jxldiv .jxspan3{
    font-size: 20px;
}
</style>