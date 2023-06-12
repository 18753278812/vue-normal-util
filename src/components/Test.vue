<template>
  <div class="abcd">
      123213123
      <el-button>12313213</el-button>
  </div>
</template>

<script>
// import { Button } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
export default {
    name: 'Test',
    mounted() {
        axios.get('/api/index/getServiceListAll')
    },
    components: {
        // [Button.name]: Button
    }
}
</script>

<style scoped>
.abcd {
    color: #ca51ca
}
</style>