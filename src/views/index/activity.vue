<!--
 * @Descripttion: 
 * @Author: chenjia
 * @Date: 2019-09-29 18:00:23
 * @LastEditors: chenjia
 * @LastEditTime: 2019-10-12 15:46:24
 -->
<template>
    <div class="actvity" @click="nai">
    <!-- 活动版图 -->
    <div class="actdiv">
        <img class="actimg" src="../../assets/index/act_ban.png" alt="">
    </div>
    </div>
</template>
<script>
export default {
    methods:{
        nai(){
            this.$router.push("/naifen")
        }
    }
}
</script>
<style scoped>
.actvity{
    width: 100%;
    overflow: hidden;
    margin: 20px 0;
}
.actvity .actdiv{
    width: 94%;
    margin: 0 auto;
    border-radius: 5px;
    overflow: hidden;
}
.actvity .actdiv .actimg{
    width: 100%;
    height: 100%;
    pointer-events: none;
}
</style>