<template>
  <div>
    <HeaderComponent />
    <Nuxt />
    <FooterComponents />
  </div>
</template>
<script>
import FooterComponents from '~/components/layout/defaults/Footer.vue'
import HeaderComponent from '~/components/layout/defaults/Header.vue'
export default {
  name: 'LayoutMain',
  components: { FooterComponents, HeaderComponent },
  watch: {
    $route(to, from) {
      console.log('route change to', to)
      console.log('route change from', from)
    }
  }
}
</script>

<style></style>
