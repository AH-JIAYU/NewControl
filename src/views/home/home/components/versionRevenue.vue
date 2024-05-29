<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts/extension/bmap/bmap';
import 'echarts/map/js/world';
defineOptions({
  name: 'HomeIndexWord',
})
const radio2 = ref('month')
const versionRef = ref<any>()
let chart1: any;
const Initecharts = () => {
  chart1 = echarts.init(versionRef.value);
  // 配置数据
  const option = {
    xAxis: {
      type: 'category',
      data: ['基础班', '高级版', '旗舰版']
    },
    yAxis: {
      type: 'value',
      boundaryGap: false
    },
    series: [
      {
        data: [
          {
            value: 120,
            itemStyle: {
              color: '#000000'
            }
          },
          {
            value: 200,
            itemStyle: {
              color: '#e2982e'
            }
          },
          {
            value: 240,
            itemStyle: {
              color: '#d10027'
            }
          },
        ],
        type: 'bar',
        barWidth: '25%',
      }
    ]
  };
  chart1.setOption(option);
}
onMounted(() => {
  Initecharts()
  window.addEventListener("resize", () => {
    chart1.resize();
  });
})
</script>

<template>

  <el-card style="width: 100%;">
    <template #header>
      <p class="fx-b">
        版本分布
        <el-radio-group v-model="radio2">
          <el-radio-button label="月" value="month" />
          <el-radio-button label="年" value="year" />
        </el-radio-group>
      </p>

    </template>
    <div id="word" ref="versionRef"></div>
  </el-card>
</template>

<style lang="scss" scoped>
#word {
  width: 100%;
  height: 242px;
}

.fx-b {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
