<template>
  <div id="app">
    <topHeader></topHeader>
    <!-- <div id="nav">
      <router-link to="/">Home222</router-link> |
      <router-link to="/about">About</router-link>
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    </div>
    <router-view /> -->
  </div>
</template>
<script>
import topHeader from "@/components/topHeader.vue";
  export default {
    data() {
      return {
        // num: 1
      };
    },
    methods: {
      // handleChange(value) {
      //   console.log(value);
      // }
    },
    components: {
      topHeader
    }
  }
</script>
<style lang="scss">
body,html{
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  position: relative;
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
