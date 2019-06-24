<template>
  <div id="Person">
    <div class="problem_box container">
      <div class="head">
        <img src="http://tony-huwai.cn/pay/images/alipay.png" alt>
      </div>
      <el-tabs :tab-position="tabPosition" style="height: auto;">
        <el-tab-pane class="ca one" label="我的首页">
          <p class="title">我的首页</p>
          <div class="money">
            <div class="col-50 div1">
              <p class="p1">账户余额</p>
              <p class="p2">
                432584.59
                <span>元</span>
              </p>
            </div>
            <div class="col-50 div2">
              <button class="btn1">充值</button>
              <button class="btn2">提现</button>
            </div>
          </div>
          <p class="title2">资金明细</p>
          <div class="zijin_box">
            <div class="zijin">
              <span>资金流向：</span>
              <span>全部</span>
              <span>收入</span>
              <span>支出</span>
            </div>
          </div>
          <el-table :data="tableData" style="width: 100%;" :show-header="sh">
            <el-table-column width="50" label="序号">
              <template slot-scope="scope">
                <span>{{ scope.row.number }}</span>
              </template>
            </el-table-column>
            <el-table-column width="180" label="时间">
              <template slot-scope="scope">
                <span>{{ scope.row.time }}</span>
              </template>
            </el-table-column>
            <el-table-column width="50" label="流向">
              <template slot-scope="scope">
                <span>{{ scope.row.liuxiang }}</span>
              </template>
            </el-table-column>
            <el-table-column width="130" label="收入/支出（元）">
              <template slot-scope="scope">
                <span>{{ scope.row.shouzhi }}</span>
              </template>
            </el-table-column>
            <el-table-column width="100" label="余额（元）">
              <template slot-scope="scope">
                <span>{{ scope.row.yue }}</span>
              </template>
            </el-table-column>
            <el-table-column width="100" label="余额类型（元）">
              <template slot-scope="scope">
                <span>{{ scope.row.type }}</span>
              </template>
            </el-table-column>
            <el-table-column width="200" label="说明">
              <template slot-scope="scope">
                <span>{{ scope.row.remark }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane class="ca two" label="我的策略">
          <p class="title">我的策略</p>
          <table id="asset-details-tbl" class="std-tbl">
            <colgroup>
              <col class="col1">
              <col class="col2">
              <col class="col3">
              <col class="col4">
              <col class="col5">
              <col class="col6">
              <col class="col7">
            </colgroup>
            <thead>
              <tr>
                <th>策略单号</th>
                <th>关闭时间</th>
                <th>投入</th>
                <th>剩余</th>
                <th>状态</th>
                <th>类型</th>
                <!--<th>交易详情</th>-->
              </tr>
              <tr>
                <td class="a-center" style="border:none;">141</td>
                <td class="a-center" style="border:none;"></td>
                <td class="a-center" style="border:none;">10000</td>
                <td class="a-center" style="border:none;">0</td>
                <td class="a-center" style="border:none;">
                  <font color="red">操盘中</font>
                </td>
                <td class="a-center" style="border:none;">
                  <font color="red">涨</font>
                </td>
                <!--<td class="a-center" style="border:none;"><a type="button" href="/ucenter/selfSell.html?caopanId=141">查看</a></td>-->
              </tr>

              <tr>
                <td colspan="6">
                  <div class="personal-section" style="background:#efeff4;">
                    <div
                      style="text-align:left;border:none;padding:0px; height:30px;float:left;width:100%;clear:both;"
                    >
                      <div style="text-align:left;border:none;padding:0px;">
                        <a href="/ucenter/addbzj.html?id=141">
                          <button
                            style="background-color: #d42b2e;width: 100px;  height: 32px; border-radius: 4px;transition: background-color .4s;"
                          >追加保证金</button>
                        </a>
                        <button
                          onclick="downcaopan(141)"
                          style="background-color: #d42b2e;width: 100px;  height: 32px; border-radius: 4px;transition: background-color .4s;margin-left:20px;"
                        >关闭策略</button>
                      </div>
                    </div>
                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">保证金</span>
                        <strong class="p-unit" style="font-size: 30px;">10000</strong>元
                      </p>
                    </div>
                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">策略</span>
                        <strong class="p-unit" style="font-size: 30px;">5</strong>倍
                      </p>
                    </div>

                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">策略资金</span>
                        <strong class="p-unit" style="font-size: 30px;">50000</strong>元
                      </p>
                    </div>

                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">操盘余额</span>
                        <strong class="p-unit" style="font-size: 30px;">846</strong>元
                      </p>
                    </div>

                    <div class="p-money clearfix" style="margin-right: 4%;">
                      <p class="diyongquan br-fl" style="color:#d42b2e;">
                        <span class="ticket">日利息</span>
                        <strong style="font-size: 30px;">100</strong>
                        <span style="color:#797979;">元/天</span>
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="a-center" style="border:none;">136</td>
                <td class="a-center" style="border:none;"></td>
                <td class="a-center" style="border:none;">10000</td>
                <td class="a-center" style="border:none;">0</td>
                <td class="a-center" style="border:none;">
                  <font color="red">操盘中</font>
                </td>
                <td class="a-center" style="border:none;">
                  <font color="red">涨</font>
                </td>
                <!--<td class="a-center" style="border:none;"><a type="button" href="/ucenter/selfSell.html?caopanId=136">查看</a></td>-->
              </tr>

              <tr>
                <td colspan="6">
                  <div class="personal-section" style="background:#efeff4;">
                    <div
                      style="text-align:left;border:none;padding:0px; height:30px;float:left;width:100%;clear:both;"
                    >
                      <div style="text-align:left;border:none;padding:0px;">
                        <a href="/ucenter/addbzj.html?id=136">
                          <button
                            style="background-color: #d42b2e;width: 100px;  height: 32px; border-radius: 4px;transition: background-color .4s;"
                          >追加保证金</button>
                        </a>
                        <button
                          onclick="downcaopan(136)"
                          style="background-color: #d42b2e;width: 100px;  height: 32px; border-radius: 4px;transition: background-color .4s;margin-left:20px;"
                        >关闭策略</button>
                      </div>
                    </div>
                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">保证金</span>
                        <strong class="p-unit" style="font-size: 30px;">10000</strong>元
                      </p>
                    </div>
                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">策略</span>
                        <strong class="p-unit" style="font-size: 30px;">5</strong>倍
                      </p>
                    </div>

                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">策略资金</span>
                        <strong class="p-unit" style="font-size: 30px;">50000</strong>元
                      </p>
                    </div>

                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">操盘余额</span>
                        <strong class="p-unit" style="font-size: 30px;">328</strong>元
                      </p>
                    </div>

                    <div class="p-money clearfix" style="margin-right: 4%;">
                      <p class="diyongquan br-fl" style="color:#d42b2e;">
                        <span class="ticket">日利息</span>
                        <strong style="font-size: 30px;">100</strong>
                        <span style="color:#797979;">元/天</span>
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="a-center" style="border:none;">135</td>
                <td class="a-center" style="border:none;"></td>
                <td class="a-center" style="border:none;">20000</td>
                <td class="a-center" style="border:none;">0</td>
                <td class="a-center" style="border:none;">
                  <font color="red">操盘中</font>
                </td>
                <td class="a-center" style="border:none;">
                  <font color="red">涨</font>
                </td>
                <!--<td class="a-center" style="border:none;"><a type="button" href="/ucenter/selfSell.html?caopanId=135">查看</a></td>-->
              </tr>

              <tr>
                <td colspan="6">
                  <div class="personal-section" style="background:#efeff4;">
                    <div
                      style="text-align:left;border:none;padding:0px; height:30px;float:left;width:100%;clear:both;"
                    >
                      <div style="text-align:left;border:none;padding:0px;">
                        <a href="/ucenter/addbzj.html?id=135">
                          <button
                            style="background-color: #d42b2e;width: 100px;  height: 32px; border-radius: 4px;transition: background-color .4s;"
                          >追加保证金</button>
                        </a>
                        <button
                          onclick="downcaopan(135)"
                          style="background-color: #d42b2e;width: 100px;  height: 32px; border-radius: 4px;transition: background-color .4s;margin-left:20px;"
                        >关闭策略</button>
                      </div>
                    </div>
                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">保证金</span>
                        <strong class="p-unit" style="font-size: 30px;">20000</strong>元
                      </p>
                    </div>
                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">策略</span>
                        <strong class="p-unit" style="font-size: 30px;">5</strong>倍
                      </p>
                    </div>

                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">策略资金</span>
                        <strong class="p-unit" style="font-size: 30px;">100000</strong>元
                      </p>
                    </div>

                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">操盘余额</span>
                        <strong class="p-unit" style="font-size: 30px;">587</strong>元
                      </p>
                    </div>

                    <div class="p-money clearfix" style="margin-right: 4%;">
                      <p class="diyongquan br-fl" style="color:#d42b2e;">
                        <span class="ticket">日利息</span>
                        <strong style="font-size: 30px;">200</strong>
                        <span style="color:#797979;">元/天</span>
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="a-center" style="border:none;">110</td>
                <td class="a-center" style="border:none;"></td>
                <td class="a-center" style="border:none;">10000</td>
                <td class="a-center" style="border:none;">0</td>
                <td class="a-center" style="border:none;">
                  <font color="red">操盘中</font>
                </td>
                <td class="a-center" style="border:none;">
                  <font color="red">涨</font>
                </td>
                <!--<td class="a-center" style="border:none;"><a type="button" href="/ucenter/selfSell.html?caopanId=110">查看</a></td>-->
              </tr>

              <tr>
                <td colspan="6">
                  <div class="personal-section" style="background:#efeff4;">
                    <div
                      style="text-align:left;border:none;padding:0px; height:30px;float:left;width:100%;clear:both;"
                    >
                      <div style="text-align:left;border:none;padding:0px;">
                        <a href="/ucenter/addbzj.html?id=110">
                          <button
                            style="background-color: #d42b2e;width: 100px;  height: 32px; border-radius: 4px;transition: background-color .4s;"
                          >追加保证金</button>
                        </a>
                        <button
                          onclick="downcaopan(110)"
                          style="background-color: #d42b2e;width: 100px;  height: 32px; border-radius: 4px;transition: background-color .4s;margin-left:20px;"
                        >关闭策略</button>
                      </div>
                    </div>
                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">保证金</span>
                        <strong class="p-unit" style="font-size: 30px;">10000</strong>元
                      </p>
                    </div>
                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">策略</span>
                        <strong class="p-unit" style="font-size: 30px;">6</strong>倍
                      </p>
                    </div>

                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">策略资金</span>
                        <strong class="p-unit" style="font-size: 30px;">60000</strong>元
                      </p>
                    </div>

                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">操盘余额</span>
                        <strong class="p-unit" style="font-size: 30px;">1612</strong>元
                      </p>
                    </div>

                    <div class="p-money clearfix" style="margin-right: 4%;">
                      <p class="diyongquan br-fl" style="color:#d42b2e;">
                        <span class="ticket">日利息</span>
                        <strong style="font-size: 30px;">125</strong>
                        <span style="color:#797979;">元/天</span>
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="a-center" style="border:none;">109</td>
                <td class="a-center" style="border:none;"></td>
                <td class="a-center" style="border:none;">10000</td>
                <td class="a-center" style="border:none;">0</td>
                <td class="a-center" style="border:none;">
                  <font color="red">操盘中</font>
                </td>
                <td class="a-center" style="border:none;">
                  <font color="red">涨</font>
                </td>
                <!--<td class="a-center" style="border:none;"><a type="button" href="/ucenter/selfSell.html?caopanId=109">查看</a></td>-->
              </tr>

              <tr>
                <td colspan="6">
                  <div class="personal-section" style="background:#efeff4;">
                    <div
                      style="text-align:left;border:none;padding:0px; height:30px;float:left;width:100%;clear:both;"
                    >
                      <div style="text-align:left;border:none;padding:0px;">
                        <a href="/ucenter/addbzj.html?id=109">
                          <button
                            style="background-color: #d42b2e;width: 100px;  height: 32px; border-radius: 4px;transition: background-color .4s;"
                          >追加保证金</button>
                        </a>
                        <button
                          onclick="downcaopan(109)"
                          style="background-color: #d42b2e;width: 100px;  height: 32px; border-radius: 4px;transition: background-color .4s;margin-left:20px;"
                        >关闭策略</button>
                      </div>
                    </div>
                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">保证金</span>
                        <strong class="p-unit" style="font-size: 30px;">11015.34</strong>元
                      </p>
                    </div>
                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">策略</span>
                        <strong class="p-unit" style="font-size: 30px;">5</strong>倍
                      </p>
                    </div>

                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">策略资金</span>
                        <strong class="p-unit" style="font-size: 30px;">50000</strong>元
                      </p>
                    </div>

                    <div class="new-section-sub-title" style="margin-right:4%;">
                      <p class="inner-sub-title">
                        <span style="display: block;">操盘余额</span>
                        <strong class="p-unit" style="font-size: 30px;">50000</strong>元
                      </p>
                    </div>

                    <div class="p-money clearfix" style="margin-right: 4%;">
                      <p class="diyongquan br-fl" style="color:#d42b2e;">
                        <span class="ticket">日利息</span>
                        <strong style="font-size: 30px;">100</strong>
                        <span style="color:#797979;">元/天</span>
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </thead>
            <tbody id="member_bh_list" class="std-tbl-tbody"></tbody>
          </table>
        </el-tab-pane>
        <el-tab-pane class="ca three" label="银行卡管理">
          <p class="title">银行卡管理</p>
          <div class="slide-wrapper new-my-card-slide slide-disabled" data-current="1">
            <ul id="membc_list" class="slides clearfix" style="left: 0px;">
              <li class="bank">
                <div class="bank-card bank-card-gs">
                  <p class="bank-card-end-num">9808</p>
                  <div class="link-wrapper">
                    <a href="javascript:void(0)" bankid="2281" class="bank_check">查看</a>
                    <a href="javascript:void(0)" bankid="2281" class="bank_delete">删除</a>
                  </div>
                </div>
              </li>
            </ul>
            <a
              href="javascript:;"
              class="link-prev icon icon-chevron-small-left link-prev-disabled"
            ></a>
            <a
              href="javascript:;"
              class="link-next icon icon-chevron-small-right link-next-disabled"
            ></a>
          </div>
          <form action="#" id="d_bank_add">
            <h3 class="card_title">
              请添加银行卡
              <span style="font-size: 12px;color: #999;">(每人最多绑定一张银行卡)</span>
            </h3>
            <div class="field-row group">
              <label>开 户 人</label>
              <div class="field-val openname">
                <label id="姓名" style="text-align:left;color: #000;font-size: 16px;">潘立娟</label>
                <a
                  id="a_realname"
                  target="_blank"
                  href="/ucenter/security.html"
                  style="font-size: 13px; line-height: 40px; color: rgb(221, 0, 0); display: none;"
                >(点击这里实名认证)</a>
              </div>
            </div>
            <div id="realName_err1" class="error-wrapper" style="margin-left:120px; display:none">
              <div>
                <i class="icon icon-x-altx-alt"></i>请先进行实名认证
              </div>
            </div>
            <div class="field-row group">
              <label>开户银行</label>

              <div class="field-val">
                <select id="银行s" class="long-select" val="工商银行" disabled="disabled">
                  <option value>请选择</option>
                  <option value="1">工商银行</option>
                  <option value="2">农业银行</option>
                  <option value="3">中国银行</option>
                  <option value="4">建设银行</option>
                  <option value="6">中信银行</option>
                  <option value="7">光大银行</option>
                  <option value="8">华夏银行</option>
                  <option value="10">广发银行</option>
                  <option value="11">平安银行</option>
                  <option value="12">招商银行</option>
                  <option value="13">兴业银行</option>
                  <option value="14">上海浦发银行</option>
                  <option value="16">浙商银行</option>
                  <option value="17">渤海银行</option>
                  <option value="18">徽商银行</option>
                  <option value="19">邮政储蓄银行</option>
                  <!-- <optgroup label="暂不支持" disabled="disabled">
                            <option>交通银行</option>
                            <option>民生银行</option>
                            <option>恒丰银行</option>
                  </optgroup>-->
                  <option value="20">交通银行</option>
                  <option value="21">民生银行</option>
                  <option value="22">恒丰银行</option>
                  <option value="23">广州农商银行</option>
                </select>
              </div>
              <div class="field-txt" id="银行c"></div>
            </div>
            <div id="bankId_err1" class="error-wrapper" style="margin-left:120px; display:none">
              <div>
                <i class="icon icon-x-altx-alt"></i>暂不支持该银行作为实名认证卡
              </div>
            </div>
            <div id="khyh_err1" class="error-wrapper" style="margin-left:120px; display:none">
              <div>
                <i class="icon icon-x-altx-alt"></i>未选择银行
              </div>
            </div>
            <div class="field-row group">
              <label>开户支行</label>
              <div class="field-val">
                <select
                  id="省s"
                  class="mid-select"
                  onchange="getCity()"
                  val="重庆"
                  disabled="disabled"
                >
                  <option value="0">北京</option>
                  <option value="1">上海</option>
                  <option value="2">天津</option>
                  <option value="3">重庆</option>
                  <option value="4">河北</option>
                  <option value="5">山西</option>
                  <option value="6">内蒙古</option>
                  <option value="7">辽宁</option>
                  <option value="8">吉林</option>
                  <option value="9">黑龙江</option>
                  <option value="10">江苏</option>
                  <option value="11">浙江</option>
                  <option value="12">安徽</option>
                  <option value="13">福建</option>
                  <option value="14">江西</option>
                  <option value="15">山东</option>
                  <option value="16">河南</option>
                  <option value="17">湖北</option>
                  <option value="18">湖南</option>
                  <option value="19">广东</option>
                  <option value="20">广西</option>
                  <option value="21">海南</option>
                  <option value="22">四川</option>
                  <option value="23">贵州</option>
                  <option value="24">云南</option>
                  <option value="25">西藏</option>
                  <option value="26">陕西</option>
                  <option value="27">甘肃</option>
                  <option value="28">宁夏</option>
                  <option value="29">青海</option>
                  <option value="30">新疆</option>
                  <option value="31">香港</option>
                  <option value="32">澳门</option>
                  <option value="33">台湾</option>
                </select>
                <select id="市s" class="mid-select" val="九龙坡" disabled="disabled">
                  <option value="东城">东城</option>
                  <option value="西城">西城</option>
                  <option value="崇文">崇文</option>
                  <option value="宣武">宣武</option>
                  <option value="朝阳">朝阳</option>
                  <option value="丰台">丰台</option>
                  <option value="石景山">石景山</option>
                  <option value="海淀">海淀</option>
                  <option value="门头沟">门头沟</option>
                  <option value="房山">房山</option>
                  <option value="通州">通州</option>
                  <option value="顺义">顺义</option>
                  <option value="昌平">昌平</option>
                  <option value="大兴">大兴</option>
                  <option value="平谷">平谷</option>
                  <option value="怀柔">怀柔</option>
                  <option value="密云">密云</option>
                  <option value="延庆">延庆</option>
                </select>
              </div>
              <div class="field-txt" id="市c"></div>
            </div>
            <div id="khzh_err1" class="error-wrapper" style="margin-left:120px; display:none">
              <div>
                <i class="icon icon-x-altx-alt"></i>未选择开户支行
              </div>
            </div>
            <div class="field-row group">
              <label>支行名称</label>
              <div class="field-val">
                <input
                  type="text"
                  class="text"
                  id="名称i"
                  placeholder="如宁波北仑分行/上海浦东分行等"
                  val="九龙分行"
                  disabled="disabled"
                >
              </div>
              <div class="field-txt" id="名称c"></div>
            </div>
            <div id="zh_err1" class="error-wrapper" style="margin-left:120px; display:none">
              <div>
                <i class="icon icon-x-altx-alt"></i>未填写支行
              </div>
            </div>
            <div class="field-row group">
              <label>银行卡号</label>
              <div class="field-val">
                <input
                  type="text"
                  class="text"
                  id="银行卡号i"
                  val="62179808390219808"
                  disabled="disabled"
                >
              </div>
              <div class="field-txt" id="银行卡号c"></div>
            </div>
            <div id="yhkh_err1" class="error-wrapper" style="margin-left:120px; display:none">
              <div>
                <i class="icon icon-x-altx-alt"></i>请输入正确银行卡号
              </div>
            </div>
            <div class="field-row group" style="display:none;">
              <label>审核状态</label>
              <div class="field-txt" id="状态c">未审核</div>
            </div>
            <div class="btn-row group">
              <button id="membcA" type="button" class="btn btn-pri" disabled="disabled">提 交</button>
              <a
                id="card-save"
                href="javascript:void(0);"
                class="btn btn-pri"
                style="display:none"
              >保 存</a>
            </div>
          </form>
        </el-tab-pane>
        <el-tab-pane class="ca four" label="账户安全">
          <p class="title">账户安全</p>
          <ul class="list-personal-security">
            <li class="group">
              <div class="security-level security-level-middle">
                <label>安全级别:</label>

                <div class="bar-wrapper">
                  <div id="mem_security_lvl" class="bar" style="width: 100%;"></div>
                </div>
                <label class="safe-ranke" id="mem_security_lv">高</label>
              </div>
            </li>
            <li class="group">
              <div class="col-3 security-name">
                <i class="icon icon-checkmark2" id="id_card_icon"></i>实名认证
              </div>
              <div class="col-5 security-desc" id="身份证">1305**********142x</div>

              <div class="col-4 security-action">已完成认证</div>
            </li>
            <li class="group">
              <div class="col-3 security-name">
                <i class="icon icon-checkmark2" id="id_phone_icon"></i>绑定手机
              </div>
              <div class="col-5 security-desc" id="手机号i">178****1565</div>
              <div class="col-4 security-action">
                <a
                  id="umA"
                  href="javascript:;"
                  data-popup="popup-edit-phone"
                  onclick="form_validation = false;"
                >修改</a>
              </div>
            </li>

            <li class="group">
              <div class="col-3 security-name">
                <i class="icon icon-checkmark2" id="id_pwd_icon"></i>登录密码
              </div>
              <div class="col-5 security-desc">登录网站时需要输入的密码</div>
              <div class="col-4 security-action">
                <a
                  href="javascript:;"
                  id="editPwd"
                  class="js-show-popup"
                  data-popup="popup-edit-login-pwd"
                  onclick="form_validation = false;"
                >修改</a>
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane class="ca five" label="在线充值">
          <p class="title">在线充值</p>
          <p>支付金额</p>
          <input class="zhifu" type="text" placeholder="请选择正整数金额,最低一元">
          <p>支付方式</p>
          <div>
            <div>
              <input type="radio" name="bank_type" value="101">
              <label
                id="label1"
                style="width:150px;height:40px;padding-left:20px;margin-left:20px;display:inline-block;border:solid 1px #CCC;"
              >
                <img src="http://tony-huwai.cn/pay/images/alipay.png" alt="支付宝付款">
              </label>
            </div>
            <div>
              <input type="radio" name="bank_type" value="102">
              <label
                id="label1"
                style="width:150px;height:40px;padding-left:20px;margin-left:20px;display:inline-block;border:solid 1px #CCC;"
              >
                <img src="http://tony-huwai.cn/pay/images/alipay2.png" alt="爱农支付">
              </label>
            </div>

            <div style="margin-top:50px;">
              <input
                type="submit"
                onclick
                value="立即支付"
                style="border: none;border-radius: 4px;background-color: #2996e9;color: #fff;height: 40px;line-height: 40px;width: 160px;position: relative;overflow: hidden;z-index: 2;font-size: 16px;text-align: center;"
              >
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane class="ca six" label="提现">
          <p class="title">我要提现</p>
          <div class="withdraw-wrapper">
            <div class="std-form">
              <div class="field-row group">
                <label>可用资金</label>
                <div class="input-wrapper">
                  <span class="acount-val">
                    <strong id="账户余额">438157.59</strong>
                    <span class="unit">元</span>
                  </span>
                </div>
              </div>
              <div class="field-row group">
                <label>提现金额</label>
                <div class="input-wrapper">
                  <input id="提现金额i" type="text" class="text">
                </div>
                <div class="f-left" style="line-height:30px; margin-left:20px;">提现金额必须大于100元</div>
              </div>
              <div id="txje_err1" class="error-wrapper" style="margin-left:120px; display:none">
                <div>
                  <i class="icon icon-x-altx-alt"></i>请输入正确提款额
                </div>
              </div>
              <div class="field-row group">
                <label>提现银行卡</label>
                <div class="input-wrapper bankcard">
                  <span id="branch">九龙分行</span>
                  <span id="cardNumber">62179808390219808</span>
                </div>
                <a href="/ucenter/bankcards.html" class="f-left">银行卡管理</a>
              </div>
              <div id="yhk_err1" class="error-wrapper" style="margin-left:120px;  display:none">
                <div>
                  <i class="icon icon-x-altx-alt"></i>未选择银行卡
                </div>
              </div>

              <div class="btn-row group">
                <button id="mem_wdA" href="javascript:;" class="btn btn-pri">提 交</button>
              </div>
            </div>
          </div>
          <div class="withdraw-note-wrapper group">
            <ul class="group">
              <li class="col-10-4">
                <h3>
                  提款
                  <strong>T+0</strong>到账！
                </h3>
                <p>
                  提现时间：周一至周五9：00-17：00
                  <br>法定节假日或银行特殊原因除外
                </p>
              </li>
              <li class="col-10-3">
                <h3>
                  提现
                  <strong>0</strong>手续费
                </h3>

                <p>
                  提现产生的银行手续费全免
                  <br>更多优质服务只在博鼎策略
                </p>
              </li>
              <li class="col-10-3">
                <h3>
                  支持银行多达
                  <strong>10</strong>多家
                </h3>
                <p>
                  推荐您使用工商银行、建设银行、
                  <br>招商银行、农业银行提现，到账最快
                </p>
              </li>
            </ul>
            <div class="f-clear">
              <p>温馨提示：禁止洗钱、信用卡套现、虚假交易等行为，一经发现并确认，将终止该账户的使用。</p>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "1",
      tabPosition: "left",
      sh: true,
      tableData: [
        {
          number: 1,
          time: "2019-06-11 13:41:11",
          liuxiang: "支出",
          shouzhi: "-193.62",
          yue: "5452.85",
          type: "账户",
          remark: "买入股票600036，建仓手续费196.62元"
        },
        {
          number: 1,
          time: "2019-06-11 13:41:11",
          liuxiang: "支出",
          shouzhi: "-193.62",
          yue: "5452.85",
          type: "账户",
          remark: "买入股票600036，建仓手续费196.62元"
        },
        {
          number: 1,
          time: "2019-06-11 13:41:11",
          liuxiang: "支出",
          shouzhi: "-193.62",
          yue: "5452.85",
          type: "账户",
          remark: "买入股票600036，建仓手续费196.62元"
        },
        {
          number: 1,
          time: "2019-06-11 13:41:11",
          liuxiang: "支出",
          shouzhi: "-193.62",
          yue: "5452.85",
          type: "账户",
          remark: "买入股票600036，建仓手续费196.62元"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="scss">
.son .el-tabs__nav {
  width: 136px;
  height: auto;
  .el-tabs__item {
    min-height: 20px;
    padding: 10px 20px;
    height: auto;
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
    width: 100%;
    line-height: 1.2;
  }
}
.col-3 {
  width: 25%;
}
.col-5 {
  width: 41.66666667%;
}
.col-4 {
  width: 33.33333333%;
}
.col-10-4 {
  width: 39%;
}
.col-10-3 {
  width: 30%;
}
.el-tabs__item {
  font-size: 16px;
  // font-weight: bold;
}
.ca {
  font-size: 16px;
  color: #999;
  box-sizing: border-box;
  padding-left: 50px;
}
#Person {
    .head{
        img{
            display: block;
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50px;
    opacity: 0;
        }
    }
  .problem_box {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
    min-height: 500px;
    background: white;
    padding: 20px 100px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-top: 50px;
    .title {
      border-bottom: 1px solid #dadada;
      color: black;
      font-size: 22px;
      font-weight: normal;
      line-height: 1;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
    .title2 {
      position: relative;
      // height: 50px;
      margin-top: 20px;
      padding: 10px 0;
      border-top: 1px dashed #ccc;
      font-size: 18px;
    }
    .one {
      .money {
        overflow: hidden;
        .div1 {
          float: left;
          .p1 {
            font-size: 16px;
            color: #797979;
            text-align: left;
          }
          .p2 {
            font-size: 40px;
            color: #d42b2e;
            text-align: left;
            font-weight: bold;
            span {
              font-size: 16px;
              color: #797979;
            }
          }
        }
        .div2 {
          float: right;
          button {
            display: inline-block;
            width: 100px;
            height: 32px;
            font-size: 18px;
            letter-spacing: 4px;
            border-radius: 4px;
            color: #fff !important;
            display: block;
            text-align: center;
            line-height: 32px;
            border: none;
          }
          .btn1 {
            background: red;
            margin-bottom: 20px;
          }
          .btn2 {
            background: #1fbfe2;
          }
        }
      }
      .zijin_box {
        .zijin {
          color: #9e9e9e;
          border: 1px solid #fff;
          border-radius: 2px;
          padding: 2px 8px;

          span {
            font-size: 12px;
            margin-right: 15px;
          }
        }
      }
    }
    .two {
      .std-tbl {
        width: 100%;
        text-align: left;
      }
      button {
        border-radius: 5px;
        border: none;
      }
      div {
        box-sizing: content-box;
      }
      .personal-section {
        overflow: hidden;
        height: 180px;
      }
      .new-section-sub-title {
        // margin-right: 220px;
        display: inline-block;
        font-size: 16px;
        color: #797979;
        float: left;
        text-align: left;
        margin-top: 50px;
      }
      .new-section-sub-title p:first-child {
        margin-right: 20px;
      }
      .p-money {
        display: inline-block;
        margin-top: 0;
        margin-top: 50px;
      }
      strong {
        color: #d42b2e;
      }
    }
    .three {
      .slide-wrapper {
        position: relative;
        margin: 0 -15px;
        padding: 0 15px;
        .slides li {
          padding: 0;
          margin-right: 35px;
          margin-bottom: 10px;
          float: left;
          width: 187px;
        }
        .slides .bank-card {
          height: 103px;
          border: 1px solid #bcbcbc;
          border-radius: 4px;
          box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
          &::before {
            content: " 已绑定银行卡";
            display: block;
            height: 36px;
            background: none;
            border-radius: 4px;
          }
          .bank-card-end-num {
            background-color: #ececec;
            line-height: 30px;
            padding: 0 10px;
            font-size: 16px;
            color: #444444;
            text-align: right;
            &:before {
              content: "**** **** **** ***";
              display: inline-block;
              font-weight: bold;
              color: #999999;
              font-size: 14px;
              line-height: 30px;
              float: left;
            }
          }
          .link-wrapper {
            text-align: right;
            line-height: 30px;
            padding: 0 10px;
            font-size: 12px;
            a {
              margin-left: 6px;
              color: #d42b2e !important;
            }
          }
        }
        .slides {
          position: relative;
          left: 0px;
          // -moz-transition-duration: 1s;
          // -webkit-transition-duration: 1s;
          transition-duration: 1s;
        }
      }
      .btn {
        display: block;
        width: 65%;
        margin: 0 auto;
        border-radius: 10px;
        font-weight: 400;
        margin-top: 24px;
        font-size: 20px;
        text-align: center;
        height: 45px;
        line-height: 45px;
        background-color: #d42b2e;
        color: white;
        border: none;
      }
      .card_title {
        line-height: 60px !important;
        font-size: 20px !important;
        font-weight: 500 !important;
        color: #333 !important;
        border-top: 1px dashed #ccc;
      }
      .field-row {
        padding-bottom: 25px;
        overflow: hidden;
        label {
          /* width: 20%; */
          text-align: left;
          color: #777;
          font-size: 16px;
        }
        .field-val {
          width: 71%;
          float: left;
          line-height: 34px;
          font-size: 16px;
        }
        label {
          float: left;
          width: 116px;
          text-align: center;
          line-height: 40px;
        }
        .long-select {
          width: 100%;
          font-size: 16px;
        }
        select {
          height: 40px;
          line-height: 40px;
          padding: 0px 5px;
          /* border-radius: 10px; */
          padding-right: 0px \9\0;
          border: 1px solid #999998;
        }
        .mid-select {
          width: 49%;
        }
        .text {
          height: 40px;
          box-sizing: border-box;
          border: 1px solid #999998;
          width: 100%;
          line-height: 40px;
          padding: 4px 10px;
          font-size: 16px;
        }
      }
    }
    .four {
      .list-personal-security {
        border-top: 1px solid #ececec;
        border-bottom: none;
        border-left: none;
        border-right: none;
        border: 1px solid #ececec;
        border-radius: 4px;
      }
      .list-personal-security li:first-child {
        border-top-width: 0;
        padding: 30px 0;
      }
      .security-level-middle {
        background-color: #fcfcfc;
        line-height: 36px;
        label {
          line-height: 24px;
        }
        .bar-wrapper {
          display: inline-block;
          background-color: #eeeeee;
          width: 131px;
          height: 8px;
          border-radius: 4px;
          box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.1);
          vertical-align: top;
          margin: 9px 0 0 10px;
        }
        .bar {
          background-color: #d42b2e;
        }
        .bar {
          display: block;
          height: 8px;
          border-radius: 4px;
        }
        .safe-ranke {
          margin-left: 16px;
          font-size: 14px;
          color: #d42b2e;
        }
      }
      .security-name {
        font-weight: 400;
        border-right: 1px solid #cccccb;
        font-size: 18px;
        padding-left: 40px;
        color: #333333;
      }
      .security-desc {
        color: #777;
        padding-left: 20px;
      }
      .security-action {
        text-align: right;
        font-size: 16px;
        color: #999999;
        padding-right: 40px;
        font-weight: bold;
      }
      .group div {
        display: inline-block;
        box-sizing: border-box;
      }
      li {
        padding: 27px 0;
      }
    }
    .five {
      p {
        font: 14px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB",
          宋体;
        color: black;
      }
      .zhifu {
        width: 80%;
        height: 40px;
      }
    }
    .six {
      .withdraw-wrapper {
        margin-bottom: 30px;
        border: 1px solid #ececec;
        border-radius: 4px;
        padding: 26px 30px 30px 30px;
        font: 14px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB",
          宋体;
        color: black;
        div {
          box-sizing: content-box;
        }
        .field-row {
          padding-bottom: 25px;
          overflow: hidden;

          label {
            float: left;
            width: 90px;
            padding-right: 27px;
            text-align: right;
            line-height: 32px;
            white-space: nowrap;
          }
          .group {
            overflow: hidden;
          }
          .input-wrapper {
            width: 260px;
            float: left;
            line-height: 32px;
            font-size: 12px;
          }
          strong {
            color: #f85407;
            font-size: 30px;
            display: inline-block;
            line-height: 32px;
            vertical-align: top;
          }
          .unit {
            padding: 0 0 0 6px;
            display: inline-block;
            position: relative;
            top: 2px;
          }
          .text {
            float: left;
            height: 32px;
            width: 100%;
            font-size: 14px;
            box-sizing: border-box;
            padding: 5px 10px;
            line-height: 20px;
            border: 1px solid #dcdcdc;
          }
          #branch {
            white-space: nowrap;
            display: block;
          }
        }
        .btn {
          margin-left: 117px;
          width: 238px;
          font-size: 16px;
          display: inline-block;
          text-align: center;
          border-radius: 4px;
          border: none;
          font-weight: bold;
          color: #ffffff !important;
          font-size: 16px;
          height: 45px;
          line-height: 45px;
          background-color: #d42b2e;
        }
      }
      .withdraw-note-wrapper {
        font: 14px/1.5 "微软雅黑", Arial, YaHei, tahoma, "Hiragino Sans GB";
        border: 1px solid #ececec;
        border-radius: 4px;
        ul {
          padding: 17px 21px 26px 30px;
          li {
            display: inline-block;
          }
          h3 {
            color: #333333;
            line-height: 41px;
            font-size: 16px;
          }
          p {
            color: #999999;
            line-height: 24px;
          }
          strong {
            color: #d42b2e;
            padding: 0 4px;
            font-size: 20px;
          }
        }
        .f-clear {
          background-color: #f8f8f8;
          line-height: 26px;
          padding: 15px 30px;
          color: #999999;
          border-top: 1px solid #ececec;
        }
      }
    }
  }
}
</style>
