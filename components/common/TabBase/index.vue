<template>
  <div class="test">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">User</el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'TabBase',
  data() {
    return {
      activeName: 'first',
    }
  },
  methods: {
    handleClick(tab, event) {
      // eslint-disable-next-line no-console
      console.log(tab, event)
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .el-tabs__nav-wrap::after {
  display: none;
}
.test {
  ::v-deep .el-tabs__item.is-active {
    color: red;
  }
}
</style>