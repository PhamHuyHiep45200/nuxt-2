<template>
  <div>
    <ButtonRadio :items="items" :span="6" @onChange="handleChangeButton" />
  </div>
</template>

<script>
import Vue from 'vue'
import listDataButton from '@/data/list-button.mock'
import listDataButton2 from '@/data/data-cart.mock'
import ButtonRadio from '@/components/common/ButtonRadio'
export default Vue.extend({
  name: 'IndexPage',
  components: {
    ButtonRadio,
  },
  data() {
    return {
      items: listDataButton,
      items2: listDataButton2,
    }
  },
  methods: {
    handleChangeButton(e) {
      // eslint-disable-next-line no-console
      console.log(e)
    },
  },
})
</script>
<style scoped lang="scss">
.names {
  color: red;
  .age {
    color: black;
  }
}
</style>
