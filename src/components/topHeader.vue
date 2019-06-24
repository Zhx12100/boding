<template>
  <div>
    <!-- 头部 -->
    <div id="head_box">
      <div class="head_1 clearfix">
        <div class="container clearfix">
          <p class="pull-left">
            服务热线 在线联系客服 丨
            <a href="javascript:;">13502947522</a>
          </p>
          <transition name="fade"
            mode="in-out"
            enter-active-class="animated fadeInDown"
            leave-active-class="fadeOutUp">
          
            <p class="pull-right" v-show="!isLogin">
              <router-link to="/Login">登录</router-link>丨
              <router-link to="/Register">注册</router-link>
            </p>
          </transition>
          <transition name="fade"
            mode="in-out"
            enter-active-class="animated fadeInDown"
            leave-active-class="fadeOutDown">
            <div class="name" v-show="isLogin">
              <p>您好，zhanghegnxin <span class="el-icon-arrow-down"></span></p>
              <div class="name_list">
                <div class="div1"> <p class="col-50">可用 <span class="money"> 123456</span></p> <router-link class="son_list col-50 txt-ac" to="/">充值</router-link> </div>
                <div class="div2"> <router-link class="son_list geren col-50 txt-ac" to="/Person">个人中心</router-link> <p class="son_list anquan col-50 txt-ac" @click="quit">安全退出</p> </div>
              </div>
            </div>
          </transition>
          
          </div>
        </div>
      <div class="head_2 clearfix">
        <div class="container">
          <router-link to="/" @click.native="resetHead">
            <img class="logo" src="@/assets/img/logo.png" alt="">
          </router-link>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo el_nav"
            mode="horizontal"
            background-color="#e2e1e1"
            text-color="#656565"
            active-text-color="#409EFF"
            router
          >
            <el-menu-item index="/">
              首页
            </el-menu-item>
            <el-menu-item index="/Strategy">              
              策略
            </el-menu-item>
            <el-menu-item index="/Mobile">
              手机版
            </el-menu-item>
            <el-submenu index="/n">
              <template slot="title"><span style="font-size:16px;">帮助中心</span></template>
              <el-menu-item index="/Teach">新手教学</el-menu-item>
              <el-menu-item index="/Problem">常见问题</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
    </div>
    <transition name="fade"
      mode="out-in"
      enter-active-class="animated fadeInRight"
      leave-active-class="fadeOutLeft">
    >
      <router-view></router-view>
    </transition>
    <!-- 底部 -->
    <div id="footer_box">
      <div class="footer_1">
        <router-link to="/about" @click.native="resetHead">关于我们</router-link>&nbsp; 丨 &nbsp; 
        <router-link to="/Contact" @click.native="resetHead">联系我们</router-link>
      </div>
      <div class="footer_2">
        <p class="p1">全国统一服务热线 ：联系在线客服</p>
        <p class="p1">客服服务时间工作日：9:00-18:00</p>
        <div class="cooperation" style="margin-top:10px;">
          <img src="@/assets/img/cooperation.png" alt="">
          <img src="@/assets/img/cooperation.png" alt="">
          <img src="@/assets/img/cooperation.png" alt="">
          <img src="@/assets/img/cooperation.png" alt="">
        </div>
        <div class="cooperation" style="margin-bottom:10px;">
          <img src="@/assets/img/cooperation.png" alt="">
          <img src="@/assets/img/cooperation.png" alt="">
          <img src="@/assets/img/cooperation.png" alt="">
          <img src="@/assets/img/cooperation.png" alt="">
        </div>
        <p class="p2">版权所有 © 2016-2033</p>
        <p class="p2">浙ICP备17030011号  投资有风险 入市需谨慎</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: {
    
  },
  data() {
    return {
       activeIndex: '/'
    };
  },
  methods: {
    resetHead(){//强制刷新子组件
      console.log(this.$route.path)
      this.$emit('ResetHead')
    },
    quit(){//退出账号
      this.$store.commit('changeLogin');
      this.$message({
        message: '退出成功',
        type: 'warning',
        duration:3000
      });
    }
  },
  mounted(){//浏览器刷新页面时获取path从而设置导航栏的active (控制顶部导航栏刷新)
    // console.log('ggg')
    // var that = this;
    // var path = that.$route.path;
    // path == '/about'||path=='/contact'?'':this.activeIndex = path;
  },
  computed:{
    ...mapState({  //这里的...不是省略号了,是对象扩展符
      isLogin:'isLogin'
    })
  },
};
</script>
<style lang="scss" scoped>
.col-50{
  display: inline-block;
  width: 50%;
}
.el_nav{
  border-bottom:none!important; 
  float: right;
  font-weight: bold;
}
.nav_top_name{
  height: 30px;
}
.el-loading-mask{
  z-index: 9999;
}
#head_box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, .3);
  .head_1 {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: black;
    margin: 0 auto;
    color: #cacaca;
    .name{
      font-size:15px;
      line-height:30px;
      height:30px;
      font-weight:bold;
      float:right;
      transition:all .3s;
      padding:0 5px;
      position: relative;
      span{
        transition:all .3s;
      }
      &:hover{
        background:#CACACA;
        color:#333;
        span{
          transform: rotate(180deg);
        }
        .name_list{
          display: block;
          opacity: 1;
        }
      }
      .name_list{
        width: 130%;
        background: #e2e1e1;
        border: 1px solid #CACACA;
        border-radius: 3px;
        padding:10px 20px;
        position: absolute;
        bottom: -95px;
        right: 0;
        z-index: 99999;
        color: #666;
        transition: all .3s;
        overflow: hidden;
        // height: 0px;
        display: none;
        opacity: 0;
        .div1{
          padding-bottom: 5px;
          border-bottom: 1px solid #D0D0D0;
          .money{
            font-size: 18px;
            font-weight: bold;
            color: red;
          }
        }
        .div2{
          padding-top: 5px;
          .geren{
            border-right: 1px solid #D0D0D0;
            box-sizing: border-box;
            
          }
          .anquan{
            cursor: pointer;
            font-size: 15px;
          }
          
        }
        .son_list{
          transition: all .3s;
          &:hover{
            color:#999;
            background: #D0D0D0;
          }
        }
        
      }
    }
  }
  .head_2{
    background: #e2e1e1;
    border-bottom: solid 1px #e6e6e6;
    box-sizing: border-box;
    .logo{
      height: 60px;
    }
    .el-menu-item{
      font-size: 16px;
      height: 60px;
    }  
  }
}
#footer_box{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, .3);
  .footer_1{
    background: #323232;
    height: 55px;
    line-height: 55px;
    color: #CACACA;
    text-align: center;
    font-size: 18px;
  }
  .footer_2{
    background: black;
    text-align: center;
    color: #CACACA;
    padding-top: 10px;
    padding-bottom: 10px;
    .p1{
      font-size: 16px;
    }
    .cooperation{
      text-align: center;
      img{
        width: 98px;
        height: 38px;
        margin: 5px 10px;
      }
    }
    .p2{
      font-size: 12px;
    }
  }
}
</style>
