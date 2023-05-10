<template>
  <div class="w-full flex justify-center">
    <div>
      <div class="w-[300px]">
        <CardProduct />
      </div>
      <div class="w-[400px]">
        <el-row :gutter="10">
          <el-col
            v-for="item in listProductMini"
            :key="item"
            class="my-[5px]"
            :span="12"
          >
            <CardProduct type="miniSize"
          /></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from '@/components/common/CardProduct'
export default {
  components: {
    CardProduct,
  },
  data() {
    return {
      listProductMini: [1, 2, 3, 4],
    }
  },
}
</script>

<style>
</style>