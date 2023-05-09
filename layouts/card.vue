<template>
  <div>
    h
    <Nuxt />
    s
  </div>
</template>

<script>
export default {
  name: 'LayoutCard',
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    get(e, a) {
      this.count = e === 5 ? (a === 2 ? 5 : 4) : 4
    },
  },
}
</script>

<style></style>
