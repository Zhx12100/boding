<template>
  <div class="forgot">
		<div class="container">
			<div class="forgot_box">
				<div class="forgot_head">
					<div class="rate_box">
						<div class="rate rate1 first active">密码重置</div>
					</div>
					<div class="rate_box">
						<div class="rate rate2">密码找回</div>
					</div>
					<div class="rate_box">
						<div class="rate rate3 last">完成</div>
					</div>
				</div>
				<div class="forgot_body"></div>
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

    }
  },
  methods:{

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
			$list:300,200,100;
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
}
</style>
