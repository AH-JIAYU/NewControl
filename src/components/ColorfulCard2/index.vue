<script setup lang="ts">
defineOptions({
  name: "ColorfulCard",
});

withDefaults(
  defineProps<{
    colorFrom?: string;
    colorTo?: string;
    header?: string;
    num?: number;
    yesterdayNum?: number;
    yesterdayHeader?: string;
    tip?: string;
    icon?: string;
  }>(),
  {
    colorFrom: "#843cf6",
    colorTo: "#759bff",
    header: "",
    num: 0,
    yesterdayNum: 0,
    yesterdayHeader: "",
    tip: "",
    icon: "",
  }
);
</script>

<template>
  <div
    class="group relative cursor-pointer of-hidden rounded px-5 py-7 c-white text-shadow-[0_0_2px_#000] transition-shadow hover:shadow-lg"
    :style="{
      'padding-bottom': '3rem',
      'background-blend-mode': ' color-burn',
      'text-align': 'center',
      background: `linear-gradient(50deg, ${colorFrom}, ${colorTo}), url('../../../src/assets/images/piano.png') no-repeat center bottom`,
    }">
    <div style="display: flex;align-items: center;justify-content: space-around;">
      <div>
        <div class="relative z-1 text-8" style="font-weight: bolder;">
          {{ num }}
        </div>
        <div class="text-3">
          {{ header }}
        </div>
        <div class="text-sm">
          {{ tip }}
        </div>
      </div>
      <div v-if="yesterdayNum" style="color: #ddd;">
        <div class="relative z-1 text-7" style="font-weight: bolder;">
          {{ yesterdayNum }}
        </div>
        <div class="text-3">
          {{ yesterdayHeader }}
        </div>
        <div class="text-sm">
          {{ tip }}
        </div>
      </div>

    </div>
    <SvgIcon v-if="icon" :name="icon" :size="20" :rotate="0" class="right-7 top-9 transition-all absolute!" />
  </div>
</template>

<style lang="scss" scoped>
.transition-all {
  position: relative;
}

.transition-all::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  content: "";
  background-color: #ffffff40;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
</style>
