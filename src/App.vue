<template>
  <div id="app">
    <!-- <Test />
    <el-col :span="9">
      <carsouel />
      <Table />

      <Common />

    </el-col> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Test from './components/Test.vue'
// import carsouel from './components/carsouel.vue'
// import Table from './components/Table.vue'
// import Common from './components/index'

export default {
  name: 'App',
  components: {
    // Test,
    // carsouel,
    // Table,
    // Common
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
