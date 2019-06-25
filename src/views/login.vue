<template>
  <div class="home">
    <div class="LoginR">

      <!-- 登录 -->
      <div class="login_box_box">
        <div class="container">
          <div class="login_box">
            <h2 class="title">登录</h2>
            <div class="login">
              <el-form
                :model="ruleLogin"
                size="medium"
                :rules="rulesL"
                ref="ruleLogin"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item prop="name">
                  <el-input v-model="ruleLogin.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="password" v-model="ruleLogin.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <p class="p1">
                    <router-link class="span1" to="/Forgot">忘记密码</router-link> 
                    <router-link class="span2" to="/Register">马上注册</router-link> 
                  </p>
                </el-form-item>
                
                <el-form-item>
                  <el-button
                    class="btn_next"
                    type="primary"
                    @click="submitLogin('ruleLogin')"
                    v-loading.fullscreen.lock="fullscreenLoading"
                  >登录</el-button>
                </el-form-item>
              </el-form>
              
            </div>
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
      fullscreenLoading: false,
      ruleLogin:{//登录数据
        name:'',
        password:''
      },
      //验证
      rulesL:{
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        // password: [
        //   { required: true, message: '请输入密码', trigger: 'blur' },
        //   { min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur' }
        // ]
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '密码长度不得小于6位', trigger: 'blur' }
          ]
      },
      swiperArr:[  //轮播图    
        require("../assets/img/swiper/swiper_1.jpg"),
        require("../assets/img/swiper/swiper_2.jpg"),
        require("../assets/img/swiper/swiper_3.jpg")      
      ], 
    }
  },
  methods:{
    openFullScreen() {
      
    },
    submitLogin(formName) {
      var that = this;
      
      that.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(that.ruleLogin)
          this.$store.commit('changeLogin');
          const loading = this.$loading({
            lock: true,
            text: '登录中... ',
            spinner: 'el-icon-loading',
            customClass:'loadingShow',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          setTimeout(() => {
            loading.close();    
            that.$router.push({ path: '/' })
          }, 2000);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  components: {
    // HelloWorld
  },
  mounted(){
    if(this.$route.query.type){
      this.$message({
        message: "请先登录",
        type: 'warning'
      });
    }
  },
  watch:{

  }
};
</script>
<style lang="scss" scope>
// $theme-color:red;
.loadingShow{
  font-size: 50px; 
  .el-loading-text{
    font-size: 20px;
  }
}
.LoginR {
  width: 100%;
  height: 500px;
  position: relative;
  background: url("../assets/img/swiper/swiper_2.jpg");
  background-size: 100% 100%;
  .el-carousel__container {
    height: 400px;
  }
  .el-checkbox-group {
    line-height: 15px;
  }
  .el-carousel__item {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .login_box_box {
    width: 100%;
    height: 300px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    z-index: 999;
    .container {
      height: 100%;
      .login_box {
        height: 100%;
        width: 300px;
        background: rgba(0, 0, 0, 0.6);
        float: right;
        line-height: 300px;
        position: relative;
        .title {
          position: absolute;
          top: 0;
          left: 0;
          height: 40px;
          width: 100%;
          background: rgba(0, 0, 0, 0.3);
          text-align: center;
          font: 18px/40px "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB",
            宋体;
          color: #cacaca;
          font-weight: bold;
        }
        .login {
          display: inline-block;
          vertical-align: middle;
          box-sizing: border-box;
          padding: 0 30px;
          width: 100%;
          margin-top: 44px;
          .el-checkbox {
            color: #cacaca;
            font-size: 15px;
          }
          .el-form-item {
            margin-bottom: 15px;
            .el-form-item__content {
              margin: 0 !important;
              width: 100%;
            }
          }
          .btn_next {
            width: 100%;
          }
          .p1{
              font-size: 12px;
              color: #cacaca;
              text-align: center;
              line-height: 1.5;
              .span2{
                float: right;
                color:white;
                cursor: pointer;
              }
              .span1{
                float: left;
                cursor: pointer;
              }
          }
        }
      }
    }
  }
}
</style>
