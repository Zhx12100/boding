<template>
  <div id="Detail" style="text-align:center;">
    <div class="container">
      <div class="detail-title">
        <div class style="float:left;">
          <h1>交易单</h1>
          <span>交易单号:126</span>
        </div>
        <a href="javascript:history.go(-1)" style="float:right;">返回</a>
      </div>
      <div class="detail-info">
        <div class="item">
          <span>交易合作</span>
          <a href="javascript:void(0);" id="popup-account-sanfang" class="f-right">三方协议</a>
        </div>
        <dl>
          <!--<dt>投资人：</dt>
          <dd></dd>-->
          <dt>点买人：</dt>
          <dd>20192019</dd>
        </dl>
        <div class="item">
          <span>交易明细</span>
          <a href="javascript:void(0);" id="popup-account-a" class="f-right">交易流水</a>
        </div>
        <table border="0" cellspacing="0" cellpadding="0" class="detail-tb">
          <tbody>
            <tr>
              <td width="10%">交易本金：</td>
              <td width="10%">47726元</td>
              <td width="10%">交易品种：</td>
              <td width="20%">招商银行(600036)</td>
              <td width="10%">交易数量：</td>
              <td width="15%">1400股</td>
            </tr>
            <tr>
              <td>买入价格：</td>
              <td>34.09</td>
              <td>成交时间：</td>
              <td>2019-06-10 09:30:23</td>
              <td>点买类型：</td>
              <td>即时买入</td>
            </tr>
            <tr>
              <td>卖出价格：</td>
              <td>34.92</td>
              <td>成交时间：</td>
              <td>2019-06-11 10:23:32</td>
              <td>卖出数量：</td>
              <td>全部卖出</td>
            </tr>
          </tbody>
        </table>
        <div class="item">
          <span>交易盈亏</span>
          <a href="javascript:void(0);" class="f-right">
            方案状态：
            <span id="jszt" class="c-red" style="color: #FF474B ">已结算</span>
          </a>
        </div>
        <dl style="text-align:center;" class="dddd">
          <dt>交易盈亏：</dt>
          <dd class="ft26 c-color c-red" style="color: #FF474B ">
            1162
            <span style="color:#666;font-size:16px;">元</span>
          </dd>
          <dt>涨跌：</dt>
          <dd class="ft26 c-color c-green">
            <em style="color: red !important">2.43%</em>
          </dd>
          <dt>平仓费：</dt>
          <dd class="ft26 c-color c-green">
            <em style="color: #19B777 !important">146.66</em>
            <span style="color:#666;font-size:16px;">元</span>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
#Detail {
  position: absolute;
  top: 91px;
  bottom: 267px;
  width: 100%;
  overflow-y: scroll;
  .container {
    background: white;
    padding: 50px 0;
    min-height: 100%;
    box-sizing: border-box;
    padding: 50px;
    a {
      color: #999 !important;
      text-decoration: none !important;
    }
    .detail-title {
        overflow: hidden;
      font: 14px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB", 宋体;
    
      h1 {
        font-size: 26px;
        font-weight: normal;
        color: #333;
        display: inline-block;
      }
      span {
        margin-left: 10px;
        color: #999;
      }
    }
    .detail-info {
        border-top: 2px solid red!important;
      padding: 29px 29px 0 29px;
      border: 1px solid #e0e0e0;
      border-top: none;
      color: #666;
      font: 14px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB", 宋体;
      p,span,dd,dt,em,i,b{
          font: 14px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB", 宋体;
          font-style: normal;
      }
    //   margin-top: 20px;
      .item {
        padding: 0 15px;
        height: 40px;
        background: #f2f2f2;
        line-height: 40px;
        color: #333;
        text-align: left;
      }
      dl {
        margin: 20px 0 30px 0;
        overflow: hidden;
        dt {
          text-align: right;
          width: 105px;
          float: left;
    line-height: 40px;
        }
         dd {
    float: left;
    line-height: 40px;
}
      }
      .detail-tb {
    margin: 20px 20px 30px 20px;
    td {
    height: 40px;
    line-height: 40px;
    vertical-align: middle;
    text-align: left;
        padding: 0 10px;
}
td:nth-child(2n+1) {
    text-align: right;
    padding-right: 10px;
}
}
    }
  }
  .f-right {
    float: right;
  }
  .f-left {
    float: left;
  }
  .ft26 {
    font-size: 26px!important;
    em{
        font-size: 26px!important;
    }
     dd {
    color: #333;
    width: 180px;
    padding-left: 10px;
}

}
.dddd dd,.dddd dt{
    display: inline-block;
    width: 180px;
}
}
</style>