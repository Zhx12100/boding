<template>
  <div class="home">
    <!-- 轮播图 -->
    <div class="swiperBox" ondragstart="return false">
      <el-carousel>
        <el-carousel-item v-for="(item,index) in swiperArr" :key="index">
          <img :src="item" alt>
        </el-carousel-item>
      </el-carousel>
      <transition
        name="fade"
        mode="out-in"
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
      >
        <div class="login_box_box" v-show="!isLogin">
          <div class="container">
            <div class="login_box">
              <div class="login">
                <p>用户登录</p>
                <el-form
                  :model="ruleForm"
                  size="medium"
                  :rules="rules"
                  ref="ruleForm"
                  label-width="100px"
                  class="demo-ruleForm"
                >
                  <el-form-item prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
                  </el-form-item>
                  <el-form-item prop="password">
                    <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      class="btn_login"
                      type="primary"
                      @click="submitForm('ruleForm')"
                      v-loading="loading"
                      element-loading-text="登录中..."
                      element-loading-spinner="el-icon-loading"
                      element-loading-background="rgba(0, 0, 0, 0.8)"
                    >登录</el-button>
                    <router-link to="/Register">
                      <el-button class="btn_register">注册</el-button>
                    </router-link>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- 三个方块 -->
    <div class="three_box">
      <div class="three_list">
        <img src="@/assets/img/index/three_1.png" alt>
        <div class="three_text">
          <h6 class="title">一分钟了解博鼎策略</h6>
          <p class="content">全新的投资人策略匹配平台</p>
        </div>
      </div>
      <div class="three_list" style="transform: translateY(-5%);">
        <img src="@/assets/img/index/three_2.png" alt>
        <div class="three_text">
          <h6 class="title">用心服务</h6>
          <p class="content">一对一专业客服（电话 微信 QQ）全程指导</p>
        </div>
      </div>
      <div class="three_list">
        <img src="@/assets/img/index/three_3.png" alt>
        <div class="three_text">
          <div class="div1 col-50">
            <p class="p1">累积匹配策略</p>
            <p class="p2">
              <span>132455</span>条
            </p>
          </div>
          <div class="div1 col-50">
            <p class="p1">累计盈利</p>
            <p class="p2">
              <span>56451515</span>元
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 三个圆圈 -->
    <div class="three_radius">
      <h1 class="title">POINT TO BUY A SHARES</h1>
      <div class="line"></div>
      <div class="line_text">点买A股</div>
      <div class="radius_box">
        <div class="radius_list">
          <img class="top_img" src="@/assets/img/index/radiu_1.png" alt>
          <div class="radius_text_box">
            <img src="@/assets/img/index/radius_bom_1.png" alt>
            <div class>
              <p>点买人先申请策略</p>
              <p>审核通过再交易</p>
            </div>
          </div>
        </div>
        <div class="radius_list">
          <img class="top_img" src="@/assets/img/index/radiu_2.png" alt>
          <div class="radius_text_box">
            <img src="@/assets/img/index/radius_bom_2.png" alt>
            <div class>
              <p>点买人自主买卖股票</p>
              <p>收取手续费</p>
            </div>
          </div>
        </div>
        <div class="radius_list">
          <img class="top_img" src="@/assets/img/index/radiu_3.png" alt>
          <div class="radius_text_box">
            <img src="@/assets/img/index/radius_bom_3.png" alt>
            <div class>
              <p>穿仓免赔,穿仓资方承担</p>
              <p>盈利无限，亏损有限</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 股票详情 -->
    <div class="gu_box">
      <div class="container">
        <div class="gu_left">
          <p class="p1">获得更高收益</p>
          <p class="p2">提供投资谋略金和投资人分享高额回报</p>
          <router-link class="go_A" to="/">进入交易A股</router-link>
        </div>
        <img class="gu_zhong" src="@/assets/img/index/shu_line.png" alt>
        <div class="gu_right">
          <div class="high_r br-fr">
            <table>
              <tbody>
                <tr>
                  <td class="nickname">牛人</td>
                  <td class="nickname">策略数</td>
                  <td class="celue">胜算率</td>
                  <td class="stockNumber">收益率</td>
                </tr>
                <tr>
                  <td class="nickname">花开花谢</td>
                  <td class="nickname">743</td>
                  <td class="celue">78.12%</td>
                  <td class="stockNumber">62.25%</td>
                </tr>
                <tr>
                  <td class="nickname">小邓</td>
                  <td class="nickname">207</td>
                  <td class="celue">69.21%</td>
                  <td class="stockNumber">39.75%</td>
                </tr>
                <tr>
                  <td class="nickname">张峰</td>
                  <td class="nickname">352</td>
                  <td class="celue">57.12%</td>
                  <td class="stockNumber">45.63%</td>
                </tr>
                <tr>
                  <td class="nickname">勇哥</td>
                  <td class="nickname">74</td>
                  <td class="celue">54.22%</td>
                  <td class="stockNumber">69.44%</td>
                </tr>
                <tr>
                  <td class="nickname">芳</td>
                  <td class="nickname">243</td>
                  <td class="celue">50.33%</td>
                  <td class="stockNumber">23.34%</td>
                </tr>
                <tr>
                  <td class="nickname">刘志华</td>
                  <td class="nickname">126</td>
                  <td class="celue">45.95%</td>
                  <td class="stockNumber">37.62%</td>
                </tr>
                <tr>
                  <td class="nickname">陆云都</td>
                  <td class="nickname">116</td>
                  <td class="celue">23.87%</td>
                  <td class="stockNumber">33.47%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- 六个方 -->
    <div class="six_fang">
      <h1 class="title">WE WILL ENSURE YOUR BEST INTEREST</h1>
      <div class="line"></div>
      <div class="line_text">5重保障最大力度保障您的利益</div>
      <div class="fang_box">
        <div class="fang_list">
          <div class="fang_text">网站安全</div>
        </div>
        <div class="fang_list">
          <div class="fang_text">风控保险体质</div>
        </div>
        <div class="fang_list">
          <div class="fang_text">第三方资金托管</div>
        </div>
        <div class="fang_list">
          <div class="fang_text">资金安全保障</div>
        </div>
        <div class="fang_list">
          <div class="fang_text">和投资人收益共享风险共担</div>
        </div>
      </div>
    </div>
    <!-- nai -->
    <div class="nai"></div>
    <!-- 服务 -->
    <div class="fuwu_box">
      <h1 class="title">OUR SERVICE</h1>
      <div class="line"></div>
      <div class="line_text">我们的服务</div>
      <div class="fuwu">
        <div class="fuwu_content">
          <p class="p1">A股交易去<span>博鼎策略</span></p>
          <p class="p2">“股票交易最安全平台”</p>
          <p class="p3">急速撮合<br>仅需填写简单资料<br>提交谋略<br>就能马上提交投资人赚钱</p>
          <router-link class="p4" to="/Register">立即注册</router-link>
        </div>
      </div>
    </div>
    <!-- 交易 -->
    <div class="jiao"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from "vuex";
