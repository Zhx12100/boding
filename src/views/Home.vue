<template>
  <div class="home">
    <div class="swiperBox">
      <el-carousel>
        <el-carousel-item v-for="(item,index) in swiperArr" :key="index">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
      <transition name="fade"
      mode="out-in"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp">
        <div class="login_box_box" v-show="!isLogin">
          <div class="container">
            <div class="login_box">
              <div class="login">
                <p>用户登录</p>
                <el-form :model="ruleForm" size="medium" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                  <el-form-item prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
                  </el-form-item>
                  <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button class="btn_login" type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <router-link  to="/Register"><el-button class="btn_register">注册</el-button></router-link>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </transition>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from 'vuex'
export default {
  name: "home",
  data(){
    return{
      ruleForm:{
        name:'',
        password:''
      },
      rules:{
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur' }
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert(valid);
          this.$message({
            message: '登录成功',
            type: 'success',
            duration:3000
          });
          this.$store.commit('changeLogin');
          console.log(this.$store.state.isLogin)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
  computed:{
    ...mapState({  //这里的...不是省略号了,是对象扩展符
      isLogin:'isLogin'
    })
  },
  components: {
  },
  mounted(){
    // console.log(this.$store.state.isLogin)
  },
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
        position:absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        z-index: 99999;
        .container{
          height: 100%;
          .login_box{
            height: 100%;
            width: 300px;
            background: rgba(0, 0, 0 , .6);
            float: right;
            line-height: 300px;
            .login{
              display:inline-block;
              vertical-align: middle;
              box-sizing: border-box;
              padding: 0 30px;
              width: 100%;
              .el-form-item__content{
                margin: 0!important;
                width: 100%;
                margin-bottom: 28px;
              }
              .el-button{
                width:48%;
                border: none;
              }
              .btn_login{
                // background: red;
                float: left;
              }
              .btn_register{
                float: right;
              }
              p{
                font:18px/1.5 "微软雅黑",Arial,YaHei,tahoma,"Hiragino Sans GB",宋体;
                color: #CACACA;
                font-weight: bold;
                margin-bottom: 20px;
              }
            }
          }
        }        
      }
    }
</style>
