<template>
  <div>{{ source }}</div>
</template>

<script>
export default {
    props: {
        index: { // 每一行的索引
            type: Number
        },
        source: { // 每一行的内容
            type: Object,
            default () {
                return {}
            }
        }
    }
}
</script>

<style>

</style>