<template>
  <div class="p-5 w-[380px]">
    <div
      class="flex items-center space-x-[20px] max-w-[100%] horizontal-bar overflow-x-auto"
      id="slideCategory"
    >
      <a
        v-for="category in cardCategory"
        :key="category.categoryId"
        :href="'#' + category.categoryId"
        :id="category.categoryId + 'category'"
        class="flex items-center justify-center py-[5px] font-medium bg-[#eaeaea] min-w-[150px] text-[red]"
        :class="[active === category.categoryId ? 'bg-[red] text-[white]' : '']"
      >
        {{ category.category }}
      </a>
    </div>
    <div class="max-h-[80vh] overflow-y-auto" ref="container">
      <div
        class="cardCategory my-[20px]"
        v-for="category in cardCategory"
        :id="category.categoryId"
        :key="category.id"
      >
        <div class="py-[10px] border-l-[3px] border-[red]">
          {{ category.category }}
        </div>
        <div v-for="product in category.product" :key="product.id">
          <CardProduct />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from '@/components/common/CardProduct'
import { cardCategory } from '@/data/data-product.mock'
export default {
  components: {
    CardProduct,
  },
  data() {
    return {
      cardCategory,
      active: '',
    }
  },
  mounted() {
    this.$refs.container.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    this.$refs.container.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const elements = document.getElementsByClassName('cardCategory')
      const arrName = []
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        const position = element.getBoundingClientRect()
        // Kiểm tra xem phần tử đã xuất hiện trên màn hình hay chưa
        if (
          (position.bottom > 0 && position.bottom < window.innerHeight) ||
          (position.top > 0 && position.top < window.innerHeight) ||
          (position.top < 0 && position.bottom > window.innerHeight)
        ) {
          arrName.push(element.id) // Lấy ID của phần tử
          if (arrName.length > 0 && arrName[0] !== this.active) {
            this.active = arrName[0]
            const elementCategory = document.getElementById(
              `${arrName[0]}category`
            )
            const positionCategory = elementCategory.getBoundingClientRect()
            const e = document.getElementById('slideCategory')
            e.scrollTo({
              left: positionCategory.left,
              behavior: 'smooth',
            })
          }
        }
      }
    },
  },
}
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
</style>
