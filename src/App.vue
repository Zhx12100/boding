<template>
  <div id="app">
    <topHeader v-if="hackReset" @ResetHead="reset"></topHeader>
  </div>
</template>
<script>
import topHeader from "@/components/topHeader.vue";
  export default {
    data() {
      return {
        hackReset:true//控制导航组件强制刷新
      };
    },
    methods: {
      reset(){//控制导航组件强制刷新
        var that = this;
        that.hackReset = false
        that.$nextTick(() => {
            that.hackReset= true
        });
      }
    },
    components: {
      topHeader
    },
    
  }
  
</script>
<style lang="scss" scope>

body,html{
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  position: relative;
  padding-top: 90px;
  padding-bottom: 300px;
  overflow:hidden;
  box-sizing: border-box;
  background: #efeff4;
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
