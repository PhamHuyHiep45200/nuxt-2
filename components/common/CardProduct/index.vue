<!-- eslint-disable max-len -->
<template>
  <el-card
    :body-style="{ padding: '0px' }"
    class="cursor-pointer rounded-[8px]"
  >
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      class="w-full"
    />
    <div style="padding: 14px">
      <span class="text-[16px] font-semibold block text-black"
        >toco tra sua</span
      >
      <span class="text-[red] text-[12px]">Yummy hamburger</span>
      <div class="flex items-center" v-if="type !== 'miniSize'">
        <div class="flex items-center text-[blue]">
          <i class="el-icon-warning-outline"></i>
          <span class="text-[11px] text-[#888]">Y 600$</span>
        </div>
        <div class="flex items-center text-[blue] ml-[8px]">
          <i class="el-icon-help"></i>
          <span class="text-[11px] text-[#888]">Y 600$</span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'CardProduct',
  props: {
    type: {
      type: 'default' || 'miniSize',
      required: false,
      default: 'default',
    },
  },
}
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>
