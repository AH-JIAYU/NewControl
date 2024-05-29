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
      <p class="fx-b">
        租户完成排名
      <SearchTab />
      </p>

    </template>
    <el-table :data="data">
      <el-table-column label="" type="index" width="50" />
      <el-table-column label="租户名称" prop="tenantName" />
      <el-table-column label="发布项目数" prop="day" />
      <el-table-column label="完成金额" prop="month" />
      <el-table-column label="完成数" prop="year" />

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
