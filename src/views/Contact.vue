<template>
  <div id="Contace" style="text-align:center;">
    <div class="container">
      <div class="title_box">
        <p class="p1">联系我们</p>
        <p class="p2">Contact US</p>
      </div>
      <div class="img_box">
        <div class="img_list">
          <img src="@/assets/img/contact/tel.png" />
          <div class="text">
              <p class="p1">客服热线</p>
              <p class="p2">联系在线客服</p>
          </div>
        </div>
        <div class="img_list">
          <img src="@/assets/img/contact/workday.png" />
          <div class="text">
              <p class="p1">工作日</p>
              <p class="p2">09:00 - 18:00</p>
          </div>
        </div>
        <div class="img_list">
          <img src="@/assets/img/contact/qq_cont.png" />
          <div class="text">
              <p class="p1">QQ客服</p>
              <p class="p2">13502947522</p>
          </div>
        </div>
        <div class="img_list">
          <img src="@/assets/img/contact/wc.png" />
          <div class="text">
              <p class="p1">微信客服</p>
              <p class="p2">caosj5168</p>
          </div>
        </div>
      </div>
      <div class="text_box">
        <p>我们已开通了微信、QQ、电话等多种服务窗口，随时随地能为您提供咨询</p>
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
#Contace {
    position: absolute;
    top: 91px;
    bottom: 267px;
    width: 100%;
    overflow-y: scroll;
    .container{
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
          height: 120px;
          line-height: 120px;
          width: 204px;
          padding: 0 10px;
          box-sizing: border-box;
          cursor: pointer;
              border: 1px solid #E2E1E1;
          img{
              display: inline-block;
              vertical-align: middle;
            width: 42px;
            height: 42px;
            margin-right: 20px;
          }
          .text{
              display: inline-block;
              vertical-align: middle;
              line-height: 1.2;
              text-align: left;
              .p1{
                    color: #5B5B5B;
                    font-size: 18px;

                    font-weight: bold;
                }
                .p2{
                    font-size: 16px;
                    color: #5B5B5B;
                     margin-top: 5px;
                }
          }
          
        }        
      }
      .text_box{
          p{
            font-size: 16px;
            line-height: 30px;
            margin-bottom: 40px;
          }
            
      }
    }
}

</style>