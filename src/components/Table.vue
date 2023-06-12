<template>
  <div class="table-content">
      <div class="table-title" @click="getData">一个表格</div>
      <el-table :data="tableList" border size="mini">
          <el-table-column label="标题" prop="title"></el-table-column>
          <el-table-column label="作者" prop="name"></el-table-column>
          <el-table-column label="描述" prop="desc"></el-table-column>
      </el-table>
  </div>
</template>

<script>
import request from '@/request'
// const { ipcRenderer } = require('electron')

export default {
  props: {
    common: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      tableList: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      request('/getTableList').then(res => {
        console.log(res.data)
        this.tableList = res.data.list
      })
    },
    getData() {
      this.common.getData({
        abc: '123'
      })
      console.log(this.common.ipcRenderer, this.common)
      this.common.ipcRenderer.send('comp-handle', {
        abc: '123'
      })


    }
  }
}
</script>

<style>

</style>