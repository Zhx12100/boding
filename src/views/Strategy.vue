<template>
  <div id="Strategy">
    <el-tabs class="container" v-model="activeName" type="border-card" @tab-click="tabSelect">
      <el-tab-pane class="one" label="01 | 交易" name="1">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <!-- 搜索框 -->
              <div class="change-stock">
                <input
                  id="searchTxt1"
                  v-model="searchText"
                  class="search_txt"
                  type="text"
                  placeholder="请输入股票名称/代码/简拼"
                >
                <button id="searchCancel" class="cancel">取消</button>
                <transition
                  name="fade"
                  mode="out-in"
                  enter-active-class="animated fadeInUp"
                  leave-active-class="animated fadeOutDown"
                >
                  >
                  <div class="association" v-show="searchText!=''">
                    <div class="title">
                      <div class="list">名称</div>
                      <div class="list">代码</div>
                      <div class="list">简拼</div>
                    </div>
                    <div class="content">
                      <div class="content_list">
                        <div class="list">白银有色</div>
                        <div class="list">601212</div>
                        <div class="list">byyys</div>
                      </div>
                      <div class="content_list">
                        <div class="list">白银有色</div>
                        <div class="list">601212</div>
                        <div class="list">byyys</div>
                      </div>
                      <div class="content_list">
                        <div class="list">白银有色</div>
                        <div class="list">601212</div>
                        <div class="list">byyys</div>
                      </div>
                      <div class="content_list">
                        <div class="list">白银有色</div>
                        <div class="list">601212</div>
                        <div class="list">byyys</div>
                      </div>
                    </div>
                  </div>
                </transition>
                <div class="stock-name">
                  <span id="stockName">恒为科技(603496)</span>
                  <!-- <button id="changeStock" class="change_stock hide">选择股票</button> -->
                </div>
              </div>
              <!-- 文字数据 -->
              <section class="stock-detail clearfix" data-price="0">
                <div class="stock-new row f-left">
                  <strong class="green" id="nowPrice">29.00</strong>
                  <i
                    class="el-icon-refresh"
                    style="font-size: 30px;vertical-align: middle;color: #999;margin-right: 32px;cursor: pointer;"
                  ></i>
                  <span class="up-arrow-box" style="display: none;">
                    <span class="top-part"></span>
                    <span class="bottom-part"></span>
                  </span>
                  <span class="down-arrow-box" style="display: inline-block;">
                    <span class="top-part"></span>
                    <span class="bottom-part"></span>
                  </span>
                  <span id="num1" class="color font14 green">-0.16</span>
                  <span id="num2" class="color font14 green">-0.55%</span>
                </div>
                <div class="stock-price f-right" id="stock-price">
                  <ul class="sell">
                    <li>
                      <em>卖⑤</em>
                      <b class="color green">29.08</b>
                      <i>107</i>
                    </li>
                    <li>
                      <em>卖④</em>
                      <b class="color green">29.07</b>
                      <i>35</i>
                    </li>
                    <li>
                      <em>卖③</em>
                      <b class="color green">29.06</b>
                      <i>11</i>
                    </li>
                    <li>
                      <em>卖②</em>
                      <b class="color green">29.04</b>
                      <i>15</i>
                    </li>
                    <li>
                      <em>卖①</em>
                      <b class="color green">29.01</b>
                      <i>4</i>
                    </li>
                  </ul>
                  <ul class="buy">
                    <li>
                      <em>买①</em>
                      <b class="color green">29.00</b>
                      <i>52</i>
                    </li>
                    <li>
                      <em>买②</em>
                      <b class="color green">28.99</b>
                      <i>50</i>
                    </li>
                    <li>
                      <em>买③</em>
                      <b class="color green">28.97</b>
                      <i>11</i>
                    </li>
                    <li>
                      <em>买④</em>
                      <b class="color green">28.96</b>
                      <i>12</i>
                    </li>
                    <li>
                      <em>买⑤</em>
                      <b class="color green">28.95</b>
                      <i>13</i>
                    </li>
                  </ul>
                </div>
              </section>
              <!-- 文字数据2 -->
              <section class="stock-info" id="stock-info">
                <h3>股票信息</h3>
                <ul class="row">
                  <li class="open">
                    <span class="l">今开</span>
                    <span class="r">29.060元</span>
                  </li>
                  <li class="amplitude">
                    <span class="l">振幅</span>
                    <span class="r">0.04%</span>
                  </li>
                  <li class="high">
                    <span class="l">最高</span>
                    <span class="r">29.790元</span>
                  </li>
                  <li class="low">
                    <span class="l">最低</span>
                    <span class="r">28.750元</span>
                  </li>
                  <li class="max">
                    <span class="l">涨停价</span>
                    <span class="r">32.08元</span>
                  </li>
                  <li class="min">
                    <span class="l">跌停价</span>
                    <span class="r">26.24元</span>
                  </li>
                  <li class="volume">
                    <span class="l">成交量</span>
                    <span class="r">22318手</span>
                  </li>
                  <li class="amount">
                    <span class="l">成交额</span>
                    <span class="r">6527.33万</span>
                  </li>
                </ul>
              </section>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="right-buy">
                <div>
                  <div
                    class="pz-day-content"
                    style="width:100%;height:45px;margin:0px;padding:0px;"
                  >
                    <div
                      class="pz-day-public pzdaymoney"
                      style="width: 100%;margin:0px;padding:0px;"
                    >
                      <span style="font-size: 16px; color: #000; font-weight: bold;   ">保证金:</span>
                      <div class="delay_tip" style="margin-right:0;">
                        <el-popover
                          placement="top-start"
                          width="200"
                          trigger="hover"
                          content="最高策略金额100万元，除平台推荐金额之外，用户可自行设定点买金额。"
                        >
                          <span slot="reference" class="el-icon-warning-outline"></span>
                        </el-popover>
                      </div>&nbsp;&nbsp;

                      <input
                        type="text"
                        name="buy_number"
                        value
                        placeholder="请输入保证金"
                        id="buy_number"
                        style="margin-left: 10px;font-size: 16px;padding-left:10px; "
                      >
                      <br>
                      <!--<div id="buy_price_ul" class="choseBox1 mui-row mui-text-center bg_fff">
                                   <li class="chose_item mui-col-xs-3">
                                       <a class="chose_a chose_bordernone" href="javascript:void(0);">1000</a>
                                   </li>
                                   <li class="chose_item mui-col-xs-3">
                                       <a class="chose_a chose_bordernone" href="javascript:void(0);">2000</a>
                                   </li>
                                   <li class="chose_item mui-col-xs-3">
                                       <a class="chose_a chose_bordernone" href="javascript:void(0);">5000</a>
                                   </li>
                                   <li class="chose_item mui-col-xs-3 active" >
                                       <a class="chose_a chose_bordernone " href="javascript:void(0);">10000</a>
                                   </li>
                                   <li class="chose_item mui-col-xs-3">
                                       <a class="chose_a chose_a_bot chose_bordernone" href="javascript:void(0);">20000</a>
                                   </li>
                                   <li class="chose_item mui-col-xs-3">
                                       <a class="chose_a chose_a_bot chose_bordernone" href="javascript:void(0);">30000</a>
                                   </li>
                                   <li class="chose_item mui-col-xs-3">
                                       <a class="chose_a chose_a_bot chose_bordernone" href="javascript:void(0);">40000</a>
                                   </li>
                                   <li class="chose_item mui-col-xs-3">
                                       <a class="chose_a chose_a_bot chose_bordernone" href="javascript:void(0);">50000</a>
                                   </li>
                      </div>-->
                    </div>
                  </div>

                  <div class="pz-day-content" style="height: 108px;margin:0px;padding:0px;">
                    <div class="pz-day-public pzdaymoney" style="width: 100%">
                      <span style="font-size: 16px; color: #000; font-weight: bold;">策略倍数:</span>
                      <div class="buy_price">
                        <ul id="buy_price_ul_beishu" style="width: 100%">
                          <li @click="beishu(5)" :class="{active:beishuShow==5}">5</li>
                          <li @click="beishu(6)" :class="{active:beishuShow==6}">6</li>
                          <li @click="beishu(7)" :class="{active:beishuShow==7}">7</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="buy_price" style="line-height: 20px;color:#F00;">
                    <div class="open-time">
                      <div class="chose_item mui-col-xs-9 mui-col-sm-9">
                        <span>
                          最大可买：
                          <span id="maxNum"></span>股
                        </span>，
                        <span>
                          资金利用率：
                          <span id="zjrate"></span>%
                        </span>，
                        <span>
                          金额：
                          <span id="zjnum"></span>元
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="pz-day-content1" style="margin:0px;padding:0px;">
                    <div class="delay_tip">
                      持仓时间
                      <el-popover
                        placement="top-start"
                        width="200"
                        trigger="hover"
                        content="最短15分钟，最长30天，交易综合费按天支付，默认每天自动延期，自动从账户余额扣除交易综合费(余额不足时自动终止)"
                      >
                        <span slot="reference" class="el-icon-warning-outline"></span>
                      </el-popover>
                    </div>&nbsp;&nbsp;
                    <ul class="work-interval">
                      <li class="active">T+1|D</li>
                    </ul>

                    <div class="perf_bond">
                      <span>履约保证金</span>
                      <div class="delay_tip">
                        <el-popover
                          placement="top-start"
                          width="200"
                          trigger="hover"
                          content="履约保证金为交易人委托平台冻结用于履行交易亏损赔付义务的保证金，结束时根据谋略盈亏结算"
                        >
                          <span slot="reference" class="el-icon-warning-outline"></span>
                        </el-popover>
                      </div>&nbsp;&nbsp;
                      <span style="font-size: 22px !important;color: #d42b2e;font-style: normal;" class="br-bz" id="guaranteemoney">50000</span>元
                    </div>

                    <div class="perf_bond">
                      <span>操盘资金</span>
                      <div class="delay_tip">
                        <el-popover
                          placement="top-start"
                          width="200"
                          trigger="hover"
                          content="最高策略金额100万元，除平台推荐金额之外，用户可自行设定点买金额。"
                        >
                          <span slot="reference" class="el-icon-warning-outline"></span>
                        </el-popover>
                      </div>&nbsp;&nbsp;
                      <span style="font-size: 22px !important;color: #d42b2e;font-style: normal;" class="br-bz" id="cpzijin">64555</span>元
                    </div>

                    <div class="delay_condition">
                      <p style="line-height:45px;">
                        <span>递&emsp;延&emsp;费</span>
                        <span class="fkxy">
                          <em>&nbsp;&nbsp;25</em>元/万/天
                        </span>
                      </p>
                    </div>
                    <div class="delay_condition">
                      <p style="line-height:45px;">
                        <span>建&emsp;仓&emsp;费</span>
                        <span class="fkxy">
                          <em>&nbsp;&nbsp;300</em>元
                        </span>
                      </p>
                    </div>
                  </div>

                  <div class="pz-agmt-btn" style="width: 100%">
                    <div class="result_box">
                      <div class="protocol_row last_p pad10">
                        <p>
                          <input type="checkbox" checked name="agree_pro" id="agree_pro">我已阅并签署以下协议
                        </p>
                        <a href="http://wwww.baidu.com" target="_blank">《博鼎策略策略人参与沪深A股交易合作涉及费用及资费标准》</a>
                        <a href="./Agreement_2.html" target="_blank">《博鼎策略投资人与点买人参与沪深A股交易合作协议》</a>
                        <a href="./Agreement_3.html" target="_blank">《博鼎策略服务协议》</a>
                      </div>
                    </div>

                    <p class="pad10 font12">卖出时间段：交易日09:30-11:30 | 13:00-14:58</p>
                    <button id="btn_buy" style="background: rgb(225, 25, 35);">买入</button>

                    <!--<button id="btn_buy_d" style="background:#13b908;margin-top:10px;">看空【跌】</button>-->
                    <!-- <p id="su_sm_p" class="total hide">当前可点买总额：210万；单股点买金额不超过：50万。</p> -->
                  </div>

                  <!--  遮罩  -->
                  <div
                    id="popBg"
                    style="width:100%;height:100%;z-index: 0;background: #666; opacity: 0.5;position: fixed;left: 0; top: 0;display: none"
                  ></div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane class="three" label="02 | 持仓" name="3">
        <el-table :data="tableData" style="width: 100%;padding:0 50px;" :show-header='sh'>
          <el-table-column>
            <template slot-scope="scope">
              <span>{{ scope.row.date }}</span>
              <p style="margin-top:10px;">单号：{{ scope.row.danNum }} 策略号：{{scope.row.ceNum}}</p>
            </template>
          </el-table-column>
          <el-table-column >
            <template slot-scope="scope">
              <span>{{ scope.row.money }}元</span>
                <p style="margin-top:10px;">建仓费：{{scope.row.jmoney}}元</p>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span style="color:black;font-size:16px;">{{ scope.row.yin }}</span>
                <p style="margin-top:10px;">{{scope.row.gu}}股可用</p>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span>35.11->37.96</span>
                <p style="margin-top:10px;color:red;">3990 (8.12%)</p>
            </template>
          </el-table-column>
          <el-table-column >
            <template slot-scope="scope">
              <span style="color:red;">涨</span>
                
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-button class="dianmai" size="mini" type="danger" @click="dianmai(scope.$index, scope.row)">点卖</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block" style="text-align: center;margin-top: 30px;">  
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
        
      </el-tab-pane>
      <el-tab-pane class="two" label="03 | 卖出" name="2">
        <!-- 有数据 -->
        <el-row :gutter="20" v-show="maichu">
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <!-- 搜索框 -->
              <div class="change-stock">
                <div class="stock-name">
                  <span id="stockName">恒为科技(603496)</span>
                  <!-- <button id="changeStock" class="change_stock hide">选择股票</button> -->
                </div>
              </div>
              <!-- 文字数据 -->
              <section class="stock-detail clearfix" data-price="0">
                <div class="stock-new row f-left">
                  <strong class="green" id="nowPrice">29.00</strong>
                  <i
                    class="el-icon-refresh"
                    style="font-size: 30px;vertical-align: middle;color: #999;margin-right: 32px;cursor: pointer;"
                  ></i>
                  <span class="up-arrow-box" style="display: none;">
                    <span class="top-part"></span>
                    <span class="bottom-part"></span>
                  </span>
                  <span class="down-arrow-box" style="display: inline-block;">
                    <span class="top-part"></span>
                    <span class="bottom-part"></span>
                  </span>
                  <span id="num1" class="color font14 green">-0.16</span>
                  <span id="num2" class="color font14 green">-0.55%</span>
                </div>
                <div class="stock-price f-right" id="stock-price">
                  <ul class="sell">
                    <li>
                      <em>卖⑤</em>
                      <b class="color green">29.08</b>
                      <i>107</i>
                    </li>
                    <li>
                      <em>卖④</em>
                      <b class="color green">29.07</b>
                      <i>35</i>
                    </li>
                    <li>
                      <em>卖③</em>
                      <b class="color green">29.06</b>
                      <i>11</i>
                    </li>
                    <li>
                      <em>卖②</em>
                      <b class="color green">29.04</b>
                      <i>15</i>
                    </li>
                    <li>
                      <em>卖①</em>
                      <b class="color green">29.01</b>
                      <i>4</i>
                    </li>
                  </ul>
                  <ul class="buy">
                    <li>
                      <em>买①</em>
                      <b class="color green">29.00</b>
                      <i>52</i>
                    </li>
                    <li>
                      <em>买②</em>
                      <b class="color green">28.99</b>
                      <i>50</i>
                    </li>
                    <li>
                      <em>买③</em>
                      <b class="color green">28.97</b>
                      <i>11</i>
                    </li>
                    <li>
                      <em>买④</em>
                      <b class="color green">28.96</b>
                      <i>12</i>
                    </li>
                    <li>
                      <em>买⑤</em>
                      <b class="color green">28.95</b>
                      <i>13</i>
                    </li>
                  </ul>
                </div>
              </section>
              <!-- 文字数据2 -->
              <section class="stock-info" id="stock-info">
                <h3>股票信息</h3>
                <ul class="row">
                  <li class="open">
                    <span class="l">今开</span>
                    <span class="r">29.060元</span>
                  </li>
                  <li class="amplitude">
                    <span class="l">振幅</span>
                    <span class="r">0.04%</span>
                  </li>
                  <li class="high">
                    <span class="l">最高</span>
                    <span class="r">29.790元</span>
                  </li>
                  <li class="low">
                    <span class="l">最低</span>
                    <span class="r">28.750元</span>
                  </li>
                  <li class="max">
                    <span class="l">涨停价</span>
                    <span class="r">32.08元</span>
                  </li>
                  <li class="min">
                    <span class="l">跌停价</span>
                    <span class="r">26.24元</span>
                  </li>
                  <li class="volume">
                    <span class="l">成交量</span>
                    <span class="r">22318手</span>
                  </li>
                  <li class="amount">
                    <span class="l">成交额</span>
                    <span class="r">6527.33万</span>
                  </li>
                </ul>
              </section>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="right-buy">
              <div class="buy_price">
                <div class="open-time">
                  <div class="chose_item mui-col-xs-9 mui-col-sm-9">
                    <span>最大可卖：</span>
                    <a class="bz_text" href="javascript:void(0);">
                      <em id="maxNum" style="font-size:20px;font-weight:bold;">1400</em>
                      <em style="color: black">股</em>
                    </a>
                  </div>
                </div>
              </div>

              

              <p style="margin-top:20px;" class="pad10 font12">点卖时间段：交易日09:30-11:30 | 13:00-14:58</p>
              <button
                id="btn_buy"
                style="background: rgb(118, 118, 121);"
                disabled="disabled"
              >点卖时间9:30-11:30, 13:00-14:58</button>
              <!-- <p id="su_sm_p" class="total hide">当前可点买总额：210万；单股点买金额不超过：50万。</p> -->
            </div>
          </el-col>
        </el-row>
        <!-- 无数据 -->
        <div style="text-align:center;padding-top:100px;" v-show="!maichu">
          <img src="@/assets/img/noshuju.png" style="width:200px;height:auto" alt="">
          <p class="" style="font-size:20px;color:#999;">暂无数据</p>
        </div>
      </el-tab-pane>
      
      <el-tab-pane class="four" label="04 | 结算" name="4">
        <div class="select" style="padding:0 50px;">
          <span>时间：</span>
          <el-tag>近七个交易日</el-tag>
          <el-tag>最近30个交易日</el-tag>
          <el-date-picker
            v-model="month"
            type="month"
            placeholder="按日期选择">
          </el-date-picker>
        </div>
        <el-table :data="tableData" style="width: 100%;padding:0 50px;" :show-header='sh'>
          <el-table-column>
            <template slot-scope="scope">
              <span>{{ scope.row.date }}</span>
              <p style="margin-top:10px;">单号：{{ scope.row.danNum }} 策略号：{{scope.row.ceNum}}</p>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span style="color:black;font-size:16px;">{{ scope.row.yin }}</span>
                <p style="margin-top:10px;">{{scope.row.gu}}股可用</p>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span style="color:red;">1162</span>
                <p style="margin-top:10px;color:red;">交易盈亏</p>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <router-link to="/Detail">查看详情</router-link>          
            </template>
          </el-table-column>
        </el-table>
        <div class="block" style="text-align: center;margin-top: 30px;">  
          <el-pagination
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeName: "1",
      tabPosition: "left",
      sh:false,//是否显示表头
      month:'',//按日期选择
      maichu:false,
      beishuShow:5,
    
      tableData: [
        {
          date: "2019-06-11 13:41:11",
          danNum:"255",
          ceNum:"655",
          money:"24545",
          jmoney:"6456",
          name: "王小虎",
          yin:"招商银行(600036)",
          gu:"5600",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2019-06-11 13:41:11",
          danNum:"255",
          ceNum:"655",
          money:"24545",
          jmoney:"6456",
          name: "王小虎",
          yin:"招商银行(600036)",
          gu:"5600",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2019-06-11 13:41:11",
          danNum:"255",
          ceNum:"655",
          money:"24545",
          jmoney:"6456",
          name: "王小虎",
          yin:"招商银行(600036)",
          gu:"5600",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2019-06-11 13:41:11",
          danNum:"255",
          ceNum:"655",
          money:"24545",
          jmoney:"6456",
          name: "王小虎",
          yin:"招商银行(600036)",
          gu:"5600",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2019-06-11 13:41:11",
          danNum:"255",
          ceNum:"655",
          money:"24545",
          jmoney:"6456",
          name: "王小虎",
          yin:"招商银行(600036)",
          gu:"5600",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],

      searchText: "" //搜索词
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    dianmai(index, row) {
      console.log(index, row);
      this.activeName = "2";
      this.maichu = true;
    },
    beishu(event){
      this.beishuShow = event;
    },
    tabSelect(tab,event){
      console.log(tab,event);
      var name = tab.name;
      console.log(this.isLogin)
      if(name=="2"||name=="3"||name=="4"){
        this.isLogin==false?this.$router.push({name:'Login',query:{type:'noLogin'}}):'';
      }
    }
  },
  computed: {
    ...mapState({
      //这里的...不是省略号了,是对象扩展符
      isLogin: "isLogin"
    })
  },
  mounted(){
    if(this.$route.query.index){
      this.activeName = this.$route.query.index;//由详细页面返回定位在结算
    }
    
  }
};
</script>
<style lang="scss">
.el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    color: #9A9691!important;
    font-weight: 400!important;
}
.el-pagination .btn-next, .el-pagination .btn-prev{
  color: #9A9691!important;
}
.el-pager li.active{
  color:#409EFF!important;
  font-weight: bold!important;
}
.el-tabs__content{
  min-height: 500px;
}
#Strategy {
  .el-tabs__nav {
    width: 100%;
    .el-tabs__item {
      width: 25%;
      text-align: center;
    }
    .is-active {
      font-weight: bold;
    }
  }

  .container {
    margin-top: 50px;
    .one {
      .bg-purple {
        border-right: 1px solid #f1f1f1;
      }
      .change-stock {
        margin-bottom: 25px;
        margin-top: 10px;
        top: 0px;
        z-index: 10;
        font-size: 12px;
        position: relative;
        .search_txt {
          padding: 0;
          padding-left: 10px;
          height: 33px;
          width: 553px;
        }
        .cancel {
          background-color: $theme-color;
          color: #fff;
          border: none;
          left: -56px;
          height: 37px;
          vertical-align: top;
          transition: background-color 0.4s;
          font-size: 12px;
          padding: 2px 14px;
        }
        .association {
          z-index: 5000;
          width: 567px;
          border: 1px solid #999;
          box-sizing: border-box;
          position: absolute;
          top: 37px;
          left: 0;
          .title {
            background: #efefef;
            .list {
              display: inline-block;
              width: 33.333%;
              font-size: 14px;
              line-height: 1.8;
              text-align: center;
              color: #999;
            }
          }
          .content {
            .content_list {
              color: #999;
              background: white;
              &:hover {
                background: #cacaca;
                color: white;
              }
              .list {
                display: inline-block;
                width: 33.333%;
                font-size: 14px;
                line-height: 2.2;
                text-align: center;
              }
            }
          }
        }
        .stock-name {
          padding-bottom: 10px;
          border-bottom: 1px solid #f1f1f1;
          line-height: 1;
          margin-top: 20px;
          span {
            color: #333;
            font-size: 30px;
          }
        }
      }
      .stock-detail {
        padding-right: 50px;
        box-sizing: border-box;
        .stock-new {
          margin-top: 60px;
          float: left;
        }
        strong {
          font-size: 48px;
          margin-right: 20px;
          vertical-align: middle;
          font-weight: normal;
          color: green;
        }
        .down-arrow-box {
          position: relative;
          margin-right: 11px;
          margin-left: -13px;
          vertical-align: bottom;
          .top-part {
            display: block;
            width: 10px;
            height: 19px;
            margin-left: 9px;
            background-color: #00a800;
          }
          .bottom-part {
            display: block;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 14px;
            border-color: #00a800 transparent transparent transparent;
          }
        }
        #num1,
        #num2 {
          font-size: 18px;
          position: relative;
          margin-right: 10px;
          margin-left: 5px;
          top: 13px;
          color: green;
        }
        .stock-price {
          font-size: 14px;
          color: #999;
          margin-top: 18px;
          float: right;
          em {
            margin-right: 65px;
            font-style: normal;
          }
          b {
            margin-right: 45px;
            color: green;
          }
          i {
            text-align: right;
            font-style: normal;
          }
        }
      }
      .stock-info {
        margin-top: 40px;
        color: #646464;
        font-size: 16px;
        text-align: center;

        h3 {
          color: #fff;
          font-size: 20px;
          font-weight: normal;
          padding: 8px 0;
          margin: 0 auto;
          background: #e11923;
        }
        ul {
          margin-top: 20px;
          li {
            width: 49%;
            display: inline-block;
            span.l {
              padding: 5px 0;
              height: 100%;
              float: left;
              width: 49%;
              display: inline-block;
            }
            span.r {
              padding: 5px 0;
              width: 50%;
              float: right;
              display: inline-block;
              padding: 5px 0;
            }
          }
          .open,
          .high,
          .max,
          .volume {
            border-right: 1px solid #ccc;
          }
        }
      }
      .right-buy {
        padding-left: 18px;
        color: #434343;
        font: 14px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB",
          宋体;
        p {
          font: 14px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB",
            宋体;
        }
        div {
          line-height: 45px;
        }
        .active {
          color: #9a0000 !important;
          // background-color: #feeeef;
          border-color: #d42b2e !important;
          &:after {
            width: 22px;
            height: 23px;
            position: absolute;
            bottom: 0px;
            right: 0px;
            content: "";
            background: url(../assets/img/c.png);
            background-size: 100% 100%;
            color: #ff4500;
            line-height: 1;
            overflow: hidden;
          }
        }
        .delay_tip {
          position: relative;
          display: inline-block;
          // margin-right: 35px;
          font: 14px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB",
            宋体;
        }
        .buy_price {
          ul {
            width: 100%;

            li {
              width: 12%;
              margin: 5px;
              cursor: pointer;
              display: inline-block;
              box-sizing: content-box;
              padding: 5px 0;
              height: 38px;
              border: 1px solid #e1e1e1;
              // color: #434343;
              line-height: 38px;
              text-align: center;
              position: relative;
            }
          }
        }
        .pz-day-content1 {
          ul {
            display: inline-block;
            li {
              width: 97px;
              height: 38px;
              border: 1px solid #e1e1e1;
              // color: #434343;
              line-height: 38px;
              text-align: center;
              position: relative;
              // margin-right: 9px;
              cursor: pointer;
            }
          }
        }
        .pad10 {
          line-height: 45px;
        }
        .result_box {
          p {
            line-height: 45px;
          }
          a {
            display: block;
            font-size: 12px;
            line-height: 1.9;
            color: #4875c6 !important;
            text-decoration: none;
            outline: 0;
            -moz-transition-duration: 0.4s;
            // -webkit-transition-duration: .4s;
            transition-duration: 0.4s;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
        }
        .fkxy {
          padding: 0;
          margin: 0;
          // display: inline-block;
          font-size: 12px !important;
          line-height: 1px;
          em {
            font-size: 22px !important;
            color: #d42b2e;
            font-style: normal;
          }
        }
        #btn_buy {
          width: 100%;
          height: 47px;
          background-color: #fb4324;
          font-size: 16px;
          color: #fff;
          border: none;
        }
      }
    }
    .two {
      .bg-purple {
        border-right: 1px solid #f1f1f1;
      }
      .change-stock {
        margin-bottom: 25px;
        margin-top: 10px;
        top: 0px;
        z-index: 10;
        font-size: 12px;
        position: relative;
        .search_txt {
          padding: 0;
          padding-left: 10px;
          height: 33px;
          width: 553px;
        }
        .cancel {
          background-color: $theme-color;
          color: #fff;
          border: none;
          left: -56px;
          height: 37px;
          vertical-align: top;
          transition: background-color 0.4s;
          font-size: 12px;
          padding: 2px 14px;
        }
        .association {
          width: 567px;
          border: 1px solid #999;
          box-sizing: border-box;
          position: absolute;
          top: 37px;
          left: 0;
          .title {
            background: #efefef;
            .list {
              display: inline-block;
              width: 33.333%;
              font-size: 14px;
              line-height: 1.8;
              text-align: center;
              color: #999;
            }
          }
          .content {
            .content_list {
              color: #999;
              &:hover {
                background: #cacaca;
                color: white;
              }
              .list {
                display: inline-block;
                width: 33.333%;
                font-size: 14px;
                line-height: 2.2;
                text-align: center;
              }
            }
          }
        }
        .stock-name {
          padding-bottom: 10px;
          border-bottom: 1px solid #f1f1f1;
          line-height: 1;
          margin-top: 20px;
          span {
            color: #333;
            font-size: 30px;
          }
        }
      }
      .stock-detail {
        padding-right: 50px;
        box-sizing: border-box;
        .stock-new {
          margin-top: 60px;
          float: left;
        }
        strong {
          font-size: 48px;
          margin-right: 20px;
          vertical-align: middle;
          font-weight: normal;
          color: green;
        }
        .down-arrow-box {
          position: relative;
          margin-right: 11px;
          margin-left: -13px;
          vertical-align: bottom;
          .top-part {
            display: block;
            width: 10px;
            height: 19px;
            margin-left: 9px;
            background-color: #00a800;
          }
          .bottom-part {
            display: block;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 14px;
            border-color: #00a800 transparent transparent transparent;
          }
        }
        #num1,
        #num2 {
          font-size: 18px;
          position: relative;
          margin-right: 10px;
          margin-left: 5px;
          top: 13px;
          color: green;
        }
        .stock-price {
          font-size: 14px;
          color: #999;
          margin-top: 18px;
          float: right;
          em {
            margin-right: 65px;
            font-style: normal;
          }
          b {
            margin-right: 45px;
            color: green;
          }
          i {
            text-align: right;
            font-style: normal;
          }
        }
      }
      .stock-info {
        margin-top: 40px;
        color: #646464;
        font-size: 16px;
        text-align: center;

        h3 {
          color: #fff;
          font-size: 20px;
          font-weight: normal;
          padding: 8px 0;
          margin: 0 auto;
          background: #e11923;
        }
        ul {
          margin-top: 20px;
          li {
            width: 49%;
            display: inline-block;
            span.l {
              padding: 5px 0;
              height: 100%;
              float: left;
              width: 49%;
              display: inline-block;
            }
            span.r {
              padding: 5px 0;
              width: 50%;
              float: right;
              display: inline-block;
              padding: 5px 0;
            }
          }
          .open,
          .high,
          .max,
          .volume {
            border-right: 1px solid #ccc;
          }
        }
      }
      .right-buy {
        font: 14px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB",
          宋体;
        p {
          font: 14px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB",
            宋体;
        }
        em {
          margin-left: 15px;
          font-size: 16px;
          font-style: normal !important;
        }
        div {
          min-height: 45px;
          margin-bottom: 5px;
          line-height: 45px;
        }
        #maxNum {
          color: #d42b2e;
        }
        .checkgushu {
          margin-left: 5px;
        }
        #stop-loss_ul {
          width: 200px;
          li {
            position: relative;
            float: left;
            margin: 5px;
            box-sizing: content-box;
            padding: 5px 0;
            cursor: pointer;
            height: 38px;
            border: 1px solid #e1e1e1;
            color: #434343;
            line-height: 38px;
            text-align: center;
            border-radius: 5px;
            &:hover {
              border-color: #d42b2e;
            }
          }
        }
        button {
          width: 100%;
          height: 47px;
          background-color: #fb4324;
          font-size: 16px;
          color: #fff;
          border: none;
        }
      }
    }
    .three{
      .dianmai{
        span{
          color:white;
        }
      }
      *{
        font: 14px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB";
        color: #9A9691;
      }
    }
    .four{
      font: 14px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB";
      font-weight: bold;
      .select{
        span{
          margin-right:20px;
        }
      }
      table{
        font: 14px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB";
        color: #9A9691;
        p{
          font: 14px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB";
        }
      }
    }
  }
}
</style>
