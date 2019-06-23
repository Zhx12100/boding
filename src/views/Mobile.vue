<template>
  <div id="Mobile">
    <div class="mobile_box container">
        <p class="p1"><span>手机端</span>APP全面上线</p>
        <p class="p2">策略交易更加轻松、便捷</p>
        <div class="code_box code_box1">
            <img src="@/assets/img/code1.jpg" />
            <p>扫描二维码</p>
            <p>下载安卓APP</p>
        </div>
        <div class="code_box">
            <img src="@/assets/img/code2.png" />
            <p>扫描二维码</p>
            <p>下载苹果APP</p>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
      };
    },
    methods: {

    }
  }
</script>
<style lang="scss">
#Mobile {
    position: absolute;
    top: 91px;
    bottom: 267px;
    width: 100%;
    background: url(../assets/img/mobile.png) no-repeat center center;
    background-size: cover;
    text-align: center;
    .mobile_box{
        display: inline-block;
        vertical-align: middle;
        line-height: 1.2;
        margin-left: 300px;
        margin-top: 10%;
        .p1{
            font-size: 34px;
            font-weight: normal;
            margin-bottom: 5px;
            span{
                color: #FE3333;
            }
        }
        .p2{
            font-size: 20px;
            margin-bottom: 40px;
        }
        .code_box{
            display: inline-block;
            text-align: center;
            margin: 10px 0;
            img{
                width: 122px;
                height: 122px;
                margin-bottom: 10px;
            }
            p{
                font-size: 14px;
            }
        }
        .code_box1{
            margin-right: 100px;
        }
    }
}

</style>
