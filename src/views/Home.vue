<template>
  <div class="home">
    <div class="swiperBox">
      <el-carousel>
        <el-carousel-item v-for="(item,index) in swiperArr" :key="index">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
      <div class="login_box_box">
          <div class="container">
            <div class="login_box">

            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data(){
    return{
      swiperArr:[      
        require("../assets/img/swiper/swiper_1.jpg"),
        require("../assets/img/swiper/swiper_2.jpg"),
        require("../assets/img/swiper/swiper_3.jpg")      
      ]      
    }
  },
  components: {
    // HelloWorld
  }
};
</script>
<style lang="scss" scope>
    .swiperBox{
      width: 100%;
      height: 400px;
      position: relative;
      .el-carousel__container{
        height: 400px;
      }
      .el-carousel__item{
        width: 100%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .login_box_box{
        width: 100%;
        height: 300px;
        background: pink;
        position:absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        z-index: 99999;
        .container{
          height: 100%;
          .login_box{
            height: 100%;
            // width: 200px;
            background: black;
            float: right;
          }
        }        
      }
    }
</style>
