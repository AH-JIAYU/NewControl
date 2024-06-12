<script setup lang="ts">
import word from './components/word.vue'
import versionDistribution from './components/versionDistribution.vue'
import versionRevenue from './components/versionRevenue.vue'
import tenantCommission from './components/tenantCommission.vue'
import tenantCompleted from './components/tenantCompleted.vue'

defineOptions({
  name: 'HomeIndexIndex',
})
</script>

<template>
  <div>
    <!-- 布局 -->
    <PageMain>
      <el-row :gutter="24">
        <!-- 左侧 -->
        <el-col :span="14">
          <el-row :gutter="24" class="fx-b">
            <el-col>
              <ColorfulCard2 header="租户数" :num="3434" color-from="#fbaaa2" color-to="#fc5286" />
            </el-col>
            <el-col>
              <ColorfulCard2
                header="注册数" :num="978" yesterday-header="昨日" :yesterday-num="978" color-from="#ff763b"
                color-to="#ffc480"
              />
            </el-col>
            <el-col>
              <ColorfulCard2
                header="版本收益" :num="978" yesterday-header="昨日" :yesterday-num="978" color-from="#ff763b"
                color-to="#ffc480"
              />
            </el-col>
            <el-col>
              <ColorfulCard2 header="供应商总数" :num="978" />
            </el-col>
          </el-row>
          <!-- 全球地图 -->
          <word />
        </el-col>
        <el-col :span="10">
          <el-row>
            <versionDistribution />
          </el-row>
          <versionRevenue />
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="12">
          <tenantCommission />
        </el-col>
        <el-col :span="12">
          <tenantCompleted />
        </el-col>
      </el-row>
    </PageMain>
  </div>
</template>

<style lang="scss" scoped>
.fx-b {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

:deep {
  .fx-b {
    .el-col {
      flex: 1;
    }
  }

  .el-row {
    margin-bottom: 20px;
  }

  // 表格
  .el-table__body {
    tr:nth-of-type(1) {
      td:nth-of-type(1) {
        color: red !important;
      }
    }

    tr:nth-of-type(2) {
      td:nth-of-type(1) {
        color: #bfbdbc !important;
      }
    }

    tr:nth-of-type(3) {
      td:nth-of-type(1) {
        color: #a25316 !important;
      }
    }
  }
}
</style>
