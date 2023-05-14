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
}
</script>

<style>

html {
  scroll-behavior: smooth;
}
</style>
