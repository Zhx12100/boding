<template>
  <div class="home">
    <div class="LoginR">
      <!-- 注册 -->
      <div class="register_box_box">
        <div class="container">
          <div class="register_box">
            <h2 class="title">注册</h2>
            <!-- 第一步 -->
            <transition name="fade"
            mode="out-in"
            enter-active-class="animated fadeInRight"
            leave-active-class="fadeOutLeft">
              <div class="register" v-show="registerStep==1">
                <el-form
                  :model="ruleRegister"
                  size="medium"
                  :rules="rules"
                  ref="ruleRegister"
                  label-width="100px"
                  class="demo-ruleForm"
                >
                  <el-form-item prop="name">
                    <el-input v-model="ruleRegister.name" placeholder="请输入用户名"></el-input>
                  </el-form-item>
                  <el-form-item prop="password">
                    <el-input type="password" v-model="ruleRegister.password" placeholder="请输入密码"></el-input>
                  </el-form-item>
                  <el-form-item prop="checkPassword">
                    <el-input
                      type="password"
                      v-model="ruleRegister.checkPassword"
                      placeholder="请再次输入密码"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="recommend">
                    <el-input type="text" v-model="ruleRegister.recommend" placeholder="请输入机构推荐码"></el-input>
                  </el-form-item>
                  <!-- <el-form-item prop="password">
                      <el-input v-model="ruleRegister.password" placeholder="请输入机构推荐码"></el-input>
                  </el-form-item>-->
                  <el-form-item prop="remark">
                    <el-checkbox-group v-model="ruleRegister.remark">
                      <el-checkbox label="投资有风险，入市需谨慎" name="remark"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      class="btn_next Danger"
                      type="primary"
                      @click="submitForm('ruleRegister')"
                    >下一步</el-button>
                    <!-- <router-link to="/about"><el-button class="btn_register">注册</el-button></router-link> -->
                  </el-form-item>
                </el-form>
                <p class="p1">已有账号?直接 <router-link to="/Login">登录</router-link> </p>
              </div>
            </transition>
            <!-- 第二步 -->
            <transition name="fade"
            mode="out-in"
            enter-active-class="animated fadeInRight"
            leave-active-class="fadeOutLeft">
              <div class="register_two" v-show="registerStep==2">
                <el-form
                  :model="ruleRegister2"
                  size="medium"
                  :rules="rules2"
                  ref="ruleRegister2"
                  label-width="100px"
                  class="demo-ruleForm"
                >
                  <el-form-item prop="phone">
                    <el-input type="number" v-model="ruleRegister2.phone" placeholder="请输入手机号码"></el-input>
                  </el-form-item>
                  <el-form-item prop="code">
                    <el-input type="number" v-model="ruleRegister2.code" placeholder="请输入验证码" style="width:50%;float:left"></el-input>
                    <el-button @click="codeShow()" class="codeBtn" :class="{codeActive:codeActive}">{{codeNumber}}</el-button>
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      class="btn_next Danger"
                      type="primary"
                      @click="submitForm_two('ruleRegister2')"
                    >下一步</el-button>
                    <!-- <router-link to="/about"><el-button class="btn_register">注册</el-button></router-link> -->
                  </el-form-item>
                </el-form>
                <p class="p1">已有账号?直接 <router-link to="/Login">登录</router-link> </p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { clearInterval, setTimeout } from 'timers';
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data(){
    //验证手机号码
    var validatePhone = (rule, value, callback) => {
      const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
      if (value === '') {
          callback(new Error('手机号不能为空'));
      } else if (!reg.test(value)) {
          callback(new Error('手机号码格式不正确'));
          this.codeActive = false;
      } else {
          this.codeActive = true;
          callback();
      }
    };
    //验证验证码
    var validateCode = (rule, value, callback) => {
      const code = this.code;
      if (value === '') {
          callback(new Error('验证码不能为空'));
      } else if (value!=code) {
          callback(new Error('验证码不正确'));
      } else {
          callback();
      }
    };
    //验证两支密码
    var validatePass = (rule, value, callback) => {
      if (value === '') {
          callback(new Error('请输入密码'));
      } else if(value.length<6){
          callback(new Error(''));
      }else {
        if (this.ruleRegister.checkPassword !== '') {
            this.$refs.ruleRegister.validateField('checkPassword');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
          callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleRegister.password) {
          callback(new Error('两次输入密码不一致!'));
      } else {
          callback();
      }
    };
    return{
      registerStep:1,//步骤
      ruleRegister:{//注册第一页数据
        name:'',
        password:'',
        checkPassword:'',
        remark:[],
        recommend:'',
      },
      ruleRegister2:{//注册第一页数据
        phone:'',
        code:''
      },
      code:123456,//手机验证码
      codeImg:1234,//图片验证码
      codeImgType:false,//图片验证码是否完成验证 
      codeActive:false,//判断是否可以获取校验码，从而改变校验码按钮的样式
      codeNumber:'获取校验码',
      //验证
      rules:{
        name: [
          { required: true, message: '请输入用户名,长度不小于6位', trigger: 'blur' },
          { min: 6, message: '长度大于等于6位 ', trigger: 'blur' }
        ],
        // password: [
        //   { required: true, message: '请输入密码', trigger: 'blur' },
        //   { min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur' }
        // ]
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass,message: '密码长度不得小于6位', trigger: 'blur' }
        ],
        checkPassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ],
        remark: [
          { type: 'array', required: true, message: '请勾选', trigger: 'change' }
        ],
        recommend: [
          { required: true, message: '请输入机构推荐码', trigger: 'blur' },
          { min: 6, message: '长度大于等于6位 ', trigger: 'blur' }
        ]
      },
      rules2:{
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: validatePhone, trigger: ['change','blur'] }
        ],
        code:[
          { required: true, message: '请输入四位验证码', trigger: 'blur' },
          { validator: validateCode, trigger: ['change','blur'] }
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
    submitForm(formName) {//第一步提交
      var that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(that.ruleRegister)
          that.registerStep = 2;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    codeShow(){//弹窗验证码
      var that = this;
      if(that.codeActive==false){
        return false
        
      }else{
        if(that.codeImgType == true){//填写过验证码
          return false
        }else{
          that.$prompt('<span style="margin-right:20px;">验证码： </span> <img src="../assets/img/swiper/swiper_1.jpg" style="height:40px;width:130px;">', '请先输入验证码', {
            confirmButtonText: '确定',
            showInput:true,
            showCancelButton:true,
            inputPlaceholder:'请输入验证码',
            inputValidator:(value) => {
              if(value!=that.codeImg){
                return '验证码不正确'
              }else if(value==that.codeImg){
                that.codeImgType = true;
                return true
              }
            },
            dangerouslyUseHTMLString: true,
            showConfirmButton:true,
            callback: action => {//图片验证码输入完成
              that.codeActive = false;
              var num = 59;
              that.codeNumber = '60s';
              console.log(that.codeActive)
              var times = setInterval(function(){
                that.codeNumber = num+'s';
                num--;
                if(num==-1){
                  that.codeActive = true;
                  that.codeImgType = false;
                  that.codeNumber='重新获取';
                  window.clearInterval(times);
                }
              },1000)
            }
          })
        }
      }
    },
    submitForm_two(formName){//第二步提交
      var that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '注册成功,前往登录',
            type: 'success',
            duration:3000
          });
          this.$store.commit('changeLogin');
          setTimeout(function(){
            that.$router.push({ path: '/Login' })
          },3000)
        } else {
          return false;
        }
      });
    }
  },
  components: {
    // HelloWorld
  },
  mounted(){
  }
};
</script>
<style lang="scss">
// $theme-color:red;
.codeBtn:focus, .codeBtn:hover{
  color:black!important;
  background:#CACACA;
}
.codeBtn{
  width:45%;
  background:#CACACA;
  padding:10px 15px;
  float:right;
  border:none;
  height:36px;
}
.codeActive{
  background:#409EFF;
  color: white;
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
  .register_box_box {
    width: 100%;
    height: 400px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    z-index: 999;
    .container {
      height: 100%;
      .register_box {
        height: 100%;
        width: 300px;
        background: rgba(0, 0, 0, 0.6);
        float: right;
        line-height: 400px;
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
        .register {
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
              a{
                color: white!important;
              }
          }
        }
        .register_two{
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
              a{
                color: white!important;
              }
          }
        }
        
      }
    }
  }
}
</style>
