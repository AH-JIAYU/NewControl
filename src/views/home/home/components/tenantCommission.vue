<script setup lang="ts">
defineOptions({
  name: 'HomeIndexWord',
})

const data = [
  {
    tenantName: '张三',
    day: 24,
    month: 122,
    year: 32323
  },
  {
    tenantName: '张三',
    day: 24,
    month: 122,
    year: 32323
  },
  {
    tenantName: '张三',
    day: 24,
    month: 122,
    year: 32323
  },
  {
    tenantName: '张三',
    day: 24,
    month: 122,
    year: 32323
  },
  {
    tenantName: '张三',
    day: 24,
    month: 122,
    year: 32323
  },
  {
    tenantName: '张三',
    day: 24,
    month: 122,
    year: 32323
  },
  {
    tenantName: '张三',
    day: 24,
    month: 122,
    year: 32323
  },
  {
    tenantName: '张三',
    day: 24,
    month: 122,
    year: 32323
  },
  {
    tenantName: '张三',
    day: 24,
    month: 122,
    year: 32323
  },
  {
    tenantName: '张三',
    day: 24,
    month: 122,
    year: 32323
  },
]

</script>

<template>

  <el-card style="width: 100%;">
    <template #header>
      租户佣金排行
    </template>
    <el-table :data="data">
      <el-table-column label="" type="index" width="50" />
      <el-table-column label="租户" prop="tenantName" />
      <el-table-column label="日" prop="day" />
      <el-table-column label="月" prop="month" />
      <el-table-column label="年" prop="year" />

    </el-table>

  </el-card>
</template>

<style lang="scss" scoped>
  .fx-b {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
