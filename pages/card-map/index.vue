<template>
  <div class="w-full flex justify-center">
    <div>
      <div class="w-[300px]">
        <el-row :gutter="10">
          <el-col
            v-for="item in listProductMini"
            :key="item"
            class="my-[5px]"
            :span="24"
          >
            <CardMap
          /></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import CardMap from '@/components/common/CardMap'
export default {
  components: {
    CardMap,
  },
  data() {
    return {
      listProductMini: [1, 2, 3],
    }
  },
}
</script>

<style></style>
