<template>
  <div id="About" style="text-align:center;">
    <div class="container">
      <div class="title_box">
        <p class="p1">关于我们</p>
        <p class="p2">ABOUT US</p>
      </div>
      <div class="img_box">
        <div class="img_list">
          <img src="@/assets/img/about/cp1.png" />
          <p class="p1">稳健收入</p>
          <p class="p2">年化收益高有保障</p>
        </div>
        <div class="img_list">
          <img src="@/assets/img/about/cp2.png" />
          <p class="p1">安全投资</p>
          <p class="p2">具有安全的投资渠道</p>
        </div>
        <div class="img_list">
          <img src="@/assets/img/about/cp3.png" />
          <p class="p1">卓越保障</p>
          <p class="p2">多重筛选 铸就卓越风控</p>
        </div>
        <div class="img_list">
          <img src="@/assets/img/about/cp4.png" />
          <p class="p1">轻松投资</p>
          <p class="p2">财富增值从这里开始</p>
        </div>
      </div>
      <div class="text_box">
        <img src="@/assets/img/about/cp_img.png" />
        <p>博鼎策略（博鼎策略） 。创立于2016年，是全国首批响应国家“普惠金融”号召的互联网金融企业。</p>
        <p>博鼎策略初创团队由国内知名互联网公司腾讯及多位证劵、金融、私募领域的资深专家共同组建而成，产品由原百度研发团队开发完成并投入市场。依托四年线下投资咨询及资产管理业务经验及资源，赢得了良好的用户口碑，随着平台快速的发展，借助互联网金融之势，强势推出各种互联网金融产品，博鼎策略 已成为互联网金融行业的领军品牌。</p>
        <p>博鼎策略以"安全第一，用户至上"的理念，始终坚持严格的风险管理流程、创新的互联网技术、优质的客户服务确保投资者获得更低利率资金，让投资者能够轻松简单的实现财富梦想。</p>
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
#About {
    position: absolute;
    top: 91px;
    bottom: 267px;
    width: 100%;
    overflow-y: scroll;
    .container{
      background: white;
      padding: 50px 0;
      min-height: 100%;
      box-sizing: border-box;
      .title_box{
        .p1{
          font-size: 22px;
          position: relative;
          &::before{
            content: '';
            display: block;
            position: absolute;
            width: 195px;
            height: 1px;
            background-color: #DFDFDF;
            bottom: 0;
            left: 300px;
          }
          &:after{
            content: '';
            display: block;
            position: absolute;
            width: 195px;
            height: 1px;
            background-color: #DFDFDF;
            bottom: 0;
            right: 300px;
          }
        }
        .p2{
          font-size: 14px;
        }
      }
      .img_box{
        .img_list{
          display: inline-block;
          margin: 40px;
          img{
            width: 42px;
            height: 54px;
          }
          .p1{
            color: #f9917c;
            font-size: 18px;
            margin-top: 10px;
          }
          .p2{
            font-size: 14px;
            color: #999;
          }
        }        
      }
      .text_box{
        padding: 0 50px;
        box-sizing: border-box;
        overflow: hidden;
        p{
          text-align: left;
          font:14px/1.5 "微软雅黑",Arial,YaHei,tahoma,"Hiragino Sans GB",宋体;
          text-indent: 2em;
          margin-top: 15px;
        }        
        img{
          float: right;
          margin-left: 50px;
        }
      }
    }
}

</style>