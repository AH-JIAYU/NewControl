<script setup lang="ts">
import { onMounted, ref } from 'vue'
// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
import * as echarts from 'echarts'
import 'echarts/extension/bmap/bmap'
import 'echarts/map/js/world'

defineOptions({
  name: 'HomeIndexVersionDistribution',
})
const versionRef = ref<any>()
let chart1: any
function Initecharts() {
  chart1 = echarts.init(versionRef.value)
  const data = [
    {
      value: 100,
      name: '基础版',
    },
    {
      value: 20,
      name: '高级版',
    },
    {
      value: 30,
      name: '旗舰版',
    },
  ]
  // 配置数据
  const option = {
    title: {
      left: '10%',
      text: '',
      radius: ['40%', '60%'],
      center: ['25%', '50%'],
      subtext: '',
    },
    tooltip: {
      trigger: 'item',
      formatter(data: any) {
        return `版本:${data.name}</br>关联人数: ${data.value}`
      },
    },

    legend: [
      {
        orient: 'horizontal',
        x: '60%',
        y: 'center',
        bottom: '20',
        itemGap: 20, // 设置图例图形的宽
        center: ['50%', '50%'],
        icon: 'pin',
        data: [
          '基础版',
          '高级版',
          '旗舰版',
        ],
        formatter(name: any) {
          let target
          for (let i = 0; i < data.length; i++) {
            if (data[i].name === name) {
              target = data[i].value
            }
          }
          const arr = [`{a|${name}} `, `{b| ${target}}`]
          return arr.join(' ')
        },
        textStyle: {
          rich: {
            a: {
              width: 50,
              backgroundColor: 'transparent',
            },
            b: {
              width: 60,
              backgroundColor: 'transparent',
            },
          },
        },
      },
    ],
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '60%'],
        center: ['30%', '50%'],
        text: '省市公司',
        data,

        label: {
          normal: {
            position: 'inner',
            show: false,
          },
        },
      },
    ],
    graphic: [
      {
        type: 'group',
        left: '30%',
        top: 'center',
        bounding: 'raw',
        children: [
          {
            type: 'text',
            style: {
              text: `合计`,
              fontSize: 18,
              textAlign: 'center',
              textVerticalAlign: 'bottom',
            },
          },
          {
            type: 'text',
            style: {
              text: `${data.reduce((total, item) => total + item.value, 0)}`,
              textAlign: 'center',
              textVerticalAlign: 'top',
              fontSize: 30,
            },
          },
        ],
      },
    ],
  }
  chart1.setOption(option)
}
onMounted(() => {
  Initecharts()
  window.addEventListener('resize', () => {
    chart1.resize()
  })
})
</script>

<template>
  <el-card style="width: 100%;">
    <template #header>
      版本分布
    </template>
    <div id="word" ref="versionRef" />
  </el-card>
</template>

<style lang="scss" scoped>
#word {
  width: 100%;
  height: 242px;
}
</style>
