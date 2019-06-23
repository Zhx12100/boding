<template>
  <div id="Problem">
       <div class="problem_box container">
           <el-tabs class="top" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="策略" name="1">
                    <el-tabs :tab-position="tabPosition" style="height: auto;">
                        <el-tab-pane class="ca" label="申请策略">申请策略</el-tab-pane>
                        <el-tab-pane class="ca" label="利息">利息</el-tab-pane>
                        <el-tab-pane class="ca" label="提醒资金">提醒资金</el-tab-pane>
                        <el-tab-pane class="ca" label="追加保证金">追加保证金</el-tab-pane>
                        <el-tab-pane class="ca" label="策略手动关闭">策略手动关闭</el-tab-pane>
                        <el-tab-pane class="ca" label="策略自动关闭">策略自动关闭</el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="买入" name="2">
                    <el-tabs :tab-position="tabPosition" class="son" style="height: auto;">
                        <el-tab-pane class="ca" label="申请策略">申请策略</el-tab-pane>
                        <el-tab-pane class="ca" label="利息">利息</el-tab-pane>
                        <el-tab-pane class="ca" label="若清算时出现明显差错怎么办？">提醒资金</el-tab-pane>
                        <el-tab-pane class="ca" label="追加保证金">追加保证金</el-tab-pane>
                        <el-tab-pane class="ca" label="策略手动关闭">策略手动关闭</el-tab-pane>
                        <el-tab-pane class="ca" label="策略自动关闭">策略自动关闭</el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="买入问题" name="3">
                    <el-tabs :tab-position="tabPosition" class="son" style="height: auto;">
                        <el-tab-pane class="ca" label="申请策略">申请策略</el-tab-pane>
                        <el-tab-pane class="ca" label="利息">利息</el-tab-pane>
                        <el-tab-pane class="ca" label="若清算时出现明显差错怎么办？">提醒资金</el-tab-pane>
                        <el-tab-pane class="ca" label="追加保证金">追加保证金</el-tab-pane>
                        <el-tab-pane class="ca" label="策略手动关闭">策略手动关闭</el-tab-pane>
                        <el-tab-pane class="ca" label="策略自动关闭">策略自动关闭</el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="清算问题" name="4">
                    <el-tabs :tab-position="tabPosition" class="son" style="height: auto;">
                        <el-tab-pane class="ca" label="申请策略">申请策略</el-tab-pane>
                        <el-tab-pane class="ca" label="利息">利息</el-tab-pane>
                        <el-tab-pane class="ca" label="若清算时出现明显差错怎么办？">提醒资金</el-tab-pane>
                        <el-tab-pane class="ca" label="追加保证金">追加保证金</el-tab-pane>
                        <el-tab-pane class="ca" label="策略手动关闭">策略手动关闭</el-tab-pane>
                        <el-tab-pane class="ca" label="策略自动关闭">策略自动关闭</el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
                <el-tab-pane label="充值问题" name="5">
                    <el-tabs :tab-position="tabPosition" class="son" style="height: auto;">
                        <el-tab-pane class="ca" label="申请策略">申请策略</el-tab-pane>
                        <el-tab-pane class="ca" label="利息">利息</el-tab-pane>
                        <el-tab-pane class="ca" label="若清算时出现明显差错怎么办？">提醒资金</el-tab-pane>
                        <el-tab-pane class="ca" label="追加保证金">追加保证金</el-tab-pane>
                        <el-tab-pane class="ca" label="策略手动关闭">策略手动关闭</el-tab-pane>
                        <el-tab-pane class="ca" label="策略自动关闭">策略自动关闭</el-tab-pane>
                    </el-tabs>
                </el-tab-pane>
            </el-tabs>
       </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: '1',
        tabPosition: 'left'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style lang="scss">
.son .el-tabs__nav{
    width: 136px;
    height: auto;
    .el-tabs__item{
        min-height: 20px;
        padding:  10px 20px;
        height: auto;
        white-space:normal;
         word-break:break-all;
         word-wrap:break-word;
        width: 100%;    
        line-height: 1.2;
        
    }
}
.el-tabs__item{
    font-size: 16px;
    // font-weight: bold;
}
.ca{
    font-size: 16px;
    color: #999;
}
#Problem {
    .problem_box{
        box-shadow: 0 4px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
        min-height: 500px;
        background: white;
        padding: 20px 100px;
        box-sizing: border-box;
        border-radius: 5px;
        margin-top: 50px;
    }
}

</style>
