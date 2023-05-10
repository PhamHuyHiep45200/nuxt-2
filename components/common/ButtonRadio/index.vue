<template>
  <el-row>
    <el-col v-for="item in items" :key="item.value" :span="span">
      <div
        class="h-[50px] flex items-center justify-center border-[1px] rounded-[4px] m-[10px] relative cursor-pointer"
        :class="[item.value === active ? 'border-[red]' : 'border-[black]']"
        @click="setActive(item.value)"
      >
        {{ item.label }}
        <div
          v-if="item.value === active"
          class="w-[20px] h-[20px] fex justify-center absolute right-0 top-0 bg-[red] items-center border-bottom-left"
        >
          <i class="el-icon-check text-[white] absolute inset-0"></i>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'ButtonRadio',
  props: {
    items: {
      type: Array,
      required: true,
    },
    span: {
      type: Number,
      required: false,
      default: 8,
    },
    type: {
      type: String,
      required: false,
      default: 'large',
    },
  },
  data() {
    return {
      active: '',
    }
  },
  watch: {
    items: function (newVal) {
      this.active = newVal[0].value
    },
  },
  mounted() {
    if (this.items) {
      this.active = this.items[0].value
    }
  },
  methods: {
    setActive(value) {
      this.active = value
      this.$emit('onChange', value)
    },
  },
}
</script>

<style>
.border-bottom-left {
  border-bottom-left-radius: 4px;
}
</style>
