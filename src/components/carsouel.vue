<template>
  <el-carousel :interval="5000" arrow="always" class="carousel" height="220px">
    <el-carousel-item v-for="item in imageList" :key="item">
      <el-image :src="item" fit="cover" class="image"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    data() {
        return {
            imageList: [
                'https://imagegroup1.haier.com/press-events/news/W020220225681872548551.png',
                'https://imagegroup1.haier.com/press-events/news/W020220222387974248218.png',
                'https://imagegroup1.haier.com/press-events/news/W020220222387979542565.jpeg'
            ]
        }
        
    }
}
</script>

<style  scoped>
.image {
    height: 220px;
}
</style>