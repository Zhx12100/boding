<template>
  <div class="forgot">
		<div class="container">
			<div class="forgot_box">
				<div class="forgot_head">
					<div class="rate_box">
						<div class="rate rate1 first" :class="{active:step==1}">密码重置</div>
					</div>
					<div class="rate_box">
						<div class="rate rate2" :class="{active:step==2}">密码找回</div>
					</div>
					<div class="rate_box">
						<div class="rate rate3 last" :class="{active:step==3}">完成</div>
					</div>
				</div>
				<div class="forgot_body">
					<div class="forgot_list">
						<!-- 忘记密码第一步 -->
						<transition name="fade"
            mode="out-in"
            enter-active-class="animated fadeInRight"
            leave-active-class="fadeOutLeft">
							<el-form
								:model="ruleRegister"
								size="medium"
								:rules="rules"
								ref="ruleRegister"
								label-width="100px"
								class="demo-ruleForm"
								v-show="step==1"
							>
								<el-form-item prop="phone" >
									<el-input type="number" v-model="ruleRegister.phone" placeholder="请输入手机号码"></el-input>
								</el-form-item>
								<el-form-item prop="code">
									<el-input type="number" v-model="ruleRegister.code" placeholder="请输入验证码" style="width:50%;float:left"></el-input>
									<el-button @click="codeShow()" class="codeBtn" :class="{codeActive:codeActive}">{{codeNumber}}</el-button>
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
						</transition>
						<!-- 忘记密码第二步 -->
						<transition name="fade"
            mode="out-in"
            enter-active-class="animated fadeInRight"
            leave-active-class="fadeOutLeft">
							<el-form
                  :model="ruleRegister2"
                  size="medium"
                  :rules="rules2"
                  ref="ruleRegister2"
                  label-width="100px"
                  class="demo-ruleForm"
									v-show="step==2"
                >
                  <el-form-item prop="password">
                    <el-input type="password" v-model="ruleRegister2.password" placeholder="请输入密码"></el-input>
                  </el-form-item>
                  <el-form-item prop="checkPassword">
                    <el-input
                      type="password"
                      v-model="ruleRegister2.checkPassword"
                      placeholder="请再次输入密码"
                    ></el-input>
                  </el-form-item>
                  <!-- <el-form-item prop="password">
                      <el-input v-model="ruleRegister.password" placeholder="请输入机构推荐码"></el-input>
                  </el-form-item>-->
                  <el-form-item>
                    <el-button
                      class="btn_next Danger"
                      type="primary"
                      @click="submitForm_two('ruleRegister2')"
											v-loading="loading"
											element-loading-text="修改中..."
											element-loading-spinner="el-icon-loading"
											element-loading-background="rgba(0, 0, 0, 0.8)"
                    >完成</el-button>
                    <!-- <router-link to="/about"><el-button class="btn_register">注册</el-button></router-link> -->
                  </el-form-item>
                </el-form>
						</transition>
						<transition name="fade"
            mode="out-in"
            enter-active-class="animated fadeInRight"
            leave-active-class="fadeOutLeft">
							<div class="success" v-show="step==3">
								<h2>修改成功!</h2>
								<p><span>{{num}}</span>s后自动跳转到登录页面</p>
								<el-button type="primary" class="successBtn" @click="goLogin">立即前往登录</el-button>
							</div>
						</transition>
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
        if (this.ruleRegister2.checkPassword !== '') {
            this.$refs.ruleRegister2.validateField('checkPassword');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
          callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleRegister2.password) {
          callback(new Error('两次输入密码不一致!'));
      } else {
          callback();
      }
    };
    return{
			step:1,//忘记密码步骤
 			ruleRegister:{//忘记密码第一步数据
        phone:'',
        code:''
			},
			ruleRegister2:{//忘记密码第二步数据
        password:'',
        checkPassword:''
			},
			loading: false,//第二步按钮的加载状态
			code:123456,//手机验证码
			codeImg:1234,//图片验证码
      codeImgType:false,//图片验证码是否完成验证 
      codeActive:false,//判断是否可以获取校验码，从而改变校验码按钮的样式
			codeNumber:'获取校验码',
			num:3,//修改成功倒计时
			rules:{
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: validatePhone, trigger: ['change','blur'] }
        ],
        code:[
          { required: true, message: '请输入四位验证码', trigger: 'blur' },
          { validator: validateCode, trigger: ['change','blur'] }
        ]
			},
			rules2:{
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass,message: '密码长度不得小于6位', trigger: 'blur' }
        ],
        checkPassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ],
      },
    }
  },
  methods:{
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
		submitForm(formName){//第二步提交
      var that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          that.step = 2;
        } else {
          return false;
        }
      });
		},
		submitForm_two(formName) {//第一步提交
      var that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
					that.loading = true;
					setTimeout(function(){
						that.loading = true;
						that.step = 3;
						var times = setInterval(function(){
							that.num--;	
							if(that.num==-1){
								that.$router.push({ path: '/Login' })
							}
						},1000)
					},3000)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
		},
		goLogin(){//立即前往登录
			this.$router.push({ path: '/Login' })
		}
  },
  components: {
    // HelloWorld
  },
  mounted(){
  },
  watch:{

  }
};
</script>
<style lang="scss" scope>
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
.forgot_box{
	.forgot_head{
		height: 100px;
		line-height: 100px;
		.rate_box{
			display: inline-block;
			width: 33.333%;
			vertical-align: middle;
			text-align: center;
			line-height: 0;
			.rate{
				width: 98.5%;
				display: inline-block;
				height: 40px;
				line-height: 40px;
				text-align: center;
				background: #E5E5E5;
				color: #999;
				font-size: 16px;
				font-weight: bold;
				position: relative;
				&:before{
					display:block;
					content: '';
					width: 0;
					height: 0;
					border-width: 20px 20px 20px 20px;
					border-style: solid;
					border-color:  transparent transparent transparent #EFEFF4;
					position:absolute;
					left: 0;
					top: 0;
				}
				&:after{
					display:block;
					content: '';
					width: 0;
					height: 0;
					border-width: 20px 20px 20px 20px;
					border-style: solid;
					border-color:  transparent transparent transparent #E5E5E5;
					position:absolute;
					right: -40px;
					top: 0;
				}
			}
			.first{
				&::before{
					content:none;
				}
			}	
			.last{
				&::after{
					content:none;
				}
			}	
			$list:30,20,10;
			@each $var in $list{	
				$i:index($list,$var);
				.rate#{$i}{
					z-index:#{$var}+$i;
				}
			}
			.active{
				background: #96938C!important;
				color: white!important;
				&:after{
					display:block;
					content: '';
					width: 0;
					height: 0;
					border-width: 20px 20px 20px 20px;
					border-style: solid;
					border-color:  transparent transparent transparent #96938C;
					position:absolute;
					right: -40px;
					top: 0;
				}
			}
		}
	}
	.forgot_body{
		width: 1190px;
		padding: 200px 0;
		background-color: #ffffff;
		border: 1px solid #dcdcdc;
		border-radius: 4px;
		margin: 0 auto;
		box-shadow: 0px 0px 5px rgba(0,0,0,.2);
		.forgot_list{
			width: 300px;
			margin: 0 auto;
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
			.el-loading-spinner{
				margin-top: -13px;
				.el-loading-text{
					font-size: 12px;
				}
			}
		}
		.success{
			text-align: center;
			h2{
				font-size: 20px;
				font-weight: bold;
			}
			p{
				font-size: 15px;
				span{
					color:#d42b2e;
					font-size: 20px;
					font-weight: bold;
				}
			}
			.successBtn{
				margin-top: 10px;
			}
		}
	}
}
</style>
