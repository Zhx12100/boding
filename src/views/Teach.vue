<template>
  <div id="Teach">
    <section class="guide-section-1">
      <div class="containers">
        <h4 class="guide-title">01.了解<strong>博鼎策略</strong>投资</h4>
        <div class="guide-section_img">
          <p class="section1_p p_top">提供交易保障金</p>
          <p class="section1_p p_top">提供违约保障金</p>
          <p class="section1_p ">第三方合作平台</p>
          <p class="section1_p ">谋略指令</p>
          <p class="section1_p ">匹配投资人</p>
          <p class="section1_p ">提供买卖谋略</p>
          <p class="section1_p ">我的平台</p>
          <p class="section1_p ">执行买卖谋略</p>
        </div>
      </div>
      <div class="list back_1">
        <div class="info m_r">
          <p class="p1">02.如何<span>申请</span>策略</p>
          <p class="p2">● 选择保证金</p>
          <p class="p2">● 选择策略倍数</p>
          <p class="p2">● 确认发起申请</p>
        </div>
        <img src="@/assets/img/teach/computer.png" alt="">
      </div>
      <div class="list">
        <img class="m_r" src="@/assets/img/teach/computer.png" alt="">
        <div class="info">
          <p class="p1">02.如何<span>点买</span>操作</p>
          <p class="p2">● 选择股票</p>
          <p class="p2">● 选择买入数量</p>
          <p class="p2">● 确认点买</p>
          <p class="p2">● 持仓查看详情</p>
        </div>
      </div>
      <div class="list back_1">
        <div class="info m_r">
          <p class="p1">04.如何<span>点卖</span>操作</p>
          <p class="p2">● 进入持仓</p>
          <p class="p2">● 选择任意股票点卖</p>
          <p class="p2">● 选择卖出数量</p>
          <p class="p2">● 确认点卖</p>
          <p class="p2">● 结算查询详情</p>
        </div>
        <img src="@/assets/img/teach/computer.png" alt="">
      </div>
      <div class="list">
        <img class="m_r" src="@/assets/img/teach/fei.png" alt="">
        <div class="info">
          <p class="p1">05.五重<span>保障</span>更安全</p>
          <p class="p2">● 网站安全</p>
          <p class="p2">● 风控保障体制</p>
          <p class="p2">● 第三方资金托管</p>
          <p class="p2">● 资金安全保障</p>
          <p class="p2">● 和投资人收益共享</p>
        </div>
      </div>
      <div class="list back_2">
        <div class="info m_r">
          <p class="p1">06.<span>急速</span>提现</p>
          <p class="p2">● 24小时极速提现</p>
        </div>
        <img class="" src="@/assets/img/teach/fei2.png" alt="">
      </div>
    </section>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>
<style lang="scss">
#Teach {
  background: white;
    .guide-section-1{
      .containers{
        width: 1024px;
        position: relative;
        margin: 0 auto;
        height: 100%;
        padding: 0 32px;
        box-sizing: border-box;
        text-align: center;
        padding-bottom: 50px;
        .guide-title{
          padding: 30px 0;
          display: inline-block;
          font-size: 24px;
          font-weight: bold;          
        }
        .guide-section_img{
            background: url(../assets/img/teach/1.png) no-repeat center center;
            height: 417px;
            width: 985px;
            margin: 0 auto;
            position: relative;
            .section1_p {
                display: inline-block;
                font-size: 18px;
                color: #414141;
                position: absolute;
            }
          }
          .section1_p:nth-of-type(1) {
            top: 65px;
            left: 160px;
          }
          .section1_p:nth-of-type(2) {
              top: 65px;
              right: 160px;
          }
          .section1_p:nth-of-type(3) {
              top: 170px;
              left: 425px;
              color: #FF4132;
          }
          .section1_p:nth-of-type(4) {
              bottom: 65px;
              left: 240px;
          }
          .section1_p:nth-of-type(5) {
              bottom: 65px;
              right: 240px;
          }
          .section1_p:nth-of-type(6) {
              bottom: -40px;
              left: 45px;
              color: #FF4132;
          }
          .section1_p:nth-of-type(7) {
              bottom: -40px;
              left: 460px;
              color: red;
          }
          .section1_p:nth-of-type(8) {
              bottom: -40px;
              right: 45px;
              color: #FF4132;
          }
      }
      h4{
        padding-top: 70px;
      }
      strong {
          color: #FF0A0A;
      }
    }
    .m_r{
      margin-right: 200px;
    }
    .back_1{
      background: url(../assets/img/teach/back_1.png) no-repeat;
      background-size:100% 100%;
    }
    .back_2{
      background: url(../assets/img/teach/back_2.png) no-repeat;
      background-size:100% 100%;
    }
    .list{
      height: 550px;
      line-height: 550px;
      text-align: center;
      .info{
        display: inline-block;
        vertical-align: middle;
        text-align: left;
        .p1{
          font-size: 24px;
          line-height: 1.2;
          margin-bottom: 30px;
          font-weight: bold;
          span{
            color: #FF0A0A;
          }
        }
        .p2{
          font-size: 18px;
          color: #2C2B2B;
          line-height: 25px;
          height: 25px;
        }
      }
      img{
        width: 350px;
        height: auto;
      }
    }
}
</style>
