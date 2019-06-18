<template>
  <div id="head_box">
    <div class="head_1 clearfix">
      <div class="container clearfix">
        <p class="pull-left">
          服务热线 在线联系客服 丨
          <a href="javascript:;">13502947522</a>
        </p>
        <p class="pull-right">
          <router-link to="home">登录</router-link>丨
          <router-link to="home">注册</router-link>
        </p>
      </div>
    </div>
    <div class="head_2 clearfix">
      <div class="container">
        <el-menu
          default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-menu-item index="2">我的工作台</el-menu-item>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4">
            <a href="https://www.ele.me" target="_blank">订单管理</a>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // name: "topHeader",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
#head_box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  .head_1 {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: black;
    margin: 0 auto;
    color: #cacaca;
  }
}
</style>
