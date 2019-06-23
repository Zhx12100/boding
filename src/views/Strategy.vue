<template>
  <div id="Strategy">
       <el-tabs class="container" type="border-card">
            <el-tab-pane class="one" label="01 | 交易">
                <div class="ggg">1234564</div>
            </el-tab-pane>
            <el-tab-pane class="two" label="02 | 卖出">消息中心</el-tab-pane>
            <el-tab-pane class="three" label="03 | 持仓">角色管理</el-tab-pane>
            <el-tab-pane class="four" label="04 | 结算">定时任务补偿</el-tab-pane>
        </el-tabs>
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
#Strategy {
    .el-tabs__nav{
        width: 100%;
        .el-tabs__item{
            width: 25%;
            text-align: center;
            
        }
        .is-active{
            font-weight: bold;
        }
    }
    
    .container{
        margin-top: 50px;
        
    }
}

</style>