import { setTimeout } from "timers";
export default {
  name: "home",
  data() {
    return {
      loading: false, //登录加载中
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 11, message: "长度在 6 到 11 个字符", trigger: "blur" }
        ]
      },
      swiperArr: [
        //轮播图
        require("../assets/img/swiper/swiper_1.jpg"),
        require("../assets/img/swiper/swiper_2.jpg"),
        require("../assets/img/swiper/swiper_3.jpg")
      ]
    };
  },
  methods: {
    submitForm(formName) {
      var that = this;
      that.$refs[formName].validate(valid => {
        if (valid) {
          that.loading = true;
          setTimeout(function() {
            that.loading = true;
            that.$message({
              message: "登录成功",
              type: "success",
              duration: 3000
            });
            that.$store.commit("changeLogin");
          }, 2000);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  computed: {
    ...mapState({
      //这里的...不是省略号了,是对象扩展符
      isLogin: "isLogin"
    })
  },
  components: {},
  mounted() {
    // console.log(this.$store.state.isLogin)
  }
};
</script>
<style lang="scss" scope>
.el-loading-spinner {
  margin-top: -18px;
}
.el-loading-spinner .el-icon-loading {
  font-size: 20px;
}
.el-loading-spinner .el-loading-text {
  color: #409eff !important;
  margin: 3px 0;
  font-size: 12px !important;
  margin-top: 0 !important;
  line-height: 14px !important;
}
.home{
  background:white;
}
.swiperBox {
  width: 100%;
  height: 400px;
  position: relative;
  .el-carousel__container {
    height: 400px;
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
    z-index: 20;
    .container {
      height: 100%;
      .login_box {
        height: 100%;
        width: 300px;
        background: rgba(0, 0, 0, 0.6);
        float: right;
        line-height: 300px;
        .login {
          display: inline-block;
          vertical-align: middle;
          box-sizing: border-box;
          padding: 0 30px;
          width: 100%;
          .el-form-item__content {
            margin: 0 !important;
            width: 100%;
            margin-bottom: 28px;
          }
          .el-button {
            width: 48%;
            border: none;
          }
          .btn_login {
            // background: red;
            float: left;
          }
          .btn_register {
            float: right;
          }
          p {
            font: 18px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB",
              宋体;
            color: #cacaca;
            font-weight: bold;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
}
.three_box {
  text-align: center;
  padding-top: 30px;
  .three_list {
    width: 308px;
    display: inline-block;
    vertical-align: top;
    margin: 0 20px;
    // height: 308px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    img {
      display: block;
      height: 190px;
      width: 100%;
    }
    .three_text {
      height: 118px;
      width: 100%;
      box-sizing: border-box;
      padding: 10px 20px;
      line-height: 100px;
      .title {
        font-size: 20px;
        font-weight: bold;
        line-height: 58px;
      }
      .content {
        font-size: 16px;
        line-height: 20px;
      }
      .div1 {
        display: inline-block;
        vertical-align: middle;
        .p1 {
          font-size: 16px;
          line-height: 20px;
        }
        .p2 {
          font-size: 16px;
          line-height: 40px;
          span {
            font-size: 20px;
            color: #fe3e1e;
            font-weight: bold;
          }
        }
      }
    }
  }
}
.three_radius {
  text-align: center;
  padding-top: 30px;
  .title {
    margin-top: 15px;
    font-size: 18px;
    color: #47579f;
    display: inline-block;
    line-height: 40px;
  }
  .line {
    width: 40px;
    height: 4px;
    background-color: #e01923;
    display: block;
    margin: 0 auto;
  }
  .line_text {
    font-size: 14px;
    line-height: 30px;
    color: #47579f;
  }
  .radius_box {
    margin-top: 15px;
    .radius_list {
      display: inline-block;
      vertical-align: top;
      margin: 0 20px;
      width: 280px;
      .top_img {
        width: 150px;
        height: 150px;
        display: block;
        margin: 0 auto;
      }
      .radius_text_box {
        text-align: center;
        width: 100%;
        height: 90px;
        line-height: 90px;
        margin-top: 20px;
        img {
          width: 66px;
          height: 90px;
          display: inline-block;
        }
        div {
          display: inline-block;
          vertical-align: middle;
          margin-left: -8px;
          p {
            font-size: 14px;
            color: #8e8a89;
            text-align: left;
            line-height: 20px;
          }
        }
      }
    }
  }
}
.gu_box {
  width: 100%;
  margin-top: 60px;
  background: url("../assets/img/index/gu_back.png") no-repeat;
  background-size: 100% 100%;
  height: 400px;
  .container {
    line-height: 400px;
    height: 100%;
    text-align: center;
    div {
      display: inline-block;
      vertical-align: middle;
    }
    .gu_left {
      width: 49%;
      line-height: 50px;
      .p1 {
        font-size: 50px;
        font-weight: normal;
        color: #4b4444;
        line-height: 60px;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
      }
      .p2 {
        font-size: 18px;
        color: #4b4543;
        margin-bottom: 30px;
        line-height: 30px;
      }
      .go_A {
        display: inline-block;
        width: 310px;
        height: 50px;
        background-color: #e01923;
        color: #fff !important;
        line-height: 50px !important;
        font-size: 25px;
        border: none;
        border-radius: 2px;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.8);
        &:hover {
          background-color: #e43b44;
        }
      }
    }
    .gu_zhong {
      width: 20px;
      height: auto;
    }
    .gu_right {
      line-height: 30px;
      width: 49%;
      .high_r td {
        height: 30px;
        font-size: 12px;
        padding: 0 10px;
        color: #333;
      }
    }
  }
}
.six_fang{
  text-align: center;
  padding-top: 30px;
  .title {
    margin-top: 15px;
    font-size: 18px;
    color: #47579f;
    display: inline-block;
    line-height: 40px;
  }
  .line {
    width: 40px;
    height: 4px;
    background-color: #e01923;
    display: block;
    margin: 0 auto;
  }
  .line_text {
    font-size: 14px;
    line-height: 30px;
    color: #47579f;
  }
  .fang_box{
    margin-top: 20px;
    .fang_list{
      display: inline-block;
      width: 160px;
      height: 180px;
      line-height: 180px;
      margin: 0 20px;
      box-sizing: border-box;
      padding: 0 40px;
      font-size: 20px;
      color: #909090;
      background:url(../assets/img/index/duo.png) no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
      .active{
        background:url(../assets/img/index/duo_active.png) no-repeat;
        background-size: 100% 100%;
        color: #fe3e1e;
      }
      &:hover{
        background:url(../assets/img/index/duo_active.png) no-repeat;
        background-size: 100% 100%;
        color: #fe3e1e;
      }
      .fang_text{
        display:inline-block;
        vertical-align: middle;
        line-height: 26px;
      }
    }
  }
}
.nai{
  margin-top: 50px;
  height: 390px;
  background:url(../assets/img/index/nai.jpg) no-repeat;
  background-size: 100% 100%;
}
.fuwu_box{
  text-align: center;
  padding-top: 30px;
  .title {
    margin-top: 15px;
    font-size: 18px;
    color: #47579f;
    display: inline-block;
    line-height: 40px;
  }
  .line {
    width: 40px;
    height: 4px;
    background-color: #e01923;
    display: block;
    margin: 0 auto;
  }
  .line_text {
    font-size: 14px;
    line-height: 30px;
    color: #47579f;
  }
  .fuwu{
    width: 100%;
    height: 400px;
    line-height: 400px;
    margin-top: 20px;
    background:url(../assets/img/index/fuwu_back.png) center no-repeat;
    background-size: 100% 100%;
    .fuwu_content{
      display: inline-block;
      vertical-align: middle;
      line-height: 1.2;
      margin-left: 390px;
      .p1{
        font-size: 28px;
        span{
          color: #E01923; 
        }
      }
      .p2{
        font-size: 20px;
        line-height: 40px;
        width: 260px;
        background: #E01923;
        color: #fff;
        margin-top: 10px;
      }
      .p3{
        font-size: 18px;
        margin: 30px 0;
        text-align: left;
        color: #CACACA;
        position: relative;
        &::before{
          content: '';
          display: inline-block;
          width: 30px;
          height: 2px;
          background-color: #515151;
          position: absolute;
          left: 0;
          top: -10px;
        }
        &:after{
          content: '';
          display: inline-block;
          width: 30px;
          height: 2px;
          background-color: #515151;
          position: absolute;
          left: 0;
          bottom: -10px;
        }
      }
      .p4{
        font-size: 20px;
        display: block;
        width: 260px;
        height: 45px;
        line-height: 45px;
        border: 1px solid #426CCC;
        color: #426CCC!important;
        &:hover{
          background: #426CCC;
          color: white!important;
        }
      }
    }
  }
}
.jiao{
  // margin-top: 50px;
  height: 390px;
  background:url(../assets/img/index/jiaoyi.jpg) no-repeat;
  background-size: 100% 100%;
}
</style>
